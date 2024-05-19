import React from 'react'
import Card from '../Components/Card'

const HomePage = () => {
  return (
    <main>
      <div>
        <h1 className="m-5 p-4  text-black text-4xl font-bold font-[' Wavefont']">Welcome to LandSol-.. Your One Place Destination to BUY/SELL/RENT  properties with seamless and safe blockchain based transactions</h1>
        {/*Hello Screen*/}
        <div className='hidden lg:block bg-["/res/banner.svg"]'>
          helo
        </div>
      </div>
      <div className="w-[390.23px] h-[42.21px] text-black text-4xl font-normal font-['Inika']">FOR SALE!!</div>
      <div className='m-5'>
        <Card />
      </div>
    </main >
  )
}

export default HomePage