
export default function Welcome(props) {
    return(
        <section className="welcomeBgImg">
            <div>
                <div className="row welcomeRowPad">
                    <div className="col centerText" >
                        <h1 className="ourFontLight fontSize40" style={{color: "white"}}>South Florida’s Professional <br/> VoIP/Telecom Provider</h1>
                    </div>
                    {/* style={{paddingRight: "300px", paddingLeft: "300px"}} */}
                </div>
            </div>
        </section>
    );
}