import React, { FC, ReactElement, useState } from 'react'
import axios from "axios";
import { DropDown } from '../DropDown/DropDown'
import { currencies } from '../constants/currencies'
import { Input } from '../Input/Input'
import './Converter.css'

export const Converter: FC = (): ReactElement => {
  const [convertTo, setConvertTo] = useState('USD')
  const [base, setBase] = useState('UAH')
  const [amount, setAmount] = useState('')

  return (
    <div className='container'>
      <div className='converterWrapper'>
        <h1 className='converterTitle'>Currency Converter</h1>
        <div className="inputsWrapper">
          <div className="converter">
            <DropDown 
              name='base'
              value={base}
              currencies={currencies}
              onChange={() => {}}
            />
            <Input 
              name=''
              value={convertTo}
              onChange={({ target: { value } }): void => setConvertTo(value)}
            />
          </div>
          <button className='arrowIcon'>&#8595;&#8593;</button>
          <div className="converter">
            <DropDown 
              name='convertTo'
              value=''
              currencies={currencies}
              onChange={() => {}}
            />
            <Input 
              name=''
              value={convertTo}
              onChange={({ target: { value } }): void => setConvertTo(value)}
            />
          </div>
        </div>




        {/* <DropDown 
          label='label'
          currencies={currencies}
        />
        <Input 
          label='inputLabel'
          name='name'
          value={currencyFrom}
          onChange={({ target: { value } }): void => setCurrencyFrom(value) }
        /> */}
      </div>
    </div>
  )
}
