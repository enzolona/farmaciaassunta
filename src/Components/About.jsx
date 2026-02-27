import React from "react";
import logoImg from "../assets/img/farmaciadellassunta.png";

const About = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Image Section */}
          <div className="relative order-2 lg:order-1" data-aos="fade-right">
            <div className="relative z-10 bg-white p-8">
              <img
                src={logoImg}
                alt="Farmacia dell'Assunta"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-primary/20 -z-10"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left" data-aos="fade-left">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">
                Chi Siamo
              </h2>
              <div className="w-16 md:w-20 h-1 bg-primary mx-auto lg:mx-0"></div>
            </div>

            <div className="space-y-4 md:space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                La Farmacia dell'Assunta è un punto di riferimento per la 
                comunità locale da oltre mezzo secolo. La nostra missione è 
                fornire assistenza sanitaria di qualità con un approccio 
                personale e professionale.
              </p>
              
              <p>
                Offriamo una vasta gamma di servizi farmaceutici e sanitari, 
                sempre aggiornati con le ultime tecnologie e metodologie. 
                Il nostro team è altamente qualificato e sempre disponibile 
                per rispondere alle vostre esigenze.
              </p>

              <p>
                Crediamo nell'importanza di creare un ambiente accogliente 
                dove ogni cliente si sente ascoltato e curato. La vostra 
                salute è la nostra priorità.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8 border-t-2 border-primary/20">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Anni di Esperienza</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">10K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Clienti Serviti</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Soddisfazione</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
