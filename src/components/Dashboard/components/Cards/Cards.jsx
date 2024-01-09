import { iconsImgs } from "../../utils/images";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="grid-one-item grid-common grid-c1">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Cards</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } alt="plus Icon"/>
            </button>
        </div>
        <div className="grid-c1-content">
            <p>Codetalk ID</p>
            <div className="lg-value">VISHALIITP</div>
            <div className="card-wrapper">
                <span className="card-pin-hidden">DESIGNATION</span>
                <span>KNIGHT</span>
            </div>
            <div className="card-logo-wrapper">
                <div>
                    <p className="text text-silver-v1 expiry-text">CONTEST RATING</p>
                    <p className="text text-sm text-white">1700</p>
                </div>
     
            </div>
        </div>
    </div>
  )
}

export default Cards
