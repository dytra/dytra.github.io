import React from "react";
import peronaBanner from "../images/perona-banner.png"
const MyWorks = () => {
    return(
        <div style={{
            marginTop:"5em",
            paddingBottom:"5em",
        }}>
            <h2 style={{textAlign:"center"}}>My Works</h2>
            <div style={{
                display:"flex",
                flexDirection:"row",
                marginTop:"2em",
            }}>
                <div style={{
                    flex:1,
                    
                    // backgroundColor:"red",
                }}>
                    <img 
                    src={peronaBanner}
                    style={{
                        width:"100%",
                        height:"200px",
                        borderRadius:"16px",
                        backgroundSize:"contain",
                        // backgroundColor:"purple",
                    }}/>
                </div>

                <div style={{
                    flex:1.5,
                    // backgroundColor:"blue",
                    paddingLeft:"1em",
                    // paddingTop:"1em",
                }}>
                    <h3>perona.id</h3>
                    <p style={{marginTop:".5em"}}>Perona is a web-app that lets you create an awesome profile that contains your precious links. You can put it in your social media such as Instagram and Twitter.</p>
                    <a href="https://app.perona.id" style={{
                        display:"inline-block",
                        // marginTop:"0em",
                        fontFamily: `"Source Sans Pro", sans-serif`,
                        fontWeight:600,
                        color:"#616161",
                        backgroundColor:"#fff",
                        border:"1px solid #e0e0e0",
                        boxShadow:"0px 1px 0px #e0e0e0",
                        padding:"12px 2.5em",
                        borderRadius:"8px",
                        textDecoration:"none",
                        fontSize:".85rem",
                    }} target="_new">Peek</a>
                </div>
            </div>
        </div>
    )
}

export default MyWorks;