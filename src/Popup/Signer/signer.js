import jswallet from "ethereumjs-wallet";

const toV3 = async (password, privKey) => {
  const buffer = Buffer.from(privKey, "hex");
  const wallet = jswallet.fromPrivateKey(buffer);
  const v3Keystore = await wallet.toV3(password);
  return v3Keystore;
};

const fromV3 = async (password, keystore) => {
  console.log(keystore);
  const wallet = await jswallet.fromV3(keystore, password, true);
  console.log(wallet.getPrivateKey().toString("hex"));
  return wallet;
};

export { toV3, fromV3 };
