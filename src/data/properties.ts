export type PropertyStatus = "Available" | "Built" | "Conceptual" | "Sold";

export interface PropertyFeature {
  title: string;
  description: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  location: string;
  status: PropertyStatus;
  price: string;
  year: number;
  size: string;
  heroImage: string;
  gallery: string[];
  shortDescription: string;
  fullDescription: string;
  materials: string[];
  features: PropertyFeature[];
}

export const properties: Property[] = [
  {
    id: "prop-01",
    slug: "residence-01-tokyo",
    title: "RESIDENCE 01",
    location: "TOKYO",
    status: "Built",
    price: "PRICE UPON REQUEST",
    year: 2024,
    size: "4,200 SQ FT",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    ],
    shortDescription: "A fortress of quietude amidst the dense urban fabric of Tokyo.",
    fullDescription: "Residence 01 is an exploration of isolation within proximity. Cast entirely in self-compacting concrete, the structure acts as an acoustic and visual shield. The exterior gives nothing away, while the interior is a masterclass in controlled daylight and spatial continuity.",
    materials: ["Cured Concrete", "Black Steel", "Hinoki Wood"],
    features: [
      {
        title: "Monolithic Envelope",
        description: "The entire exterior shell was cast in a continuous 72-hour pour, eliminating seams and creating an impenetrable barrier against urban noise."
      },
      {
        title: "Subterranean Atrium",
        description: "A central void plunges three stories underground, bringing diffused natural light into the deep living quarters without compromising privacy."
      },
      {
        title: "Thermal Mass",
        description: "The thick concrete walls regulate interior temperature naturally, absorbing heat during the day and releasing it at night."
      }
    ]
  },
  {
    id: "prop-02",
    slug: "pavilion-04-berlin",
    title: "PAVILION 04",
    location: "BERLIN",
    status: "Available",
    price: "€12,500,000",
    year: 2026,
    size: "6,800 SQ FT",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4ea0d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    ],
    shortDescription: "Brutalist purity set against the raw landscape of the German countryside.",
    fullDescription: "Pavilion 04 rejects ornamentation. It is a structure reduced to its absolute mathematical essence. Sited on the edge of a dense forest, the aggressive linearity of the building stands in violent, beautiful contrast to the organic environment.",
    materials: ["Exposed Aggregate", "Anodized Aluminum", "Obsidian Glass"],
    features: [
      {
        title: "Cantilevered Mass",
        description: "The primary living volume extends 12 meters over the sloping terrain without visible support, defying the visual weight of the material."
      },
      {
        title: "Obsidian Glazing",
        description: "Floor-to-ceiling specialized glass acts as a perfect mirror from the exterior, reflecting the forest, while providing unobstructed, tinted views from within."
      }
    ]
  },
  {
    id: "prop-03",
    slug: "mono-09-new-york",
    title: "MONO 09",
    location: "NEW YORK",
    status: "Conceptual",
    price: "PRICE UPON REQUEST",
    year: 2028,
    size: "12,000 SQ FT",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    gallery: [
       "https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=1908&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2070&auto=format&fit=crop"
    ],
    shortDescription: "A vertical intervention in the skyline, designed for absolute permanence.",
    fullDescription: "Conceived as a monolith extruded from the bedrock of Manhattan, MONO 09 is a private residential tower that ignores the surrounding glass vernacular. It is a solid, unyielding object that will stand long after its neighbors have been replaced.",
    materials: ["Basalt", "Titanium", "Void-Black Resin"],
    features: [
      {
        title: "Bedrock Anchoring",
        description: "The foundation is drilled 40 meters directly into the Manhattan schist, making movement virtually impossible."
      },
      {
        title: "Aperture Control",
        description: "Rather than curtain walls, windows are deep, calculated apertures carved into the thick facade to frame specific, permanent urban views."
      }
    ]
  }
];
