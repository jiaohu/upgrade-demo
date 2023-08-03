const { ethers, upgrades } = require("hardhat");

async function main() {
    const Box = await ethers.getContractFactory("Box");
    console.log("Deploying Box...");
    const deployOptions = {
        gasLimit: 5000000, // 设置部署交易的 gas 上限
      };
    const box = await upgrades.deployProxy(Box, [42], deployOptions);
    await box.deployed();
    console.log("Box deployed to:", box.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});