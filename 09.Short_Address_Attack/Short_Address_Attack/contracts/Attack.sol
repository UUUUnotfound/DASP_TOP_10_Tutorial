pragma solidity ^0.4.11;


contract Attack {

  mapping(address => uint256) balances;

  event Transfer(address,address,uint256,bytes);
  
  function Attack() payable {
      msg.value;
  }
  
  function () payable {
      msg.value;
  }
  
  function transfer(address _to,uint _value) {
    _to.send(_value);
    Transfer(msg.sender,_to,_value,msg.data);
  }


  function balanceOf(address _owner) constant returns (uint256 balance) {
    return balances[_owner];
  }

}
