import React from "react";
import { Search, Mail, Bell } from "lucide-react";
import Image from "next/image";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { disconnect } from "@wagmi/core";
import { wagmiConfig } from "@/providers/wagmiConfig";

const Header = () => {
  const { open } = useWeb3Modal();

  const { address } = useAccount();

  return (
    <header className="bg-white py-3 border-b border-gray-100 shadow fixed top-0 inset-x-0 z-50">
      <div className="width-screen flex-between">
        <div className="flex items-center gap-3">
          <Image src="/1212.jpg" alt="logo" height={40} width={40} />
          <div className="relative h-8">
            <Search className="text-gray-400 text-sm absolute top-1/2 left-2 transform -translate-y-1/2" />
            <input
              className="focus:outline-none border border-gray-400 rounded-lg h-full pl-10 w-64"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="text-black h-6 w-6" />
          <Bell className="text-black h-6 w-6" />
          {address && (
            <Image
              className="rounded-full shadow-lg"
              src="/logo.jpg"
              width={32}
              height={32}
              alt="logo"
            />
          )}

          {!address && (
            <button
              onClick={() => open()}
              className="bg-[#00cfff] text-white px-4 py-2 rounded-xl"
            >
              Connect Wallet
              {/* <ChevronRight className="h-4 w-4" /> */}
            </button>
          )}
          {address && (
            <button
              onClick={() => disconnect(wagmiConfig)}
              className="bg-[#00cfff] text-white px-4 py-2 rounded-xl"
            >
              Disconnect
              {/* <ChevronRight className="h-4 w-4" /> */}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
