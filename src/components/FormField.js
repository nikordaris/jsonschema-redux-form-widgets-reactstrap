//@flow

import React, { Component, Children, cloneElement } from 'react';
import {
  UncontrolledTooltip,
  Label,
  FormFeedback,
  FormGroup
} from 'reactstrap';
import { get } from 'lodash';

const LABEL_PROP = 'title';

const DEFAULT_SHOW = ({ meta }) => meta.touched;

export default class FormField extends Component {
  static defaultProps = {
    required: false,
    tag: FormGroup,
    labelProps: {},
    showFeedback: DEFAULT_SHOW,
    tooltipProps: {}
  };
  props: {
    schema: { [string]: any },
    required: boolean,
    tag: string,
    showFeedback: ShowFeedbackType,
    labelProps: {
      tag?: string,
      requiredColor?: string
    },
    tooltipProps: {
      placement?: string
    },
    classes: { [string]: any },
    styles: { [string]: any },
    sheet: any,
    meta: { [string]: any, warning: any, error: any },
    input: { [string]: any },
    children: React.Element<*> | [React.Element<*>]
  };

  getInputState() {
    const { meta, showFeedback } = this.props;

    if (showFeedback(this.props)) {
      if (!!get(meta, 'error')) {
        return 'danger';
      } else if (!!get(meta, 'warning')) {
        return 'warning';
      } else {
        return 'success';
      }
    }

    return undefined;
  }

  render() {
    const {
      classes,
      styles,
      sheet,
      required,
      tag: Tag,
      schema,
      tooltipProps: { placement = 'right', ...tooltipProps },
      labelProps: {
        tag: LabelTag = Label,
        requiredColor = 'red',
        ...labelProps
      },
      showFeedback,
      meta: { error, warning },
      input,
      children,
      ...rest
    } = this.props;
    const { name } = input;
    const label = get(schema, LABEL_PROP);
    const labelId = `${name}-label`;
    const inputState = this.getInputState();
    return (
      <Tag {...rest} className={classes.formGroup} color={inputState}>
        <LabelTag
          className={classes.label}
          id={labelId}
          for={name}
          {...labelProps}
        >
          {required && <span style={{ color: requiredColor }}>*</span>}
          {label}
        </LabelTag>

        {schema.description &&
          <UncontrolledTooltip
            className={classes.tooltip}
            target={labelId}
            placement={placement}
            {...tooltipProps}
          >
            {schema.description}
          </UncontrolledTooltip>}

        {Children.map(children, child =>
          cloneElement(child, {
            id: name,
            state: inputState
          })
        )}

        {inputState &&
          <FormFeedback className={classes.feedback} id={`${name}-feedback`}>
            {error || warning}
          </FormFeedback>}
      </Tag>
    );
  }
}
