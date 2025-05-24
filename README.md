# 🌍 Landsol - Decentralized Real Estate NFT Platform

## 🚀 Overview

Landsol is a blockchain-powered decentralized application (DApp) that revolutionizes real estate transactions in India by leveraging **ERC-721 NFTs** for property ownership and **IPFS (via Pinata)** for secure document storage. The platform ensures **transparent, fraud-proof, and tamper-resistant** land dealings using smart contracts on the Ethereum blockchain.

## 🏗 How It Works

1. **Admin Creates a Property Token:**  
   - Each property is minted as an **ERC-721 NFT**.
   - The NFT contains ownership details and legal documents stored on **IPFS**.
   
2. **Token Transfer to Buyer:**  
   - The admin transfers the **property NFT** to the buyer.  
   - The token can be resold to another buyer directly without middlemen.  

3. **Escrow-Free Transactions:**  
   - Smart contracts ensure transactions occur securely **without third-party involvement**.  
   - Ownership is verified **on-chain**, reducing fraud risk.  

---

## 🔥 Features

✅ **NFT-Based Land Ownership:** Each property is tokenized as a **unique ERC-721 NFT** ensuring **immutable** ownership records.  

✅ **IPFS-Based Document Storage:** Property documents, agreements, and metadata are securely stored on **IPFS via Pinata**.  

✅ **Smart Contract Transactions:** Automated, **secure transactions** using **escrow-free smart contracts**.  

✅ **KYC Verification:** Only **verified users** can list, buy, or transfer property.  

✅ **Fractional Ownership (Future Scope):** Enables **multiple users** to co-own properties via NFT fractions.  

✅ **Low Transaction Fees:** Future **Polygon integration** to minimize gas fees.  

---

## 🛠 Tech Stack

| **Technology**  | **Usage**  |
|-----------------|-----------|
| **Solidity**  | Smart Contracts  |
| **Ethereum**  | Blockchain Network  |
| **ERC-721**  | NFT Standard for Tokenized Properties  |
| **IPFS (Pinata API)**  | Decentralized File Storage  |
| **React.js, Next.js**  | Frontend Development  |
| **Node.js, Express.js**  | Backend Services  |
| **MongoDB**  | Database for User & Property Metadata  |
| **Web3.js & MetaMask**  | Blockchain Authentication  |

---

## 🔄 Smart Contract Implementation

### ERC-721 NFT Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LandsolNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;

    constructor() ERC721("LandsolProperty", "LAND") {}

    function mintPropertyNFT(address to, string memory tokenURI) public onlyOwner returns (uint256) {
        uint256 tokenId = _tokenIdCounter++;
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        return tokenId;
    }
}
```

---

## 📂 IPFS Storage with Pinata

To securely store property documents and metadata:  

### **1️⃣ Upload JSON Metadata to Pinata**
```bash
curl -X POST https://api.pinata.cloud/pinning/pinJSONToIPFS \
    -H "Authorization: Bearer YOUR_PINATA_JWT" \
    -H "Content-Type: application/json" \
    --data '{ "name": "Property1", "description": "Land in Mumbai", "image": "https://ipfs.io/ipfs/{CID}" }'
```
### **2️⃣ Store IPFS CID in NFT Metadata**

---

## 🏗 Deployment Steps

### 🔹 **1. Clone the Repository**
```bash
git clone https://github.com/your-repo/Landsol.git
cd Landsol
```

### 🔹 **2. Install Dependencies**
```bash
npm install
```

### 🔹 **3. Run Tests**
```bash
npx hardhat test
```

### 🔹 **4. Start Hardhat Local Blockchain**
```bash
npx hardhat node
```

### 🔹 **5. Deploy Smart Contract**
```bash
npx hardhat run ./scripts/deploy.js --network localhost
```

### 🔹 **6. Start the Frontend**
```bash
npm run start
```
➡ Open **http://localhost:3000** in your browser to interact with the DApp.

---

## 🔗 MetaMask Installation

### **Step 1:** Install MetaMask Extension  
🔗 **[Download MetaMask](https://metamask.io/download/)**  

### **Step 2:** Connect to Landsol  
1️⃣ Open MetaMask.  
2️⃣ Select **Ethereum Mainnet** or **Localhost:8545** (for testing).  
3️⃣ Import your test account using **Hardhat’s generated private key**.  

---

## 📅 Roadmap

✔ **Polygon Integration** – Reduce gas fees.  
✔ **Aadhaar-Based KYC** – Enhance identity verification.  
✔ **Fiat Payment Support** – Enable INR transactions.  
✔ **AI-based Property Valuation** – Predict prices based on location & market trends.  

---

Screenshots :
![Screenshot 2025-02-16 115148](https://github.com/user-attachments/assets/365297c1-b146-4f98-bd4b-857b8f54039c)
![Screenshot 2025-02-16 114908](https://github.com/user-attachments/assets/9fd006dc-361a-405b-8ec7-6267e6f09d64)
![Screenshot 2025-02-16 114925](https://github.com/user-attachments/assets/866f7492-049c-4c93-b793-ab7273cc4ae0)
![Screenshot 2025-02-16 115654](https://github.com/user-attachments/assets/39d9aac9-af8c-4ee3-a59c-f6da47b60e15)
![Screenshot 2025-02-16 115710](https://github.com/user-attachments/assets/1409c5a8-4a58-41db-994b-233e4a5a5c8a)



## 📜 License

This project is licensed under the **MIT License**.

---
```


