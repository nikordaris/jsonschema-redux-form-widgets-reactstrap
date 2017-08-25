import React from 'react';

declare type CreateInputOptionsType = {
  type?: string,
  component?: any,
  options?: ObjectSelectOptionsType,
  styles?: { [string]: any }
};

declare type OptionType = {
  value: any,
  label: [string],
  tooltip?: [string]
};

declare type ObjectSelectOptionsType =
  | { [string]: Array<OptionType> }
  | Array<OptionType>;

declare type ShowFeedbackType = (props: { [string]: any }) => boolean;

declare type RenderSchemaType = (
  schema: { [string]: any },
  index: string,
  namespace: string
) => React.Element<*>;

declare type RenderPropertiesType = (
  schema: { [string]: any },
  namespace: string
) => React.Element<*> | Array<React.Element<*>>;

declare type SchemaVisType = {
  schema: { [string]: any },
  components: { [string]: any },
  componentProps: { [string]: any },
  prefix: string,
  children: any
};

declare module 'redux-form-jsonschema-reactstrap' {
  declare module.exports: {
    ShowFeedbackType: ShowFeedbackType,
    OptionType: OptionType,
    ObjectSelectOptionsType: ObjectSelectOptionsType,
    CreateInputOptionsType: CreateInputOptionsType,
    createInputField(options: CreateInputOptionsType): any,
    RenderSchemaType: RenderSchemaType,
    RenderPropertiesType: RenderPropertiesType,
    SchemaVisType: SchemaVisType
  };
}
