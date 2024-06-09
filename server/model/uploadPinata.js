const axios = require('axios');
const FormData = require('form-data');

const uploadFileToIPFS = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    // Configure Pinata options and metadata
    const pinataBody = {
      options: {
        cidVersion: 1,
      },
      metadata: {
        name: file.name,
      }
    }
    formData.append('pinataOptions', JSON.stringify(pinataBody.options));
    formData.append('pinataMetadata', JSON.stringify(pinataBody.metadata));

    // Send a POST request to Pinata API for uploading to IPFS
    const response = await axios({
      method: 'post',
      url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        'pinata_api_key': '92923a929361fb015de1', // Replace with your Pinata API key
        'pinata_secret_api_key': '79ce2981c019140dee66694f0e168e6fe0f4662beb99e96d73b46522668901d4', // Replace with your Pinata secret API key
      }
    });

    // Check if request to Pinata API was successful
    if (!response.data.IpfsHash) {
      throw new Error('Failed to upload file to Pinata');
    }

    // Return the IPFS hash
    return response.data.IpfsHash;
  } catch (error) {
    throw new Error(`Error uploading file to Pinata: ${error.message}`);
  }
};

module.exports = uploadFileToIPFS;
