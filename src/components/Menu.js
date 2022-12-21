import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {

  return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/page1">
        <button>page1</button>
      </Link>
      <Link to="/page2">
        <button>page2</button>
      </Link>
    </div>
  );
}

export default Menu