import { ISchema } from '@formily/react'

export const FormItem: ISchema = {
  type: 'object',
  properties: {
    tooltip: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    addonBefore: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    addonAfter: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    labelCol: {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    wrapperCol: {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    labelWidth: {
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
    },
    wrapperWidth: {
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
    },
    colon: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
    asterisk: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    gridSpan: {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    feedbackLayout: {
      type: 'string',
      enum: ['loose', 'terse', 'popover', 'none'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'loose',
      },
    },
    size: {
      type: 'string',
      enum: ['large', 'small', 'default'],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'default',
        optionType: 'button',
      },
    },
    layout: {
      type: 'string',
      enum: ['vertical', 'horizontal', 'inline'],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'horizontal',
        optionType: 'button',
      },
    },

    tooltipLayout: {
      type: 'string',
      enum: ['icon', 'text'],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'icon',
        optionType: 'button',
      },
    },
    labelAlign: {
      type: 'string',
      enum: ['left', 'right'],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'right',
        optionType: 'button',
      },
    },
    wrapperAlign: {
      type: 'string',
      enum: ['left', 'right'],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'left',
        optionType: 'button',
      },
    },
    labelWrap: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    wrapperWrap: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    fullness: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    inset: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    bordered: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
  },
}
