"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface AvaiBookCalendarProps {
    calendarId: string;
    roomName: string;
}

/**
 * Collapsible AvaiBook calendar widget
 */
export function AvaiBookCalendar({ calendarId, roomName }: AvaiBookCalendarProps) {
    const [showCalendar, setShowCalendar] = useState(false);

    return (
        <div className="flex flex-col items-center justify-end my-6 h-full w-full">
            <Button
                variant="bnb"
                className="w-full mb-4 shadow-sm"
                onClick={() => setShowCalendar((prev) => !prev)}
                aria-expanded={showCalendar}
                aria-controls={`${roomName}-calendar-iframe`}
            >
                {showCalendar ? 'Chiudi calendario' : 'Verifica disponibilità e prenota'}
            </Button>

            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden w-full ${showCalendar ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                {showCalendar && (
                    <div className="rounded-lg border border-bnb-200 shadow-inner bg-natural-50 overflow-hidden w-full h-[360px] relative">
                        <div className=" absolute inset-0 flex items-center justify-center text-natural-400 z-0">
                            <span className="animate-pulse">Caricamento calendario...</span>
                        </div>
                        <iframe
                            id={`${roomName}-calendar-iframe`}
                            src={`https://www.avaibook.com/widgets_propietarios/loader.php?id=${calendarId}&lang=IT`}
                            className="w-full h-full relative z-10"
                            style={{ border: 0 }}
                            frameBorder={0}
                            allowTransparency={true}
                        >
                            Calendario non disponibile
                        </iframe>
                    </div>
                )}
            </div>
        </div>
    );
}
