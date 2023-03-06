import {FaShoppingCart} from "react-icons/fa"
import {ShopD} from "../Data/Data"
import "./Shop.css"

const Shop = () => {
  return (
    <>
      <div>
        <h2>Our Online Gym Store</h2>
        <p>
            Gymat an unknown printer took galie type anscraey aretea bled make a type
            specimen bookayurived not onlyive centuries Gymat an unknown printer took
            galle type anscraey.
        </p>
      </div>
      
          <div>
            <div  className="main-container"  >
            {ShopD.map((store) => {
              return (
                <div className="container" key={store.id}>
                  <div className="first">
                    <img src={store.img} alt="" />
                  </div>
                  <div className="second">
                    <h3>{store.name}</h3>
                    <h3>$80:00</h3>
                    <button>
                      <FaShoppingCart />
                      Add to cart
                    </button>
                  </div>
                </div>
               )
              })}
            </div>
          </div>
          
       
      
    </>
  )
}

export default Shop