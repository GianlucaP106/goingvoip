export default function Footer() {
    return(
        <section className="footerBg">   
            <div className="row footerTitleBrandRow">
                <div className="col-3 footerTitleBrand">
                    <img className="footerLogo" src="/assets/goingvoipLogoWhite.png" alt="GoingVoIP logo" />
                </div>
                <div className="col footerTitleQ" style={{color: "#ffff"}}>
                    <p className="fontSize32 ourFont" style={{marginBottom: "0", marginRight: "10px", fontWeight: "bold"}} id="questionsP">Questions?</p>
                    <button className="greenButton" type="button" style={{width: "140px", color: "#ffff"}}>Get Started</button>
                </div>
            </div>
            <div className="row footerTextRow" style={{color: "#ffff", paddingTop: "15px", paddingBottom: "30px"}}>
                <div className="col ourFontLight footerLeftDisplay footerBorderLeft">
                    <h6 className="footerText footerGray">Service (24/7)</h6>
                    <h6 className="footerText">1-833-GO2VOIP</h6>
                    <h6 className="footerText">service@goingvoip.com</h6>
                    <h6 className="footerText footerGray" style={{paddingTop: "10px"}}>Contact Us</h6>
                    <h6 className="footerText">1-833-GO2VOIP</h6>
                    <h6 className="footerText">info@goingvoip.com</h6>
                </div>
                <div className="col-6 centerText footerBorderRight">
                    <h6 className="footerText footerGray footerTextCenter">Solutions</h6>
                    <h6 className="footerText footerTextCenter">Contact Center</h6>
                    <h6 className="footerText footerTextCenter">Cloud Telephony Solution</h6>
                </div>
                <div className="col-3 footerBorderRight" id="footerColFix"></div>
            </div>
        </section>
    );
}