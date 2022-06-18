import React from 'react'
import Footer from './footer/footer'
import GlobalStyle from '../globalStyle/GlobalStyle'
import Navbar from '../components/navbar/navbar'

function Layout({ children, pageContext: { page } }) {
  return (
    <>
       <GlobalStyle/>
       <Navbar/>
          <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout
