import IconService from "icon-sdk-js";

const networkId = 257;
const provider = new IconService.HttpProvider(JSON_RPC.icon);

const iconService = new IconService(provider);
const { IconBuilder, IconConverter, IconWallet } = IconService;
const { IcxTransactionBuilder } = IconBuilder;

const createWallet = () => {
  const wallet = IconWallet.create();
  console.log(wallet);
  const privKey = wallet.getPrivateKey();
  const address = wallet.getAddress();
  return {
    privKey,
    address,
  };
};

const loadKeyfile = () => {};

export { createWallet };
