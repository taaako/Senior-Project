import React from 'react';
import './Layout.css';

const Layout = () => {
  return (
    <div>
      <div className="layoutBoxFirst">
        <div className="layoutBox">
          <p>about</p>
        </div>
        <div className="layoutBox">
          <p>images</p>
        </div>
      </div>
      <div className="layoutBoxSecond">
        <div className="layoutBox">
          <p>words</p>
        </div>
        <div className="layoutBox">
          <p>random</p>
        </div>
      </div>
    </div>
  );
}

export default Layout;