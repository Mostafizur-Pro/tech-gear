import Link from "next/link";
import { RxSlash } from "react-icons/rx";

const ProductDetails = () => {
    return (
        <section className="">
            <div className="py-10 bg-[#F5F5F5]">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <h2 className="uppercase font-bold text-2xl">
                                BLACK T-SHIRT
                            </h2>
                            <p className="text-xl text-gray-500">
                                Le Manifique
                            </p>
                        </div>
                        <div className="">
                            <p className="flex items-center gap-2">
                                <Link className="text-[#E47282]" href={"/"}>
                                    Home
                                </Link>
                                <RxSlash className="text-[#E47282]" />
                                <Link
                                    className="text-[#E47282]"
                                    href={"/store"}
                                >
                                    Store
                                </Link>
                                <RxSlash className="text-[#E47282]" />
                                <Link href={"/productId"}>Product Name</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-16">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-3 p-6 bg-[#F8F8F8]">
                        <h2 className="">SideBar</h2>
                    </div>
                    <div className="col-span-9 bg-[#F8F8F8]"></div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
