import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                
            }
        ]
    }
])