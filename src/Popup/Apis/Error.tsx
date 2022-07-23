import { ErrorFormat } from "src/Popup/Constants/types"

export class Errors {
  constructor(props: ErrorFormat) {
    this.errCode = props.errCode;
    this.errMsg = props.errMsg;
  }

  errCode: string | number;
  errMsg: string | number;

}

