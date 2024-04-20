import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({children}) {
  return (
    <div>
      <div
        className="content font-barlow text-secondary"
        style={{
          "background-image": "linear-gradient(to right, #789FDA , #DEAABC)",
        }}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout