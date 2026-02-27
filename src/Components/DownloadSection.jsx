import React from "react";

const DownloadSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left" data-aos="fade-right">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">
                Scarica la Nostra App
              </h2>
              <div className="w-16 md:w-20 h-1 bg-primary mx-auto lg:mx-0"></div>
            </div>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Gestisci la tua salute ovunque tu sia con la nostra app mobile. 
              Accedi a funzionalità esclusive, prenota servizi e resta sempre aggiornato.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com/it/app/unilife/id1489873125"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-primary text-white px-6 py-4 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs font-medium">Scarica su</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.smartmob.unilife&hl=it&gl=US"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-primary text-white px-6 py-4 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm2.27-2.27l-2.27-2.27-2.27 2.27 2.27 2.27 2.27-2.27zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs font-medium">Scarica su</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            {/* Features List */}
            <ul className="space-y-2 md:space-y-3 pt-4">
              {[
                "Prenota servizi in pochi click",
                "Gestisci le tue ricette digitali",
                "Ricevi notifiche per le offerte",
                "Consulta i tuoi ordini"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm md:text-base text-gray-600 justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-primary flex-shrink-0"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* QR Code Section */}
          <div className="flex justify-center" data-aos="fade-left">
            <div className="text-center space-y-4 md:space-y-6 bg-light p-8 md:p-12 border-4 border-primary/10">
              <p className="text-base md:text-lg font-medium text-accent">
                Scansiona il QR Code
              </p>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?data=https://www.smartmob.eu/unilife/&size=250x250"
                alt="QR Code"
                className="mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
              />
              <p className="text-xs md:text-sm text-gray-600">
                Inquadra con la fotocamera<br />per scaricare l'app
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
