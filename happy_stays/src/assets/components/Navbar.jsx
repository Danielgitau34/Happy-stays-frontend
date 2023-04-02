import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/home/moringa/Downloads/IMG_1667289734979.jpg';


function Navbar() {
  const handleLogout = () => {
    fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      window.location.href = '/login';
    });
  };

  const linkStyles = {
    padding: '0 10px',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold'
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '60px',
        backgroundColor: 'darkblue',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        zIndex: 999
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={logo}
          alt="Logo"
          style={{ height: '50px', width: '50px', borderRadius: '50%' }}
        />
        <div style={{ marginLeft: '10px', textAlign: 'center' }}>
          <h3>Happy-stays</h3>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <NavLink
          to="/main"
          exact
          style={linkStyles}
          activeStyle={{
            background: 'white'
          }}
        >
          Main
        </NavLink>
        <NavLink
          to="/hotels"
          exact
          style={linkStyles}
          activeStyle={{
            background: 'white'
          }}
        >
          Hotels
        </NavLink>
        <NavLink
          to="/restaurants"
          exact
          style={linkStyles}
          activeStyle={{
            background: 'white'
          }}
        >
          Restaurants
        </NavLink>
        <button onClick={handleLogout} style={{color: "white", backgroundColor: "transparent", border: "none", fontWeight: "bold"}}>Sign Out</button>
      </div>
    </div>
  );
}
export default Navbar;