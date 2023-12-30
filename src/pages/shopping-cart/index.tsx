import redTShirt from "@/assets/red-t-shirt.jpg";
import blackTShirt from "@/assets/black-t-shirt.jpeg";
import whiteTShirt from "@/assets/white-t-shirt.jpg";
import { TiDelete } from "react-icons/ti";
import Image from "next/image";

const ShoppingCart = () => {
    const shoppingCart = [
        {
            image: blackTShirt,
            productName: "Black t-shirt",
            color: "black",
            size: "M",
            SKU: "SKU001",
            quantity: 2,
            price: 19.99,
        },
        {
            image: redTShirt,
            productName: "Red t-shirt",
            color: "red",
            size: "S",
            SKU: "SKU002",
            quantity: 1,
            price: 29.99,
        },
        {
            image: whiteTShirt,
            productName: "White t-shirt",
            color: "white",
            size: "L",
            SKU: "SKU003",
            quantity: 3,
            price: 14.99,
        },
    ];
    return (
        <section className="py-16">
            <h2 className="uppercase font-medium">Your Shopping Cart</h2>
            <div className="py-10">
                <div className="grid grid-cols-12 gap-6 font-semibold uppercase pb-3 border-[#DD748F] border-b">
                    <div className="col-span-1"></div>
                    <div className="col-span-3">
                        <h4 className="">Description</h4>
                    </div>
                    <div className="col-span-2">
                        <h4 className="">SKU</h4>
                    </div>
                    <div className="col-span-2">
                        <h4 className="">Quantity</h4>
                    </div>
                    <div className="col-span-2">
                        <h4 className="">Unit Price</h4>
                    </div>
                    <div className="col-span-2 flex justify-between items-center">
                        <div className="col-span-">
                            <h4 className="">Total</h4>
                        </div>
                        <div className="me-6"></div>
                    </div>
                </div>
                <div className="">
                    {shoppingCart.map((product) => (
                        <div className="pt-6 border-b">
                            <div className="grid grid-cols-12 gap-6 items-center pb-3">
                                <div className="col-span-1">
                                    <Image
                                        className="h-16 w-16 object-cover rounded-md"
                                        src={product.image}
                                        alt="product image"
                                    ></Image>
                                </div>
                                <div className="col-span-3">
                                    <h4 className="uppercase text-lg">
                                        {product.productName}
                                    </h4>
                                    <div className="flex gap-3 text-gray-400 italic">
                                        <p className="">
                                            Color: {product.color},
                                        </p>
                                        <p className="">Size: {product.size}</p>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <h4 className="uppercase">{product.SKU}</h4>
                                </div>
                                <div className="col-span-2">
                                    <h4 className="">{product.quantity}</h4>
                                </div>
                                <div className="col-span-2 text-[#DD748F]">
                                    <h4 className="uppercase">
                                        ${product.price}
                                    </h4>
                                </div>

                                <div className="col-span-2 flex justify-between items-center text-[#DD748F]">
                                    <div className="col-span-">
                                        <h4 className="uppercase">
                                            ${product.price}
                                        </h4>
                                    </div>
                                    <div className="me-6">
                                        <button className="">
                                            <TiDelete className="inline mb-0.5 text-xl" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShoppingCart;
