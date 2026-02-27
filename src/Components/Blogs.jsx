import React, { useEffect, useState } from 'react';
import img1 from "../assets/img/offerte.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

// ========================================
// CONFIGURAZIONE OFFERTE - AGGIORNA QUI!
// ========================================
const OFFERTE_PDF_LINK = "https://unilife.net/wp-content/uploads/2025/12/volantino-GEN-FEB-16-pagg-IT-LR.pdf";
const OFFERTE_PAGE_LINK = "https://unilife.net/#Offerte";
// ========================================

const FACEBOOK_PAGE_ID = import.meta.env.VITE_FACEBOOK_PAGE_ID;
const PAGE_ACCESS_TOKEN = import.meta.env.VITE_FACEBOOK_ACCESS_TOKEN;

const Blogs = () => {
  const [displayPosts, setDisplayPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const localPosts = [
    { 
      img: img4, 
      headlines: 'Prendersi Cura della Propria Salute', 
      description: 'Consigli pratici per mantenere uno stile di vita sano e attivo ogni giorno'
    },
    { 
      img: img5, 
      headlines: 'L\'Importanza della Prevenzione', 
      description: 'Scopri come la prevenzione può migliorare significativamente la tua salute'
    },
    { 
      img: img6, 
      headlines: 'Benessere e Nutrizione', 
      description: 'Guida completa per una corretta alimentazione e integrazione vitaminica'
    }
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      if (!FACEBOOK_PAGE_ID || !PAGE_ACCESS_TOKEN || 
          FACEBOOK_PAGE_ID === 'your_facebook_page_id' || 
          PAGE_ACCESS_TOKEN === 'your_page_access_token') {
        setDisplayPosts(localPosts);
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://graph.facebook.com/v18.0/${FACEBOOK_PAGE_ID}/posts?access_token=${PAGE_ACCESS_TOKEN}&fields=message,full_picture,created_time&limit=3`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch Facebook posts');
        }
        
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          const transformedPosts = data.data.map((post, index) => ({
            img: post.full_picture || localPosts[index % localPosts.length].img,
            headlines: post.message?.split('\n')[0]?.substring(0, 60) + '...' || `Novità ${index + 1}`,
            description: post.message?.substring(0, 120) + '...' || 'Leggi di più sulla nostra pagina Facebook'
          }));
          setDisplayPosts(transformedPosts);
        } else {
          setDisplayPosts(localPosts);
        }
      } catch (error) {
        console.error('Error fetching Facebook posts:', error);
        setDisplayPosts(localPosts);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {/* NOVITÀ SECTION */}
      <section className="py-12 md:py-16 lg:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-2xl mb-8 md:mb-12 text-center md:text-left" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4 md:mb-6">
              Novità
            </h2>
            <div className="w-16 md:w-20 h-1 bg-primary mb-4 md:mb-6 mx-auto md:mx-0"></div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Scopri gli ultimi articoli e consigli dal nostro blog
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {displayPosts.slice(0, 3).map((post, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.headlines}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 md:p-6 border-l-4 border-primary/20 group-hover:border-primary transition-colors">
                  <h4 className="text-lg md:text-xl font-semibold text-accent mb-2 md:mb-3 line-clamp-2">
                    {post.headlines}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERTE SECTION */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-2xl mb-8 md:mb-12 text-center md:text-left" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4 md:mb-6">
              Offerte
            </h2>
            <div className="w-16 md:w-20 h-1 bg-primary mb-4 md:mb-6 mx-auto md:mx-0"></div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Scopri le nostre offerte e promozioni del mese
            </p>
          </div>

          {/* Featured Offer */}
          <div className="mb-12 md:mb-20" data-aos="fade-up">
            <a 
              href={OFFERTE_PDF_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block"
            >
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8 bg-light border-l-4 border-primary overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 sm:h-64 lg:h-auto overflow-hidden">
                  <img
                    src={img1}
                    alt="Offerte Del Mese"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-3 md:mb-4">
                    Offerte Del Mese
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                    Visualizza il volantino online con le offerte del mese
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 md:px-8 py-2.5 md:py-3.5 rounded-lg font-semibold group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 text-sm md:text-base">
                      Scarica PDF
                    </span>
                    <span className="text-primary text-xl md:text-2xl group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8 md:mt-12" data-aos="fade-up">
            <a
              href={OFFERTE_PAGE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 md:px-10 py-3.5 md:py-4.5 text-base md:text-lg font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Vedi Tutte le Offerte
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
