// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract BatchTransfer {

    event TransferExecuted(address indexed from, address indexed to, uint256 amount);

    function batchTransfer(address[] calldata recipients, uint256[] calldata amounts, address token) external {
        require(recipients.length == amounts.length, "Arrays should be the same lengh");

        for (uint256 i = 0; i < recipients.length; i++) {
            address recipient = recipients[i];
            uint256 amount = amounts[i];

            require(IERC20(token).balanceOf(msg.sender) >= amount, "Insuficient balance");
            bool success = IERC20(token).transfer(recipient, amount);
            require(success, "Transfer failed");

            emit TransferExecuted(msg.sender, recipient, amount);
        }
    }
}
