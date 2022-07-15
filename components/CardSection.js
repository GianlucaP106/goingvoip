import CloudCard from "./CloudCard";

export default function CardSection() {
    return(
        <section className="cardSectionBg" id="productsSection">
            <section className="titleGradiantBg">
                <div className="row" style={{paddingTop: "50px"}}>
                    <div className="col centerText">
                        <h1 className="ourFont fontSize48" style={{fontWeight: "bold"}}> All your telephony needs in one place</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col centerText">
                        <img src="/assets/goingvoipLogo2.png" alt="GoingVoip Logo 2" style={{marginTop: "50px"}}/>
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="col centerText">
                        <h4 className="fontSize32 textShadow" style={{fontWeight: "bold"}}>Our Products</h4>
                    </div>
                </div>
                <div className="row" style={{paddingBottom: "100px", paddingTop: "50px"}}>
                    <div className="col-md-6 centerItem mobileCard" style={{}}>
                        <CloudCard title={"Contact Center"} theIcon={"/assets/contactCenterIcon.svg"} theAlt={"Contact Center Icon"} theLink={"/contact-center"} rightSide={false} style={{marginLeft: "20px", marginRight: "15px"}}/>
                    </div>
                    <div className="col-md-6 centerItem mobileCard">
                        <CloudCard title={"Cloud VoIP Telephony Solution"} theIcon={"/assets/cloudTelIcon.png"} theAlt={"Cloud Telephony Icon"} theLink={"/cloud-voip-telephony-solution"} rightSide={true} style={{marginLeft: "15px", marginRight: "20px"}}/>
                    </div>
                </div>
            </section>

        </section>

    );
}