import React, { useState, useEffect } from "react";
import logo from "../assets/background.jpg";

function Home() {
    const style = {
        height: "50%",
        width: "50%"
    };
    return (
        <div>
            <img src={logo} alt="" style={style} />
        </div>
    );
}

export default Home;
