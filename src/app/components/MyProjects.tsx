'use client'

import React from "react"

interface MyProjectProps {
    name: string
}

const MyProjects: React.FC<MyProjectProps> = ({ name }) => {
    return (
        <div>{name}</div>
    )
}

export default MyProjects