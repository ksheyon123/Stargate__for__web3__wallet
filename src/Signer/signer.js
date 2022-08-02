const jswallet = require("ethereumjs-wallet");

const a = (password, privKey) => {
  const wallet = jswallet.fromPrivateKey(Buffer.from(privKey, "hex"));
  return wallet.toV3(password);
};

module.exports = {
  a,
};
