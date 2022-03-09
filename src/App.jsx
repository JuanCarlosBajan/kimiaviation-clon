import React from "react";
import "./App/Styles/General.css"

const App = () => {
    return (
        <div data-scroll-container>
            <div className="Navbar">
                
            </div>
            <div className="Content ">
                <div className="Video_Container">
                    <video autoPlay muted loop id="videoSky">
                        <source src="https://vod-progressive.akamaized.net/exp=1646818637~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2626%2F22%2F563130035%2F2662760265.mp4~hmac=1f27f6f4d045fa8fbaf3a940cd636f1b075172db8fe93baf19f4ea55750c6c58/vimeo-prod-skyfire-std-us/01/2626/22/563130035/2662760265.mp4?filename=Kimi+seamless+video.mp4.mp4" type="video/mp4"></source>    
                    </video>
                </div>
                <div className="Window_Container">

                </div>
                
            </div>
        </div>
    )
}

export default App;