const sdk = require("@defillama/sdk");
const { getBlock } = require("../helper/getBlock");
const owner = "0x59AE8c783eBCe3CC68ccE32C427128101fa4C405";
const target = "0x021988d2c89b1A9Ff56641b2F247942358FF05c9";

async function staking(timestamp, block, chainBlocks) {
  block = await getBlock(timestamp, "bsc", chainBlocks);
  return {
    [`bsc:${target}`]: (
      await sdk.api.erc20.balanceOf({
        target,
        owner,
        block,
        chain: "bsc",
      })
    ).output,
  };
}

module.exports = {
    bsc: {
        tvl: () => ({}),
        staking,
      },
    methodology: "We count all RING deposited into wRING contract, which has been locked by users",
};
