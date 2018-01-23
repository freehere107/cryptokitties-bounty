const KittyCoreRinkeby = artifacts.require('KittyCoreRinkeby')

module.exports = function(deployer) {
  deployer.deploy(KittyCoreRinkeby)
}
