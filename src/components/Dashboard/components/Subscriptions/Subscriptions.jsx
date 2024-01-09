import { subscriptions } from "../../data/data"
import { iconsImgs } from "../../utils/images"
import "./Subscriptions.css";

const Subscriptions = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c5">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">TOPICS COVERED</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } alt="Check Icon" />
            </button>
        </div>
        <div className="grid-c5-content">
            <div className="grid-items">
                {
                    subscriptions.map((subscription) => (
                        <div className="grid-item" key = {subscription.id}>
                            <div className="grid-item-l">
                                <div className="icon">
                                    <img src={ iconsImgs.alert } alt="Check Icon" />
                                </div>
                                <p className="text text-silver-v1">ARRAY,HASHMAPS<span>56/200 QUES.</span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-silver-v1">MEDIUM</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Subscriptions
