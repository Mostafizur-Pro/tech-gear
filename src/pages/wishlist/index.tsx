import React from "react";

const WishList = () => {
  return (
    <section className="md:grid-cols-3 px-3 md:px-0 grid gap-5 max-w-7xl mx-auto">
      {/* nav section */}
      <div className="md:col-span-1 border"></div>
      {/* product section */}
      <div className="md:col-span-2 border">
        <h1 className="uppercase">Your WishList</h1>
      </div>
    </section>
  );
};

export default WishList;
