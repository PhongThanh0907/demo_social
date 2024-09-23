import Header from "@/components/Header";
import Arrow from "@/icons/Arrow";
import { Check, X } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const data1 = [
    {
      title: "Set profile name",
    },
    {
      title: "Set profile bio",
    },
    {
      title: "Set your avatar",
    },
    {
      title: "Set your email address",
    },
    {
      title: "Select profile interests",
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
      sub: "@ParticleNetwork",
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

  return (
    <main className="flex flex-col gap-6">
      <Header />
      <div className="bg-gray-50 pt-[88px]">
        <div className="grid grid-cols-12 gap-6 width-screen">
          <div className="col-span-7 flex flex-col gap-6">
            <div className=" border border-gray-100 shadow rounded-lg bg-white w-full h-20 flex items-center p-4 gap-2">
              {/* <div className="w-10 h-10 rounded-full bg-blue-500 text-black flex-center-row font-semibold border border-gray-400">
                A
              </div> */}
              <Image
                className="rounded-full shadow-lg"
                src="/logo.jpg"
                width={50}
                height={50}
                alt="logo"
              />
              <span className="text-lg text-gray-500 pl-1">
                What&apos;s news
              </span>
            </div>

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
          </div>

          <div className="col-span-5 flex flex-col gap-6">
            <div className="border border-gray-100 shadow rounded-lg bg-white w-full flex items-center p-6 gap-2">
              <div>
                <span className="text-lg font-semibold ">
                  Setup your Hey profile
                </span>

                <div className="space-y-2 py-3">
                  {data1.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <div className="h-5 w-5 bg-black rounded-full flex-center-row">
                        <Check color="white" size={12} />
                      </div>
                      <span className="text-gray-500">{item.title}</span>
                    </div>
                  ))}
                </div>

                <div className="font-semibold">Update profile now</div>
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
            </div>

            <div className="border border-gray-100 shadow rounded-lg bg-white w-full space-y-4 p-6 gap-2">
              <span className="text-lg font-semibold">Why to Follow</span>

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
      </div>
    </main>
  );
}
