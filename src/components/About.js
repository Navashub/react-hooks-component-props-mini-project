import React from "react";

function About({ blogImage, aboutText}) {
    const defaultImage = "https://via.placeholder.com/215";
    return (
        <aside>
            <img src={blogImage || defaultImage} alt="blog-logo" />
            <p>{aboutText}</p>
        </aside>
    );
}

export default About;