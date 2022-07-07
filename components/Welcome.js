
export default function Welcome(props) {
    return(
        <section className="welcomeBgImg">
            <div>
                <div className="row welcomeRowPad">
                    <div className="col centerText">
                        {/* <h1 className="ourFontLight fontSize40" style={{color: "white"}}>South Florida’s Professional <br/> VoIP/Telecom Provider</h1> */}
                        <video id="background-video" autoPlay loop muted poster="/assets/welcomeBG.png">
                            <source src="/assets/home/homeVideo.mp4" type="video/mp4" />
                        </video>
                    </div>
                    {/* style={{paddingRight: "300px", paddingLeft: "300px"}} */}
                </div>
            </div>
        </section>
    );
}