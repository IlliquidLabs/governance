const { ethers } = require('hardhat');

const { HONEY_ADDRESS, MASTERCHEF } = require("./mainnet-constants");

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const initBalance = await deployer.getBalance();
    console.log("Account balance:", initBalance.toString());

    const honey = ethers.utils.getAddress(HONEY_ADDRESS);
    const masterchef = ethers.utils.getAddress(MASTERCHEF);

    // Deploy HoneyVoteCalculator
    const HoneyVoteCalculator = await ethers.getContractFactory("HoneyVoteCalculator");
    const honeyVoteCalculator = await HoneyVoteCalculator.deploy(
      honey,
      masterchef,
    );
    await honeyVoteCalculator.deployed();

    console.log("HoneyVoteCalculator address: ", honeyVoteCalculator.address);

    const endBalance = await deployer.getBalance();
    console.log("Deploy cost: ", initBalance.sub(endBalance).toString());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
