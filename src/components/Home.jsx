import { ProductsList } from "./ProductsList";
import Carousel from "./Carousel/Carousel";

export const Home = () => {
    return (
        <div className="px-1 py-1 pb-6 pt-20 bg-[#dee2e6]">
            <Carousel />
            <ProductsList />
        </div>
    );
};
