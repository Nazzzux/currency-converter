import React, { FC, ReactElement } from 'react'

interface Props {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  type?: string;
  onChange() : void
}

export const Input: FC<Props> = ({ label, placeholder, type = "text", name, value, onChange }): ReactElement => {
  return (
    <label className='inputLabel'>
      {label}
      <input 
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}
