import React, { useState } from 'react';

import PriceCard from "../components/PriceCard";

export default function PriceSection() {
    function lookUp(priceState) {
        if (priceState == 1) { // 1-20
            const info = {
                basic: "$19.99",
                exec: "$29.99",
                execTeams: "$29.99"
            }
            return info;
        } else if (priceState == 2) { // 21-50
            const info = {
                basic: "$29.99",
                exec: "$39.99",
                execTeams: "$49.99"
            }
            return info;
        }else if (priceState == 3) { // 50-99
            const info = {
                basic: "$39.99",
                exec: "$49.99",
                execTeams: "$59.99"
            }
            return info;
        }else if (priceState == 4) { // 100-249
            const info = {
                basic: "$49.99",
                exec: "$59.99",
                execTeams: "$69.99"
            }
            return info;
        }else if (priceState == 5) { // 250
            const info = {
                basic: "$59.99",
                exec: "$69.99",
                execTeams: "$79.99"
            }
            return info;
        }
    }

    const [priceLevel, setPriceLevel] = useState(1)
    function refreshPrices() {
        setPriceLevel(document.getElementById("myRange").value)
    }

    return(
        <section>
            <div className="row">
                <div className="col centerText">
                    <h1 className="ourFont fontSize16 ourGreen" style={{fontWeight: 'bold', paddingTop: "30px", paddingBottom: "30px"}}>Plans and Pricing</h1>
                    <h1 className="ourFont fontSize32" style={{fontWeight: 'bold'}}>Maximize your telephone features at the best price</h1>
                </div>
            </div>
            <div className="row">
                <div className="col centerItem">
                    <div className="slideContainer">
                        <input onInput={refreshPrices} type="range" min="1" max="5" defaultValue="1" className="theSlider" id="myRange" />
                        <p className="ourFont sliderMobileFontSize" style={{fontWeight: 'bold'}}>1-20</p>
                        <p className="ourFont p21-50 sliderMobileFontSize" style={{fontWeight: 'bold'}}>21-50</p>
                        <p className="ourFont p50-99 sliderMobileFontSize" style={{fontWeight: 'bold'}}>50-99</p>
                        <p className="ourFont p100-249 sliderMobileFontSize" style={{fontWeight: 'bold'}}>100-249</p>
                        <p className="ourFont p250 sliderMobileFontSize" style={{fontWeight: 'bold'}}>250+</p>
                        <div className="slideLabels">
                        </div>
                    </div>
                </div>
            </div>
            <div className="row priceCardFix">
                <div className="col-md centerItem priceCardPad" id="box1">
                    <div id="card1">
                        <PriceCard title={"Basic"} price={lookUp(priceLevel).basic} card={1} />
                    </div>
                </div>
                <div className="col-md centerItem priceCardPad" id="box3">
                    <div id="card2">
                        <PriceCard title={"Executive"} price={lookUp(priceLevel).exec} card={2} />
                    </div>
                </div>
                <div className="col-md centerItem priceCardPad" id="box2">
                    <div id="card3">
                        <PriceCard title={"Executive + MS Teams"} price={lookUp(priceLevel).execTeams} card={3} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col centerText">
                    <p className="ourFont fontSize14">*Prices subject to change based on number of users</p>
                </div>
            </div>
            <div className="row" style={{paddingBottom: "20px"}}>
                <div className="col myAlignRight">
                    <img src="/assets/goingvoipLogo2.png" alt="GoingVoip logo"/>
                </div>
            </div>
        </section>
    );
}