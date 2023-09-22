import { HardhatUserConfig } from "hardhat/config";
require("dotenv").config({ path: ".env" });
// require("@nomiclabs/hardhat-ethers");
// require("@nomiclabs/hardhat-etherscan");
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
    },
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      //@ts-ignore
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGON_API_KEY
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};

export default config;
