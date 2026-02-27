import React from "react";
import { RiPhoneFill, RiMapPinFill, RiMailFill, RiTimeFill } from "react-icons/ri";

const Contact = () => {
  const contactInfo = [
    {
      icon: <RiPhoneFill size={24} />,
      title: "Telefono",
      content: "045 908 600",
    },
    {
      icon: <RiMapPinFill size={24} />,
      title: "Indirizzo",
      content: "Via Roma, 43, Grezzana (VR)",
    },
    {
      icon: <RiMailFill size={24} />,
      title: "Email",
      content: "farmaciadellassunta@gmail.com",
    },
    {
      icon: <RiTimeFill size={24} />,
      title: "Orari",
      content: "Lun-Ven: 9:00-18:00, Sab: 9:00-13:00",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-20 text-center md:text-left" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4 md:mb-6">
            Dove Siamo
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary mb-4 md:mb-6 mx-auto md:mx-0"></div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Vieni a trovarci. Siamo sempre a tua disposizione per qualsiasi necessità.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8" data-aos="fade-right">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0 p-3 md:p-4 bg-primary/5 text-primary">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-accent mb-1 md:mb-2">
                    {info.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">{info.content}</p>
                </div>
              </div>
            ))}

            {/* Opening Hours Table */}
            <div className="bg-light p-4 md:p-6 border-l-4 border-primary" data-aos="fade-up">
              <h3 className="text-lg md:text-xl font-semibold text-accent mb-3 md:mb-4">Orari di Apertura</h3>
              <table className="table-auto w-full text-sm md:text-base">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 md:py-3 text-primary font-medium">Lunedì</td>
                    <td className="py-2 md:py-3 text-right text-gray-600">09:00 - 18:00</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 md:py-3 text-primary font-medium">Martedì</td>
                    <td className="py-2 md:py-3 text-right text-gray-600">09:00 - 18:00</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 md:py-3 text-primary font-medium">Mercoledì</td>
                    <td className="py-2 md:py-3 text-right text-gray-600">09:00 - 18:00</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 md:py-3 text-primary font-medium">Giovedì</td>
                    <td className="py-2 md:py-3 text-right text-gray-600">09:00 - 18:00</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 md:py-3 text-primary font-medium">Venerdì</td>
                    <td className="py-2 md:py-3 text-right text-gray-600">09:00 - 18:00</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 md:py-3 text-primary font-medium">Sabato</td>
                    <td className="py-2 md:py-3 text-right text-gray-600">09:00 - 13:00</td>
                  </tr>
                  <tr>
                    <td className="py-2 md:py-3 text-red-500 font-medium">Domenica</td>
                    <td className="py-2 md:py-3 text-right text-red-500">Chiuso</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Google Maps */}
          <div data-aos="fade-left">
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[500px] border-4 border-primary/10">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Farmacia%20Roma,%2043,%2037023%20Grezzana%20VR+(Farmacia%20dell'Assunta)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Farmacia dell'Assunta"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
