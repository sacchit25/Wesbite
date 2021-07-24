import React from "react"

function Sports() {
    return (
        <div className="sports-bg">
        {/* <div className="sop-container">
            <div className="sop-info">
            <h1> Sports </h1>
            <p> Adjusted as the winner of the School Olympic Tennis Program 2019. Came back from the brink of loss
                in the Semi-Finals where I was trailing 3-5 in the deciding set.
            </p>
            </div>
            <div className="sop-pic">
                <img src="Sacchit_SOP.jpg" />
            </div>
        </div> */}
        <div className="sports-header">
            <h1> Sports </h1>
        </div>
        <div className="mvp-container">
            <div className="mvp-pic">
                <img src="Sacchit_mvp.jpeg" />
            </div>
            <div className="mvp-info">
                <p> Honoured as the Most Valuable Tennis Player in the school by the Principal, the Headmistress, and 
                    the Head of Sports Department for my achievements in the Tennis field.</p>
            </div>
        </div>
        <br /><br /><br />
        <div className="soty-container">
            <div className="soty-info">
                <p> Felicitated by the Dr. Bart De Groof, Ambassador of Belgium in Doha, as the Sportsperson of the Year 
                    for costantly brining laurels to the instituition in fields
                    like Tennis, Table-tennis, Cricket, and Basketball.
                </p>
            </div>
        <div className="soty-pic">
            <img src="Sacchit_SOTY.jpeg" />
        </div>
        </div>
        </div>
    )
}

export default Sports;