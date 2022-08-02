const jswallet = require("ethereumjs-wallet");
const fs = require("fs");

const toV3 = async (password, privKey) => {
  const buffer = Buffer.from(privKey, "hex");
  const wallet = jswallet.default.fromPrivateKey(buffer);
  const v3Keystore = await wallet.toV3(password);
  const filePath = `~/Library/Keystore/stargate_keystore.json`;
  fs.writeFileSync({ file: filePath, data: v3Keystore });
};

const fromV3 = async (password) => {
  const filePath = `~/Library/Keystore/stargate_keystore.json`;

  const json = fs.readFileSync(filePath);
  const wallet = jswallet.fromV3(json, password);
};

module.exports = {
  toV3,
};
