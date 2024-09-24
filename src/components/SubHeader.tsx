import Image from "next/image";
import React from "react";

const SubHeader = () => {
  return (
    <div className="mt-16 bg-white  shadow py-20">
      <div className="width-screen flex items-center gap-8">
        <Image src="/1212.jpg" alt="logo" height={160} width={160} />
        <div className="space-y-6">
          <p className="text-3xl">Welcome to MOREPad Dev Forum!</p>
          <p className="text-3xl">
            Share your questions and insights
            <br /> about building with MOREPad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
