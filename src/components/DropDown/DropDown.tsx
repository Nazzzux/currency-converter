import React, { FC, ReactElement } from 'react'
import { currencies } from '../constants/currencies';
import './DropDown.css'

interface Props {
  label: string;
  currencies: typeof currencies;
  onChange?(): void;
}

export const DropDown: FC<Props> = ({
  label,
  currencies,
  onChange = () => {}
}): ReactElement => {

  return (
    <label className='dropDownWrapper'>
      <span className='dropDownLabel'>{label}</span>
      <select className='dropDown'>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ) )}
      </select>
    </label>
  )
}
