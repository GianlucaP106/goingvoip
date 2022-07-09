
import ContactForm from "./ContactForm";
import ContactUsDisplay from "./ContactUsDisplay";

export default function ContactUs() {
    return(
        <section>
            <div className="row" style={{paddingTop: "25px", paddingBottom: "25px"}}>
                <div className="col-md-6 centerItem centerItemV">
                    <ContactUsDisplay />
                </div>
                <div className="col-md-6 centerItem centerItem">
                    <ContactForm />
                </div>
            </div>
            <div className="row">
                <div className="col myAlignRight">
                    <img src="/assets/goingvoipLogo2.png" alt="GoingVoIP Logo" style={{width: "200px"}} />
                </div>
            </div>
        </section>
    );
}