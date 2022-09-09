const hre = require('hardhat')

async function main() {
  const [account] = await hre.ethers.getSigners()
  console.log(`Deployer account: ${account.address}`)

  let WETH_ADDRESS = ''
  const FACTORY_ADDRESS = ''

  if (hre.network.name === 'mainnet') {
    WETH_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
  } else {
    const Weth = await hre.ethers.getContractFactory('WETH')
    const weth = await Weth.deploy()
    WETH_ADDRESS = weth.address
  }

  const Router = await hre.ethers.getContractFactory('UniswapV2Router02')
  const router = await Router.deploy(FACTORY_ADDRESS, WETH_ADDRESS)

  await router.deployed()

  console.log('Router deployed to: ', router.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
