import React, { FC, ReactElement } from 'react'
import { currencies } from '../constants/currencies';
import './DropDown.css'

interface Props {
  name: string;
  value: string,
  currencies: typeof currencies;
  label?: string;
  onChange(): void;
}

export const DropDown: FC<Props> = ({
  name,
  value,
  currencies,
  label = "",
  onChange
}): ReactElement => {

  return (
    <label className='dropDownWrapper'>
      <span className='dropDownLabel'>{label}</span>
      <select 
        className='dropDown'
        name={name}
        value={value}
        onChange={onChange}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ) )}
      </select>
    </label>
  )
}
