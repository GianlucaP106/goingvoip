import GetStarted from "../GetStarted";
import ContactText from "../ContactCenter/ContactText";

export default function SolutionTitle() {
    return(
        <section>
            <div className="row d-flex" style={{paddingTop: "50px"}}>
                <div className="col" id="responsiveColSolution"></div>
                <div className="col-lg-5 solutionMobileCol" id="solution1">
                    <ContactText box={3} imgLink={"/assets/icons/cloudIcon.png"}/>
                </div>
                <div className="col" id="responsiveColSolution"></div>
                <div className="col-lg-5 solutionMobileCol centerItemV centerItem" id="solution2">
                    <img src="/assets/contact/office4.png" alt="office image" className="contactOfficeImages"/>
                </div>
                <div className="col" id="responsiveColSolution"></div>
            </div> 
            <div className="row" style={{paddingTop: "50px", paddingBottom: "50px", margin: "0"}}>
                <div className="col" id="responsiveColSolution"></div>
                <div className="col-lg-5 solutionMobileCol centerItemV centerItem">
                    <img src="assets/services/cloudFeatures.png" alt="cloud features" className="cloudFeaturesImg"/>
                </div>
                <div className="col-1" id="responsiveColSolution"></div>
                <div className="col-lg-5 solutionMobileCol">
                    <div>
                        <div className="row">
                            <div className="col" style={{paddingLeft: "0"}}>
                                <h1 className="ourFont fontSize36" style={{fontWeight: "bold"}}>Cloud-based Business Phone Systems</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{paddingLeft: "0"}}>
                                <div style={{paddingBottom: "10px", paddingTop: "10px"}}>
                                    <p className="ourFont fontSize16" >Migrating to cloud communications should be a key objective for any organization. SimplyVoysis is an enhanced and affordable cloud business phone system that allows you to modernize and host your business phone system in the cloud. </p>
                                    <p className="ourFont fontSize16" >Our SimplyVoysis platform has all the communication tools needed to make your business competitive. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6" style={{borderBottom: "1px solid black", borderTop: "1px solid black", paddingBottom: "20px", paddingTop: "20px", paddingLeft: "0"}}>
                                <h6 className="ourFont fontSize24 centerItemV" style={{fontWeight: "bold", marginBottom: "0"}}>See Features</h6>
                            </div>
                            <div className="col-6 myAlignRight" style={{borderBottom: "1px solid black", borderTop: "1px solid black", paddingBottom: "20px", paddingTop: "20px", paddingRight: "0"}}>
                                <div className="seeFeaturesButton centerItemV centerItem">
                                    <img src="/assets/icons/downArrow.png" alt="Down Arrow" style={{}}/>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="col" id="responsiveColSolution"></div>
            </div>
            <div className="row" style={{paddingBottom: "50px"}}>
                <div className="col centerItem">
                    <GetStarted title={"Get high-end telecom functionalities for a low monthly fee"}/>
                </div>
            </div>
        </section>
    );
}