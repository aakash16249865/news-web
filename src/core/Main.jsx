import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Main = () =>{
    return(
     <>
     <Header/>
     <main>
      <Outlet/>
     </main>
     <Footer/>     
     </>
   
      );
   }
   
export default Main;