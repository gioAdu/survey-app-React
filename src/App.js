import './App.css'
import RateProduct from './rateProduct'
import ThankYou from './thankYouPage'
import React, { useState } from 'react'

function App() {
  const [childData, setChildData] = useState('')

  return (
    <div className='container'>
    <div className='card-area'>
      {!childData ? <RateProduct passChildData={setChildData} /> : <ThankYou rating={childData}/>}
    </div>
  </div>
  )
}

export default App
