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
                    <p className="ourFont fontSize14" style={{paddingTop: "20px"}}>SimplyVoysis Agent empowers employees by simplifying call handling and escalation, providing visibility of queue statistics, and allowing them to manage their ACD status.</p>
                </div>
                <div className="col-md centerText platformPad">
                    <div className="centerItem platFormIconPad">
                        <div className="platformIconDiv">
                            <img src="/assets/icons/contactSupervisorIcon.svg"  alt="Contact supervisor icon" style={{}}/>
                        </div>
                    </div>
                    <h2 className="ourFont fontSize22" style={{fontWeight: "bold"}}>Contact Center Supervisor</h2>
                    <p className="ourFont fontSize14" style={{paddingTop: "20px"}}>SimplyVoysis Supervisor is a powerful reporting and management interface. This gives supervisors and team leaders relevant, real-time performance information on agents and queues.</p>
                </div>
                <div className="col-md centerText platformPad">
                    <div className="centerItem platFormIconPad">
                        <div className="platformIconDiv">
                            <img src="/assets/icons/callRecordingcIcon.svg"  alt="Call recording icon" style={{width: "100px"}}/>
                        </div>
                    </div>
                    <h2 className="ourFont fontSize22" style={{fontWeight: "bold"}}>Call Recording</h2>
                    <h6 className="ourFont fontSize16 ourGreen" style={{fontWeight: "bold"}}>Use SimplyVoysis Call Recording for Quality Assurance</h6>
                    <p className="ourFont fontSize14">SimplyVoysis platform allows recording of calls where supervisors can activate and de-activate in real-time and access to the call after 15minutes.</p>
                </div>
            </div>
        </section>
    );
}