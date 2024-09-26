/* eslint-disable @typescript-eslint/no-explicit-any */
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
import useStore from "@/stores/useStore";

const ModalLogin = () => {
  const { address } = useAccount();
  // const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenSign, setIsOpenSign] = useState(false);
  const { loading } = useResolveAddress();
  const { isOpenLogin, setIsOpenLogin, setAvatar } = useStore();
  const { data } = useProfilesManaged({
    for: address as string,
    includeOwned: true,
  });

  useEffect(() => {
    if (address && data?.length === 0) {
      setIsOpenSignUp(true);
    } else if (address && data && data?.length > 0) {
      setAvatar((data?.[0]?.metadata?.picture as any)?.optimized?.uri ?? "");
      setIsOpenLogin(true);
    }
  }, [address, data, setIsOpenSignUp, setIsOpenLogin, setAvatar]);

  return (
    <>
      <Dialog open={isOpenSignUp} onOpenChange={setIsOpenSignUp}>
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
                        setIsOpenSignUp(false);
                        setIsOpenSign(true);
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

      <Dialog open={isOpenSign} onOpenChange={setIsOpenSign}>
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
                <p className="py-2 text-lg">Please sign the message.</p>
                <p>
                  Hey users this signature to verify that you&apos;re the owner
                  of this address
                </p>

                <div className="flex-center-col gap-3">
                  {data && data?.length > 0 && (
                    <div className="border border-gray-300 p-4 rounded-xl my-4 flex items-center w-full justify-between">
                      <div className="flex items-center">
                        <Image
                          src={
                            (data?.[0]?.metadata?.picture as any)?.optimized
                              ?.uri ?? ""
                          }
                          width={60}
                          height={60}
                          className="rounded-full"
                          alt="avatar"
                        />
                        <div className="flex flex-col pl-3 gap-1">
                          <span>{data[0].handle?.fullHandle}</span>
                          <span>
                            {data[0].handle?.suggestedFormatted.localName}
                          </span>
                        </div>
                      </div>

                      <button className="border rounded-full shadow px-4 py-1.5">
                        Login
                      </button>
                    </div>
                  )}
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
