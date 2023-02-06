/* eslint-disable camelcase */
// This blob below is pasted from the output of `fetchAllDataProviderData` in the aztec-dev-cli.

export interface RegistrationsDataRaw {
  [deployTag: string]: {
    assets: {
      [assetName: string]: string;
    };
    bridges: { [bridgeName: string]: number };
    assetList: string[];
  };
}

export const registrationsDataRaw: RegistrationsDataRaw = {
  'aztec-connect-dev': {
    assetList: [
      'Eth',
      'DAI',
      'wstETH',
      'yvDAI',
      'yvWETH',
      'weWETH',
      'wewstETH',
      'weDAI',
      'wa2DAI',
      'wa2WETH',
      'LUSD',
      'TB-275',
      'TB-400',
      'wcDAI',
      'icETH',
      'yvLUSD',
    ],
    assets: {
      Eth: '0x0000000000000000000000000000000000000000',
      DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      wstETH: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
      yvDAI: '0xdA816459F1AB5631232FE5e97a05BBBb94970c95',
      yvWETH: '0xa258C4606Ca8206D8aA700cE2143D7db854D168c',
      weWETH: '0x3c66B18F67CA6C1A71F829E2F6a0c987f97462d0',
      wewstETH: '0x60897720AA966452e8706e74296B018990aEc527',
      weDAI: '0x4169Df1B7820702f566cc10938DA51F6F597d264',
      wa2DAI: '0xbcb91e0B4Ad56b0d41e0C168E3090361c0039abC',
      wa2WETH: '0xc21F107933612eCF5677894d45fc060767479A9b',
      LUSD: '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
      'TB-275': '0xB85CA1989aEE109B65443f8dB8438029B352EFA1',
      'TB-400': '0x11956f5416C0019cAAd81205543bA68278e30869',
      wcDAI: '0x6D088fe2500Da41D7fA7ab39c76a506D7c91f53b',
      icETH: '0x7C07F7aBe10CE8e33DC6C5aD68FE033085256A84',
      yvLUSD: '0x378cb52b00F9D0921cb46dFc099CFf73b42419dC',
    },
    bridges: {
      ElementBridge_800K: 1,
      CurveStEthBridge_250K: 2,
      YearnBridgeDeposit_200K: 3,
      YearnBridgeWithdraw_800K: 4,
      ElementBridge_2M: 5,
      ERC4626_300K: 6,
      DCA_400K: 7,
      ERC4626_500K: 8,
      ERC4626_400K: 9,
      Liquity275_700K: 10,
      Liquity400_700K: 11,
      Uniswap_500K: 12,
      Uniswap_800K: 13,
    },
  },
  'aztec-connect-testnet': {
    assetList: [
      'Eth',
      'DAI',
      'wstETH',
      'yvDAI',
      'yvWETH',
      'weWETH',
      'wewstETH',
      'weDAI',
      'wa2DAI',
      'wa2WETH',
      'LUSD',
      'TB-275',
      'TB-400',
      'wcDAI',
      'icETH',
      'yvLUSD',
    ],
    assets: {
      Eth: '0x0000000000000000000000000000000000000000',
      DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      wstETH: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
      yvDAI: '0xdA816459F1AB5631232FE5e97a05BBBb94970c95',
      yvWETH: '0xa258C4606Ca8206D8aA700cE2143D7db854D168c',
      weWETH: '0x3c66B18F67CA6C1A71F829E2F6a0c987f97462d0',
      wewstETH: '0x60897720AA966452e8706e74296B018990aEc527',
      weDAI: '0x4169Df1B7820702f566cc10938DA51F6F597d264',
      wa2DAI: '0xbcb91e0B4Ad56b0d41e0C168E3090361c0039abC',
      wa2WETH: '0xc21F107933612eCF5677894d45fc060767479A9b',
      LUSD: '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
      'TB-275': '0xF1eC92BbD0442B3fE87FC43a5171642Ad9b471b5',
      'TB-400': '0xe2F1361271d0fCb77bb652FA382D441efD64f1f3',
      wcDAI: '0x6D088fe2500Da41D7fA7ab39c76a506D7c91f53b',
      icETH: '0x7C07F7aBe10CE8e33DC6C5aD68FE033085256A84',
      yvLUSD: '0x378cb52b00F9D0921cb46dFc099CFf73b42419dC',
    },
    bridges: {
      ElementBridge_800K: 1,
      CurveStEthBridge_250K: 2,
      YearnBridgeDeposit_200K: 3,
      YearnBridgeWithdraw_800K: 4,
      ElementBridge_2M: 5,
      ERC4626_300K: 6,
      DCA_400K: 7,
      ERC4626_500K: 8,
      ERC4626_400K: 9,
      Liquity275_700K: 10,
      Liquity400_700K: 11,
      Uniswap_500K: 12,
      Uniswap_800K: 13,
    },
  },
  'aztec-connect-stage': {
    assetList: [
      'Eth',
      'DAI',
      'wstETH',
      'yvDAI',
      'yvWETH',
      'weWETH',
      'wewstETH',
      'weDAI',
      'wa2DAI',
      'wa2WETH',
      'LUSD',
      'TB-275',
      'TB-400',
      'wcDAI',
      'icETH',
      'yvLUSD',
    ],
    assets: {
      Eth: '0x0000000000000000000000000000000000000000',
      DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      wstETH: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
      yvDAI: '0xdA816459F1AB5631232FE5e97a05BBBb94970c95',
      yvWETH: '0xa258C4606Ca8206D8aA700cE2143D7db854D168c',
      weWETH: '0x3c66B18F67CA6C1A71F829E2F6a0c987f97462d0',
      wewstETH: '0x60897720AA966452e8706e74296B018990aEc527',
      weDAI: '0x4169Df1B7820702f566cc10938DA51F6F597d264',
      wa2DAI: '0xbcb91e0B4Ad56b0d41e0C168E3090361c0039abC',
      wa2WETH: '0xc21F107933612eCF5677894d45fc060767479A9b',
      LUSD: '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
      'TB-275': '0x99f21f31afb6a62093d266EdC3c7DB7A98f8aA72',
      'TB-400': '0xafF4ABb30ccD5929d0FE79C9d80a519fe4956e28',
      wcDAI: '0x6D088fe2500Da41D7fA7ab39c76a506D7c91f53b',
      icETH: '0x7C07F7aBe10CE8e33DC6C5aD68FE033085256A84',
      yvLUSD: '0x378cb52b00F9D0921cb46dFc099CFf73b42419dC',
    },
    bridges: {
      ElementBridge_800K: 1,
      CurveStEthBridge_250K: 2,
      YearnBridgeDeposit_200K: 3,
      YearnBridgeWithdraw_800K: 4,
      ElementBridge_2M: 5,
      ERC4626_300K: 6,
      DCA_400K: 7,
      ERC4626_500K: 8,
      ERC4626_400K: 9,
      Liquity275_700K: 10,
      Liquity400_700K: 11,
      Uniswap_500K: 12,
      Uniswap_800K: 13,
    },
  },
  'aztec-connect-prod': {
    assetList: [
      'Eth',
      'DAI',
      'wstETH',
      'yvDAI',
      'yvWETH',
      'weWETH',
      'wewstETH',
      'weDAI',
      'wa2DAI',
      'wa2WETH',
      'LUSD',
      'TB-275',
      'TB-400',
      'wcDAI',
      'icETH',
      'yvLUSD',
    ],
    assets: {
      Eth: '0x0000000000000000000000000000000000000000',
      DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      wstETH: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
      yvDAI: '0xdA816459F1AB5631232FE5e97a05BBBb94970c95',
      yvWETH: '0xa258C4606Ca8206D8aA700cE2143D7db854D168c',
      weWETH: '0x3c66B18F67CA6C1A71F829E2F6a0c987f97462d0',
      wewstETH: '0x60897720AA966452e8706e74296B018990aEc527',
      weDAI: '0x4169Df1B7820702f566cc10938DA51F6F597d264',
      wa2DAI: '0xbcb91e0B4Ad56b0d41e0C168E3090361c0039abC',
      wa2WETH: '0xc21F107933612eCF5677894d45fc060767479A9b',
      LUSD: '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
      'TB-275': '0x998650bf01A6424F9B11debd85a29090906cB559',
      'TB-400': '0x646Df2Dc98741a0Ab5798DeAC6Fc62411dA41D96',
      wcDAI: '0x6D088fe2500Da41D7fA7ab39c76a506D7c91f53b',
      icETH: '0x7C07F7aBe10CE8e33DC6C5aD68FE033085256A84',
      yvLUSD: '0x378cb52b00F9D0921cb46dFc099CFf73b42419dC',
    },
    bridges: {
      ElementBridge_800K: 1,
      CurveStEthBridge_250K: 6,
      YearnBridgeDeposit_200K: 7,
      YearnBridgeWithdraw_800K: 8,
      ElementBridge_2M: 9,
      ERC4626_300K: 10,
      DCA_400K: 11,
      ERC4626_500K: 12,
      ERC4626_400K: 13,
      Liquity275_700K: 14,
      Liquity400_700K: 15,
      Uniswap_500K: 16,
      Uniswap_800K: 17,
    },
  },
};
