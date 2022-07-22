
export default function Welcome(props) {
    return(
        <section className="welcomeBgImg" style={{overflow: "hidden"}}>
            <div className="row welcomeRowPad">
                <div className="col-md-6 centerText" style={{padding: "0"}}>
                    <video id="background-video" autoPlay loop muted poster="/assets/welcomeBG.png">
                        <source src="/assets/home/homeVideo.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="col-md-6 centerText">
            
                </div>
            </div>
        </section>
    );
}