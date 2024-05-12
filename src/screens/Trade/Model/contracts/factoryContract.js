// Import necessary dependencies
import Web3 from 'web3';
import factoryABI from './abis/UniswapFactoryABI.json';

// This function initializes a web3 instance. Modify as necessary for your setup.
const getWeb3Instance = () => {
    // If Metamask (or other injected provider) is available and connected to Mumbai
    if (window.ethereum && window.ethereum.chainId === '0x13881') {
        return new Web3(window.ethereum);
    }

    // Fallback to a public Mumbai testnet provider (e.g., Infura, Alchemy)
    // Replace YOUR_MUMBAI_PROVIDER_URL with your provider URL
    return new Web3('https://rpc-mumbai.maticvigil.com');
};

// Uniswap Factory Contract Address (Change to the correct address)
const factoryAddress = '0x8EBD3C1257A23abed2365A1b162b13469082604D';

// Initialize web3
const web3 = getWeb3Instance();

// Create and export the Factory contract instance
const factoryContract = new web3.eth.Contract(factoryABI, factoryAddress);

// Function to get the Pair address
export const getPairAddress = async (tokenAAddress, tokenBAddress) => {
    try {
        return await factoryContract.methods.getPair(tokenAAddress, tokenBAddress).call();
    } catch (error) {
        console.error('Error fetching pair address:', error);
        throw error;
    }
};
