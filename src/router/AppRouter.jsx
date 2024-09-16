import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main";
import Home from "../shared/components/home";
import World from "../shared/components/world-News";
import Login from "../shared/components/login";
import Register from "../shared/components/register";
import Sport from "../shared/components/sportnews";
import MovieNews from "../shared/components/moivesnews";
import Politics from "../shared/components/politics";

const AppRouter = () =>{
    return(
   <>
   <BrowserRouter>
     <Routes>
        <Route element={<Main/>}>
           <Route path="/" element={<Home/>}/>
           <Route path="/World" element={<World/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/sport" element={<Sport/>}/>
            <Route path="/movie" element={<MovieNews/>}/>
            <Route path="/politics" element={<Politics/>}/>


        </Route>
     </Routes>
   
   
   </BrowserRouter>
   </>
   
      );
   }
   
export default AppRouter;
   
   
