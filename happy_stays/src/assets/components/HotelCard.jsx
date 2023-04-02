import { Link } from 'react-router-dom';

function HotelCard({ hotel }) {
  return (
 Ochieng
    <Link to={`/hotels/${hotel.id}`}>
      <div
        style={{
          width: '100%',
          height: '400px',
          padding: '10px',
          boxSizing: 'border-box',
          border: '1px solid darkblue',
          margin: '10px'

    <div
      style={{
        width: '25%',
        height: '300px',
        padding: '10px',
        boxSizing: 'border-box',
        backgroundColor: '#f5f5f5',
        border: '1px solid #1c2e54',
        borderRadius: '5px'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          backgroundColor: '#fff',
          borderRadius: '5px',
          overflow: 'hidden'
 main
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            backgroundColor: '#fff',
            borderRadius: '5px',
            overflow: 'hidden',
            border: '1px solid darkblue'
          }}
        >
          <img
            src={hotel.image_url}
            alt={hotel.name}
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <div style={{ padding: '10px' }}>
            <h3>{hotel.name}</h3>
            <p>{hotel.location}</p>
            <p>{hotel.description}</p>
            <p>{hotel.price_range}</p>
            <p>{hotel.rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HotelCard;