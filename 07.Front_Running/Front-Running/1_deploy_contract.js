miner.start()
web3.eth.defaultAccount = web3.eth.accounts[0];
personal.unlockAccount(personal.listAccounts[0],"",99999)
personal.unlockAccount(personal.listAccounts[1],"",99999)

var frontrunningContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"Number","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"prime1","type":"uint256"},{"name":"prime2","type":"uint256"},{"name":"new_number","type":"uint256"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var frontrunning = frontrunningContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x608060405234801561001057600080fd5b5060008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550690489bc5fc031373979036001819055506101d4806100726000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063624de7251461005c5780638da5cb5b14610087578063c7e2b664146100de575b600080fd5b34801561006857600080fd5b5061007161011f565b6040518082815260200191505060405180910390f35b34801561009357600080fd5b5061009c610125565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100ea57600080fd5b5061011d60048036038101908080359060200190929190803590602001909291908035906020019092919050505061014a565b005b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b81830260015414151561015c57600080fd5b80600181905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505600a165627a7a72305820642f9f8e1e2c77d647d89b4000f5aa36119315c511293dbc56703369df66ed430029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
	//miner.stop();
    }
 })

