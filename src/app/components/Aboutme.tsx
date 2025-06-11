'use client'
import React from "react";


interface AboutmeProps {
    name: string
}

const Aboutme:React.FC<AboutmeProps> = ({ name }) => {
    return (
        <div>{name}</div>
    )
}

export default Aboutme