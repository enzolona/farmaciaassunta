import React, { useState, useEffect } from 'react';

const Turns = () => {
  const shifts = [
    { start: "14/03/2026 09:00", end: "16/03/2026 09:00", startDate: new Date(2026, 2, 14) },
    { start: "27/04/2026 09:00", end: "29/04/2026 09:00", startDate: new Date(2026, 3, 27) },
    { start: "10/06/2026 09:00", end: "12/06/2026 09:00", startDate: new Date(2026, 5, 10) },
    { start: "24/07/2026 09:00", end: "26/07/2026 09:00", startDate: new Date(2026, 6, 24) },
    { start: "06/09/2026 09:00", end: "08/09/2026 09:00", startDate: new Date(2026, 8, 6) },
    { start: "20/10/2026 09:00", end: "22/10/2026 09:00", startDate: new Date(2026, 9, 20) },
    { start: "03/12/2026 09:00", end: "05/12/2026 09:00", startDate: new Date(2026, 11, 3) },
  ];

  const [nextShift, setNextShift] = useState(null);
  const [daysUntil, setDaysUntil] = useState(0);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Find the next upcoming shift
    const upcoming = shifts.find(shift => shift.startDate >= today);
    
    if (upcoming) {
      setNextShift(upcoming);
      const diffTime = upcoming.startDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysUntil(diffDays);
    } else {
      // If no shifts left, show the last one
      setNextShift(shifts[shifts.length - 1]);
      setDaysUntil(0);
    }
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-3">
            Prossimo Turno
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
        </div>

        {/* Next Shift Card */}
        {nextShift && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-xl p-8 md:p-10">
              <div className="text-center mb-6">
                <h3 className="text-4xl md:text-5xl font-bold mt-3">{nextShift.start}</h3>
                <p className="text-lg opacity-90 mt-2">fino a {nextShift.end}</p>
              </div>

              {daysUntil > 0 && (
                <div className="bg-white/20 rounded-lg p-4 text-center mb-6">
                  <p className="text-sm opacity-90">
                    {daysUntil === 1 
                      ? "Domani!" 
                      : daysUntil <= 7 
                      ? `Tra ${daysUntil} giorni`
                      : `Tra ${Math.floor(daysUntil / 7)} settimane`
                    }
                  </p>
                </div>
              )}

              <div className="text-center">
                <p className="opacity-90 text-sm">
                    Apertura 24 ore su 24
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Turns;

