import React from "react";
import aboutImg from '../assets/aboutImg.webp';

function About() {
    return (
        <div className="p-5 mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <h1>ABOUT US</h1>
                    <h1>Welcome TO SSB BRO</h1>
                    <div>
                        <h1>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets
                            containing
                        </h1>
                    </div>
                    <div>
                        <h1>WE PROVIDE</h1>
                        <div className="grid grid-cols-2">
                            <h1>Psychology Tests</h1>
                            <h1>Psychology Tests</h1>
                            <h1>Psychology Tests</h1>
                            <h1>Psychology Tests</h1>
                            <h1>Psychology Tests</h1>
                            <h1>Psychology Tests</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;
