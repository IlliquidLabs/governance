const { ethers } = require('hardhat');
const { BigNumber } = require('ethers');
const {HONEY_ADDRESS, TIMELOCK_ADDRESS} = require('./mainnet-constants')

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:",deployer.address);

    const initBalance = await deployer.getBalance();
    console.log("Account balance:", initBalance.toString());

    // Deploy Governor
    const Governor = await ethers.getContractFactory("GovernorAlpha");
    const governor = await Governor.deploy(TIMELOCK_ADDRESS, HONEY_ADDRESS, deployer.address);
    await governor.deployed();

    console.log("GovernorAlpha address:    ", governor.address);
  
    const endBalance = await deployer.getBalance();
    console.log("Deploy cost: ", initBalance.sub(endBalance).toString())
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
