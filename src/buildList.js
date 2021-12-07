const { version } = require("../package.json");
const emerald_mainnet = require("./tokens/emerald-mainnet.json");
const emerald_testnet = require("./tokens/emerald-testnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "HybridX token List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://raw.githubusercontent.com/hybridx-exchange/default-token-list/hybridx-exchange-v1/logo/icon.png",
    keywords: ["hybridx", "default"],
    tokens: [...emerald_mainnet, ...emerald_testnet]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
