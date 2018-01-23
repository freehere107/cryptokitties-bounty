const SaleClockAuction = artifacts.require('Auction/SaleClockAuction')
const SiringClockAuction = artifacts.require('Auction/SiringClockAuction')
const Gene = artifacts.require('ExternalInterfaces/GeneScienceInterface')

const nft = '0xcda8e28937a94734cba72a11b614807b1cb3ad52'
module.exports = function (deployer) {
  deployer.deploy(SaleClockAuction, nft, 5) //0x4f72505751c4bdb06789ea3b0fee61e23df5ba85
  deployer.deploy(SiringClockAuction, nft, 5) //0xF343Ed4fD950942adF5Be3d1d9aCDCc748b780ed
  deployer.deploy(Gene)//0x3AB7a84A6830d1Ccd9030fAdd54f91aa8cd2267E
}
