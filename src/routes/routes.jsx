import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/Layout/MainLayout";
import Home from "../page/Home/Home/Home";
import Services from '../page/Services/Services/Services'








const routes = createBrowserRouter([
    {
        path : '/' ,
        element : <MainLayout></MainLayout>,
        children:[
            {
                path : '/' ,
                element : <Home></Home>
               
            
            },
            {
                path : '/services',
                element : <Services></Services>
            }
           
            
             
            
        ]
    }
])

export default routes;