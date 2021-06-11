import { GlobalDragSource } from '@designable/core'

GlobalDragSource.appendSourcesByGroup('layouts', [
  {
    componentName: 'DesignableField',
    props: {
      type: 'void',
      'x-component': 'Card',
      'x-component-props': {
        title: 'Title',
      },
    },
  },
  {
    componentName: 'DesignableField',
    props: {
      type: 'void',
      'x-component': 'FormGrid',
    },
  },
  {
    componentName: 'DesignableField',
    props: {
      type: 'void',
      'x-component': 'FormLayout',
    },
  },
  {
    componentName: 'DesignableField',
    props: {
      type: 'void',
      'x-component': 'Space',
    },
  },
])
