'use client';

import React from "react";

interface HomepageProps {
    name: string
}

const Homepage: React.FC<HomepageProps> = ({ name }) => {
    return (
        <div className="text-lg-3xl break-words ">
            {name}
        </div>
    )
}

export default Homepage
