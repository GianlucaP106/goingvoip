

export default function SolutionDevice() {
    return(
        <section>
            <div className="row">
                <div className="col-md-5 centerItem">
                    <img src="/assets/cloud/uBossLoginImg.png" alt="uboss login image"/>
                </div>
                <div className="col-md-7 centerItem centerItemV">
                    <div style={{}}>
                        <h1 className="ourFont fontSize20 ourGreen" style={{fontWeight: "bold"}}>UBoss Self Serve Portal</h1>
                        <h3 className="ourFont fontSize24" style={{fontWeight: "bold"}}>Save time, manage your phone system online</h3>
                        <p className="ourFont fontSize16">The ability to manage your phone system without having to place a service call to your provider.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-7 centerItem centerItemV">
                    <div style={{}}>
                        <h1 className="ourFont fontSize20 ourGreen" style={{fontWeight: "bold"}}>Device Configuration</h1>
                        <h3 className="ourFont fontSize24" style={{fontWeight: "bold"}}>Any new device, automatically configured</h3>
                        <p className="ourFont fontSize16">Any endpoint that is required to consume service, such as an IP phone, is automatically configured.</p>
                        <div className="row">
                            <div className="col-6" style={{borderBottom: "1px solid black", borderTop: "1px solid black", paddingBottom: "20px", paddingTop: "20px", paddingLeft: "0"}}>
                                <h6 className="ourFont fontSize24 centerItemV" style={{fontWeight: "bold", marginBottom: "0"}}>See Details</h6>
                            </div>
                            <div className="col-6 myAlignRight" style={{borderBottom: "1px solid black", borderTop: "1px solid black", paddingBottom: "20px", paddingTop: "20px", paddingRight: "0"}}>
                                <div className="seeFeaturesButton centerItemV centerItem">
                                    <img src="/assets/icons/downArrow.png" alt="Down Arrow" style={{}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 centerItem">
                    <img src="/assets/cloud/uBossLoginImg.png" alt="uboss login image"/>
                </div>
            </div>
        </section>
    );
}