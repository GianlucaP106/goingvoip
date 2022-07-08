
import ContactForm from "./ContactForm";
import ContactUsDisplay from "./ContactUsDisplay";

export default function ContactUs() {
    return(
        <section>
            <div className="row">
                <div className="col-6 centerItem centerItemV">
                    <ContactUsDisplay />
                </div>
                <div className="col-6 centerItem centerItem">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}