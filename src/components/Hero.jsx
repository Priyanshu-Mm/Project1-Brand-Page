import "./Hero.css";
function Hero() {
  return (
    <>
      <main className="hero-container">
        <div className="content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="hero-btn">
            <button className="ShopNow-btn">Shop Now</button>
            <button>Category</button>
          </div>
          <div className="shopping">
            <p>Also available On</p>
            <div className="brand-icon">
              <img src="public/Images/flipkart.png" alt="flipkart-logo" />
              <img src="public/Images/amazon.png" alt="amazon-logo" />
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src="public/Images/shoe_image.png" alt="" />
        </div>
      </main>
    </>
  );
}

export default Hero;
