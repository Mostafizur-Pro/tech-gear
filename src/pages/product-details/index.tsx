import Link from "next/link";
import { useState } from "react";
import { RxSlash } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductDetails = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
                    <div className="col-span-9 bg-[#F8F8F8]">
                        <div className="grid grid-cols-7">
                            <div className="col-span-3">
                                <Swiper
                                    spaceBetween={10}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    <SwiperSlide>
                                        <img
                                            className="h-[32rem] w-full object-cover"
                                            src="https://im.uniqlo.com/global-cms/spa/res02e261446946bdac6265a2dccfbd4350fr.jpg"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            className="h-[32rem] w-full object-cover"
                                            src="https://cms.brnstc.de/product_images/680x930_retina/cpro/media/images/product/23/8/100149234813000_2_1692600358791.jpg"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            className="h-[32rem]  w-full object-cover"
                                            src="https://www.vbcpontedera.com/wp-content/uploads/2023/01/lanvin-t-shirt-avec-poche-noir-t-shirts-polos-homme_1-1.jpg"
                                        />
                                    </SwiperSlide>
                                </Swiper>
                                <div className="pt-2">
                                    <Swiper
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <img
                                                className="h-32 w-full object-cover"
                                                src="https://im.uniqlo.com/global-cms/spa/res02e261446946bdac6265a2dccfbd4350fr.jpg"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img
                                                className="h-32 w-full object-cover"
                                                src="https://cms.brnstc.de/product_images/680x930_retina/cpro/media/images/product/23/8/100149234813000_2_1692600358791.jpg"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img
                                                className="h-32 w-full object-cover"
                                                src="https://www.vbcpontedera.com/wp-content/uploads/2023/01/lanvin-t-shirt-avec-poche-noir-t-shirts-polos-homme_1-1.jpg"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img
                                                className="h-32 w-full object-cover"
                                                src="https://im.uniqlo.com/global-cms/spa/res02e261446946bdac6265a2dccfbd4350fr.jpg"
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="col-span-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
