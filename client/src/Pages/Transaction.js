// src/components/Transaction.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ethers } from 'ethers';
import escrowABI from '../abis/Escrow.json';

const Transaction = () => {
  const location = useLocation();
  const { nft } = location.state || {};
  const [formData, setFormData] = useState({
    nftID: '',
    buyer: '',
    purchasePrice: '',
    escrowAmount: ''
  });
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [escrowContract, setEscrowContract] = useState(null);

  useEffect(() => {
    document.title = 'Transaction Details';
    initializeEthers();
  }, []);

  const initializeEthers = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      setProvider(provider);
      setSigner(signer);

      const escrowAddress = "0xYourEscrowContractAddress"; // Replace with your actual Escrow contract address
      const escrowContract = new ethers.Contract(escrowAddress, escrowABI, signer);

      setEscrowContract(escrowContract);
    } else {
      console.error('Ethereum wallet not found');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { nftID, buyer, purchasePrice, escrowAmount } = formData;
      await escrowContract.list(
        nftID,
        buyer,
        ethers.utils.parseUnits(purchasePrice, 'ether'),
        ethers.utils.parseUnits(escrowAmount, 'ether')
      );
      console.log('Transaction successful');
    } catch (error) {
      console.error('Transaction failed', error);
    }
  };

  if (!nft) {
    return <p>No NFT data available</p>;
  }

  return (
    <div className="mt-20 px-4">
      <center>
        <div className="text-4xl font-normal font-['Times New Roman'] text-black mb-8">
          Transaction for {nft.ownerName ? `${nft.ownerName}'s Property` : 'Property Title'}
        </div>
        <form onSubmit={handleSubmit} className="w-full lg:w-1/2 bg-lime-200 rounded-2xl p-6 text-black text-2xl font-normal font-['Inter'] flex flex-col space-y-2">
          <div>
            <label>
              NFT ID:
              <input
                type="text"
                name="nftID"
                value={formData.nftID}
                onChange={handleInputChange}
                className="w-full rounded p-2"
              />
            </label>
          </div>
          <div>
            <label>
              Buyer:
              <input
                type="text"
                name="buyer"
                value={formData.buyer}
                onChange={handleInputChange}
                className="w-full rounded p-2"
              />
            </label>
          </div>
          <div>
            <label>
              Purchase Price:
              <input
                type="text"
                name="purchasePrice"
                value={formData.purchasePrice}
                onChange={handleInputChange}
                className="w-full rounded p-2"
              />
            </label>
          </div>
          <div>
            <label>
              Escrow Amount:
              <input
                type="text"
                name="escrowAmount"
                value={formData.escrowAmount}
                onChange={handleInputChange}
                className="w-full rounded p-2"
              />
            </label>
          </div>
          <button type="submit" className="mt-8 w-full bg-gradient-to-b from-lime-400 to-lime-600 p-4 rounded-full text-white text-2xl font-bold">
            Submit Transaction
          </button>
        </form>
      </center>
    </div>
  );
};

export default Transaction;
