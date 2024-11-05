import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';;
import ShopItem from './components/ShopItem.jsx';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Cart from './components/Cart.jsx';
import './App.css'
import denim from './assets/denim.png';
import casual from './assets/casual.png';
import tshirt from './assets/tshirt.png';
import kurti from './assets/kurti.png';
import saree from './assets/saree.png';
import slipper from './assets/slipper.png';



function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const items = [
    { id: 1, name: "Denim Shirt", price: 10.99, image: denim },
    { id: 2, name: "Casual Shirt", price: 12.99, image: casual},
    { id: 3, name: "T-Shirt", price: 12.99, image: tshirt},
    { id: 4, name: "Kurti", price: 12.99, image: kurti},
    { id: 5, name: "Saree", price: 12.99, image: saree},
    { id: 6, name: "Slipper", price: 12.99, image: slipper},
    // Add more items here
  ];

  return (
    <>
    <div>
      <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Shopping Zone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Shop</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <header className="bg-dark py-5">
    <div className="container px-4 px-lg-5 my-5">
      <div className="text-center text-white">
        <h1 className="display-4">Welcome to our Shop!</h1>
        <p className="lead">
          Shopping is the best way to make the most of your money.
        </p>
      </div>
    </div>
    </header>
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="row">
            {items.map(item => (
              <ShopItem key={item.id} item={item} addToCart={addToCart} />
            ))}
          </div>
        </div>
        <div className="col-lg-3">
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
    </div>
    <footer className="py-5 bg-dark">
      <Container>
        <p className="m-0 text-center text-white">
          Copyright &copy; Your Website 2024
        </p>
      </Container>
    </footer>
    </>
  );
}


export default App;