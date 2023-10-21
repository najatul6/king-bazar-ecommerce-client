
const Banner = () => {
    return (
        <div className="border-b-4 border-[#f16022]">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <button className="btn text-2xl font-bold hover:text-white bg-transparent border-[#f16022] border-2 text-[#f16022] hover:bg-[#f16022]">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;