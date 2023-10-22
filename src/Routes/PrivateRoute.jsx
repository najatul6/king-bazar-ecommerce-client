import { useContext } from "react";
import { AuthContext } from "../common/provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location=useLocation()

    if(loading){
        return <p className="loading loading-dots loading-lg flex justify-center items-center max-w-[1440px] mx-auto h-screen"></p>
    }
    if(user){
       return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;