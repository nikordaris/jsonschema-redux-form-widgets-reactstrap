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
    schemaVis: {
      schema: any,
      prefix: string
    }
  };
  render() {
    const { classes, name, schemaVis: { schema, ...schemaVis } } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader className={classes.header}>{schema.title}</CardHeader>
        <SchemaVis
          tag={CardBlock}
          className={classes.cardblock}
          schema={schema}
          {...schemaVis}
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
  props: {
    styles: any,
    sheet: any,
    onRemove: () => void,
    renderSchema: RenderSchemaType,
    renderProperties: RenderPropertiesType,
    name: string,
    classes: { [string]: any },
    btnProps: { [string]: any },
    schemaVis: {
      schema: any,
      prefix: string
    }
  };
  render() {
    const {
      classes,
      name,
      schemaVis: { schema, prefix, ...schemaVis },
      onRemove,
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
            <Button color="danger" size="sm" onClick={onRemove}>Remove</Button>
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
