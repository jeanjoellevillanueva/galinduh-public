import React from "react";
import ProductDetail from "./ProductDetail";


const Product = () => {
  const products = [
    {
      imageUrl: "/products/skort.png",
      name: "Cotton Linen High Waist Skort (Short/Skirt)",
      description: "GC Cotton Linen High Waist Skort (Short/Skirt) with Buttons | Trendy Korean Palda Short for Women",
      price: "₱290",
      link: "https://shopee.ph/GC-Cotton-Linen-High-Waist-Skort-(Short-Skirt)-with-Buttons-Trendy-Korean-Palda-Short-for-Women-i.8373548.23472556407?xptdk=9b67a045-c61c-471f-97bf-ae5e19229f5d",
    },
    {
      imageUrl: "/products/terno-skort.png",
      name: "Cotton Linen Top and Skort(Palda Short) with Pocket Coords",
      description: "Collared Polo and Skort Terno for Women | Cotton Linen Top and Skort (Palda Short)with Pocket Coords",
      price: "₱590",
      link: "https://shopee.ph/product/8373548/23648865334",
    },
    {
      imageUrl: "/products/skort-coords-2.png",
      name: "Cotton Linen Top and Short with Pocket Coords",
      description: "Collared Polo and Shorts Terno for Women | FREESIZE Cotton Linen Top and Short with Pocket Coords",
      price: "₱480",
      link: "https://shopee.ph/Collared-Polo-and-Shorts-Terno-for-Women-FREESIZE-Cotton-Linen-Top-and-Short-with-Pocket-Coords-i.8373548.8776375909?xptdk=f8514964-fdb5-4f6d-a3f6-d3342a7ecc86",
    },
    {
      imageUrl: "/products/half-sleeve-crop.png",
      name: "Plain Loose Hanging Crop Tee T-Shirt",
      description: "GC Half-Sleeve Crop Shirt -100% Pure Cotton Croptop for Women | Plain Loose Hanging Crop Tee T-Shirt",
      price: "₱200",
      link: "https://shopee.ph/GC-Half-Sleeve-Crop-Shirt-100-Pure-Cotton-Croptop-for-Women-Plain-Loose-Hanging-Crop-Tee-T-Shirt-i.8373548.22549615766?xptdk=b49b8e44-cbcb-4dc0-b443-dd83921132f3",
    },
    {
      imageUrl: "/products/trouser-shorts.png",
      name: "Highwaist Korean Trouser Shorts",
      description: "GC Highwaist Korean Trendy Trouser Shorts for Women with Zipper | Garterized BKK Bangkok Sexy Shorts",
      price: "₱550",
      link: "https://shopee.ph/GC-Highwaist-Korean-Trendy-Trouser-Shorts-for-Women-with-Zipper-Garterized-BKK-Bangkok-Sexy-Shorts-i.8373548.21791242230",
    },
    {
      imageUrl: "/products/cargo-pants.png",
      name: "Four Pocket Garterized Straight Cut Cotton Twill Trouser Pants",
      description: "Four Pocket Garterized Straight Cut Cotton Twill Trouser Pants",
      price: "₱550",
      link: "https://shopee.ph/product/8373548/23773363289",
    },
    {
      imageUrl: "/products/buttondown.png",
      name: "Cotton Linen Top with Pockets and Short Coords",
      description: "Buttondown Polo and Short Terno for Women | FREE-SIZE Cotton Linen Top with Pockets and Short Coords",
      price: "₱630",
      link: "https://shopee.ph/Buttondown-Polo-and-Short-Terno-for-Women-FREE-SIZE-Cotton-Linen-Top-with-Pockets-and-Short-Coords-i.8373548.21891042860?sp_atk=273622cf-c153-42a9-b282-4923ebd33a48",
    },
    {
      imageUrl: "/products/terno-pants-sleeveless.png",
      name: "Sleeveless Top and Pants Terno",
      description: "Sleeveless Top and Pants Terno for Women | Cotton Linen with Pocket Plus-Size Coords FREE-SIZE",
      price: "₱730",
      link: "https://shopee.ph/product/8373548/22147902181",
    },
  ];
  return (
    <div className=" 2xl:container 2xl:mx-auto">
      <div className=" py-6 lg:px-20 md:px-6 px-4">
        <h1 className="text-center font-bold text-2xl">Products</h1>
        <hr className=" w-full bg-gray-200 my-6"/>
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          {products.map((product, index) => (
            <ProductDetail
              key={index}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Product;
