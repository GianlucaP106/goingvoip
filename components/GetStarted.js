

export default function GetStarted(props) {
    return(
        <div className="monthlyFeeDiv2 centerText" style={{paddingBottom: "20px"}}>
            <p className="ourFont fontSize20 colorFFF" id="servicesFontMobile" style={{paddingTop: "20px", fontWeight: "bold"}}>{props.title}</p>
            <button className="greenButton colorFFF" type="button" style={{width: "140px"}}>Get Started</button>
        </div>
    );
}