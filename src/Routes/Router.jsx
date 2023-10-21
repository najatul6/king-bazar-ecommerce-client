import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
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

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/updateproduct',
                element:<UpdateProduct></UpdateProduct>
            },
            {
                path:'/mycart',
                element:<MyCart></MyCart>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            
            // For Product Details 
            {
                path:'/products/:id',
                element:<ComputerAccessoriesDetails></ComputerAccessoriesDetails>,
                loader:()=>fetch(`http://localhost:5000/computeraccessories`)
            },
            {
                path:'/component/:id',
                element:<ComputerComponentsDetails></ComputerComponentsDetails>,
                loader:()=>fetch(`http://localhost:5000/components`)
            },
            {
                path:'/accessories/:id',
                element:<LaptopAccessoriesDetails></LaptopAccessoriesDetails>,
                loader:()=>fetch(`http://localhost:5000/accessories`)
            },
            {
                path:'/monitor/:id',
                element:<ComputerMonitorsDetails></ComputerMonitorsDetails>,
                loader:()=>fetch(`http://localhost:5000/monitors`)
            },
            {
                path:'/networking/:id',
                element:<ComputerNetworkingDetails></ComputerNetworkingDetails>,
                loader:()=>fetch(`http://localhost:5000/networking`)
            },
            {
                path:'/strip/:id',
                element:<PowerStripDetails></PowerStripDetails>,
                loader:()=>fetch(`http://localhost:5000/strip`)
            },
            {
                path:'/printer/:id',
                element:<PrinterDetails></PrinterDetails>,
                loader:()=>fetch(`http://localhost:5000/printer`)
            },
            {
                path:'/scanner/:id',
                element:<ScanerDetails></ScanerDetails>,
                loader:()=>fetch(`http://localhost:5000/scanner`)
            },
            {
                path:'/servers/:id',
                element:<ComputerServersDetails></ComputerServersDetails>,
                loader:()=>fetch(`http://localhost:5000/servers`)
            },
            {
                path:'/storage/:id',
                element:<DataStorageDetails></DataStorageDetails>,
                loader:()=>fetch(`http://localhost:5000/storage`)
            }
        ]
    }
])

export default Router;