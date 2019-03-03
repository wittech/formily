import React from 'react'
import SchemaForm, {
  Field,
  registerFormField,
  connect,
  registerFieldMiddleware,
  createFormActions
} from '../index'
import { render } from 'react-testing-library'

beforeEach(() => {
  registerFieldMiddleware(Field => {
    return props => {
      if (typeof props.editable === 'boolean') {
        if (!props.editable) return <div>empty</div>
      }
      return (
        <div>
          {props.schema.title}
          <Field {...props} />
          {props.errors && props.errors.length ? (
            <div data-testid={`test-errors`}>{props.errors}</div>
          ) : (
            ''
          )}
        </div>
      )
    }
  })
  registerFormField(
    'string',
    connect()(props => <input {...props} value={props.value || ''} />)
  )
})

test('update editable by setFieldState', async () => {
  const actions = createFormActions()
  const TestComponent = () => (
    <SchemaForm
      actions={actions}
      effects={($, { setFieldState }) => {
        $('onFormInit').subscribe(() => {
          setFieldState('aaa', state => {
            state.props.title = 'text'
            state.rules = [
              {
                required: true,
                message: 'field is required'
              }
            ]
            state.props.editable = false
          })
        })
      }}
    >
      <Field name='aaa' type='string' />
      <button type='submit' data-testid='btn'>
        Submit
      </button>
    </SchemaForm>
  )

  const { queryByText } = render(<TestComponent />)

  await sleep(100)
  expect(queryByText('text')).toBeNull()
  await sleep(100)
  actions.setFieldState('aaa', state => {
    state.editable = true
  })
  await sleep(100)
  expect(queryByText('text')).toBeVisible()
})
