import Image from "next/image";
import img1 from "../../../public/9_thumb.jpg";
import React from "react";
import Link from "next/link";

const WishList = () => {
  return (
    <section className="bg-slate-50 md:grid-cols-3 px-3 md:px-0 grid gap-5 max-w-7xl mx-auto">
      {/* nav section */}
      <div className="md:col-span-1 border">
        {/* <SideBar></SideBar> */}
        <p className="text-5xl font-extralight text-center">SideBar Under constuction.</p>
      </div>
      {/* product section container */}
      <div className="md:col-span-2 border">
        <h1 className="uppercase">Your WishList</h1>
        <div className="mt-3 pt-10 bg-white">
          <table className=" w-full">
            <thead className="">
              <tr className="">
                <th></th>
                <th className="text-left">DESCRIPTION</th>
                <th className="text-left">ID</th>
                <th className="text-left">Unit Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-red-400">
                <td className="py-[30px] px-[8px] ">
                  <Image src={img1} alt="img1"></Image>
                </td>
                <td>
                  <p className="uppercase text-red-400 text-sm opacity-90">
                    <Link href={"/"}>Black T-Shirt</Link>
                  </p>
                  <p className="text-gray-400 text-xs">
                    Color: <span className="italic">Black</span>, Size:{" "}
                    <span className="italic">M</span>
                  </p>
                </td>
                <td>SK169841669</td>
                <td>$14.63</td>
                <td className="text-red-500 text-xl cursor-pointer">x</td>
              </tr>
              <tr className="border-t">
                <td className="py-[30px] px-[8px] ">
                  <Image src={img1} alt="img1"></Image>
                </td>
                <td>
                  <p className="uppercase text-red-400 text-sm opacity-90">
                    <Link href={"/"}>Black T-Shirt</Link>
                  </p>
                  <p className="text-gray-400 text-xs">
                    Color: <span className="italic">Black</span>, Size:{" "}
                    <span className="italic">M</span>
                  </p>
                </td>
                <td>SK169841669</td>
                <td>$14.63</td>
                <td className="text-red-500 text-xl cursor-pointer">x</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WishList;