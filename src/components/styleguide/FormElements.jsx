'use client'

import { useState } from 'react'

import {
  ChoiceGroup,
  Checkbox,
  Form,
  FormComponent,
  FormMessage,
  Radio,
  Select,
  SubmitButton,
  TextArea,
  TextInput,
} from '@/components/ui/Form'

const SELECT_OPTIONS = [
  { value: 'first', label: 'First Choice' },
  { value: 'second', label: 'Second Choice' },
  { value: 'third', label: 'Third Choice' },
]

const initialValues = {
  name: '',
  message: '',
  select: '',
  checkbox: true,
  radio: 'Radio',
}

/**
 * The style guide's form component, rebuilt on the Client-First classes.
 *
 * Field order and labels follow the export: Text Input, Text Area, Select
 * field, Checkbox field, Radio button, Submit. The success and error blocks
 * below the form are the `form_message-*` pair Webflow's JS used to reveal.
 */
export function FormElements() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')

  const update = (name) => (event) => {
    const { type, checked, value } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // No backend wired up; this stands in for the POST so both states are visible.
    setStatus(values.name.trim() ? 'success' : 'error')
  }

  return (
    <section className="fs-styleguide_webflow-elements">
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="fs-styleguide_section">
            <div className="fs-styleguide_section-header">
              <h2 className="fs-styleguide_heading-medium">Form elements</h2>
              <p className="text-size-medium">
                Client-First classes on real inputs. No <code>.w-input</code>,{' '}
                <code>.w-select</code>, <code>.w-checkbox</code>, <code>.w-radio</code>{' '}
                or <code>.w-button</code> — checked state comes from{' '}
                <code>:checked</code> rather than a class toggled by JavaScript.
              </p>
            </div>

            <div className="fs-styleguide_item-wrapper">
              <div className="fs-styleguide_1-col">
                <div className="fs-styleguide_item is-stretch">
                  <div className="fs-styleguide_label">form_component</div>
                  <p className="text-size-medium">
                    Example of a form component using Folders
                  </p>

                  {/* Controls are fluid, so they are shown at the design
                      system's max-width-medium rather than stretched across
                      the full container. */}
                  <div className="max-width-medium">
                    <FormComponent>
                      <Form onSubmit={handleSubmit} noValidate>
                        <TextInput
                          label="Text Input"
                          name="name"
                          placeholder="First Name"
                          autoComplete="given-name"
                          maxLength={256}
                          value={values.name}
                          onChange={update('name')}
                          aria-invalid={status === 'error' ? 'true' : undefined}
                        />

                        <TextArea
                          label="Text Area"
                          name="message"
                          placeholder="Message"
                          maxLength={5000}
                          rows={5}
                          value={values.message}
                          onChange={update('message')}
                        />

                        <Select
                          label="Select field"
                          name="select"
                          placeholder="Select one..."
                          options={SELECT_OPTIONS}
                          value={values.select}
                          onChange={update('select')}
                        />

                        <ChoiceGroup legend="Checkbox field">
                          <Checkbox
                            label="Checkbox"
                            name="checkbox"
                            checked={values.checkbox}
                            onChange={update('checkbox')}
                          />
                        </ChoiceGroup>

                        <ChoiceGroup legend="Radio button">
                          <Radio
                            label="Radio"
                            name="radio"
                            value="Radio"
                            checked={values.radio === 'Radio'}
                            onChange={update('radio')}
                          />
                          <Radio
                            label="Radio 2"
                            name="radio"
                            value="Radio 2"
                            checked={values.radio === 'Radio 2'}
                            onChange={update('radio')}
                          />
                        </ChoiceGroup>

                        <SubmitButton>Submit</SubmitButton>
                      </Form>

                      {status === 'success' ? (
                        <FormMessage tone="success">
                          Thank you! Your submission has been received!
                        </FormMessage>
                      ) : null}

                      {status === 'error' ? (
                        <FormMessage tone="error">
                          Oops! Something went wrong while submitting the form.
                        </FormMessage>
                      ) : null}
                    </FormComponent>
                  </div>
                </div>

                <div className="fs-styleguide_item is-stretch">
                  <div className="fs-styleguide_label">form_input states</div>
                  <div className="max-width-medium">
                    <Form onSubmit={(event) => event.preventDefault()}>
                      <TextInput
                        label="With hint text"
                        type="email"
                        placeholder="you@example.com"
                        hint="We only use this to send your licence key."
                      />
                      <TextInput label="Disabled" placeholder="Not editable" disabled />
                      <TextInput
                        label="Read only"
                        defaultValue="Read-only value"
                        readOnly
                      />
                      <TextInput
                        label="Invalid"
                        defaultValue="not-an-email"
                        aria-invalid="true"
                        hint="Shown with aria-invalid, which also drives the red border."
                      />
                      <ChoiceGroup legend="Disabled choices">
                        <Checkbox label="Disabled checkbox" disabled />
                        <Radio label="Disabled radio" name="disabled-demo" disabled />
                      </ChoiceGroup>
                    </Form>
                  </div>
                </div>

                <div className="fs-styleguide_item is-stretch">
                  <div className="fs-styleguide_row">
                    <div className="fs-styleguide_label">form_message-success</div>
                    <div className="fs-styleguide_label">form_message-error</div>
                  </div>
                  <FormMessage tone="success">
                    Thank you! Your submission has been received!
                  </FormMessage>
                  <FormMessage tone="error">
                    Oops! Something went wrong while submitting the form.
                  </FormMessage>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
