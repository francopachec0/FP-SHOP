import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";
import { LoadingComponent } from "./LoadingComponent";

export const ProductDetails = () => {

    const dispatch = useDispatch();

    const { productID } = useParams();

    const product = useSelector((state) => state.product.productDetails);

    const { id, image, title, price, category, description } = product

    const getProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productID}`)
            .catch((err) => {
                console.log("ERROR: ", err);
        });
        dispatch(selectedProduct(response.data))
    };

    useEffect(() => {
        if (productID && productID !== "") getProductDetail();
    }, [productID]);

    return (
        <div className="w-full h-full pb-10 pt-20 px-6 bg-[#dee2e6]">
            {
                Object.keys(product).length === 0 ?
                <LoadingComponent /> :
                <div className="grid justify-center items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-auto gap-8">
                        <div className="bg-white shadow-md border border-gray-400 rounded-md flex items-center justify-center">
                            <img src={image} alt={title} className=" w-3/4 h-auto object-contain md:p-8 p-4"/>
                        </div>
                        <div className="h-full flex flex-col justify-center">
                            <h3 className="flex align-text-top font-bold capitalize pb-2">{category}</h3>
                            <h1 className="text-black pb-8">{title}</h1>
                            <h2 className=" text-gray-500">{description}</h2>
                            <div className="flex justify-around items-center pt-10">
                                <h1 className="text-xl text-green-800 font-bold">$ {price}</h1>
                                <button className="border border-gray-400 rounded-md p-2 text-gray-500 font-semibold md:hover:border-black md:hover:text-black duration-300 cursor-pointer">ADD TO CART</button>
                            </div>
                        </div>
                </div>
            }
        </div>
    );
};
