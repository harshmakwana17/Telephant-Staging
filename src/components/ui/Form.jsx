'use client'

import { useId } from 'react'

/**
 * Form primitives using the Client-First class names from the Webflow project
 * (`form_component`, `form_form`, `form_field-wrapper`, `form_label`,
 * `form_input`, `is-text-area`, `is-select-input`, `form_checkbox`,
 * `form_checkbox-icon`, `form_checkbox-label`, `form_radio`, `form_radio-icon`,
 * `form_radio-label`, `form_message-success`, `form_message-error`,
 * `button is-form-submit`).
 *
 * The Webflow-only classes are gone: `w-form`, `w-input`, `w-select`,
 * `w-checkbox`, `w-checkbox-input`, `w-radio`, `w-radio-input`,
 * `w-form-formradioinput`, `w-form-label`, `w-button`, `w-form-done`,
 * `w-form-fail` and `w--redirected-checked`, along with the `data-name`,
 * `data-wf-*` and `data-wait` attributes that only Webflow's hosted form
 * handler read.
 *
 * Styling comes from telephant.webflow.css plus src/styles/form.css, which
 * supplies what webflow.css used to. Two structural changes from the export:
 *
 *  - Checkbox and radio are real inputs carrying `form_checkbox-icon` /
 *    `form_radio-icon`. The export put those classes on a decorative <div>,
 *    hid the input with `opacity:0;position:absolute;z-index:-1`, and let
 *    webflow.js sync a class between them - so state broke with webflow.js
 *    removed, and neither was keyboard-operable.
 *  - Choice groups are a fieldset/legend. The export captioned them with
 *    `<label for="email">` on both groups, pointing at an input that does not
 *    exist on the page.
 */

export function FormComponent({ children, className = '' }) {
  return (
    <div className={`form_component ${className}`.trim()}>{children}</div>
  )
}

export function Form({ children, className = '', ...props }) {
  return (
    <form className={`form_form ${className}`.trim()} {...props}>
      {children}
    </form>
  )
}

export function Field({ label, htmlFor, hint, children }) {
  return (
    <div className="form_field-wrapper">
      {label ? (
        <label className="form_label" htmlFor={htmlFor}>
          {label}
        </label>
      ) : null}
      {children}
      {hint ? <p className="form_field-hint">{hint}</p> : null}
    </div>
  )
}

export function TextInput({ id, label, hint, type = 'text', className = '', ...props }) {
  const generatedId = useId()
  const inputId = id || generatedId

  return (
    <Field label={label} htmlFor={inputId} hint={hint}>
      <input
        id={inputId}
        type={type}
        className={`form_input ${className}`.trim()}
        {...props}
      />
    </Field>
  )
}

export function TextArea({ id, label, hint, ...props }) {
  const generatedId = useId()
  const inputId = id || generatedId

  return (
    <Field label={label} htmlFor={inputId} hint={hint}>
      <textarea id={inputId} className="form_input is-text-area" {...props} />
    </Field>
  )
}

/**
 * `options` is [{ value, label }]. `placeholder` renders the empty first option,
 * whose empty value keeps `required` working.
 */
export function Select({ id, label, hint, options = [], placeholder, value, ...props }) {
  const generatedId = useId()
  const inputId = id || generatedId
  const isPlaceholder = value === '' || value === undefined

  return (
    <Field label={label} htmlFor={inputId} hint={hint}>
      {/* A real <select>. The published page used `<input type="select">`,
          which is not a valid input type and renders as a text box. */}
      <select
        id={inputId}
        className="form_input is-select-input"
        value={value}
        data-placeholder={isPlaceholder ? 'true' : 'false'}
        {...props}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Field>
  )
}

export function Checkbox({ id, label, ...props }) {
  const generatedId = useId()
  const inputId = id || generatedId

  return (
    <label className="form_checkbox" htmlFor={inputId}>
      <input id={inputId} type="checkbox" className="form_checkbox-icon" {...props} />
      <span className="form_checkbox-label">{label}</span>
    </label>
  )
}

export function Radio({ id, label, ...props }) {
  const generatedId = useId()
  const inputId = id || generatedId

  return (
    <label className="form_radio" htmlFor={inputId}>
      <input id={inputId} type="radio" className="form_radio-icon" {...props} />
      <span className="form_radio-label">{label}</span>
    </label>
  )
}

/** Groups checkboxes or radios so the caption is announced with each option. */
export function ChoiceGroup({ legend, children }) {
  return (
    <fieldset className="form_field-wrapper">
      {legend ? <legend className="form_label">{legend}</legend> : null}
      {children}
    </fieldset>
  )
}

export function SubmitButton({ children = 'Submit', className = '', ...props }) {
  return (
    <button type="submit" className={`button is-form-submit ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}

/** tone: 'success' | 'error' */
export function FormMessage({ tone = 'success', children }) {
  const isError = tone === 'error'

  return (
    <div
      className={isError ? 'form_message-error' : 'form_message-success'}
      role={isError ? 'alert' : 'status'}
    >
      <div>{children}</div>
    </div>
  )
}
