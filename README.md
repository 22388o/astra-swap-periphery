# Astra Swap Periphery


# Local Development

The following assumes the use of `node@>=16`.

## Install Dependencies

`yarn`

## Add Environment Variables

`INFURA_KEY="YOUR_INFURA_KEY"`\
`PRIVATE_KEY="YOUR_PRIVATE_KEY"`

## Compile Contracts

`npx hardhat compile`

## Deploy Contract

Mainnet:  `npx hardhat run scripts/deploy.js --network mainnet`\
Ropsten:  `npx hardhat run scripts/deploy.js --network ropsten`\
Kovan:    `npx hardhat run scripts/deploy.js --network kovan`\
Rinkeby:  `npx hardhat run scripts/deploy.js --network rinkeby`\
Goerli:   `npx hardhat run scripts/deploy.js --network goerli`\
Polygon:  `npx hardhat run scripts/deploy.js --network polygon`\
Mumbai:   `npx hardhat run scripts/deploy.js --network mumbai`