yarn run v1.22.21
$ ts-node how_tos/account_output/destroy.ts
Error:  client: `node error: Response error with status code 500: {"error":{"code":"500","message":"Internal Server Error, error: failed to get block metadata 0x48fcb6c58f94b13ec39d237bed8cba0c70e3528df5777e2f873783b5f228bb2f24bc0100: block 0x48fcb6c58f94b13ec39d237bed8cba0c70e3528df5777e2f873783b5f228bb2f24bc0100 not found: code=500, message=Internal Server Error"}}
, URL: https://api.iota2-alphanet.iotaledger.net/api/core/v3/blocks/0x48fcb6c58f94b13ec39d237bed8cba0c70e3528df5777e2f873783b5f228bb2f24bc0100/metadata`
    at errorHandle (/home/lucas/Documents/IOTA/iota-sdk/bindings/nodejs/lib/index.ts:146:32)
    at /home/lucas/Documents/IOTA/iota-sdk/bindings/nodejs/lib/wallet/wallet-method-handler.ts:65:30
    at async Wallet.sync (/home/lucas/Documents/IOTA/iota-sdk/bindings/nodejs/lib/wallet/wallet.ts:1807:26)
    at async run (/home/lucas/Documents/IOTA/iota-sdk/bindings/nodejs/examples/how_tos/account_output/destroy.ts:32:23) {
  cause: undefined
}
Done in 4.56s.
