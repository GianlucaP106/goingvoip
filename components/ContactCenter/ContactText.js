import Link from "next/link";

export default function ContactText(props) {
    function cardSelector(box) {
        if (box == 1) {
            const info = {
                title: "Contact Center",
                text: "An industry-grade solution allowing you to manage customer queries from all channels."
            }
            return info;
        }else if (box == 2) {
            const info = {
                title: "Become one with your customers",
                text: "GoingVoIP Contact Centre provides you with the opportunity to better service your customers. Alongside GoingVoIP’s experts, you can manage your contact center supervisors and agents in a timely and seamless manner.",
                text2: "Our Contact Center, powered by Cisco, is a set of tools that are put in place to instanlty increase your customer service level. Your Conatct Center Supervisors can use our real-time stats tool to make changes on the fly, creating a smooth experience for your customers. "

            }
            return info;
        }else if (box == 3) {
            const info = {
                title: "The Best Cloud Telephony Solution",
                text: "The best cloud telephony solution is waiting for you - allow our high-end business phone solution to modernize your company."
            }
            return info;
        }
    }
    return(
        <div className="" style={{margin: "auto"}}>
            <div className="row">
                <div className={"col-3 centerItemV centerItem " + ((props.box == 1 || props.box == 3) ? "" : "noDisplay")}>
                    <div className="contactTextIcon centerItemV centerItem" style={{width: "120px", height: "120px"}}>
                        <img src={props.imgLink} alt="Icon" style={{height: (props.box == 1 ? "115px" : "60px")}}/>
                    </div>
                </div>
                <div className="col">
                    <div style={{paddingLeft: (props.box == 1 ? "30px" : ""), paddingTop: "20px"}}>
                        <h5 className={"ourFont fontSize20 ourGreen " + ((props.box == 1 || props.box == 3) ? "" : "noDisplay")}>SimplyVoysis</h5>
                        <h1 className="ourFont fontSize48 contactTitleMobile" >{cardSelector(props.box).title}</h1>
                    </div>
                </div>  
            </div>
            <div className={"row " + (props.box == 3 ? "" : "noDisplay")} style={{paddingTop: "20px", paddingBottom: "20px"}}>
                <div className="col-3"></div>
                <div className="col myAlignLeft">
                    <p className="ourFont fontSize22 centerItemV centerItem" style={{color: "#808080", margin: "0"}}>Powered by</p>
                    <img src="/assets/icons/ciscoLogo.png" alt="cisco logo" style={{marginLeft: "30px"}}/>
                </div>
            </div>
            <div className="row">
                <div className="col leftText">
                    <div>
                        <p style={{marginTop: "10px"}}>{cardSelector(props.box).text}</p>
                        { (props.box == 2) && (
                            <p>{cardSelector(props.box).text2}</p>
                        )}
                        
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-5 leftText" style={{display: "flex", alignItems: "center"}}>
                    <button className="greenButton ourFont fontSize14">Pricing & plans</button>
                </div>
                <div className="col-7 myAlignRight">
                    <Link href={""}><p className="learnMorePosition ourFont fontSize14 linkPointer" style={{marginBottom: "0"}}>Request a quote</p></Link>
                    <Link href={""}><img className="linkPointer" src="/assets/cardArrow.png" alt="arrow" style={{width: "30px", margin: "15px"}}/></Link>
                </div>
            </div>
        </div>
    );
}