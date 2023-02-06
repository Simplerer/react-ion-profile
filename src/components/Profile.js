import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Project from "./pages/Project";


function Profile () {

return (
   <>
    <Header/>
    <Project/>
    <Footer/>
   </>
)
}

export default Profile;


// export default function PortfolioContainer() {
//   const [currentPage, setCurrentPage] = useState('Home');

//   // TODO: Add a comment describing the functionality of this method

//   // 

//   const renderPage = () => {
//     if (currentPage === 'Home') {
//       return <Home />;
//     }
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     if (currentPage === 'Blog') {
//       return <Blog />;
//     }
//     return <Contact />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       {/* // TODO: Add a comment describing what we are passing as props */}
//       <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
//       {/* // TODO: Add a comment explaining what is happening on the following line */}
//       {renderPage()}
//     </div>
//   );
// }