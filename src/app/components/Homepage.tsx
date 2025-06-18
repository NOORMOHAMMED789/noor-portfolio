'use client';

import React, { useEffect, useState } from "react";


const Homepage: React.FC = () => {

  const words = ["Full Stack Developer.", "Frontend Developer.", "Backend Developer.", "Mechanical Engineer too :)."];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseBetweenWords = 1500;

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (letterIndex <= currentWord.length) {
        setText(currentWord.slice(0, letterIndex));
        timer = setTimeout(() => setLetterIndex(letterIndex + 1), typingSpeed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pauseBetweenWords);
      }
    } else if (letterIndex > 0) {
      setText(currentWord.slice(0, letterIndex));
      timer = setTimeout(() => setLetterIndex(letterIndex - 1), deletingSpeed);
    } else {
      setIsDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    }


    return () => clearTimeout(timer);
  }, [letterIndex, isDeleting, wordIndex]);

  return (
    <div className="relative w-full" style={{ height: 'calc(100vh - 72px)' }}>
      <header>
        <section className="slider">
          <ul>
            <li>
              <article className="center-y padding_2x">
                <h3 className="big title"><em>O</em>ccupational <em>H</em>ealth</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <a href="#about" className="btn btn_3">More about us</a>
              </article>
            </li>
          </ul>
        </section>
      </header>
      <div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold text-center px-4">
            <div className="intro">
              <span className="text-sm md:text-lg lg:text-2xl">Hello, My Name is Noor Mohammed. Im a </span>
              <span className="text-lg md:text-2xl lg:text-3xl">{text}</span>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
