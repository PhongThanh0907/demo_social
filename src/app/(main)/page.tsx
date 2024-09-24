"use client";

import { LensProvider } from "@/providers/lens-provider";
import { Web3ModalProvider } from "@/providers/web3modal-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@/components/Layout";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <QueryClientProvider client={queryClient}>
        <Web3ModalProvider>
          <LensProvider>
            <Layout />
          </LensProvider>
        </Web3ModalProvider>
      </QueryClientProvider>
    </main>
  );
}
