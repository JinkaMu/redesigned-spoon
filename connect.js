// Import web3 library

const Web3 = require('web3');

// Function to connect to an Ethereum network

async function connectToNetwork() {

  try {

    // Check if the browser has web3 injected

    if (typeof web3 !== 'undefined') {

      // Use the injected web3 instance

      web3 = new Web3(web3.currentProvider);

    } else {

      // Fallback to a local Ganache network

      web3 = new Web3('http://localhost:7545'); // Update with your local network URL

    }

    // Get the current network ID

    const networkId = await web3.eth.net.getId();

    console.log('Connected to network with ID:', networkId);

    // Get the selected account

    const accounts = await web3.eth.getAccounts();

    const selectedAccount = accounts[0];

    console.log('Selected account:', selectedAccount);

    // Retrieve the balance of the selected account

    const balance = await web3.eth.getBalance(selectedAccount);

    console.log('Account balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');

  } catch (error) {

    console.error('Error connecting to network:', error);

  }

}

// Call the connectToNetwork function

connectToNetwork();

