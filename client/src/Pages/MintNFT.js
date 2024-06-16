import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import realEstateABI from '../abis/RealEstate.json';
import escrowABI from '../abis/Escrow.json';

const MintNFT = () => {
  const [tokenURI, setTokenURI] = useState('');
  const [transactionInProgress, setTransactionInProgress] = useState(false);
  const [transactionHash, setTransactionHash] = useState('');
  const [error, setError] = useState('');
  const [connected, setConnected] = useState(false);

  const [realEstateContractAddress, setRealEstateContractAddress] = useState('');
  const [escrowContractAddress, setEscrowContractAddress] = useState('');

  useEffect(() => {
    // Fetch the contract addresses from the deployedContracts.json file
    fetch('./deployedContracts.json')
      .then(response => response.json())
      .then(data => {
        setRealEstateContractAddress(data.realEstate);
        setEscrowContractAddress(data.escrow);
        console.log(realEstateContractAddress);
      })
      .catch(error => {
        console.error('Error fetching contract addresses:', error);
        setError('Error fetching contract addresses. Please try again.');
      });
  }, []);

  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setConnected(true);
      } else {
        throw new Error('MetaMask not installed');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
      setError('Error connecting to MetaMask. Please try again.');
    }
  };

  const mintAndListNFT = async () => {
    setError('');
    setTransactionInProgress(true);

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const realEstateContract = new ethers.Contract(realEstateContractAddress, realEstateABI, signer);
      const escrowContract = new ethers.Contract(escrowContractAddress, escrowABI, signer);

      const mintTransaction = await realEstateContract.mint(tokenURI);
      setTransactionHash(mintTransaction.hash);

      const receipt = await mintTransaction.wait();
      const nftID = receipt.events[0].args[2].toNumber(); // Assuming the mint event returns the NFT ID

      const buyerAddress = '0xBuyerAddress'; // Replace with actual buyer address
      const purchasePrice = ethers.utils.parseEther('1'); // Replace with actual purchase price
      const escrowAmount = ethers.utils.parseEther('0.1'); // Replace with actual escrow amount

      const listTransaction = await escrowContract.list(nftID, buyerAddress, purchasePrice, escrowAmount, {
        value: escrowAmount, // If the function is payable
      });
      await listTransaction.wait();

      setTokenURI('');
      setTransactionInProgress(false);
      alert('NFT Minted and Listed in Escrow Successfully!');
    } catch (error) {
      console.error('Error minting and listing NFT:', error);
      setError('Error minting and listing NFT. Please try again.');
      setTransactionInProgress(false);
    }
  };

  return (
    <div className="mt-20 px-4">
      <center>
        <div className="text-4xl font-normal font-['Times New Roman'] text-black mb-8">
          Mint and List New NFT
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mintAndListNFT();
          }}
          className="w-full lg:w-1/2 bg-lime-200 rounded-2xl p-6 text-black text-2xl font-normal font-['Inter'] flex flex-col space-y-2"
        >
          <div>
            <label>
              Token URI:
              <input
                type="text"
                name="tokenURI"
                value={tokenURI}
                onChange={(e) => setTokenURI(e.target.value)}
                className="w-full rounded p-2"
                required
              />
            </label>
          </div>
          <button type="submit" className="mt-8 w-full bg-gradient-to-b from-lime-400 to-lime-600 p-4 rounded-full text-white text-2xl font-bold">
            {transactionInProgress ? 'Processing...' : 'Mint and List NFT'}
          </button>
          {error && <p className="text-red-600 mt-4">{error}</p>}
          {transactionHash && (
            <p className="text-green-600 mt-4">
              Transaction hash: {transactionHash}
            </p>
          )}
        </form>
        {!connected && (
          <button onClick={connectToMetaMask} className="mt-8 w-full bg-gradient-to-b from-lime-400 to-lime-600 p-4 rounded-full text-white text-2xl font-bold">
            Connect to MetaMask
          </button>
        )}
      </center>
    </div>
  );
};

export default MintNFT;
