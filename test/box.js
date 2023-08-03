const {ethers} = require("hardhat");
const {expect} = require("chai");

const { attachContract } = require("../scripts/address_util.js");


describe("box", function () {
    it("demo", async () => {
        deployedBox = await attachContract("Box");
        console.log(deployedBox);
        // await deployedBox.increment();
        newBox = await ethers.getContractFactory("Box");
        instance = newBox.attach(deployedBox.address);
        const result = await instance.retrieve();
        console.log(result);
    });
})