const { ethers, upgrades, network } = require("hardhat");
const { writeFile } = require('fs');

async function main() {
    const Box = await ethers.getContractFactory("Box");
    console.log("Deploying Box...");
    const deployOptions = {
        gasLimit: 5000000, // 设置部署交易的 gas 上限
    };

    const box = await upgrades.deployProxy(Box, [42], deployOptions);
    await box.deployed();
    addresses = {Box: box.address}
    console.log("Box deployed to:", box.address);
    const filename = `./public/${network.name}.json`;
    writeFile(
        filename,
        JSON.stringify(addresses, null, 2),
        function (err) {
            if (err) {
                console.log(err);
            }
        });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});