const jswallet = require("ethereumjs-wallet");

const a = async (password, privKey) => {
  const buffer = Buffer.from(privKey, "hex");
  const wallet = jswallet.default.fromPrivateKey(buffer);
  const returnValue = await wallet.toV3(password);
  return returnValue;
};

module.exports = {
  a,
};
