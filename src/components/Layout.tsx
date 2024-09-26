"use client";

import Arrow from "@/icons/Arrow";
import ChartColumn from "@/icons/ChartColumn";
import Tip from "@/icons/Tip";
import { ArrowRightLeft, Heart, MessageSquare, X } from "lucide-react";
import Image from "next/image";
import Header from "./Header";
import { useAccount } from "wagmi";
import SubHeader from "./SubHeader";
import ModalLogin from "./ModalLogin";
import useStore from "@/stores/useStore";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Layout = () => {
  const { address } = useAccount();
  const { avatar, profile } = useStore();

  const data1 = [
    {
      title: "🔹 Respect and Professionalism",
    },
    {
      title: "🔹 Stay On-Topic",
    },
    {
      title: "🔹 Constructive Feedback",
    },
    {
      title: "🔹 No Spam or Promotions",
    },
    {
      title: "🔹 Share Knowledge",
    },
  ];

  const data2 = [
    {
      title: "Bitlayer",
      sub: "@BitlayerLabs",
      img: "/img1.jpg",
    },
    {
      title: "Manta Network",
      sub: "@MantaNetwork",
      img: "/img2.jpg",
    },
    {
      title: "Particle Network",
      sub: "@ParticleNtwrk",
      img: "/img3.png",
    },
    {
      title: "Scroll",
      sub: "@Scroll_ZKP",
      img: "/img4.jpg",
    },
    {
      title: "X Layer",
      sub: "@XLayerOfficial",
      img: "/img5.jpg",
    },
  ];

  const data3 = [
    {
      title: "Luigi",
      sub: "@luigi_SK",
      img: "/img21.jpg",
    },
    {
      title: "Jeremy",
      sub: "@0xJeremy6540",
      img: "/img22.jpg",
    },
    {
      title: "BlackHorse",
      sub: "@blackhorse",
      img: "/img23.jpg",
    },
    {
      title: "realnoodles",
      sub: "@realnoodles",
      img: "/img24.jpg",
    },
    {
      title: "Chinzilla",
      sub: "@chinzilla",
      img: "/img25.jpg",
    },
  ];

  const [contentPost, setContentPost] = useState<string[]>([]);

  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  console.log(contentPost);

  const onSubmit = (value: { content: string }) => {
    setContentPost((prev) => [value.content, ...prev]);
  };

  return (
    <>
      <Header />
      {!address && <SubHeader />}
      {address && <ModalLogin />}
      <div className={`bg-gray-50 ${address && "pt-[88px]"}`}>
        <Form {...form}>
          <div className="grid grid-cols-12 gap-6 width-screen">
            <form onSubmit={form.handleSubmit(onSubmit)} className="col-span-7">
              <div className=" flex flex-col gap-6">
                {address && (
                  <div
                    className={`border border-gray-100 shadow rounded-lg bg-white w-full h-20 flex items-center p-4 gap-2"`}
                  >
                    <>
                      <Image
                        className="rounded-full shadow-lg"
                        src={avatar}
                        width={50}
                        height={50}
                        alt="logo"
                      />
                      <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <input
                                type="text"
                                className="focus:outline-none border-none pl-3"
                                placeholder="What's news"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </>
                  </div>
                )}

                <div className="flex gap-2 items-center">
                  <div className="flex items-center gap-2 border py-1.5 px-3 rounded-lg bg-emerald-600 text-white font-semibold">
                    <span>Developer Discussion</span>
                    <Arrow fill="#6d6a6a" />
                  </div>
                  <div className="flex items-center gap-2 border py-1.5 px-3 rounded-lg bg-transparent text-gray-500 border-gray-400 font-semibold">
                    <span>Subcategories</span>
                    <Arrow fill="#6d6a6a" />
                  </div>
                  <div className="flex items-center gap-2 border py-1.5 px-3 rounded-lg bg-transparent text-gray-500 border-gray-400 font-semibold">
                    <span>Any status</span>
                    <Arrow fill="#6d6a6a" />
                  </div>
                  <div className="pl-2 font-medium">Latest</div>
                  <div className="bg-blue-100 border-b-[3px] rounded-t border-blue-500 py-[5px] px-4 text-blue-500 font-semibold ml-2">
                    <span className="relative top-[1px]">Top</span>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <span className="text-xl font-semibold">All Time</span>
                  <Arrow
                    fill="black"
                    height={22}
                    width={14}
                    className="rotate-90 relative -top-0.5"
                  />
                </div>

                <div className="flex flex-col">
                  {/* {contentPost.length > 0 && 
                  {contentPost.map((item, index) => (
                    <div key={index}></div>
                  ))} */}

                  {contentPost.length > 0 &&
                    contentPost.map((item, index) => (
                      <div
                        className="border border-gray-100 shadow rounded-lg bg-white w-full flex items-center p-6 gap-2"
                        key={index}
                      >
                        <div className="flex gap-4">
                          <div className="w-[50px]">
                            <Image
                              src={avatar}
                              alt="user"
                              width={50}
                              height={50}
                              className="rounded-full shadow-lg"
                            />
                          </div>

                          <div className="flex-1 space-y-3">
                            <p className="text-black pb-1.5">
                              {profile.name}
                              <span className="text-gray-600 text-sm pl-1">
                                {profile.localName} - 0m
                              </span>
                            </p>

                            <p className="">{item}</p>

                            <div className="flex items-center gap-8 pt-5">
                              <div>
                                <MessageSquare className="h-5 w-5 text-gray-500" />
                                <span></span>
                              </div>

                              <div className="flex items-center gap-3">
                                <ArrowRightLeft className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">0</span>
                              </div>

                              <div className="flex items-center gap-3">
                                <Heart className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">0</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <Tip className="h-5 w-5 text-gray-500" />
                                <span className="text-sm"></span>
                              </div>
                              <div className="flex items-center gap-3">
                                <ChartColumn className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                  <div className="border border-gray-100 shadow rounded-lg bg-white w-full flex items-center p-6 gap-2">
                    <div className="flex gap-4">
                      <div className="w-[50px]">
                        <Image
                          src="/user1.jpg"
                          alt="user"
                          width={50}
                          height={50}
                          className="rounded-full shadow-lg"
                        />
                      </div>

                      <div className="flex-1 space-y-3">
                        <p className="text-black pb-1.5">
                          Deivid
                          <span className="text-gray-600 text-sm pl-1">
                            @deivid - 13m
                          </span>
                        </p>

                        <p className="">
                          Can&apos;t call approve on a ERC721 contract{" "}
                        </p>
                        <p>Hello !</p>
                        <p>
                          I have seemingly metamask related problems when
                          executing one function of one of our contracts.
                        </p>
                        <p>
                          This is a ERC721 contract, following closely the
                          specification found here :
                          <b className="text-blue-500 hover:underline">
                            htt***ps://eips.ethereum.org/EIPS/eip-721
                          </b>
                        </p>
                        <p>
                          I can basically call every function of this contract,
                          but the approve function. Calling the approve function
                          trigger metamask, and then, it get stuck on the
                          loading screen right before allowing us to confirm the
                          transaction.
                        </p>

                        <p>
                          I tried with remix to rule out our own web3
                          implementation.
                        </p>

                        <p>
                          I tried with different browsers (brave, firefox,
                          chrome).
                        </p>

                        <p>
                          I tried to downgrade metamask version to 10.10.2 and
                          10.0.0 and it worked fine. But no luck with the
                          10.13.0 one.
                        </p>

                        <p>
                          Here what happen when calling approve. Just stuck
                          there.
                        </p>

                        <p>htt***ps://ibb.co/99h2DPc</p>

                        <p>
                          It get even weirder, is if i rename the function,
                          let&apos; say “approveMe”, without changing a thing in
                          it, it go through.
                        </p>

                        <p>htt***ps://ibb.co/H7wBgYs</p>
                        <p>Thank&apos;s, waiting for any replys</p>

                        <div className="flex items-center gap-8 pt-5">
                          <div>
                            <MessageSquare className="h-5 w-5 text-gray-500" />
                            <span></span>
                          </div>

                          <div className="flex items-center gap-3">
                            <ArrowRightLeft className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">2</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <Heart className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">8</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Tip className="h-5 w-5 text-gray-500" />
                            <span className="text-sm"></span>
                          </div>
                          <div className="flex items-center gap-3">
                            <ChartColumn className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">164</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-100 shadow rounded-lg bg-white w-full flex items-center p-6 gap-2">
                    <div className="flex gap-4">
                      <div className="w-[50px]">
                        <Image
                          src="/1212.jpg"
                          alt="user"
                          width={50}
                          height={50}
                          className="rounded-full shadow-lg"
                        />
                      </div>
                      <div className="space-y-3 flex-1">
                        <p className="text-black pb-1.5">
                          MOREPad
                          <span className="text-gray-600 text-sm pl-1">
                            @morepad404 - 15m
                          </span>
                        </p>

                        <p>🚀 MOREPad Officially Deployed on Bitlayer! 🚀</p>
                        <p>
                          If any builders want to create their products on this
                          chain and need assistance, feel free to post your
                          questions here!
                        </p>
                        <p>Keep building! 💪✨</p>
                        <Image
                          className="rounded-lg"
                          src="/post1.jpg"
                          alt="post"
                          height={400}
                          width={500}
                        />

                        <div className="flex items-center gap-8 pt-5">
                          <div>
                            <MessageSquare className="h-5 w-5 text-gray-500" />
                            <span></span>
                          </div>

                          <div className="flex items-center gap-3">
                            <ArrowRightLeft className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">22</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <Heart className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">109</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Tip className="h-5 w-5 text-gray-500" />
                            <span className="text-sm"></span>
                          </div>
                          <div className="flex items-center gap-3">
                            <ChartColumn className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">284</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-100 shadow rounded-lg bg-white w-full flex items-center p-6 gap-2">
                    <div className="flex gap-4">
                      <div className="w-[50px]">
                        <Image
                          src="/user2.jpg"
                          alt="user"
                          width={50}
                          height={50}
                          className="rounded-full shadow-lg object-cover"
                        />
                      </div>
                      <div className="space-y-3 flex-1">
                        <p className="text-black pb-1.5">
                          Amjad
                          <span className="text-gray-600 text-sm pl-1">
                            @amjad - 35m
                          </span>
                        </p>

                        <p>Connect Particle Wallet to MOREPad AI </p>
                        <p>
                          I&apos;m having trouble creating a Particle Wallet.
                          Despite logging in multiple times with my email, I
                          haven&apos;t received any codes to successfully set up
                          my wallet.
                        </p>
                        <p>
                          Can anyone assist me with this issue? Help, please!
                        </p>

                        <div className="flex items-center gap-8 pt-5">
                          <div>
                            <MessageSquare className="h-5 w-5 text-gray-500" />
                            <span></span>
                          </div>

                          <div className="flex items-center gap-3">
                            <ArrowRightLeft className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">10</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <Heart className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">35</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Tip className="h-5 w-5 text-gray-500" />
                            <span className="text-sm"></span>
                          </div>
                          <div className="flex items-center gap-3">
                            <ChartColumn className="h-5 w-5 text-gray-500" />
                            <span className="text-sm">44</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div className="col-span-5 flex flex-col gap-6">
              <div className="border border-gray-100 shadow rounded-lg bg-white w-full flex items-center p-6 gap-2">
                <div>
                  <span className="text-lg font-semibold ">
                    Welcome to MOREPad Dev Forum!
                  </span>

                  <div className="space-y-2 py-3">
                    {data1.map((item, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        {/* <div className="h-5 w-5 bg-black rounded-full flex-center-row">
                              <Check color="white" size={12} />
                            </div> */}
                        <span className="text-gray-500">{item.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* <div className="font-semibold">Update profile now</div> */}
                </div>
              </div>

              <div className="border border-gray-100 shadow rounded-lg bg-white w-full space-y-4 p-6 gap-2">
                <span className="text-lg font-semibold">MOREPad Network</span>

                <div className="space-y-4">
                  {data2.map((item, index) => (
                    <div className="flex-between" key={index}>
                      <div className="flex items-center gap-3">
                        <Image
                          width={48}
                          height={48}
                          className="rounded-full"
                          src={item.img}
                          alt="logo"
                        />
                        <div className="flex flex-col">
                          <span className="text-black font-semibold">
                            {item.title}
                          </span>
                          <span className="text-gray-600">{item.sub}</span>
                        </div>
                      </div>

                      <div className="border rounded-full px-2 border-gray-600">
                        <span className="font-semibold text-sm">Follow</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-gray-600 font-semibold text-sm pt-2">
                  Show more
                </div>
              </div>

              <div className="border border-gray-100 shadow rounded-lg bg-white w-full space-y-4 p-6 gap-2">
                <span className="text-lg font-semibold">Who to Follow</span>

                <div className="space-y-4">
                  {data3.map((item, index) => (
                    <div className="flex-between" key={index}>
                      <div className="flex items-center gap-3">
                        <Image
                          width={48}
                          height={48}
                          className="rounded-full"
                          src={item.img}
                          alt="logo"
                        />
                        <div className="flex flex-col">
                          <span className="text-black font-semibold">
                            {item.title}
                          </span>
                          <span className="text-gray-600">{item.sub}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="border rounded-full px-2 border-gray-600">
                          <span className="font-semibold text-sm">Follow</span>
                        </div>
                        <X size={16} color="gray" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-gray-600 font-semibold text-sm pt-2">
                  Show more
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Layout;
