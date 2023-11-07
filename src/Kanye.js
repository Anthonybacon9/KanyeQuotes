import React from "react";

function Kanye(props) {
    const search = () => {props.search()};

    return (
        <button onClick={props.search}><img src="https://parade.com/.image/t_share/MTkzMjc5NDI3MTg5MTU1NzQ3/kanye-west-net-worth.jpg"/></button>
    );
}

export default Kanye