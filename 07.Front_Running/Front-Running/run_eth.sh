geth init genesis.json --datadir ./chain
geth   --identity "self_chain"   --rpcaddr 0.0.0.0   --rpc   --rpcport 8545   --maxpeers 10   --rpcapi "txpool, debug, rpc, personal, admin, eth, miner, net, web3"   --networkid 100   --datadir "./chain"   --nodiscover --keystore ./keystore
