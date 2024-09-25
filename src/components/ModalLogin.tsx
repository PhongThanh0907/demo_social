"use client";

import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ArrowRight, CircleDollarSign, KeyRound, Smile } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  useProfilesManaged,
  useResolveAddress,
} from "@lens-protocol/react-web";

const ModalLogin = () => {
  const { address } = useAccount();
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenSign, setIsOpenSign] = useState(false);
  const { loading } = useResolveAddress();
  const { data } = useProfilesManaged({
    for: address as string,
    includeOwned: true,
  });

  console.log(data);

  // const resolve = async () => {
  //   const result = await execute({ handle: "lens/wagmi", address: address });

  //   console.log(result);

  //   if (result.isSuccess()) {
  //     setIsOpenSuccess(true);
  //     setIsOpen(false);

  //     return;
  //   }

  //   if (result.isFailure()) {
  //     setIsOpenFail(true);
  //     setIsOpen(false);

  //     return;
  //   }
  // };

  useEffect(() => {
    if (address && data?.length === 0) {
      setIsOpenLogin(true);
    }
  }, [address, data]);

  return (
    <>
      <Dialog open={isOpenLogin} onOpenChange={setIsOpenLogin}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="border-b pb-3">
              <div className="flex items-center gap-2">
                <div className="border-2 rounded-full border-black p-0.5">
                  <ArrowRight size={14} />
                </div>
                <span>Login</span>
              </div>
            </DialogTitle>
            <DialogDescription className="pt-3">
              <div>
                <p className="py-2 text-lg">Welcome to Hey!</p>
                <p>
                  Let&apos;s start by buying your handle for you. Buying you
                  say? Yep - handles cost a little bit of money to support the
                  network and keep bots away
                </p>
                <div className="flex-center-col gap-3 border border-gray-300 py-6 rounded-xl my-4">
                  <Image src="/dizzy.png" width={80} height={80} alt="dizzy" />
                  <p>Get your Hey profile now!</p>
                  <div>
                    <Button
                      disabled={loading}
                      onClick={() => {
                        setIsOpenSignUp(true);
                        setIsOpenLogin(false);
                      }}
                      className="rounded-full"
                    >
                      Signup now
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <KeyRound size={16} />
                  <span className="text-black underline">Change wallet</span>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={isOpenSignUp} onOpenChange={setIsOpenSignUp}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="border-b pb-3">
              <div className="flex items-center gap-2">
                <div className="border-2 rounded-full border-black p-0.5">
                  <ArrowRight size={14} />
                </div>
                <span>Signup</span>
              </div>
            </DialogTitle>
            <DialogDescription className="pt-3">
              <div>
                <p className="py-2 text-lg">Welcome to Hey!</p>
                <p>
                  Let&apos;s start by buying your handle for you. Buying you
                  say?Yep - handles cost a little bit of money to support the
                  network and keep bots away
                </p>

                <div className="flex h-10 w-full border border-gray-300 rounded-xl overflow-hidden mt-5 mb-3">
                  <div className="w-[70px] border-r border-gray-300 h-full bg-gray-100 flex-center-row">
                    @lens/
                  </div>
                  <div className="flex justify-end">
                    <input
                      type="text"
                      placeholder="yourhandle"
                      className="focus:outline-none pl-3"
                    />
                  </div>
                </div>
                <div className="flex gap-1">
                  <Smile size={18} />
                  <span>Hope you will get a good one!</span>
                </div>
                <div className="pt-7 w-full">
                  <Button className="w-full bg-gray-200 hover:bg-gray-400 text-gray-500 duration-300 rounded-2xl">
                    <CircleDollarSign size={20} />
                    <span className="pl-1">Buy POL</span>
                  </Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={isOpenSign} onOpenChange={setIsOpenSign}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="border-b pb-3">
              <div className="flex items-center gap-2">
                <div className="border-2 rounded-full border-black p-0.5">
                  <ArrowRight size={14} />
                </div>
                <span>Login</span>
              </div>
            </DialogTitle>
            <DialogDescription className="pt-3">
              <div>
                <p className="py-2 text-lg">Please sign the message.</p>
                <p>
                  Hey users this signature to verify that you&apos;re the owner
                  of this address
                </p>

                <div className="flex-center-col gap-3">
                  <div>
                    <Image
                      src="/dizzy.png"
                      width={80}
                      height={80}
                      alt="dizzy"
                    />
                  </div>
                  {data && data?.length > 0 && (
                    <div className="border border-gray-300 p-4 rounded-xl my-4 flex justify-between items-center">
                      <div>
                        <span>{data[0].handle?.fullHandle}</span>
                      </div>

                      <button className="border rounded-full shadow px-4 py-1.5">
                        Login
                      </button>
                    </div>
                  )}

                  <p>Get your Hey profile now!</p>
                  <div>
                    <Button
                      disabled={loading}
                      onClick={() => {
                        setIsOpenSignUp(true);
                        setIsOpenLogin(false);
                      }}
                      className="rounded-full"
                    >
                      Signup now
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <KeyRound size={16} />
                  <span className="text-black underline">Change wallet</span>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModalLogin;
