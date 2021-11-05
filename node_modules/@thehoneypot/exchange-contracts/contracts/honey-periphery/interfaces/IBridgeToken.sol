pragma solidity >=0.5.0;

import "../../honey-core/interfaces/IHoneyERC20.sol";

interface IBridgeToken is IHoneyERC20 {
    function swap(address token, uint256 amount) external;
    function swapSupply(address token) external view returns (uint256);
}