import GetStarted from "../GetStarted";

export default function SolutionJourney() {
    return(
        <section>
            <div className="row" style={{paddingTop: "50px", paddingBottom: "20px"}}>
                <div className="col centerText">
                    <h3 className="ourFont fontSize20 ourGreen" style={{fontWeight: "bold", marginBottom: "25px"}}>Your journey to the cloud - starts here!</h3>
                    <h1 className="ourFont fontSize40" style={{fontWeight: "bold"}}>Migrating to cloud communications should be a key objective for any organization</h1>
                </div>
            </div>
            <div className="row" style={{paddingBottom: "30px", paddingTop: "20px"}}>
                
                <div className="col-md-3 mobileJourneyPad centerText">
                    <div style={{paddingLeft: "30px", paddingRight: "30px", display: "flex", alignItems: "center", flexDirection: "column"}}>
                            <div className="journeyIconDiv">
                                <img src="/assets/icons/secureConnectionIcon.png" alt="secure connection Icon" style={{width: "100px"}}/>
                            </div>
                        <h3 className="ourFont fontSize22" style={{fontWeight: "bold", marginBottom: "20px", marginTop: "20px"}}>Easy and Secure Connection</h3>
                        <p className="ourFont fontSiz16">Our SimplyVoysis solution is a multi-instances and dedicated server hosted within our Tier 3 Datacenter, which allows you to easily connect to via the internet.</p>
                    </div>
                </div>
                <div className="col-md-3 mobileJourneyPad centerText">
                    <div style={{paddingLeft: "30px", paddingRight: "30px", display: "flex", alignItems: "center", flexDirection: "column"}}>
                            <div className="journeyIconDiv">
                                <img src="/assets/icons/agreementIcon.png" alt="agreement Icon" style={{width: "100px"}}/>
                            </div>
                        <h3 className="ourFont fontSize22" style={{fontWeight: "bold", marginBottom: "20px", marginTop: "20px"}}>Agreements with SIP providers</h3>
                        <p className="ourFont fontSiz16">SimplyVoysis has wholesale agreements with multi- vendor SIP providers, creating better redundancy.</p>
                    </div>
                </div>
            
            
                <div className="col-md-3 mobileJourneyPad centerText">
                    <div style={{paddingLeft: "30px", paddingRight: "30px", display: "flex", alignItems: "center", flexDirection: "column"}}>
                            <div className="journeyIconDiv">
                                <img src="/assets/icons/burstableIcon.png" alt="burstable Icon" style={{width: "100px"}}/>
                            </div>
                        <h3 className="ourFont fontSize22" style={{fontWeight: "bold", marginBottom: "20px", marginTop: "20px"}}>Burstable SIP trunks</h3>
                        <p className="ourFont fontSiz16">SimplyVoysis offers burstable SIP trunks with quick turnaround for additional SIP trunks.</p>
                    </div>
                </div>
                <div className="col-md-3 mobileJourneyPad centerText">
                    <div style={{paddingLeft: "30px", paddingRight: "30px", display: "flex", alignItems: "center", flexDirection: "column"}}>
                            <div className="journeyIconDiv">
                                <img src="/assets/icons/internationalIcon.png" alt="secure connection Icon" style={{width: "100px"}}/>
                            </div>
                        <h3 className="ourFont fontSize22" style={{fontWeight: "bold", marginBottom: "20px", marginTop: "20px"}}>International Numbers</h3>
                        <p className="ourFont fontSiz16">SimplyVoysis also offers international numbers.</p>
                    </div>
                </div>
                
            </div>
            <div className="row" style={{paddingBottom: "50px"}}>
                <div className="col centerItem">
                    <GetStarted title={"Find out more about our Multimedia Contact Center functions"}/>
                </div>
            </div>
        </section>
    );
}