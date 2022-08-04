const jswallet = require("ethereumjs-wallet");

const toV3 = async (password, privKey) => {
  const buffer = Buffer.from(privKey, "hex");
  const wallet = jswallet.default.fromPrivateKey(buffer);
  const v3Keystore = await wallet.toV3(password);
};

const fromV3 = async (password) => {};

module.exports = {
  toV3,
};
