import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import ComputerAccessoriesDetails from "../pages/ProductDetails/ComputerAccessoriesDetails";
import ComputerComponentsDetails from "../pages/ProductDetails/ComputerComponentsDetails";
import LaptopAccessoriesDetails from "../pages/ProductDetails/LaptopAccessoriesDetails";
import ComputerMonitorsDetails from "../pages/ProductDetails/ComputerMonitorsDetails";
import ComputerNetworkingDetails from "../pages/ProductDetails/ComputerNetworkingDetails";
import PowerStripDetails from "../pages/ProductDetails/PowerStripDetails";
import PrinterDetails from "../pages/ProductDetails/PrinterDetails";
import ScanerDetails from "../pages/ProductDetails/ScanerDetails";
import ComputerServersDetails from "../pages/ProductDetails/ComputerServersDetails";
import DataStorageDetails from "../pages/ProductDetails/DataStorageDetails";
import ComputerAccessoriesUpdate from "../pages/UpdateProduct/ComputerAccessoriesUpdate";
import ComputerComponentsUpadate from "../pages/UpdateProduct/ComputerComponentsUpadate";
import ComputerMonitorsUpadte from "../pages/UpdateProduct/ComputerMonitorsUpadte";
import ComputerNetworkingDetailsUpdate from "../pages/UpdateProduct/ComputerNetworkingDetailsUpdate";
import ComputerServersDetailsUpadate from "../pages/UpdateProduct/ComputerServersDetailsUpadate";
import DataStorageDetailsUpdate from "../pages/UpdateProduct/DataStorageDetailsUpdate";
import LaptopAccessoriesDetailsUpdate from "../pages/UpdateProduct/LaptopAccessoriesDetailsUpdate";
import PowerStripDetailsUpdate from "../pages/UpdateProduct/PowerStripDetailsUpdate";
import PrinterDetailsUpdate from "../pages/UpdateProduct/PrinterDetailsUpdate";
import ScanerDetailsUpdate from "../pages/UpdateProduct/ScanerDetailsUpdate";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/mycart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            // Update Product Details 
            {
                path: '/computeraccessories/update/:id',
                element: <PrivateRoute>
                    <ComputerAccessoriesUpdate></ComputerAccessoriesUpdate>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/computeraccessories/${params.id}`)
            },
            {
                path: '/component/update/:id',
                element: <PrivateRoute><ComputerComponentsUpadate></ComputerComponentsUpadate></PrivateRoute>,
                loader: ({ params }) => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/components/${params.id}`)
            },
            {
                path: '/accessories/update/:id',
                element: <PrivateRoute>
                    <LaptopAccessoriesDetailsUpdate></LaptopAccessoriesDetailsUpdate>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/accessories/${params.id}`)
            },
            {
                path: '/monitor/update/:id',
                element: <PrivateRoute>
                    <ComputerMonitorsUpadte></ComputerMonitorsUpadte>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/monitors/${params.id}`)
            },
            {
                path: '/networking/update/:id',
                element: <PrivateRoute>
                    <ComputerNetworkingDetailsUpdate></ComputerNetworkingDetailsUpdate>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/networking/${params.id}`)
            },
            {
                path: '/strip/update/:id',
                element: <PrivateRoute>
                    <PowerStripDetailsUpdate></PowerStripDetailsUpdate>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/strip/${params.id}`)
            },
            {
                path: '/printer/update/:id',
                element: <PrivateRoute>
                    <PrinterDetailsUpdate></PrinterDetailsUpdate>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/printer/${params.id}`)
            },
            {
                path: '/scanner/update/:id',
                element: <PrivateRoute>
                    <ScanerDetailsUpdate></ScanerDetailsUpdate>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/scanner/${params.id}`)
            },
            {
                path: '/servers/update/:id',
                element: <PrivateRoute>
                    <ComputerServersDetailsUpadate></ComputerServersDetailsUpadate>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/servers/${params.id}`)
            },
            {
                path: '/storage/update/:id',
                element: <PrivateRoute>
                    <DataStorageDetailsUpdate></DataStorageDetailsUpdate>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/storage/${params.id}`)
            },

            // For Product Details 
            {
                path: '/products/:id',
                element: <ComputerAccessoriesDetails></ComputerAccessoriesDetails>,
                loader: () => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/computeraccessories`)
            },
            {
                path: '/component/:id',
                element: <ComputerComponentsDetails></ComputerComponentsDetails>,
                loader: () => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/components`)
            },
            {
                path: '/accessories/:id',
                element: <LaptopAccessoriesDetails></LaptopAccessoriesDetails>,
                loader: () => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/accessories`)
            },
            {
                path: '/monitor/:id',
                element: <ComputerMonitorsDetails></ComputerMonitorsDetails>,
                loader: () => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/monitors`)
            },
            {
                path: '/networking/:id',
                element: <ComputerNetworkingDetails></ComputerNetworkingDetails>,
                loader: () => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/networking`)
            },
            {
                path: '/strip/:id',
                element: <PowerStripDetails></PowerStripDetails>,
                loader: () => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/strip`)
            },
            {
                path: '/printer/:id',
                element: <PrinterDetails></PrinterDetails>,
                loader: () => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/printer`)
            },
            {
                path: '/scanner/:id',
                element: <ScanerDetails></ScanerDetails>,
                loader: () => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/scanner`)
            },
            {
                path: '/servers/:id',
                element: <ComputerServersDetails></ComputerServersDetails>,
                loader: () => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/servers`)
            },
            {
                path: '/storage/:id',
                element: <DataStorageDetails></DataStorageDetails>,
                loader: () => fetch(`https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/storage`)
            }
        ]
    }
])

export default Router;