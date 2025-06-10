'use client';

import React from "react";

interface HomepageProps {
    name: string
}

const Homepage: React.FC<HomepageProps> = ({ name }) => {
    return (
        <div>
            {name}
        </div>
    )
}

export default Homepage
