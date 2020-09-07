import React from 'react'
import { FormSpy, LifeCycleTypes } from '@formily/react-schema-renderer'
import { Button } from 'antd'
import { ISubmitProps, IResetProps } from '../types'

export const Submit = ({ showLoading, onSubmit, ...props }: ISubmitProps) => {
  return (
    <FormSpy
      selector={[
        LifeCycleTypes.ON_FORM_MOUNT,
        LifeCycleTypes.ON_FORM_SUBMIT_START,
        // LifeCycleTypes.ON_FORM_SUBMIT_END, //修改为提交成功或者失败后才取消loading，避免前端重复提交
        LifeCycleTypes.ON_FORM_ON_SUBMIT_SUCCESS,
        LifeCycleTypes.ON_FORM_ON_SUBMIT_FAILED,
      ]}
      reducer={(state, action) => {
        switch (action.type) {
          case LifeCycleTypes.ON_FORM_SUBMIT_START:
            return {
              ...state,
              submitting: true,
            }
          // case LifeCycleTypes.ON_FORM_SUBMIT_END:
          //   return {
          //     ...state,
          //     submitting: false
          //   }
          case LifeCycleTypes.ON_FORM_ON_SUBMIT_SUCCESS:
            return {
              ...state,
              submitting: false,
            }
          case LifeCycleTypes.ON_FORM_ON_SUBMIT_FAILED:
            return {
              ...state,
              submitting: false,
            }
          default:
            return state
        }
      }}
    >
      {({ state, form }) => {
        return (
          <Button
            onClick={(e) => {
              if (onSubmit) {
                form.submit(onSubmit)
              }
              if (props.onClick) {
                props.onClick(e)
              }
            }}
            {...props}
            htmlType={onSubmit ? 'button' : 'submit'}
            loading={showLoading ? state.submitting : undefined}
          >
            {props.children || '保存'}
          </Button>
        )
      }}
    </FormSpy>
  )
}

Submit.defaultProps = {
  showLoading: true,
  type: 'primary',
  htmlType: 'submit',
}

export const Reset: React.FC<IResetProps> = ({
  children,
  forceClear,
  validate,
  ...props
}) => {
  return (
    <FormSpy selector={[]}>
      {({ form }) => {
        return (
          <Button
            {...props}
            onClick={() => form.reset({ forceClear, validate })}
          >
            {children || '重置'}
          </Button>
        )
      }}
    </FormSpy>
  )
}
