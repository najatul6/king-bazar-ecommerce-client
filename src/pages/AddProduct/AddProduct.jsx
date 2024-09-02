import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
    const [productType, setProductType] = useState("");

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const productImg = form.productimg.value;
        const productName = form.productname.value;
        const productBrand = form.productbrand.value;
        const productDescription = form.productdescription.value;
        const productPrice = form.productprice.value;
        const productRating = form.productrating.value;
        const products = { productImg, productName, productBrand, productType, productDescription, productPrice, productRating }
        console.log(products)

        // Send Data to Server 
        fetch('http://localhost:5000/allProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Success',
                        'Product is Added successfully',
                        'success'
                    )
                    form.reset()
                }
            })
    }


    return (
        <div className="md:w-3/4 mx-auto mt-10">
            <h2 className="text-2xl flex items-center gap-3 rounded-xl bg-base-600 border-2 hover:border-[#f16022] btn font-semibold uppercase text-[#f16022]">
                <BiArrowBack></BiArrowBack>
                <Link to='/'>
                    Go Back
                </Link>
            </h2>
            <div className="rounded-xl md:border-[#f16022] md:border-2 text-center  mt-5 py-5">
                <div className=" items-center flex flex-col rounded-xl bg-transparent bg-clip-border text-[#f16022] shadow-none">
                    <h4 className="block  text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Add Product
                        <hr className="h-1 bg-[#f16022] border-0 rounded-full" />
                    </h4>
                    <p className="mt-1 block  text-base font-normal leading-relaxed text-[#f16022] antialiased">
                        Enter your Product details.
                    </p>
                    <form onSubmit={handleAddProduct} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-4 flex flex-col gap-6">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    name="productimg"
                                    required
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3  text-sm font-normal text-[#f16022] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f16022] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f16022] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f16022] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f16022] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 uppercase">
                                    Product Image URL
                                </label>
                            </div>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    name="productname"
                                    required
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3  text-sm font-normal text-[#f16022] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f16022] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f16022] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f16022] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f16022] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 uppercase">
                                    Product Name
                                </label>
                            </div>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    name="productbrand"
                                    required
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3  text-sm font-normal text-[#f16022] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f16022] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f16022] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f16022] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f16022] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 uppercase">
                                    Product Brand Name
                                </label>
                            </div>

                            <select
                                onChange={e => setProductType(e.target.value)}
                                defaultValue={productType}
                                className="select h-11 w-full min-w-[200px] border-blue-200 border-t-0 focus:border-[#f16022] required">
                                <option disabled selected>Pick your Product Type</option>
                                <option value="ComputerAccessories">Computer Accessories</option>
                                <option value="Components">Computer Components</option>
                                <option value="Accessories">Laptop Accessories</option>
                                <option value="Monitors">Computer Monitors</option>
                                <option value="Networking">Computer Networking</option>
                                <option value="Strip">Power Strip</option>
                                <option value="Printer">Printer</option>
                                <option value="Scanner">Scanner</option>
                                <option value="Servers">Computer Servers</option>
                                <option value="Storage">Data Storage</option>
                            </select>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    name="productdescription"
                                    required
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3  text-sm font-normal text-[#f16022] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f16022] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f16022] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f16022] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f16022] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 uppercase">
                                    Product Description
                                </label>
                            </div>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    name="productprice"
                                    required
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3  text-sm font-normal text-[#f16022] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f16022] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f16022] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f16022] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f16022] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 uppercase">
                                    Product Price
                                </label>
                            </div>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    name="productrating"
                                    required
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3  text-sm font-normal text-[#f16022] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f16022] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f16022] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f16022] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f16022] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 uppercase">
                                    Product Rating
                                </label>
                            </div>

                        </div>
                        <button
                            className="mt-6 block w-full select-none rounded-lg bg-[#f16022] py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-[#f16022]/20 transition-all hover:shadow-lg hover:shadow-[#f16022]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;