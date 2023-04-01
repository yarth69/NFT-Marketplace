const NFT = artifacts.require("NFT");
const PushProtocol = artifacts.require("PushProtocol");

module.exports = async function (deployer) {
  await deployer.deploy(NFT, "My NFT", "MFT");
  await deployer.deploy(PushProtocol);
};
