// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "hardhat/console.sol";

contract Box is Initializable {
    uint256 private _value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 value);

    // Stores a new value in the contract
    function initialize(uint256 value) public initializer {
        console.log("value",  value);
        _value = value;
        emit ValueChanged(value);
    }    

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }
}