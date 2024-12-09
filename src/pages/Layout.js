import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout.css";

const Layout = () => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false); // Cart modal state
  const [showLogin, setShowLogin] = useState(false); // Login modal state
  const [credentials, setCredentials] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  // Scroll to the section when a link is clicked
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Add to Cart Handler
  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.name === product.name);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // Update cart count based on total quantity in cart
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
  };

  // Cart Modal Handlers
  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  // Login Modal Handlers
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  // Handle Login Form Submission
  const handleLogin = () => {
    if (credentials.name && credentials.password) {
      alert(`Welcome, ${credentials.name}!`);
      setShowLogin(false); // Close the modal
    } else {
      alert("Please enter both name and password!");
    }
  };

  return (
    <div className="layout-container">
      <Navbar bg="light" expand="lg" className="navbar-full">
        <Container>
          <Navbar.Brand as={Link} to="/">The Flower Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* Home Navigation */}
              <li className="nav-item" style={{ listStyleType: "none" }}>
                <button
                  className="nav-link"
                  style={{ fontSize: "15px", border: "none", background: "none" }}
                  onClick={() => scrollToSection('Home')}
                >
                  Home
                </button>
              </li>

              {/* Same Day Delivery Navigation */}
              <li className="nav-item" style={{ listStyleType: "none" }}>
                <button
                  className="nav-link"
                  style={{ fontSize: "15px", border: "none", background: "none" }}
                  onClick={() => scrollToSection('Same Day Delivery')}
                >
                  Same Day Delivery
                </button>
              </li>

              {/* Birthday Flowers Navigation */}
              <li className="nav-item" style={{ listStyleType: "none" }}>
                <button
                  className="nav-link"
                  style={{ fontSize: "15px", border: "none", background: "none" }}
                  onClick={() => scrollToSection('BirthdayFlowers')}
                >
                  Birthday Flowers
                </button>
              </li>
            </Nav>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            <div className="list">
              <button
                type="button"
                className="btn btn-light"
                onClick={handleShowCart}
              >
                <i className="bx bx-cart-alt"></i> Cart (<span>{cartCount}</span>)
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleShowLogin} // Show login modal
              >
                Login
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Cart Modal */}
      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length > 0 ? (
            cart.map((item, idx) => (
              <div key={idx} className="cart-item d-flex align-items-center mb-3">
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "50px", height: "50px", marginRight: "10px" }}
                />
                <div>
                  <p style={{ margin: 0 }}>{item.name}</p>
                  <small>Quantity: {item.quantity}</small>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Close
          </Button>
          <Button variant="primary" onClick={() => navigate("/checkout")}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Name Field */}
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={credentials.name}
                onChange={(e) =>
                  setCredentials((prev) => ({ ...prev, name: e.target.value }))
                }
                required
                aria-describedby="nameHelpBlock"
              />
              {!credentials.name && (
                <Form.Text className="text-danger" id="nameHelpBlock">
                  Name is required.
                </Form.Text>
              )}
            </Form.Group>

            {/* Password Field */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials((prev) => ({ ...prev, password: e.target.value }))
                }
                required
                aria-describedby="passwordHelpBlock"
              />
              {!credentials.password && (
                <Form.Text className="text-danger" id="passwordHelpBlock">
                  Password is required.
                </Form.Text>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleLogin}
            disabled={!credentials.name || !credentials.password}
          >
            Login
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Pass context for child components */}
      <Outlet context={{ handleAddToCart, cart, cartCount }} />
    </div>
  );
};

export default Layout;
