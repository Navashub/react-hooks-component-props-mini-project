import React from "react";

function Article({ title, date, preview, minutesToRead }) {
    const boxOrCup = "=".repeat(Math.ceil(minutesToRead / 5))

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{boxOrCup} {minutesToRead} min read</p>
        </article>
    );

}

export default Article;