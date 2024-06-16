require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
const { PRIVATE_KEY1, PRIVATE_KEY2, PRIVATE_KEY3, PRIVATE_KEY4 } = process.env;

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
      accounts: [
        { privateKey: PRIVATE_KEY1, balance: "10000000000000000000000" },
        { privateKey: PRIVATE_KEY2, balance: "10000000000000000000000" },
        { privateKey: PRIVATE_KEY3, balance: "10000000000000000000000" },
        { privateKey: PRIVATE_KEY4, balance: "10000000000000000000000" },
      ],
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 1337,
      accounts: [
        PRIVATE_KEY1,
        PRIVATE_KEY2,
        PRIVATE_KEY3,
        PRIVATE_KEY4,
      ],
    },
  },
};
