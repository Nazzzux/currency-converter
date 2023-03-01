import React, { ChangeEvent, FC, ReactElement } from 'react'
import './Input.css'

interface Props {
  name: string;
  value: string;
  label?: string;
  type?: string;
  placeholder?: string;
  onChange(event: ChangeEvent<HTMLInputElement>) : void
}

export const Input: FC<Props> = ({ 
  label, 
  name, 
  value, 
  placeholder = "", 
  type = "text", 
  onChange }): ReactElement => {
  return (
    <label className='inputLabelWrapper'>
      <span className='inputLabel'>{label}</span>
      <input 
        className='input'
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}
