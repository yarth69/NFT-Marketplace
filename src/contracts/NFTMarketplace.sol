pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./PushProtocol.sol";

contract NFTMarketplace {
    address payable public owner;

    IERC721 public nftContract;
    PushProtocol public pushProtocol;

    struct Listing {
        uint256 tokenId;
        address owner;
        uint256 price;
    }

    Listing[] public listings;

    event NewListing(uint256 indexed tokenId, address indexed owner, uint256 price);
    event RemoveListing(uint256 indexed tokenId, address indexed owner);
    event Buy(uint256 indexed tokenId, address indexed owner, address indexed buyer, uint256 price);

    constructor(address _nftContractAddress, address _pushProtocolAddress) {
        owner = payable(msg.sender);
        nftContract = IERC721(_nftContractAddress);
        pushProtocol = PushProtocol(_pushProtocolAddress);
    }

    function list(uint256 tokenId, uint256 price) public {
        require(nftContract.ownerOf(tokenId) == msg.sender, "Only NFT owner can list");

        Listing memory listing = Listing(tokenId, msg.sender, price);
        listings.push(listing);

        emit NewListing(tokenId, msg.sender, price);
    }

    function remove(uint256 tokenId) public {
        for (uint256 i = 0; i < listings.length; i++) {
            if (listings[i].tokenId == tokenId && listings[i].owner == msg.sender) {
                delete listings[i];
                emit RemoveListing(tokenId, msg.sender);
                return;
            }
        }

        revert("Listing not found");
    }

    function buy(uint256 tokenId) public payable {
        uint256 price;
        address owner;
        address buyer = msg.sender;

        for (uint256 i = 0; i < listings.length; i++) {
            if (listings[i].tokenId == tokenId) {
                price = listings[i].price;
                owner = listings[i].owner;

                require(msg.value == price, "Price does not match");
                require(buyer != owner, "Cannot buy own listing");

                delete listings[i];
                nftContract.safeTransferFrom(owner, buyer, tokenId);

                emit Buy(tokenId, owner, buyer, price);
                pushProtocol.push(owner, "Your NFT has been sold");
                pushProtocol.push(buyer, "You have bought an NFT");
                return;
            }
        }

        revert("Listing not found");
    }
}
