
export default function PriceCard(props) {
    function cardSelector(card) {
        if (card === 1) {
            const info = {
                text1: "Call Waiting, Hold, Transfer",
                text2: "Forward 3-way",
                text3: "Calling Caller ID: Name and Phone Number",
                text4: "Malicious Call Trace",
                text5: "Malicious Call",
                text6: "Trace Web Portal (Reporting)",
            }
            return info;
        }else if (card === 2) {
            const info = {
                text1: "7-way Calling",
                text2: "Selective Call Forward",
                text3: "Softphone with Cisco Webex",
                text4: "Instant Messaging and Presence",
                text5: "Personalized Music on Hold",
                text6: "Voicemail"
            }
            return info;
        }else if (card === 3) {
            const info = {
                text1: "Call Waiting, Hold, Transfer",
                text2: "Forward 3-way",
                text3: "Calling Caller ID: Name and Phone Number",
                text4: "Malicious Call Trace",
                text5: "Malicious Call",
                text6: "Trace Web Portal (Reporting)",
            }
            return info;
        }
    }
    return(
        <div className="priceCard" style={{backgroundColor: (props.card === 2 ? "#333333" : "#ffff"), color: (props.card === 2 ? "#ffff" : "#333333")}}>
            <div className="row" style={{borderBottom: "1px solid", borderColor: (props.card === 2 ? "#ffff" : "#333333") ,margin: "0"}}>
                <div className="col" style={{paddingTop: "20px", paddingLeft: "30px"}}>
                    <h1 className="ourFont fontSize20" style={{fontWeight: "bold"}}>{props.title}</h1>
                    <p className="fontSize32" style={{fontWeight: "bold"}}>{props.price}<span className="fontSize16">/month</span></p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className={(props.card === 3 ? "" : "noDisplay")} style={{paddingTop: "10px", paddingLeft: "10px"}}>
                        <img src="/assets/services/teamsLogo.png" alt="Microsoft Teams Logo" style={{width: "150px"}} />
                        <h6 className="ourFont fontSize14" style={{fontWeight: "bold", marginTop: "10px", marginBottom: "0"}}>MS Teams Integration Plus</h6>
                    </div>
                    <div style={{paddingTop: "30px", paddingLeft: "10px"}}>
                        <p className="ourFont fontSize14 pricesTextFix">- {cardSelector(props.card).text1}</p>
                        <p className="ourFont fontSize14 pricesTextFix">- {cardSelector(props.card).text2}</p>
                        <p className="ourFont fontSize14 pricesTextFix">- {cardSelector(props.card).text3}</p>
                        <p className="ourFont fontSize14 pricesTextFix">- {cardSelector(props.card).text4}</p>
                        <p className="ourFont fontSize14 pricesTextFix">- {cardSelector(props.card).text5}</p>
                        <p className="ourFont fontSize14 pricesTextFix">- {cardSelector(props.card).text6}</p>
                    </div>
                </div>
            </div>
            <div className={"row " + (props.card === 3 ? "cardButtonRowPad3" : "cardButtonRowPad")}>
                <div className="col centerText">
                    <button className="greenButton" type="button" style={{width: "150px", boxShadow: "0px 2px 10px 2px #808080"}}>Get Started</button>
                </div>
            </div>
        </div>
    );
}