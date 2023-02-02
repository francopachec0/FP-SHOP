import { useSelector } from "react-redux";
import { LoadingComponent } from "./LoadingComponent";

export const ProductCard = () => {
    const products = useSelector((state) => state.allProducts.products);

    

    const renderList = products.map((product) => {
        const { id, image, title, category, price } = product;
    return (
        <div key={id} className="md:hover:scale-105 duration-500">
            <div>
                <div className="bg-white shadow-md border border-gray-300 rounded-md">
                    <a href={`/product/${id}`}>
                        <img src={image} alt={title} className="w-full h-32 sm:h-48 object-contain md:py-6 py-2 " />
                    </a>
                    <div className="px-4 py-3">
                        <span className="text-gray-400 uppercase text-sm">{category}</span>
                        <p className="text-lg font-bold block truncate capitalize">
                        {title}
                        </p>
                        <div className="flex items-center">
                        <p className="text-lg font-semibold my-3">$ {price}</p>
                            <div className="ml-auto text-2xl md:hover:text-[#adb5bd] duration-300">
                                <button>
                                    <ion-icon name="add-outline"></ion-icon>
                                    <ion-icon name="cart-outline"></ion-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

    return (
        <>
            {products.length === 0 ? <LoadingComponent /> : renderList}
        </>
    );
    };
