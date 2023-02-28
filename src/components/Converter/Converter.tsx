import React from 'react'
import { DropDown } from '../DropDown/DropDown'
import { currencies } from '../constants/currencies'

export const Converter = () => {
  return (
    <div>
      <DropDown 
        label='label'
        currencies={currencies}
      />
    </div>
  )
}
