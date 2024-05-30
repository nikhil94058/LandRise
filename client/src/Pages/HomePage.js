import React from 'react'
import Card from '../Components/Card'
import Footer from '../Components/Footer'

const HomePage = () => {
  const homes = [
    {
      'name': 'Asoka Rajpat',
      'des': 'Good home',
      'img': '/res/home1.jpg'
    },
    {
      'name': 'John Smith',
      'des': 'Big house',
      'img': '/res/home2.jpg'
    },
    {
      'name': 'Jane Doe',
      'des': 'Modern apartment',
      'img': '/res/home3.jpg'
    },
    {
      'name': 'Jane Doe',
      'des': 'Modern apartment',
      'img': '/res/home3.jpg'
    },
    {
      'name': 'Jane Doe',
      'des': 'Modern apartment',
      'img': '/res/home3.jpg'
    },
    {
      'name': 'Jane Doe',
      'des': 'Modern apartment',
      'img': '/res/home3.jpg'
    },
    {
      'name': 'Jane Doe',
      'des': 'Modern apartment',
      'img': '/res/home3.jpg'
    }
  ]

  const renderCards = () => {
    return homes.map((home, index) => (
      <div className='m-2'><Card key={index} prop={home} /></div>
    ))
  }

  return (
    <main className='w-7 md:ml-[5rem] md:w-auto md:space-y-2'>
      <div className='ml-[5rem] mt-0 '>
        <h1 className=" md:p-4 w-7 md:w-auto text-black text-4xl font-bold font-[' Wavefont']">Welcome to LandSol-.. Your One Place Destination to BUY/SELL/RENT  properties with seamless and safe blockchain based transactions</h1>
        {/*Hello Screen*/}
        <div className='hidden lg:block bg-["/res/banner.svg"]'>
          Hello
        </div>
      </div>
      <div className="w-[390.23px] h-[42.21px] bg-('') text-black text-4xl font-normal font-['Inika']">FOR SALE!!</div>


      <div className='flex w-screen md:w-full overflow-x-auto space-x-8'>
        {renderCards()}
      </div>


      <div className="w-[390.23px] h-[42.21px] bg-('') text-black text-4xl font-normal font-['Inika']">FOR RENT!!</div>

      <div className='flex w-screen md:w-full overflow-x-auto space-x-8'>
        {renderCards()}
      </div>
      <Footer />
    </main >
  )
}

export default HomePage