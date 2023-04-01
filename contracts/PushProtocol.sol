pragma solidity ^0.8.0;

contract PushProtocol {
    mapping(address => address) public recipientToSender;

    event Push(address indexed sender, address indexed recipient, string message);

    function push(address recipient, string memory message) public {
        address sender = msg.sender;
        recipientToSender[recipient] = sender;
        emit Push(sender, recipient, message);
    }

    function getSender(address recipient) public view returns (address) {
        return recipientToSender[recipient];
    }
}
