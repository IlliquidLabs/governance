# Honey Smart Contracts
This repo contains all of the smart contracts used to run [Honey](swap.thehoneypot.finance).

## Deployed Contracts - Rinkeby
Factory address: `0x3dff8e56a8dB53ab1ba61895458De3a080891A24`

Router address: `0x807d8c441b3Bf5701637A398DF903D24C1705653`

## Deployed Contracts - Arbitrum
Factory address: `NotSet`

Router address: `NotSet`

## Running
These contracts are compiled and deployed using [Hardhat](https://hardhat.org/). They can also be run using the Remix IDE. 

To prepare the dev environment, run `yarn install`. To compile the contracts, run `yarn compile`. Yarn is available to install [here](https://classic.yarnpkg.com/en/docs/install/#debian-stable) if you need it.

## Accessing the ABI
If you need to use any of the contract ABIs, you can install this repo as an npm package with `npm install --dev @honeydex/exchange-contracts`. Then import the ABI like so: `import { abi as IHoneyPairABI } from '@honeydex/exchange-contracts/artifacts/contracts/honey-core/interfaces/IHoneyPair.sol/IHoneyPair.json'`.

## Attribution
These contracts were adapted from these Uniswap repos: [uniswap-v2-core](https://github.com/Uniswap/uniswap-v2-core), [uniswap-v2-periphery](https://github.com/Uniswap/uniswap-v2-core), and [uniswap-lib](https://github.com/Uniswap/uniswap-lib).
