import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import axios from "axios";
import { useEffect } from "react";
import { setProducts } from "../redux/actions/productActions";

export const ProductsList = () => {
    const products = useSelector((state) => state);

    const dispatch = useDispatch();

    const getProducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("ERROR: ", err);
        });
        dispatch(setProducts(response.data));
    };
    //hola

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="px-6 py-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:max-sm:grid-cols-1 md:gap-8 gap-6 ">
            <ProductCard />
        </div>
    );
};
