// @flow

import React, { Component } from 'react';
import { Card, CardBlock, CardHeader, Button } from 'reactstrap';
import { injectSheet } from '../Jss';
import SchemaVis from 'react-jsonschema-vis';
import { set, merge } from 'lodash';

@injectSheet({
  card: { marginBottom: 10, marginTop: 15 },
  header: { padding: 5, paddingLeft: 10 }
})
export class CardWithHeader extends Component {
  props: {
    name: string,
    classes: { [string]: any },
    schemaVis: SchemaVisType
  };
  render() {
    const {
      classes,
      name,
      schemaVis,
      schemaVis: { schema, prefix }
    } = this.props;
    const _schema = set(merge({}, schema), prefix, undefined);

    return (
      <Card className={classes.card}>
        <CardHeader className={classes.header}>{schema.title}</CardHeader>
        <SchemaVis
          tag={CardBlock}
          className={classes.cardblock}
          {...schemaVis}
          schema={_schema}
          namespace={name}
        />
      </Card>
    );
  }
}

@injectSheet({
  card: { marginBottom: 10, marginTop: 15 },
  header: { padding: 5, paddingLeft: 10, display: 'inline-flex' },
  removeButton: { marginLeft: 'auto' },
  headerTitle: { marginTop: 'auto', marginBottom: 'auto' }
})
export class CardItem extends Component {
  static defaultProps = {
    removeBtnProps: {}
  };

  props: {
    styles: any,
    sheet: any,
    name: string,
    classes: { [string]: any },
    removeBtnProps: { [string]: any },
    schemaVis: SchemaVisType
  };
  render() {
    const {
      classes,
      name,
      schemaVis: { schema, prefix, ...schemaVis },
      removeBtnProps: { children = 'Remove', ...removeBtnProps },
      styles,
      sheet,
      ...rest
    } = this.props;

    const _schema = set(merge({}, schema), prefix, undefined);
    return (
      <Card className={classes.card}>
        <CardHeader className={classes.header}>
          <div className={classes.headerTitle}>{schema.title}</div>
          <div className={classes.removeButton}>
            <Button
              id="removeItemBtn"
              color="danger"
              size="sm"
              {...removeBtnProps}
              children={children}
            />
          </div>
        </CardHeader>
        <SchemaVis
          tag={CardBlock}
          className={classes.cardblock}
          namespace={name}
          prefix={prefix}
          schema={_schema}
          {...schemaVis}
          {...rest}
        />
      </Card>
    );
  }
}
