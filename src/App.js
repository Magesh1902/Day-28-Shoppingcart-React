import Cart from "./Cart";
import CartItem from "./CartItem";
import { useState } from "react";

function App() {
  const [product, setProducts] = useState([
    {
      id: 1,
      title: "Audi",
      price1: 40000,
      view: true,
      img: "https://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Red-Audi-TT-Sportback-Car-PNG-image.png",
    },
    {
      id: 2,
      title: "innova",
      rating: true,
      price: 20000,
      price1: 18000,
      sale: true,
      img: "https://cdni.autocarindia.com/ExtraImages/20220105033033_innova_crysta.jpg",
    },
    {
      id: 3,
      title: "BMW",
      price: 500000,
      price1: 250000,
      sale: true,
      img: "https://carleaseoffers-clo.com/wp-content/uploads/2018/02/usc80bms282a021001.png",
    },
    {
      id: 4,
      title: "Jaguar",
      rating: true,
      price1: 400000,
      img: "https://i.pinimg.com/originals/74/2c/0c/742c0c8ec1ea2e96df08b3810bb3fcfe.png",
    },
    {
      id: 5,
      title: "Bently",
      price: 500000,
      price1: 250000,
      sale: true,
      img: "data:image/jpeg;base64,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",
    },
    {
      id: 6,
      title: "Rolls Royce",
      price1: 1200000,
      view: true,
      img: "https://th.bing.com/th/id/R.9078c1897b5101c0afa5fec17c4ddc11?rik=WCeCzUMWGzkUTg&riu=http%3a%2f%2fwww.pngpix.com%2fwp-content%2fuploads%2f2016%2f06%2fPNGPIX-COM-Rolls-Royce-Wraith-Mansory-Car-PNG-Image.png&ehk=YGseiIuE%2bTiNpwxtHKCDpHIvVcrB3Y%2fLzDre0%2bErsAY%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 7,
      title: "Lamborghini",
      rating: true,
      price: 200000,
      price1: 180000,
      sale: true,
      img: "https://th.bing.com/th/id/OIP.y6sFCR-Ej5_N-T2kAvpdiwHaDc?pid=ImgDet&rs=1",
    },
    {
      id: 8,
      title: "polo",
      rating: true,
      price1: 400000,
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEhAUEBMSEhAVFRAXEBEQFhUXFREVFhUYGBgTExUYHSggGBolHRYVITIhJikrLi4vGB8zODMtNzQtLisBCgoKDg0OFQ8QFS0dFRktLSstKy0rKystKystLTctLTctKy0rLTctNy0rKy0rLS03LS0rLS0tKysrKysrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABFEAACAgECAwUFBgMGAQ0BAAABAgADEQQSBSExBhNBUWEiMnGBkQcUUqGxwSNC0UNicoKy8BUXJDNEU4OEkqKjwtLhFv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAQEBAQEAAAAAAAAAAAAAAAARASFR/9oADAMBAAIRAxEAPwDuMREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERMVd4OfDBIOfT/8wfnAyxMffL+JfqJ9Fq/iX6iB7ifARPsBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARE0+K65KKnssJCqPDqT0CqPEkkADzIgOI8SroA3k7myERQWewjwRBzP7StcT7SapQCtNdasQqJZZm52JAAKplUG4qM7jjPSRnAWt1T3XEgPZyycla61JCVp6E7mz/ADcifSF4rqWOsNfeA9wcZ6Dew2gYPq9nzrEsFrtt1HU6ipyP5DSUVvTeHLL8eeJRftA4BVag1dQsTAPeorsAcHaxYA43KeuOo5yz8Q4ZalFl7XKEWs2FcHIAXIXPn0Eh+yfGa9W2p0bc3KC2sHo5xtsQfFcfWFcwTS0eIJ+LGbtOl03/AGY+p/rJDR9gdXa+pWlqsU27FFrMrMhUPW/JTyKnHxVpE8U0NuktNV2zeAp/hsHUg+o/Q85nqpvSJp/5e8Q+aWuP0MmtFyI2arWL8NVePyD4MpVLnaz9VBAPz/3+Ykroe0b1Eba9NgHkrUq3yLH2vziq6LoddauMazVH4ujfm6t+smKeKatcbb1sH4b6lB+TIVH5Sk8a1fsaXV1ALTqFIZF6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Of8A5CSGn1NR8NDX/wCDdsf+8JCT5FF40Ol079NXo0P93QgfraZU+13H9doNQ1a2UvUQGpurprAtX5g4YHII+fQzUzMOto75djMdvXHI4PmM9DA86Pt1qC/8fUX93hsrp1pR92PZ5tWVxnr+vnFN2v4i2M6q34AgfoJ6PZweFjfNQf3mWjszkjNln+VB+5hXTvsg7N26zfq9fvuo2lNPXeSyWMSN1uxuRAxtB9WnY6KVRQqKqqOiqAAPgBOVdhNbdSFVr9bcoAAW0gqoHQKMchOo6PU94M4I+MI2IiICIiAiIgIiICIiAiIgIiICIiAiIgIiIHwqD1E1NRwumz361PxAm5ECsazsFw+33qEz6KP6SNs+yzh56Jt+AX+kvMQKH/yXaPwZx8Mf0n0fZfpPxPL3ECjD7MdH5v8AWZF+zTRf3/rLrECnL9m+h8m+syL9negH8h+stsQKunYLQD+zz85nr7FaEf2IlhiBEVdmNGvSlPpNqvhOnXpUg+Qm7EDEmnQdFUfATIBPsQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/9k=",
    },
  ]);

  const [cartitems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  //function for adding items to cart
  let handleCart = (item) => {
    setCartItems([...cartitems, item]);
    setTotal(total + item.price1);
  };

  //function for removing item from cart
  let handleRemoveCart = (item) => {
    let itemIndex = cartitems.findIndex((obj) => item.id === obj.id);
    cartitems.splice(itemIndex, 1);
    setCartItems([...cartitems]);
    setTotal(total - item.price1);
  };

  return (
    //Creating nav bar
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#start">
            <strong>Start Bootstrap</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active fw-6"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#about">
                  About
                </a>
              </li>
              <li>
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle text-muted"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#all">
                        All Products
                      </a>
                    </li>
                    <hr />
                    <li>
                      <a className="dropdown-item" href="#item">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#new">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <div className="btn btn-outline-dark p-1">
              <img
                alt="_targer"
                src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/30/000000/external-shopping-cart-cyber-monday-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
              />
              <a href="https://icons8.com/icon/8AfUMPlae06y/shopping-cart">
                {""}
              </a>{" "}
              Cart
              <span className="badge bg-dark rounded-pill ms-2">
                {" "}
                {cartitems.length}{" "}
              </span>
              <hr />
              <ol className="list-group list-group-numbered">
                {/* maping array data to cart component */}
                {cartitems.map((item) => {
                  return (
                    <CartItem item={item} handleRemoveCart={handleRemoveCart} />
                  );
                })}
              </ol>
              {/* display total amount in cart */}
              {cartitems.length > 0 ? (
                <div className="col-lg-12 text-center">
                  <h6>Total : {total}</h6>
                </div>
              ) : (
                <div className="col-lg-12 text-center">
                  <h6>No Items in Cart</h6>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="card text-center">
        <div className="card-body text-light division">
          <p className="card-title fw-6 font">Shop in style</p>
          <p className="card-text">With this shop hompeage template</p>
        </div>
      </div>
      <div className="container empty"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {/* maping product arrai to cart component to display items detail */}
              {product.map((product) => {
                return (
                  <Cart
                    key={product.id}
                    product={product}
                    cartItems={cartitems}
                    handleCart={handleCart}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="card text-center">
          <div className="card-body text-light division1">
            <p className="card-title text-center mt-5">
              Copyright © Your Website 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
