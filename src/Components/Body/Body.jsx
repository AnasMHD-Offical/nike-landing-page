import shoeImg from "./Assets/shoe_image.png"
import flipkart from "./Assets/flipkart.png"
import amazon from "./Assets/amazon.png"
import "./Body.css"
const Body = () =>{
    return(
        <div className="container">
        <div className="main">
            <div className="brand-content">
                <h2 className="brand-tagline">
                    YOUR FEET DESERVES <br /> THE BEST
                </h2>
                <p className="brand-text">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="brand-btns">
                    <button className="shop-now-btn">Shop Now</button>
                    <button className="category-btn">Category</button>
                </div>
                <div className="availiable-platforms">
                    <p className="ap-text"> Also Available On</p>
                    <div className="ap-img">
                        <img src={flipkart} alt="flipkart" className="flipkart" />
                        <img src={amazon} alt="amazon" className="amazon" />
                    </div>
                </div>
            </div>
            <div className="brand-shoe">
                <img src={shoeImg} alt="nike-shoe" className="shoe-img" />
            </div>
        </div>
        </div>
    )
}
export default Body