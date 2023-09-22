import { ethers } from "hardhat";

async function main() {

  //Aya Token Deployment
  const Ayatoken = await ethers.deployContract("Ayatoken");
  await Ayatoken.waitForDeployment();
  console.log(`Ayatoken  deployed to ${Ayatoken.target}`);

  //Aya NFT Deployment
  const AyaNFT = await ethers.deployContract("AyaNFT");
  await AyaNFT.waitForDeployment();
  console.log(`AyaNFT  deployed to ${AyaNFT.target}`);

  //Aya Membership Token Deployment
  const ayaMembershipToken = await ethers.deployContract("AyaMembershipToken");
  await ayaMembershipToken.waitForDeployment();
  console.log(`ayaMembershipToken  deployed to ${ayaMembershipToken.target}`);

//DEPLOY AyaCommunity
  const AyaCommunity = await ethers.deployContract("AyaCommunity", [ayaMembershipToken.target, AyaNFT.target, 100, Ayatoken.target]);
  await AyaCommunity.waitForDeployment();
  console.log(`AyaCommunity deployed to ${AyaCommunity.target}`);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
