import React from "react";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <RiMicroscopeLine size={48} className="text-primary" />,
      title: "Analisi del Sangue",
      description: "Servizi di analisi del sangue all'avanguardia per diagnosi tempestive e trattamenti mirati.",
    },
    {
      icon: <MdHealthAndSafety size={48} className="text-primary" />,
      title: "Assistenza Infermieristica",
      description: "Servizi infermieristici professionali con cure personalizzate e assistenza dedicata.",
    },
    {
      icon: <FaHeartbeat size={48} className="text-primary" />,
      title: "Elettrocardiogramma",
      description: "Valutazione accurata della salute cardiaca con gestione personalizzata delle condizioni cardiovascolari.",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-20 text-center md:text-left" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4 md:mb-6">
            I Nostri Servizi
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary mb-4 md:mb-6 mx-auto md:mx-0"></div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Esplora i nostri servizi di alta qualità, progettati per garantire 
            una salute ottimale e un benessere duraturo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="space-y-4 md:space-y-6 text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon */}
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="p-3 md:p-4 bg-primary/5 border-l-4 border-primary">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-xl md:text-2xl font-semibold text-accent">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
