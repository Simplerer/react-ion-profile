import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import pages from "./pages"

const { About, Portfolio, Contact, Resume } = pages


function Project() {

  const [currentPage, setCurrentPage] = useState('About')
  // const [] = useState('')
  const pageChanger = (page) => setCurrentPage(page)

  let view

  switch (currentPage) {
    case 'Portfolio':
      view = <Portfolio />;
      break;
    case 'Contact':
      view = <Contact />;
      break;
    case 'Resume':
      view = <Resume />;
      break;
    case 'About':
      view = <About />;
      break;
  }






  return (
    <>
      <Header
        pageChanger={pageChanger} />
      <div>{view}</div>
      <Footer />
    </>
  )
}

export default Project;
