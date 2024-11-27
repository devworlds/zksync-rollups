const { ethers } = require("hardhat");

async function main() {
  const [sender] = await ethers.getSigners();
  const contractAddress = "0x1aaB86B507011dD38F5d39aDeaDF4243986BE2F3"; // Endereço do contrato na zkSync L2
  const tokenAddress = "<TOKEN_ADDRESS>"; // Endereço do token ERC20
  const recipients = ["0x27a654b16830cC7f840aBdF97361E890cC1Ae505", "0x1DD1248B894a077e79fd48eE9Ddb83eb5A55668b", "0x76Cd8051b3B1293DA218E8EDec749B1813aDA1a2"];
  const amounts = [ethers.utils.parseUnits("1", 18), ethers.utils.parseUnits("2", 18), ethers.utils.parseUnits("3", 18)];

  const contract = await ethers.getContractAt("BatchTransfer", contractAddress);

  // Enviar transações separadas em um batch para a zkSync
  const tx = await contract.batchTransfer(recipients, amounts, tokenAddress);
  console.log("Transação enviada para L2:", tx.hash);

  // Esperar a confirmação da transação
  await tx.wait();
  console.log("Transação confirmada na zkSync L2!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
