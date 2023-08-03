const { ethers, upgrades } = require("hardhat");
const { attachContract } = require("./address_util.js");

async function main() {
    const box_new = await ethers.getContractFactory("Box");
    console.log("Upgrading Box...");
    const origin_address = await attachContract("Box");
    const box = await upgrades.upgradeProxy(origin_address, box_new);
    console.log("Box upgraded");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});