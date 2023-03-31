import React, { useState, useEffect } from 'react';
import HotelCard from './HotelCard';

function HotelsPage() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/hotels')
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Hotels Page</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto'
          }}
        >
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotelsPage;


