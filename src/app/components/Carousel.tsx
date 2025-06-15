'use client'

import React from "react"


interface CarouselProps {
    name: string,
    brand: string
}


//Building a carousel
const Carousel: React.FC<CarouselProps> = ({ name, brand }) => {
    return (
        <div>
            <div className="annoucement-bar-carousel">
                <div className="carousel-cell"><a>🚀 New: React 19 Beta Released! Explore Features →</a></div>
                <div className="carousel-cell"><a>💻 50% Off All Web Dev Courses! Limited Time Offer</a></div>
                <div className="carousel-cell"><a>🔗 CSS Grid Workshop: Master Layouts in 2 Hours</a></div>
                <div className="carousel-cell"><a>✨ VS Code Tip: Try the New AI Copilot X</a></div>
                <div className="carousel-cell"><a>📱 Mobile-First Design: Free Ebook Download</a></div>
            </div>
            {name}
            {brand}
        </div>
    )
}

export default Carousel