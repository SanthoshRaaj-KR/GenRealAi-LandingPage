import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const aboutCards = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof gsap !== 'undefined') {

      gsap.fromTo(".head-image", 
        { 
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".head-image",
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(".card-1", 
        { 
          x: -200,
          opacity: 0,
          rotation: -15
        },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".card-1",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Simple fade in for card-2
      gsap.fromTo(".card-2", 
        { 
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".card-2",
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(".card-3", 
        { 
          x: 200,
          opacity: 0,
          rotation: 15
        },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 1.4,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".card-3",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(".main-title", 
        { 
          opacity: 0,
          clipPath: "inset(0 100% 0 0)"
        },
        {
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          duration: 1.5,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".main-title",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(".main-subtitle", 
        { 
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".main-subtitle",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(".mobile-card", 
        { 
          opacity: 0,
          x: -50,
          rotationY: 90
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".mobile-cards-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Mobile title animation
      gsap.fromTo(".mobile-title", 
        { 
          opacity: 0,
          scale: 0.9
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".mobile-title",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={sectionRef} className="h-screen bg-gradient-to-tr from-black to-cyan-950 text-white flex flex-col items-center justify-center px-4 overflow-hidden" id="features">

      {/* Mobile Layout */}
      <div className="w-full max-w-6xl flex flex-col md:hidden gap-6">
        
        
        {/* Title and Subtitle */}
        <div className="text-center md:hidden mt-6 px-4 mobile-title">
          <h1 className="text-2xl font-bold tracking-wide">
            Real-Time Deepfake Detection
          </h1>
          <p className="text-sm mt-2 text-gray-300">
            Instantly analyze videos and images to identify AI-generated manipulations.
          </p>
        </div>
      

        {/* Boxes */}
        <div className="flex flex-col gap-6 mobile-cards-container">
          {[1, 2, 3].map((num) => (
            <div key={num} className="bg-cyan-700/80 p-4 rounded-md shadow-lg relative mobile-card">
              <p className="text-sm">
                Our platform provides explainable outputs—heatmaps, confidence
                scores, and tampering traces—so teams don't just get a yes or no,
                but a complete picture of how and where the media was altered.
                This level of transparency is vital for legal, regulatory, and
                high-stakes decision-making.
              </p>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {num}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Title and Subtitle */}
        <div className="text-center hidden md:block mt-6 px-4">
          <h1 className="text-2xl font-bold tracking-wide">
            Real-Time Deepfake Detection
          </h1>
          <p className="text-sm mt-2 text-gray-300">
            Instantly analyze videos and images to identify AI-generated manipulations.
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="relative w-full max-w-6xl hidden md:flex flex-col items-center h-full justify-center">
        {/* Boxes */}
        <div className="absolute top-16 md:top-20 lg:top-24 left-4 md:left-8 lg:left-12 xl:left-16 card-1">
          <div className="bg-cyan-700/80 p-3 rounded-md w-52 md:w-56 lg:w-60 shadow-lg">
            <p className="text-xs md:text-sm">
              Our platform provides explainable outputs—heatmaps, confidence
              scores, and tampering traces—so teams don't just get a yes or no,
              but a complete picture of how and where the media was altered.
              This level of transparency is vital for legal, regulatory, and
              high-stakes decision-making.
            </p>
          </div>
          <div className="flex justify-center mt-2">
            <div className="bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              1
            </div>
          </div>
        </div>

        <div className="absolute top-2 md:top-4 lg:top-6 left-1/2 transform -translate-x-1/2 card-2">
          <div className="bg-cyan-600/80 p-3 rounded-md w-52 md:w-56 lg:w-60 shadow-lg">
            <p className="text-xs md:text-sm">
              Our platform provides explainable outputs—heatmaps, confidence
              scores, and tampering traces—so teams don't just get a yes or no,
              but a complete picture of how and where the media was altered.
              This level of transparency is vital for legal, regulatory, and
              high-stakes decision-making.
            </p>
          </div>
          <div className="flex justify-center mt-2">
            <div className="bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              2
            </div>
          </div>
        </div>

        <div className="absolute top-16 md:top-20 lg:top-24 right-4 md:right-8 lg:right-12 xl:right-16 card-3">
          <div className="bg-cyan-700/80 p-3 rounded-md w-52 md:w-56 lg:w-60 shadow-lg">
            <p className="text-xs md:text-sm">
              Our platform provides explainable outputs—heatmaps, confidence
              scores, and tampering traces—so teams don't just get a yes or no,
              but a complete picture of how and where the media was altered.
              This level of transparency is vital for legal, regulatory, and
              high-stakes decision-making.
            </p>
          </div>
          <div className="flex justify-center mt-2">
            <div className="bg-cyan-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              3
            </div>
          </div>
        </div>

        {/* Head image */}
        <div className="z-10 head-image" style={{ marginTop: '5rem' }}>
          <img
            src="/face.png"
            alt="Wireframe head"
            className="w-28 md:w-32 lg:w-36 xl:w-40 h-auto"
          />
        </div>

        {/* Title and Subtitle */}
        <div className="text-center absolute bottom-8 md:bottom-12 lg:bottom-16 left-1/2 transform -translate-x-1/2 w-full px-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wide main-title">
            Real-Time Deepfake Detection
          </h1>
          <p className="text-sm md:text-base lg:text-lg mt-2 text-gray-300 main-subtitle">
            Instantly analyze videos and images to identify AI-generated manipulations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default aboutCards;