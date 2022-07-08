

export default function ContactUsDisplay() {
    return(
        <div className="contactUsDisplay">
            <div className="row">
                <div className="col" style={{paddingLeft: "20px", paddingTop: "20px"}}>
                    <h1 className="ourFont ourGreen fontSize16" style={{fontWeight: 'bold'}}>Request a Quote</h1>
                    <h3 className="fontSize36" style={{fontWeight: 'bold'}}>Search no more - The right telephony solution for your enterprise is here! </h3>
                    <p className="ourFont fontSize16">Contact out Voysis experts today and get the information you need on our IP solutions!</p>
                </div>
            </div>
            <div>
                <div className="row" style={{paddingTop: "25px"}}>
                    <div className="col-4">
                        <div className="contactUcIcon">
                            <img src="/assets/icons/messageIcon.svg" alt="message icon" style={{width: '100px'}}/>
                        </div>
                    </div>
                    <div className="col-8 centerItem centerItemV centerText">
                        <h3 className="ourFont fontSize16" style={{fontWeight: "bold"}}>Professional Support</h3>
                    </div>
                </div>
                <div className="row" style={{paddingTop: "25px"}}>
                    <div className="col-4">
                        <div className="contactUcIcon centerItem centerItemV" style={{width: '110px', height: "100px"}}>
                            <img src="/assets/icons/ciscoLogo.png" alt="message icon" style={{width: '80px'}}/>
                        </div>
                    </div>
                    <div className="col-8 centerItem centerItemV centerText">
                        <h3 className="ourFont fontSize16" style={{fontWeight: "bold"}}>Cloud Solution Powered by Cisco Broadsoft</h3>
                    </div>
                </div>
                <div className="row" style={{paddingTop: "25px"}}>
                    <div className="col-4">
                        <div className="contactUcIcon centerItem centerItemV" style={{width: '110px', height: "100px"}}>
                            <img src="/assets/icons/circlePhonIcon.svg" alt="message icon" style={{width: '100px'}}/>
                        </div>
                    </div>
                    <div className="col-8 centerItem centerItemV centerText">
                        <h3 className="ourFont fontSize16" style={{fontWeight: "bold"}}>Cloud Solution Powered by Cisco Broadsoft</h3>
                    </div>
                </div>
                <div className="row" style={{paddingTop: "25px"}}>
                    <div className="col-4">
                        <div className="contactUcIcon centerItem centerItemV" style={{width: '110px', height: "100px"}}>
                            <img src="/assets/icons/teamsIcon.png" alt="message icon" style={{width: '100px'}}/>
                        </div>
                    </div>
                    <div className="col-8 centerItem centerItemV centerText">
                        <h3 className="ourFont fontSize16" style={{fontWeight: "bold"}}>Cloud Solution Powered by Cisco Broadsoft</h3>
                    </div>
                </div>
                <div className="row" style={{paddingTop: "25px", paddingBottom: "25px"}}>
                    <div className="col-4">
                        <div className="contactUcIcon centerItem centerItemV" style={{width: '110px', height: "100px"}}> 
                            <img src="/assets/services/webexLogo.png" alt="message icon" style={{width: '100px'}}/>
                        </div>
                    </div>
                    <div className="col-8 centerItem centerItemV centerText">
                        <h3 className="ourFont fontSize16" style={{fontWeight: "bold"}}>Cloud Solution Powered by Cisco Broadsoft</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}