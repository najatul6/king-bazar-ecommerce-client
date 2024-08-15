import { useLoaderData } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const BrandDetails = () => {
    const loadedData = useLoaderData();
    const { title, bannerImages } = loadedData;
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allProducts/${title}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [title])
    console.log(products);
    return (
        <div>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        bannerImages.map((data, indx) => <SwiperSlide key={indx}><img src={data} className="w-full" alt="" /></SwiperSlide>)
                    }

                </Swiper>
            </div>
            <div>
                {
                    products ?
                        <div>
                            <div className="bg-[#f16022] border-2 mt-10 mb-1 py-2">
                                <h2 className="text-2xl md:text-4xl font-semibold text-center text-white uppercase">Products</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
                                {
                                    products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                                }
                            </div>
                        </div>
                        :
                        <div>
                            <h2 className="text-2xl md:text-4xl font-semibold text-center text-white uppercase">Products Not Added</h2>
                        </div>
                }

            </div>
        </div>
    );
};

export default BrandDetails;