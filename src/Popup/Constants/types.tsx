
export type StorageType = {
  key: string;
  data: string;
}

export type ErrorFormat = {
  errCode: number | string;
  errMsg: string;
}

export type ComboBoxItemType = {
  name: string | number;
  value: any;
}

export type ClassBinderType = {
  prefix: string;
  suffix: string;
  cond: any;
}