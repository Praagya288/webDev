import flipkartIcon from "../assets/images/flipkartIcon.jpeg"
import AmazonIcon from "../assets/images/amazonIcon.png"
import nikeShoesPhoto from "../assets/images/nikeShoesPhoto.png"

function HeroSection() {
  return (
    <main>
      <div className="hero">
        <div className="hero-content">
          <h1>
            YOUR FEET DESERVES <br />
            THE BEST
          </h1>

          <p>
          Nike invests in play and sport for all kids, because an active next generation means a healthier and more equitable future.

          </p>

          <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Also available on</p>
            <div className="images">
              <img src={flipkartIcon} alt="" />
              <img src={AmazonIcon} alt="" />
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={nikeShoesPhoto} alt="" />
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
