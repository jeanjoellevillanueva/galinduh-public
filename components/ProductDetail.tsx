import React from "react";


const ProductDetail = ({product}: {product: any}) => {
  return (
    <div className="relative">
      <div className="relative group">
        <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
        <img className="w-full" width={product.width} height={product.height} src={product.imageUrl} alt={product.description}/>
        <div className="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
          <a href={product.link} className="bg-transparent block font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white text-center">View</a>
        </div>
      </div>
      <p className="font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">{product.name}</p>
      <p className="font-semibold text-xl leading-5 text-gray-800 mt-4">{product.price}</p>
    </div>
  );
};
export default ProductDetail;
