import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/Layout/MainLayout";
import Home from "../page/Home/Home/Home";







const routes = createBrowserRouter([
    {
        path : '/' ,
        element : <MainLayout></MainLayout>,
        children:[
            {
                path : '/' ,
                element : <Home></Home>
               
            
            },
            
               
            
        ]
    }
])

export default routes;