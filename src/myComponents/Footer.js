import React from 'react'

export default function Footer({screen}) {
    return (
        <footer style={screen==0?{position: "absolute", bottom: "0%", textAlign: "center", width: "100%", fontSize: "12px", backgroundColor: "#55204e", color: "#eeeeee"}:{position: "absolute", bottom: "0%", textAlign: "center", width: "100%", fontSize: "12px", backgroundColor: "#587d7a", color: "#eeeeee"}}>
            Copyright © <a style={{textDecoration: "none", color: "#eeeeee", cursor: "pointer"}} href='https://github.com/priyaansshu' target="_blank">Priyanshu Modi</a>
        </footer>
    )
}
