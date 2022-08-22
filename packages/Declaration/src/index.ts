/// <reference lib="dom" />
import handler from "pkg";
handler()

window.useTracker
export namespace RealCurrency {
    export class WeChatPaySDK {}

    export class ALiPaySDK {}

    export class MeiTuanPaySDK {}

    export class CreditCardPaySDK {}
}

export namespace VirtualCurrency {
    export class QQCoinPaySDK {
        public name: string;
        constructor() {
            this.name = "test"
        }
    }

    export class BitCoinPaySDK {}

    export class ETHPaySDK {}
}

var a = new VirtualCurrency.QQCoinPaySDK()
console.log(a.name)