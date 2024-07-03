"use client";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { Provider } from "./Providers";

export default function ClientWrapper({ children }) {
  useEffect(() => {
    function startLoader() {
      let counterElement = document.querySelector(".counter");
      let currentValue = 0;

      function updateCounter() {
        if (currentValue == 100) {
          return;
        }
        currentValue += Math.floor(Math.random() * 10) + 1;
        if (currentValue > 100) {
          currentValue = 100;
        }
        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
      }
      updateCounter();
    }

    startLoader();
    gsap.to(".counter", 0.25, {
      delay: 3.5,
      opacity: 0,
    });

    gsap.to(".bar", 2, {
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power2.inOut",
    });

    gsap.to(".overlay", {
      delay: 5.5, // Adjust delay as needed
      opacity: 0,
      pointerEvents: "none", // Disable pointer events on the overlay
      onComplete: () => {
        document.querySelector(".overlay").style.height = "0"; // Hide the overlay completely
      },
    });
  }, []); // Empty dependency array to run only once

  return (
    <>
      <Provider>
        <h1 className="counter">0</h1>
        <div className="overlay">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="md:pt-5">
          <Navigation />
        </div>
        <div className="bg-accent-200 text-accent-500">{children}</div>
      </Provider>
    </>
  );
}
