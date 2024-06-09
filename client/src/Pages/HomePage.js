import React from 'react'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
//ABIs
import RealEstate from '../abis/RealEstate.json'
import Escrow from '../abis/Escrow.json'
// Config
import config from '../config.json';


const HomePage = () => {
  const location = useLocation();
  const id = location.state ? location.state.id : null;
  const [provider, setProvider] = useState(null)
  const [escrow, setEscrow] = useState(null)

  const [account, setAccount] = useState(null)

  const [homes, setHomes] = useState([])
  const [home, setHome] = useState({})
  const [toggle, setToggle] = useState(false);
  //load Blockchain Data Function

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)
    const network = await provider.getNetwork()

    const realEstate = new ethers.Contract(config[network.chainId].realEstate.address, RealEstate, provider)
    const totalSupply = await realEstate.totalSupply()
    const homes = []

    for (var i = 1; i <= totalSupply; i++) {
      const uri = await realEstate.tokenURI(i)
      const response = await fetch(uri)
      const metadata = await response.json()
      homes.push(metadata)
    }

    setHomes(homes)

    const escrow = new ethers.Contract(config[network.chainId].escrow.address, Escrow, provider)
    setEscrow(escrow)

    window.ethereum.on('accountsChanged', async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = ethers.utils.getAddress(accounts[0])
      setAccount(account);
    })
  }


  //useEffect
  useEffect(() => {
    loadBlockchainData()
  }, [])


  const togglePop = (home) => {
    setHome(home)
    toggle ? setToggle(false) : setToggle(true);
  }


  const renderCards = () => {
    return homes.map((home, index) => (
      <Card key={index} home={home} togglePop={togglePop} />
    ));
  };

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
{/*
const data = [
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
*/}