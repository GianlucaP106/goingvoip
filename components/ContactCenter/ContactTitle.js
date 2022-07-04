import Link from "next/link";
import ContactText from "./ContactText";
import GetStarted from "../GetStarted";

export default function ContactTitle() {
    return(
        <section>
            <div className="row" style={{display: "flex", paddingTop: "50px"}}>
                <div className="col" id="responsiveColContact"></div>
                <div className="col-md-5 contactTitleLeft contactTextColMobile" id="contactTitle1">
                    <div className="">
                        <ContactText box={1} imgLink={"/assets/contactCenterIcon.png"}/>
                    </div>
                </div>
                <div className="col-1" id="responsiveColContact"></div>
                <div className="col-md-5 contactTitleLeft contactTextColMobile" id="contactTitle2">
                    <img src="/assets/contact/office2.png" alt="office image" className="contactOfficeImages"/>
                </div>
                <div className="col" id="responsiveColContact"></div>
            </div>
            <div className="row" style={{paddingBottom: "50px"}}>
                <div className="col" id="responsiveColContact"></div>
                <div className="col-md-5 contactTitleRight contactTextColMobile">
                    <img src="/assets/contact/office3.png" alt="office image" className="contactOfficeImages"/>
                </div>
                <div className="col-1" id="responsiveColContact"></div>
                <div className="col-md-5 contactTitleRight contactTextColMobile">
                    <div className="">
                        <ContactText box={2} imgLink={""}/>
                    </div>
                </div>
                <div className="col" id="responsiveColContact"></div>
            </div>
            <div className="row" style={{paddingBottom: "50px"}}>
                <div className="col centerItem">
                    <GetStarted title={"Get high-end telecom functionalities for a low monthly fee"}/>
                </div>
            </div>
        </section>
    );
}