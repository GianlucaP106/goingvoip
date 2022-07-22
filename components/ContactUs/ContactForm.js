

export default function ContactForm() {

    return(
        <div className="contactForm">
            <div className="row" style={{paddingTop: "60px"}}>
                <div className="col centerText">
                    <h6 className="ourFont fontSize16" style={{fontWeight: "bold"}}>Get in touch with on of our experts!</h6>
                    <img src="/assets/goingvoipLogo2.png" alt="GoingVoIP Logo" style={{width: "158px"}}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div>
                        <form method="post" action="/api/contact">
                            <div className="row formRow">
                                <div className="col-6">
                                    <label>First Name</label>
                                    <input className="formInput" type="text" placeholder="First Name" id="formFirstName" name="formFirstName"/>
                                </div>
                                <div className="col-6" style={{paddingRight: "0"}}>
                                    <label>Last Name</label>
                                    <input className="formInput" type="text" placeholder="Last Name" id="formLastName" name="formLastName"/> 
                                </div>
                            </div>
                            <div className="row formRow">
                                <div className="col inputCol">
                                    <label>Business Email</label>
                                    <input className="formInput" type="email" placeholder="Business Email" id="formBusinessEmail" name="formBusinessEmail" />
                                </div>
                            </div>
                            <div className="row formRow">
                                <div className="col inputCol">
                                    <label>Phone Number</label>
                                    <input className="formInput" type="tel" placeholder="Phone Number" id="formPhoneNumber" name="formPhoneNumber" />
                                </div>
                            </div>
                            <div className="row formRow">
                                <div className="col inputCol">
                                    <label>Company Name</label>
                                    <input className="formInput" type="text" placeholder="Company Name" id="formCompanyName" name="formCompanyName" />
                                </div>
                            </div>
                            <div className="row formRow">
                                <div className="col inputCol">
                                    <label>How many users does your company have</label>
                                    <input className="formInput" type="number" placeholder="users" id="formUsers" name="formUsers" />
                                </div>
                            </div>
                            <div className="row formRow">
                                 <div className="col myAlignRight">
                                    <button type="submit" className="greenButton">Request a Quote</button>
                                 </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}