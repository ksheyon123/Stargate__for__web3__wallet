import IconService from "icon-sdk-js";

let JSON_RPC = "https://ctz.dev.havah.io/v3/api";
const networkId = 257;
const provider = new IconService.HttpProvider(JSON_RPC);

const iconService = new IconService(provider);
const { IconBuilder, IconConverter, IconWallet } = IconService;
const { IcxTransactionBuilder } = IconBuilder;

const createWallet = () => {
  const wallet = IconWallet.create();
  const privKey = wallet.getPrivateKey();
  const address = wallet.getAddress();
  return {
    privKey,
    address,
  };
};

const setNetwork = () => {};

const loadKeyfile = () => {};

export { createWallet };
