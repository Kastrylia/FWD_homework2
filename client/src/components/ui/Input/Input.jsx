import React from 'react'
import { useController } from 'react-hook-form'

/**
 * Encapsulates registering react-hook-form input and displays errors
 * @param label
 * @param name
 * @param rules
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */

function Input({ label, name, rules, ...rest }) {
  const { field, fieldState } = useController({ name, control, rules })

  return (
    <label>
      {label}
      <input type="text" {...rest} {...field} />
      {fieldState.error && <div>{fieldState.error.message}</div>}
    </label>
  )
}

export default Input
