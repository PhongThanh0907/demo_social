"use client";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { linea } from "wagmi/chains";

import { linea as LineaChain } from "viem/chains";

const projectId = "f534414fcc61c0b1dd52591d244181f0";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const config = defaultWagmiConfig({
  chains: [linea] as const,
  projectId,
  metadata,
  enableWalletConnect: true,
  enableEIP6963: true,
  enableCoinbase: true,
  //   enableEmail: true,
});

// 3. Create modal
createWeb3Modal({
  defaultChain: LineaChain,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
}
