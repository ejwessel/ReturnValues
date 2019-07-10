pragma solidity ^0.5.0;

contract StatefulContract {
  uint256 public data;

  /**
  * setData will set the uint data to a new value
  */
  function setData(uint256 newData) external {
      data = newData;
  }

  /**
  * Takes the current data value, adds 1 and returns it
  */
  function getDataPlus1() external view returns (uint) {
      return data + 1;
  }

  /**
  * Modifies state and returns the current data value
  */
  function modifyStateAndReturnNewVal(uint256 newData) external returns (uint) {
      data = newData;
      return data;
  }
}
