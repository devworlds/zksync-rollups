const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Deploy do contrato na zkSync
    const Contract = await ethers.getContractFactory("BatchTransfer");
    const contract = await Contract.deploy();
    await contract.waitForDeployment();
  
    console.log("Contract deployed to:", await contract.getAddress());
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  