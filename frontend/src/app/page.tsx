'use client';

import "../styles/global.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Client-only logic
    }
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">Allifyan</a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <i className="uil uil-estate nav__icon"></i> Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil nav__icon uil-user"></i> About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil nav__icon uil-file-alt"></i> Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil nav__icon uil-message"></i> Contact Me
                </a>
              </li>
            </ul>
            <i className="uil uil-times nav__close" id="nav-close"></i>
          </div>
          <div className="nav__btns">
            <i className="uil uil-moon change-theme" id="theme-button"></i>
            <div className="nav__toggle" id="nav-toggle">
              <i className="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="main">
        {/* Home Section */}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__social"></div>
              <div className="home__img">
                <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0" mask-type="alpha">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                  </mask>
                  <g mask="url(#mask0)">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                    <image className="home__blob-img" x="10" y="19" href="/profile.jpg" />
                  </g>
                </svg>
              </div>
              <div className="home__data">
                <h1 className="home__title">Hi, I'm Mohd Allifyan Baitulnesam</h1>
                <h3 className="home__subtitle">Mahasiswa</h3>
                <p className="home__description">
                  High level experience in graphic design and web development, producing quality work, while working part-time as a chef. Good multitasking skills, able to manage time efficiently between college assignments and work.
                </p>
                <a href="#contact" className="button button--flex">
                  Contact Me <i className="uil uil-message button__icon"></i>
                </a>
              </div>
            </div>
            <div className="home__scroll">
              <a href="#about" className="home__scroll-button button--flex">
                <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                <span className="home__scroll-name">Scroll down</span>
                <i className="uil uil-arrow-down home__scroll-arrow"></i>
              </a>
            </div>
          </div>
        </section>
        {/* Additional sections like About, Skills, Contact, etc. */}
      </main>
    </div>
  );
}
