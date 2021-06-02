import React, { forwardRef, memo } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { useObserver } from './hooks'
import { IObserverOptions } from './types'

export function observer<P, Options extends IObserverOptions>(
  component: React.FunctionComponent<P>,
  options?: Options
): React.MemoExoticComponent<
  React.FunctionComponent<
    Options extends { forwardRef: true }
      ? P & {
          ref?: 'ref' extends keyof P ? P['ref'] : React.RefAttributes<any>
        }
      : React.PropsWithoutRef<P>
  >
> {
  const realOptions = {
    forwardRef: false,
    ...options,
  }

  const wrappedComponent = realOptions.forwardRef
    ? forwardRef((props: any, ref: any) => {
        return useObserver(() => component({ ...props, ref }), realOptions)
      })
    : (props: any) => {
        return useObserver(() => component(props), realOptions)
      }

  const memoComponent = memo(wrappedComponent)

  hoistNonReactStatics(memoComponent, component)

  if (realOptions.displayName) {
    memoComponent.displayName = realOptions.displayName
  }

  return memoComponent
}
