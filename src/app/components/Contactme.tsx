'use client'
import React from 'react'

interface ContactmeProps {
    name: string
}
const Contactme: React.FC <ContactmeProps> = ({ name }) => {
    return (
        <div>{name}</div>
    )
}

export default Contactme