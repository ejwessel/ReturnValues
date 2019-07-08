pragma solidity ^0.5.0;

contract StatefulContract {
  uint256 public uintData;

  /**
  * setUintData will set the uint data to a new value
  */
  function setUintData(uint256 newUintData) constant returns (bool){
      uintData = newUintData;
  }
}
