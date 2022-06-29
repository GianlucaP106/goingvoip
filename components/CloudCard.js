import Link from "next/link";

export default function CloudCard(props) {
    return(
        <div className="cloudCard">
            <div className="row">
                <div className="col-10" style={{paddingLeft: "30px", paddingTop: "20px"}}>
                    <h5 className="ourFont fontSize20" style={{color: "#AEC05F"}}>GoingVoIP</h5>
                    <h6 className="ourFont fontSize20 textShadow">{props.title}</h6>
                </div>
                <div className="col-2 cloudIconContainer">
                    <div className="iconBox">
                        <img src={props.theIcon} alt={props.theAlt} style={{height: "60px"}}/>
                    </div>
                </div>
            </div>
            <div className={"row " + (props.rightSide ? "learnMoreRight" : "learnMoreLeft")}>
                <div className="col cardBottom">
                    <Link href={props.theLink}><p className="learnMorePosition ourFont fontSize14 linkPointer">Learn More</p></Link>
                    <Link href={props.theLink}><img className="linkPointer" src="/assets/cardArrow.png" alt="arrow" style={{width: "30px", margin: "15px"}}/></Link>
                </div>
            </div>
        </div>
    );
 }