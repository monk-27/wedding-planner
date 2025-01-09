

"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { VenueOption } from "@/app/types";

interface VenueScreenProps {
  onNext: () => void;
}

const venues: VenueOption[] = [
  {
    id: "5-star",
    title: "5 Star Hotels",
    description: "High end amenities and exceptional service",
    image:
      "/hotel1.jpeg",
  },
  {
    id: "resorts",
    title: "Resorts",
    description: "Picturesque settings with luxury guest accommodation",
    image:
      "/hotel2.jpg",
  },
  {
    id: "convention",
    title: "Convention Hall",
    description: "Indoor Halls for Grand Weddings",
    image:
      "/hotel3.jpg",
  },
  {
    id: "3-star",
    title: "3 Star Hotels",
    description: "Affordable venues with good service",
    image:
      "/hotel4.jpg",
  },
  {
    id: "farmhouse",
    title: "Farmhouses",
    description: "Green, open spaces for affordable outdoor Weddings",
    image:
      "/hotel5.jpg",
  },
  {
    id: "mantapa",
    title: "Kalyan Mantapas",
    description: "Indoor halls for traditional weddings",
    image:
      "/hotel6.jpeg",
  },
];

export default function VenueScreen({ onNext }: VenueScreenProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleVenue = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    // <div className="py-12 space-y-8">
    //   <div className="text-center space-y-4">
    //     <h2 className="text-2xl md:text-3xl font-bold">
    //       What type of venues would you like?
    //     </h2>
    //     <p className="text-gray-600">Select all options that you like.</p>
    //   </div>

    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    //     {venues.map((venue) => (
    //       <button
    //         key={venue.id}
    //         onClick={() => toggleVenue(venue.id)}
    //         className={`relative p-4 rounded-xl text-left transition-all bg-white  ${
    //           selected.includes(venue.id)
    //             ? "border-pink-500 bg-pink-50"
    //             : ""
    //         }`}
    //       >
    //         <div className="relative w-full h-48 rounded-lg overflow-hidden">
    //           <Image
    //             src={venue.image}
    //             alt={venue.title}
    //             fill
    //             className="object-cover"
    //           />
    //         </div>
    //         <h3 className="font-semibold mt-2 ">{venue.title}</h3>
    //         <p className="text-sm text-gray-600">{venue.description}</p>
    //         {selected.includes(venue.id) && (
    //           <div className="absolute top-2 right-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg">
    //             ✓
    //           </div>
    //         )}
    //       </button>
    //     ))}
    //   </div>

    //   <div className="flex justify-center">
    //     <Button
    //       onClick={onNext}
    //       disabled={selected.length === 0}
    //       size="lg"
    //       className="bg-[#FF4E8D] hover:bg-[#FF4E8D]/90 text-white px-8 py-6 rounded-full text-lg disabled:opacity-50"
    //     >
    //       Continue
    //     </Button>
    //   </div>
    // </div>

    <div className="py-12 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          What type of venues would you like?
        </h2>
        <p className="text-gray-600">Select all options that you like.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {venues.map((venue) => (
          <button
            key={venue.id}
            onClick={() => toggleVenue(venue.id)}
            className={`relative p-4 rounded-xl transition-all bg-white ${
              selected.includes(venue.id) ? "border-pink-500 bg-pink-50" : ""
            }`}
          >
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image
                src={venue.image}
                alt={venue.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold mt-2 text-center">{venue.title}</h3>
            <p className="text-sm text-gray-600 text-center">{venue.description}</p>
            {selected.includes(venue.id) && (
              <div className="absolute top-2 right-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg">
                ✓
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          onClick={onNext}
          disabled={selected.length === 0}
          size="lg"
          className="bg-[#FF4E8D] hover:bg-[#FF4E8D]/90 text-white px-8 py-6 rounded-full text-lg disabled:opacity-50"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}


