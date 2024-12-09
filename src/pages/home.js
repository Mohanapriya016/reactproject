
import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom"; // Correct imports
import './Home.css';
// Import images
import a from './images/a.jpeg';
import b from './images/b.jpeg';
import c from './images/c.jpeg';
import d from './images/d.jpeg';
import n from './images/n.jpeg';
import a2 from './images/a2.jpeg';
import a4 from './images/a4.jpeg';
import a5 from './images/a5.jpeg';
import a6 from './images/a6.jpeg';
import b5 from './images/b5.jpeg';
import b6 from './images/b6.jpeg';
import b7 from './images/b7.jpeg';
import b8 from './images/b8.jpeg';
import a1 from './images/a1.jpeg';
import b1 from './images/b1.jpeg';
import lo from './images/lo.jpeg';
import you from './images/you.png';
import face from './images/face.png';
import sa from './images/sa.jpeg';
import sa1 from './images/sa1.jpeg';
import sa2 from './images/sa2.jpeg';
import sa3 from './images/sa3.jpeg';
import sa4 from './images/sa4.jpeg';
import sa5 from './images/sa5.jpeg';
import sa6 from './images/sa6.jpeg';
import sa7 from './images/sa7.jpeg';
import ba from './images/ba.jpeg';
import ba1 from './images/ba1.jpeg';
import ba2 from './images/ba2.jpeg';
import ba3 from './images/ba3.jpeg';
import ba4 from './images/ba4.jpeg';
import ba5 from './images/ba5.jpeg';
import ba6 from './images/ba6.jpeg';
import ba7 from './images/a7.jpeg';
const Home = () => {
  const { handleAddToCart } = useOutletContext(); // Access the Add to Cart function
  const navigate = useNavigate();

  return (
    <div>
      <br />
      {/* Carousel Section */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={a} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={b} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={c} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={d} className="d-block w-100" alt="Slide 4" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
     

      {/* Featured Products Section */}
      <div id="Home" className="container-fluid">
  <h3 style={{ padding: '1%' }}>Home</h3>
  <div className="row">
          {[{ img: a1 }, { img: n }, { img: b1 }].map((product, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card">
                <img src={product.img} className="card-img-top" alt={product.name} />
                <h5 className="card-title" style={{ marginLeft: '7px' }}>{product.name}</h5>
                <p style={{ padding: '1%' }}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3 style={{ padding: '1%' }}>Bestselling Blooms</h3>

      {/* Bestselling Products Section */}
      <div className="container-fluid">
        <div className="row">
          {[{ img: a2, name: 'Pastel Paradise', price: 1899 },
            { img: a4, name: 'Sweetheart Charm', price: 2099 },
            { img: a5, name: 'Wishful Blooms', price: 1800 },
            { img: a6, name: 'Sweet Indulgence', price: 1509 },
            { img: b5, name: 'Mahogany Sunset', price: 1509 },
            { img: b7, name: 'The Royal Garden', price: 1509 },
            { img: b8, name: 'Meadow Dance', price: 1509 },
            { img: b6, name: 'Sweet Indulgence', price: 1509 }].map((product, idx) => (
            <div className="col-md-3 mb-4" key={idx}>
              <div className="card" style={{ position: 'relative' }}>
                <img src={product.img} className="card-img-top" alt={product.name} />
                <h5 style={{ color: 'gray', marginLeft: '10px' }}>{product.name}</h5>
                <p style={{ padding: '2%' }}>
                  <span>
                    <span style={{ marginLeft: '5px', color: 'green', fontWeight: 'bold' }}>₹</span>
                    {product.price}
                  </span>
                </p>
                <button
                  type="button"
                  className="btn btn-primary buy-now-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br /><br />
      <div id="Same Day Delivery" className="container-fluid">
  <h3 style={{ padding: '1%' }}>Same Day Delivery</h3>
  <div className="row">
    {[{ img: sa, name: 'Mauve Melody', price: 1899 },
      { img: sa1, name: 'Lemonade Wishes', price: 1400 },
      { img: sa2, name: 'King Blossom', price: 1801 },
      { img: sa3, name: 'Floral Enchantment Medium', price: 1519 },
      { img: sa4, name: 'The Prosperity Duet', price: 1109 },
      { img: sa5, name: 'Purple Majesty', price: 1209 },
      { img: sa6, name: 'Garden of Grace', price: 1109 },
      { img: sa7, name: 'Shades Of Emotions', price: 1009 }].map((product, idx) => (
      <div className="col-md-3 mb-4" key={idx}>
        <div className="card" style={{ position: 'relative' }}>
          <img src={product.img} className="card-img-top" alt={product.name} />
          <h5 style={{ color: 'gray', marginLeft: '10px' }}>{product.name}</h5>
          <p style={{ padding: '2%' }}>
            <span>
              <span style={{ marginLeft: '5px', color: 'green', fontWeight: 'bold' }}>₹</span>
              {product.price}
            </span>
          </p>
          <button
            type="button"
            className="btn btn-primary buy-now-btn"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

<div id="BirthdayFlowers" className="container-fluid">
  <h3 style={{ padding: '1%' }}>Birthday Flowers</h3>
  <div className="row">
          {[{ img: ba, name: 'Floral Confetti', price: 2899 },
            { img: ba1, name: 'Sweet Sentiments', price: 2199 },
            { img: ba2, name: 'Birthday Vibes', price: 1900 },
            { img: ba3, name: 'Midnight Cheers', price: 2509 },
            { img: ba4, name: 'Floral Fiona', price: 1209 },
            { img: ba5, name: 'Birthday Melody', price: 1909 },
            { img: ba6, name: 'Where Love Blooms', price: 2300 },
            { img: ba7, name: 'Pink Beauty Flower Box', price: 1709 }].map((product, idx) => (
            <div className="col-md-3 mb-4" key={idx}>
              <div className="card" style={{ position: 'relative' }}>
                <img src={product.img} className="card-img-top" alt={product.name} />
                <h5 style={{ color: 'gray', marginLeft: '10px' }}>{product.name}</h5>
                <p style={{ padding: '2%' }}>
                  <span>
                    <span style={{ marginLeft: '5px', color: 'green', fontWeight: 'bold' }}>₹</span>
                    {product.price}
                  </span>
                </p>
                <button
                  type="button"
                  className="btn btn-primary buy-now-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div>
        <h3 style={{ padding: '1%' }}>Customer Reviews</h3>
        <div className="container-fluid">
          <div className="row">
            {[{ name: "John Doe", review: "Beautiful flowers and excellent service!", rating: 5, img: a4 },
              { name: "Jane Smith", review: "Loved the variety of blooms. Highly recommend!", rating: 4, img: a2 },
              { name: "Alex Johnson", review: "Great quality and timely delivery.", rating: 5, img: a5 }].map((review, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div className="card p-3">
                  <img src={review.img} className="card-img-top" alt={`${review.name}'s image`} style={{ height: '200px', objectFit: 'cover' }} />
                  <h5>{review.name}</h5>
                  <p>{review.review}</p>
                  <p>
                    <strong>Rating:</strong> {'⭐'.repeat(review.rating)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscribe Box Section */}
      <div id="subscribe-box" className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card text-center p-4">
              <h4>Subscribe for Updates</h4>
              <p>Stay up to date with our latest offers and new blooms.</p>
              <form>
                <input type="email" className="form-control mb-2" placeholder="Enter your Email" required />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
         
        </div>

      </div>
{/* Instagram Image Section */}
<div className="container my-4">
        <h3 style={{ textAlign: 'center' }}></h3>
        <div className="text-center">
  <img src={lo} alt="Instagram" className="img-fluid mx-2" style={{ width: '3%', borderRadius: '10px' }} />
  <img src={you} alt="Instagram" className="img-fluid mx-2" style={{ width: '3%', borderRadius: '10px' }} />
  <img src={face} alt="Instagram" className="img-fluid mx-2" style={{ width: '3%', borderRadius: '10px' }} />
</div>

    
    </div>
    <div className='col col-sm-12 col-md-12 col-lg-12 text-center'>
                        <br/>
                        <h6>© Copyright 2024 All Right Reserved</h6>

                    </div>

    </div>

  );
};

export default Home;
