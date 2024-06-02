import React from 'react'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const id = location.state ? location.state.id : null;

  const homes = [
    {
      'name': 'Asoka Rajpat',
      'des': 'Good home',
      'img': '/assets/home2.png'
    },
    {
      'name': 'John Smith',
      'des': 'Big house',
      'img': '/assets/home2.png'
    },
    {
      'name': 'Jane Doe',
      'des': 'Modern apartment',
      'img': '/assets/home2.png'
    },
    // Add more home data as needed

    {
      'name': 'Jane Doe',
      'des': 'Modern apartment',
      'img': '/assets/home2.png'
    },
    {
      'name': 'Jane Doe',
      'des': 'Modern apartment',
      'img': '/assets/home2.png'
    },
    {
      'name': 'Jane Doe',
      'des': 'Modern apartment',
      'img': '/assets/home2.png'
    },
  ]

  const renderCards = () => {
    return homes.map((home, index) => (
      <div key={index} className='m-2'>
        <Card prop={home} />
      </div>
    ))
  }

  return (
    <main className='w-full md:ml-[0rem] md:w-auto md:space-y-2 p-4'>
      <div className='ml-0 md:ml-[5rem] mt-0'>
        <h1 className="text-center md:text-left md:p-4 text-black text-4xl font-bold font-['Wavefont']">
          Welcome {id ? id : ""} to LandSol - Your One Place Destination to BUY/SELL/RENT properties with seamless and safe blockchain based transactions
        </h1>

      </div>

      <section className="my-8">
        <div className=' lg:block bg-cover w-2/3 bg-center' style={{ backgroundImage: 'url("/assets/back.svg")' }}>
          <h2 className="text-center m-5 md:text-left text-black text-3xl font-bold font-['Inika'] mb-4">FOR SALE!!</h2>
        </div>
        <div className='flex w-full overflow-x-auto space-x-4'>
          {renderCards()}
        </div>
      </section>

      <section className="my-8">
        <div className=' lg:block bg-cover w-2/3 bg-center' style={{ backgroundImage: 'url("/assets/back.svg")' }}>
          <h2 className="text-center m-5 md:text-left text-black text-3xl font-bold font-['Inika'] mb-4">FOR RENT!!</h2>
        </div>
        <div className='flex w-full overflow-x-auto space-x-4'>
          {renderCards()}
        </div>
      </section>


    </main>
  )
}

export default HomePage
