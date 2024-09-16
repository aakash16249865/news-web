const Footer = () =>{
    return(
       <>
       <footer className="bg-gray-300 py-4">
   <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6 text-lg">
      <p className="text-center md:text-left">&copy; 2024 CNN. All Rights Reserved.</p>
      <ul className="flex space-x-6">
         <li className="hover:underline cursor-pointer">Privacy</li>
         <li className="hover:underline cursor-pointer">Terms</li>
         <li className="hover:underline cursor-pointer">Contact</li>
      </ul>
   </div> 
</footer>

       </>
   
      );
   }
   
export default Footer;