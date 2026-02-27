import React from "react";
import heroImg from "../assets/img/immagiefarmacia.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-light pt-16 md:pt-20">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 md:py-20 grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
        
        {/* Text Content */}
        <div className="space-y-6 md:space-y-8 text-center lg:text-left" data-aos="fade-right">
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent leading-tight">
              Farmacia<br />
              dell'Assunta
            </h1>
            <div className="w-16 md:w-20 h-1 bg-primary mx-auto lg:mx-0"></div>
          </div>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Da oltre 50 anni siamo parte essenziale della vita del paese. 
            Il nostro impegno è fornire farmaci di alta qualità in un ambiente 
            accogliente e professionale.
          </p>

          <a
            href="#services"
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 md:px-10 py-3.5 md:py-4.5 text-base md:text-lg font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Scopri i servizi
          </a>
        </div>

        {/* Image Container */}
        <div className="relative order-first lg:order-last" data-aos="fade-left">
          <div className="relative z-10">
            <img
              src={heroImg}
              alt="Farmacia"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="hidden md:block absolute -bottom-6 -right-6 w-full h-full bg-primary/10 -z-10"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
