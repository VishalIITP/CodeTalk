import React from "react";
import './css/PaymentSuccess.css'

const PaymentSuccess = () => {

    return (
        <>
            <div className="bigBoxblack">
                <div className="bigBox">
                    <div class="card">
                        <div className="sbox">
                            <i class="checkmark">✓</i>
                        </div>
                        <h1>Success</h1>
                        <p>We received your purchase request;<br /> we'll be in touch shortly! after verification.</p>
                        <br />
                        <p>You will also recieve a Referral Code shortly!</p>
                        <p className="referalC">Get a cashback of Rs.30<br /> for every successful referral.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentSuccess;