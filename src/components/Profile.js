import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Project from "./pages/Project";


function Profile () {

   const [currentPage, setCurrentPage] = useState('About')

   const pageChanger = (page) => setCurrentPage(page)




return (
   <>
    <Header
    pageChanger={pageChanger}/>
    <Project
    currentPage={currentPage}/>
    <Footer/>
   </>
)
}

export default Profile;
