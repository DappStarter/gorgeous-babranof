require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remain equip give narrow fortune ten'; 
let testAccounts = [
"0xaa6670559ac83f1d576bcc2b60414a60b44f6915669a23e7d7bec61b4afc579f",
"0xe06fd9986c6ca556f48341199e20c6a15fbbbecfb16c78c1b73a10d93c31b2a2",
"0xa84ebad483df2ad88cbca56f87adcf1da5d7980acf0b782c863f5ff018c8f38e",
"0x565d9becb4c79c0351f26a08ea333f6b2fa5530ddcfc6cb6973a5ac2e24fdf61",
"0xec7b2823f6c7d92e9eb4d93c2b2b9e3e1119e879fd0b0c6dde91fe1f2c364ea8",
"0x7546a92433bdf9c5b0f198bdf1479bf600f0dd625251983ca748193615c59c44",
"0x3c41c3327143eeb1807164319aaa50175fbd7af83e0a4e8c10006cba47014fe8",
"0x0aaed15c92e9794f8eff69e4247315b594eded4d0559b1ef5235e71dce76cdaa",
"0x175dde9e211abb1733f09e57d761528bb4141f6d02c8182826faef80f6996732",
"0xf8213c54a4fbf4f6c1553aa4cd1b3eaa76b7a0becad6a986266acacdab95ea1e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
