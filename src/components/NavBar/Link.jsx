import React from "react";

const Link = ({ route }) => {
    return (
        <li className="border px-4 lg:mr-10 pointer hover:bg-amber-400">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;