
export default function Services() {
    return(
        <section>
            <div className="row" style={{paddingBottom: "50px", paddingTop: "50px"}}>
                <div className="col-md-5 centerText">
                    <h1 className="ourFont fontSize48" style={{fontWeight: "bold"}}>Why Choose <br /> GoingVoIP</h1> 
                </div>
            </div>
            <div className="row" id="servicesRowImg" style={{paddingBottom: "50px", paddingTop: "0", paddingLeft: "0"}}>
                <div className="col-5" id="officeImgContainer">
                    <img className="officePicRounding" style={{width: "630px", height: "654px"}} src="/assets/services/officePic.png" alt="office image"/>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col-6 centerText">
                            <div>
                                <img style={{width: "81px", height: "81px"}} src="/assets/services/profSupport.png" alt="support image"/>
                                <h6 className="ourFont fontSize24 servicesFontMobile" style={{paddingTop: "20px", fontWeight: "bold"}}>Professional Support</h6>
                            </div>
                        </div>
                        <div className="col-6 centerText">
                            <div>
                                <img style={{width: "153px", height: "81px"}} src="/assets/services/ciscoLogo.png" alt="cisco logo"/>
                                <h6 className="ourFont fontSize24 servicesFontMobile" style={{paddingTop: "20px", fontWeight: "bold"}}>Cloud Solution Powered by Cisco Broadsoft</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop: "20px"}}>
                        <div className="col-6 centerText">
                            <div className="industryGradeDiv">
                                <img style={{width: "81px", height: "81px"}} src="/assets/services/industryGrade.png" alt="support image"/>
                                <h6 className="ourFont fontSize24 servicesFontMobile" style={{paddingTop: "20px", fontWeight: "bold"}}>Industry Grade Contact Center Experts</h6>
                            </div>
                        </div>
                        <div className="col-6 centerText">
                            <div>
                                <img className="teamsLogo" src="/assets/services/teamsLogo.png" alt="teams logo"/>
                                <h6 className="ourFont fontSize24 servicesFontMobile" style={{paddingTop: "20px", fontWeight: "bold"}}>MS Teams Voice Integration Powered by SimplyVoysis</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop: "20px"}}>
                        <div className="col centerText">
                            <div>
                                <img style={{width: "110px", height: "81px"}} src="/assets/services/webexLogo.png" alt="webex logo"/>
                                <h6 className="ourFont fontSize24 servicesFontMobile" style={{paddingTop: "20px", fontWeight: "bold"}}>Cisco Webex Integration</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop: "20px"}}>
                        <div className="col centerItem">
                            <div className="monthlyFeeDiv centerText" style={{paddingBottom: "20px"}}>
                                <p className="ourFont fontSize20 colorFFF" id="servicesFontMobile" style={{paddingTop: "20px", fontWeight: "bold"}}>Get high-end telecom functionalities for a low monthly fee</p>
                                <button className="greenButton colorFFF" type="button" style={{width: "140px"}}>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}