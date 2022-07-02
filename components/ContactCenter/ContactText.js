import Link from "next/link";

export default function ContactText(props) {
    function cardSelector(box) {
        if (box == 1) {
            const info = {
                title: "Contact Center",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
            return info;
        }else if (box == 2) {
            const info = {
                title: "Insert Title",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
            return info;
        }
    }
    return(
        <div className="" style={{margin: "auto"}}>
            <div className="row">
                <div className="col-3">
                    <img src="/assets/contactCenterIcon.png" alt="Icon" style={{height: "132px"}}/>
                </div>
                <div className="col">
                    <div style={{paddingLeft: "30px", paddingTop: "20px"}}>
                        <h5 className="ourFont fontSize20 ourGreen">SimplyVoysis</h5>
                        <h1 className="ourFont fontSize48 contactTitleMobile">{cardSelector(props.box).title}</h1>
                    </div>
                </div>  
            </div>
            <div className="row">
                <div className="col leftText">
                    <div>
                        <p>{cardSelector(props.box).text}</p>
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