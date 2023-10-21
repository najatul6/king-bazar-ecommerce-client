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
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/mycart',
                element:<MyCart></MyCart>
            },
            // Update Product Details 
            {
                path:'/computeraccessories/update/:id',
                element:<ComputerAccessoriesUpdate></ComputerAccessoriesUpdate>,
                loader:({params})=>fetch(`http://localhost:5000/computeraccessories/${params.id}`)
            },
            {
                path:'/component/update/:id',
                element:<ComputerComponentsUpadate></ComputerComponentsUpadate>,
                loader:({params})=>fetch(`http://localhost:5000/components/${params.id}`)
            },
            {
                path:'/accessories/update/:id',
                element:<LaptopAccessoriesDetailsUpdate></LaptopAccessoriesDetailsUpdate>,
                loader:({params})=>fetch(`http://localhost:5000/accessories/${params.id}`)
            },
            {
                path:'/monitor/update/:id',
                element:<ComputerMonitorsUpadte></ComputerMonitorsUpadte>,
                loader:({params})=>fetch(`http://localhost:5000/monitors/${params.id}`)
            },
            {
                path:'/networking/update/:id',
                element:<ComputerNetworkingDetailsUpdate></ComputerNetworkingDetailsUpdate>,
                loader:({params})=>fetch(`http://localhost:5000/networking/${params.id}`)
            },
            {
                path:'/strip/update/:id',
                element:<PowerStripDetailsUpdate></PowerStripDetailsUpdate>,
                loader:({params})=>fetch(`http://localhost:5000/strip/${params.id}`)
            },
            {
                path:'/printer/update/:id',
                element:<PrinterDetailsUpdate></PrinterDetailsUpdate>,
                loader:({params})=>fetch(`http://localhost:5000/printer/${params.id}`)
            },
            {
                path:'/scanner/update/:id',
                element:<ScanerDetailsUpdate></ScanerDetailsUpdate>,
                loader:({params})=>fetch(`http://localhost:5000/scanner/${params.id}`)
            },
            {
                path:'/servers/update/:id',
                element:<ComputerServersDetailsUpadate></ComputerServersDetailsUpadate>,
                loader:({params})=>fetch(`http://localhost:5000/servers/${params.id}`)
            },
            {
                path:'/storage/update/:id',
                element:<DataStorageDetailsUpdate></DataStorageDetailsUpdate>,
                loader:({params})=>fetch(`http://localhost:5000/storage/${params.id}`)
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