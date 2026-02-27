import React, { useEffect, useState } from 'react';
import { RiAlarmWarningLine, RiCheckDoubleFill } from 'react-icons/ri';

// Turni della Farmacia dell'Assunta 2026
const OUR_SHIFTS = [
  { startDate: "2026-03-14", endDate: "2026-03-16", month: "Marzo" },
  { startDate: "2026-04-27", endDate: "2026-04-29", month: "Aprile" },
  { startDate: "2026-06-10", endDate: "2026-06-12", month: "Giugno" },
  { startDate: "2026-07-24", endDate: "2026-07-26", month: "Luglio" },
  { startDate: "2026-09-06", endDate: "2026-09-08", month: "Settembre" },
  { startDate: "2026-10-20", endDate: "2026-10-22", month: "Ottobre" },
  { startDate: "2026-12-03", endDate: "2026-12-05", month: "Dicembre" },
];

const TurnoAlert = () => {
  const [isCurrentlyOnShift, setIsCurrentlyOnShift] = useState(false);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const isOnShift = OUR_SHIFTS.some((shift) => {
      const startDate = new Date(shift.startDate);
      const endDate = new Date(shift.endDate);
      return today >= startDate && today <= endDate;
    });

    setIsCurrentlyOnShift(isOnShift);
  }, []);

  if (!isCurrentlyOnShift) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-3 md:py-4">
        <div className="flex items-center justify-center text-center">
          <div>
            <h3 className="text-base md:text-lg font-bold">
              Farmacia in Turno Notturno H24
            </h3>
            <p className="text-xs md:text-sm text-white opacity-90">
              La farmacia è aperta 24 ore su 24 per servire la comunità.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnoAlert;
