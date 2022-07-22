export default function ContactPlatform() {
    return(
        <section>
            <div className="row" style={{paddingTop: '60px', paddingBottom: '40px'}}>
                <div className="col centerText">
                    <h1 className="ourFont fontSize22" style={{fontWeight: 'bold'}}>Endless opportunities, one platform</h1>
                </div>
            </div>
            <div className="row" style={{paddingBottom: "60px"}}>
                <div className="col-md centerText platformPad">
                    <div className="centerItem platFormIconPad">
                        <div className="platformIconDiv">
                            <img src="/assets/contactCenterIcon.svg"  alt="headset icon" style={{width: '100px'}}/>
                        </div>
                    </div>
                    <h2 className="ourFont fontSize22" style={{fontWeight: "bold"}}> Contact Center Agent</h2>
                    <p className="ourFont fontSize14" style={{paddingTop: "20px"}}>The ability to have calls answered in a timely fashion, with reports, queue status, all in real time.</p>
                </div>
                <div className="col-md centerText platformPad">
                    <div className="centerItem platFormIconPad">
                        <div className="platformIconDiv">
                            <img src="/assets/icons/contactSupervisorIcon.svg"  alt="Contact supervisor icon" style={{width: "100px"}}/>
                        </div>
                    </div>
                    <h2 className="ourFont fontSize22" style={{fontWeight: "bold"}}>Contact Center Supervisor</h2>
                    <p className="ourFont fontSize14" style={{paddingTop: "20px"}}>The ability to manage your contact center agents and queues in real-time.</p>
                </div>
                <div className="col-md centerText platformPad">
                    <div className="centerItem platFormIconPad">
                        <div className="platformIconDiv">
                            <img src="/assets/icons/callRecordingcIcon.svg"  alt="Call recording icon" style={{width: "100px"}}/>
                        </div>
                    </div>
                    <h2 className="ourFont fontSize22" style={{fontWeight: "bold"}}>Call Recording</h2>
                    <p className="ourFont fontSize14">GoingVoIP platform ensure quality assurance with call recording.</p>
                </div>
            </div>
        </section>
    );
}