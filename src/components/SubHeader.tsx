import Image from "next/image";
import React from "react";
import { useAccount } from "wagmi";

const SubHeader = () => {
  const { address } = useAccount();

  return (
    <div className=" border border-gray-100 shadow rounded-lg bg-white w-full h-20 flex items-center p-4 gap-2">
      {address ? (
        <>
          <Image
            className="rounded-full shadow-lg"
            src="/logo.jpg"
            width={50}
            height={50}
            alt="logo"
          />
          <span className="text-lg text-gray-500 pl-1">What&apos;s news</span>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SubHeader;
