pragma solidity ^0.5.16;

import "@thehoneypot/exchange-contracts/contracts/honey-core/HoneyFactory.sol";
import "@thehoneypot/exchange-contracts/contracts/honey-core/HoneyPair.sol";


contract HFactory is HoneyFactory {
    constructor(address _feeToSetter) public {
        feeToSetter = _feeToSetter;
    }
}