import React from "react";
import "./App/Styles/General.css"

const App = () => {

    return (
        <div data-scroll-container>
            <div id="navbar">
                <div>OUR PRIORITIES</div>
                <svg width="77.99px" height="40px" viewBox="0 0 77.99 40">
                    <path d="M69.23,5.67c-4.38-2.11-9.49-2.09-13.86,0.06l0.57,0.66c0.29,0.33,0.75,0.44,1.16,0.27 c3.73-1.47,7.91-1.3,11.52,0.45c3.21,1.49,5.69,4.21,6.89,7.55c2.86,7.36-0.78,15.64-8.14,18.51c-1.63,0.63-3.35,0.96-5.1,0.97 c-2.53,0-5.01-0.69-7.18-1.98v-0.01l-1.05-0.68c-6.38-4.58-7.85-13.46-3.27-19.84c0.82-1.15,1.82-2.17,2.94-3.03 c4.53,5.76,5.22,13.64,1.77,20.1c-0.4,0.75-0.16,1.68,0.55,2.14l0,0c4.6-7.14,4.19-16.41-1.03-23.12l0,0l-1.01-1.21h-0.01 c-7.34-8.1-19.86-8.72-27.97-1.38c-0.56,0.51-1.09,1.05-1.59,1.62C19.96,3.79,14.32,3.27,9.4,5.36c-3.62,1.44-6.5,4.27-8.02,7.86 c-4.77,11.46,3.53,22.49,14.35,22.49c2.48,0,4.93-0.6,7.14-1.74l0,0c-0.58-0.72-1.55-0.98-2.41-0.65 c-3.82,1.35-8.02,1.03-11.59-0.87c-2.76-1.4-4.93-3.75-6.1-6.62C-1.45,15.54,6.01,5.67,15.73,5.67c2.73,0,5.41,0.8,7.69,2.3 l1.13,0.82c6.14,4.9,7.14,13.85,2.24,19.99c-0.65,0.82-1.39,1.56-2.21,2.22c-4.2-5.67-4.8-13.25-1.54-19.51 c0.4-0.76,0.18-1.71-0.52-2.22l0,0c-4.44,6.99-4.12,15.99,0.8,22.64c0,0,0.01,0,0,0.01l0.98,1.21c0.01-0.01,0,0.01,0,0 c7.14,8.28,19.64,9.2,27.93,2.06c0.66-0.57,1.28-1.18,1.85-1.82c2.46,1.53,5.3,2.34,8.19,2.34c10.75,0,19.02-10.9,14.43-22.28 C75.29,9.98,72.62,7.21,69.23,5.67z M39.3,38.44c-5.26,0-10.27-2.27-13.74-6.23c6.8-5.47,7.87-15.42,2.4-22.22 c-0.68-0.85-1.45-1.62-2.29-2.31c6.7-7.53,18.23-8.2,25.76-1.5c0.44,0.39,0.86,0.8,1.25,1.23c-6.9,5.32-8.18,15.22-2.87,22.13 c0.85,1.11,1.85,2.09,2.96,2.94C49.32,36.27,44.43,38.44,39.3,38.44L39.3,38.44z"></path>
                </svg>
                <div className="ASD">BOOK NOW</div>
            </div>
            <div className="Content ">
                <div className="Video_Container" id="video">
                    <video autoPlay muted loop id="videoSky">
                        <source src="https://vod-progressive.akamaized.net/exp=1646864294~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2626%2F22%2F563130035%2F2662760252.mp4~hmac=552ab117696c61f60e2dfb105ae324babd7e4904b0e73def03104de4b6a71b09/vimeo-prod-skyfire-std-us/01/2626/22/563130035/2662760252.mp4?filename=Kimi+seamless+video.mp4.mp4" type="video/mp4"></source>    
                    </video>
                </div>
                <div className="Window_Container">
                    <video autoPlay muted loop id="videoScene">
                        <source src="https://vod-progressive.akamaized.net/exp=1646864085~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3105%2F22%2F565526339%2F2673875665.mp4~hmac=ef67044cf79798c419f35acb023822f4d29545d7982a97ed2e1457afbb80bde1/vimeo-prod-skyfire-std-us/01/3105/22/565526339/2673875665.mp4?filename=3+films+aan+elkaar.mp4.mp4" type="video/mp4"></source>    
                    </video>
                    <div className="Window">
                    </div>
                </div>
                <div className="Info_Container">

                </div>
                <footer></footer>
                
            </div>
        </div>
    )
}

export default App;