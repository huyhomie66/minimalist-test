/* eslint-disable @next/next/no-img-element */
import Banner from "@/components/Banner";
import MainLayout from "@/components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <section className="container mx-auto px-5 py-10 border-b">
        <div className="grid lg:grid-cols-4 gap-5 min-h-[70vh] lg:min-h-[30vh]">
          <div className="col-span-2 bg-[#F1F1F1] flex justify-end items-end px-10 py-5">
            <div className="p-3 bg-white w-fit lg:text-3xl">New Arrivals</div>
          </div>
          <div className="col-span-2 lg:col-span-1 bg-[#F1F1F1]  flex justify-center items-end px-10 py-5">
            <div className="p-1 bg-white w-fit lg:text-lg">
              Women Collection
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 bg-[#F1F1F1]  flex justify-center items-end px-10 py-5">
            <div className="p-1 bg-white w-fit lg:text-lg">Men Collection</div>
          </div>
        </div>
      </section>
      {/* New letters */}
      <section className="container mx-auto px-5 py-10 lg:py-20 border-b">
        <div className="lg:w-1/2 mx-auto text-center">
          <h1 className="text-2xl lg:text-4xl mb-3">New letters</h1>
          <p className="text-sm lg:text-lg text-[#707070] mb-3">
            Sign up to receive information about new products
          </p>
          <div className="relative mb-5">
            <input
              type="text"
              placeholder="Email address"
              className="w-full outline-none border-b pb-1 pr-8 text-sm lg:text-base"
            />
            <img
              src="/arrow-right.png"
              alt=""
              className="absolute right-3 top-2"
            />
          </div>
          <div className="flex justify-center gap-3">
            <img src="/fb.png" alt="" />
            <img src="/twitter.png" alt="" />
            <img src="/ig.png" alt="" />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
