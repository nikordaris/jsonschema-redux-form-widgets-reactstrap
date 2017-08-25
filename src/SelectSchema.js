// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, change } from 'redux-form';
import { Input } from 'reactstrap';
import { sortBy, omit, isEmpty } from 'lodash';

import FormField from './FormField';
import { injectSheet } from './Jss';
import validate from './validator';
import CardWithHeader from './Card';

@injectSheet({
  selectedObject: { marginTop: 10 }
})
@connect(
  () => ({}),
  dispatch => bindActionCreators({ change }, dispatch),
  undefined,
  { withRef: true }
)
export class SingleSelectInput extends Component {
  static defaultProps = {
    tag: CardWithHeader
  };

  state = {
    selected: ''
  };

  props: {
    tag: string,
    schema: any,
    form: string,
    name: string,
    required: boolean,
    classes: { [string]: any },
    styles: { [string]: any },
    change: (form: string, prop: string, value: any) => void,
    renderSchema: (
      { [string]: any },
      index: string,
      namespace: string
    ) => React.Element<*>
  };

  state: {
    selected?: string
  };

  getOptions = (schema: Array<any>, index: string) => {
    const { renderSchema, name } = this.props;
    return schema
      .map((s, idx) => {
        const { id, title, const: value, description } = s;
        const rendered = renderSchema(s, `${index}-${idx}`, name);
        return {
          label: title || id || value,
          tooltip: description,
          value: rendered || value || id || title
        };
      })
      .filter(o => o.value);
  };

  renderInputOptions(options: Array<OptionType>) {
    return sortBy(options, o => o.label).map(({ label, value }, idx) => (
      <option key={idx} value={React.isValidElement(value) ? label : value}>
        {label}
      </option>
    ));
  }

  handleChange = (e: { target: { value: string } }) => {
    const { name, change, form } = this.props;
    change(form, name, {});
    this.setState({ ...this.state, selected: e.target.value });
  };

  renderSelectInput(options: Array<OptionType>) {
    const { tag: Tag, schema, styles, classes } = this.props;
    return (
      <Tag styles={styles} schema={schema}>
        <Input
          className={classes.select}
          type="select"
          onChange={this.handleChange}
          value={this.state.selected}
        >
          <option disabled value="">Select {schema.title}</option>
          {this.renderInputOptions(options)}
        </Input>
        {this.renderInputObject(options)}
      </Tag>
    );
  }

  renderSelectField(options: Array<OptionType>) {
    const rest = omit(this.props, [
      'tag',
      'children',
      'change',
      'renderSchema',
      'styles'
    ]);
    const { schema, required } = this.props;
    return (
      <Field
        type="select"
        validate={validate(schema, required)}
        component={FormField}
        {...rest}
      >
        <Input type="select">
          <option disabled value="">Select {schema.title}</option>
          {this.renderInputOptions(options)}
        </Input>
      </Field>
    );
  }

  renderInputObject(options: Array<OptionType>) {
    const { classes } = this.props;
    const { selected } = this.state;

    const selectedObj = selected && options.find(o => o.label === selected);
    if (selectedObj && selectedObj.value) {
      return (
        <div className={classes.selectedObject}>
          {selectedObj.value}
        </div>
      );
    }

    return undefined;
  }

  render() {
    const { schema, name } = this.props;
    const options = this.getOptions(schema.oneOf, `${name}-oneOf`);
    if (isEmpty(options.filter(({ value }) => React.isValidElement(value)))) {
      return this.renderSelectField(options);
    }

    return this.renderSelectInput(options);
  }
}
