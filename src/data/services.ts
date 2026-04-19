// src/data/services.ts

export interface ServiceIncludesItem {
  label: string;
  items: string[];
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  includes: ServiceIncludesItem[];
  ctaLine?: string;
  images: string[];
  videoUrl?: string;
  relatedSlugs: string[];
  ogImage?: string;
}

export const services: Service[] = [
  {
    slug: "premium-package",
    name: "Premium Package (Interior + Exterior)",
    tagline: "A full 360-degree transformation for your vehicle.",
    shortDescription:
      "Deep full-service renewal. Thorough interior and exterior detailing in one process.",
    includes: [
      {
        label: "Exterior Wash:",
        items: [
          "Touchless pre-wash,",
          "safe two-bucket wash,",
          "deep wheel cleaning,",
          "tire dressing,",
          "protective sealant application.",
        ],
      },
      {
        label: "Interior Wash:",
        items: [
          "Deep vacuuming,",
          "detailed cleaning of dashboard, center console, vents, door panels, light upholstery stain removal, and UV protection conditioner for plastic/leather.",
        ],
      },
    ],
    ctaLine: "Does your car need this level of detail?",
    images: [
      "/images/gallery-01.jpg",
      "/images/gallery-02.jpg",
      "/images/gallery-03.jpg",
      "/images/gallery-04.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    relatedSlugs: [
      "exterior-detailing",
      "interior-detailing",
      "paint-decontamination",
    ],
  },
  {
    slug: "ceramic-coating",
    name: "Ceramic Coating",
    tagline:
      "Advanced protection against UV rays and contamination. Extreme, long-lasting gloss for years.",
    shortDescription:
      "Advanced protection against UV rays and contamination. Extreme, long-lasting gloss for years.",
    includes: [
      {
        label: "Surface preparation:",
        items: [
          "Complete chemical decontamination,",
          "Clay bar treatment to remove bonded contaminants,",
          "1-step surface correction.",
        ],
      },
      {
        label: "Ceramic application:",
        items: [
          "Professional-grade ceramic coating,",
          "Controlled curing with IR lamp,",
          "2+ years of guaranteed protection,",
          "Extreme hydrophobic effect (water beading).",
        ],
      },
    ],
    ctaLine: "Want to protect your car investment?",
    images: [
      "/images/gallery-05.jpg",
      "/images/gallery-06.jpg",
      "/images/gallery-07.jpg",
      "/images/gallery-08.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    relatedSlugs: [
      "paint-correction",
      "paint-decontamination",
      "exterior-detailing",
    ],
  },
  {
    slug: "paint-correction",
    name: "Paint Correction and Polishing",
    tagline:
      "We remove imperfections and micro-scratches to restore clarity and color depth.",
    shortDescription:
      "We remove imperfections and micro-scratches to restore clarity and color depth.",
    includes: [
      {
        label: "Evaluation and preparation:",
        items: [
          "Inspection with high-power detailing light,",
          "Paint thickness measurement,",
          "Surface wash and decontamination.",
        ],
      },
      {
        label: "Correction:",
        items: [
          "1- or 2-step correction depending on condition,",
          "Polishing with high-performance abrasive compound,",
          "Refinement with finishing polish,",
          "Protective sealant after correction.",
        ],
      },
    ],
    ctaLine: "Has your paint lost its original shine?",
    images: [
      "/images/gallery-01.jpg",
      "/images/gallery-02.jpg",
      "/images/gallery-03.jpg",
      "/images/gallery-04.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    relatedSlugs: [
      "ceramic-coating",
      "paint-decontamination",
      "exterior-detailing",
    ],
  },
  {
    slug: "exterior-detailing",
    name: "Exterior Detailing",
    tagline:
      "Deep and safe cleaning. Includes hand wash and wheels. Protection for lasting shine.",
    shortDescription:
      "Deep and safe cleaning. Includes hand wash and wheels. Shine protection.",
    includes: [
      {
        label: "Wash process:",
        items: [
          "Touchless foam pre-wash,",
          "Safe two-bucket wash method,",
          "Detailed wheel and tire cleaning,",
          "Tire dressing.",
        ],
      },
      {
        label: "Protection and finish:",
        items: [
          "Paint sealant application,",
          "Exterior glass cleaning,",
          "Exterior plastic conditioner,",
          "Drying with blower and microfiber towels.",
        ],
      },
    ],
    ctaLine: "Does your car need a professional wash?",
    images: [
      "/images/gallery-01.jpg",
      "/images/gallery-02.jpg",
      "/images/gallery-03.jpg",
      "/images/gallery-04.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    relatedSlugs: [
      "premium-package",
      "paint-decontamination",
      "interior-detailing",
    ],
  },
  {
    slug: "interior-detailing",
    name: "Interior Detailing",
    tagline: "Hygiene and comfort. Interior deep cleaning with UV protection.",
    shortDescription:
      "Hygiene and comfort. Interior deep cleaning with UV protection.",
    includes: [
      {
        label: "Complete cleaning:",
        items: [
          "Deep vacuuming of the entire cabin,",
          "Cleaning of dashboard, center console, and door panels,",
          "Cleaning of vents and crevices with detailing brushes,",
          "Upholstery stain treatment.",
        ],
      },
      {
        label: "Protection and scent:",
        items: [
          "UV protection conditioner for plastic and leather,",
          "Interior glass cleaning,",
          "Cabin deodorizing.",
        ],
      },
    ],
    ctaLine: "How long has it been since your car had an interior detail?",
    images: [
      "/images/gallery-01.jpg",
      "/images/gallery-02.jpg",
      "/images/gallery-03.jpg",
      "/images/gallery-04.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    relatedSlugs: ["premium-package", "upholstery-wash", "exterior-detailing"],
  },
  {
    slug: "paint-decontamination",
    name: "Paint Decontamination",
    tagline:
      "Pure surfaces. We remove iron, tree sap, and contamination. Beyond a normal wash.",
    shortDescription:
      "Pure surfaces. We remove iron, tree sap, and contamination. Beyond a normal wash.",
    includes: [
      {
        label: "Chemical decontamination:",
        items: [
          "Iron and metallic particle remover,",
          "Tree sap remover,",
          "Tar remover.",
        ],
      },
      {
        label: "Mechanical decontamination:",
        items: [
          "Professional-grade clay bar treatment,",
          "Removal of embedded bug residue,",
          "Protective sealant after decontamination.",
        ],
      },
    ],
    ctaLine: "Does your paint feel rough to the touch?",
    images: [
      "/images/gallery-01.jpg",
      "/images/gallery-02.jpg",
      "/images/gallery-03.jpg",
      "/images/gallery-04.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    relatedSlugs: ["paint-correction", "ceramic-coating", "exterior-detailing"],
  },
  {
    slug: "upholstery-wash",
    name: "Deep Upholstery Cleaning",
    tagline:
      "Extraction and revitalization. We remove dirt and odors. Freshness for seats and textiles.",
    shortDescription:
      "Extraction and revitalization. We remove dirt and odors. Freshness for seats and textiles.",
    includes: [
      {
        label: "Fabric treatment:",
        items: [
          "Degreasing pre-spray on seats,",
          "Low-speed rotary brush agitation,",
          "Hot-water extraction,",
          "Air-blower drying.",
        ],
      },
      {
        label: "Leather treatment (if applicable):",
        items: [
          "Cleaning with pH-neutral leather cleaner,",
          "UV protection leather conditioner,",
          "Anti-odor ozone treatment (optional).",
        ],
      },
    ],
    ctaLine: "Stains, odors, or neglected upholstery?",
    images: [
      "/images/services/upholstery-1.jpg",
      "/images/services/upholstery-2.jpg",
      "/images/services/upholstery-3.jpg",
      "/images/services/upholstery-4.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    relatedSlugs: [
      "interior-detailing",
      "premium-package",
      "headlight-restoration",
    ],
  },
  {
    slug: "headlight-restoration",
    name: "Headlight Restoration",
    tagline:
      "Looks and nighttime safety. Restored clarity for cloudy headlights.",
    shortDescription:
      "Looks and nighttime safety. Clearer cloudy headlights.",
    includes: [
      {
        label: "Restoration process:",
        items: [
          "Inspection of oxidation/cloudiness level,",
          "Progressive sanding (400, 800, 1500, 2000 grit),",
          "Polishing with fine finishing compound,",
          "UV sealant for headlight lenses.",
        ],
      },
      {
        label: "Guaranteed result:",
        items: [
          "Up to 90% restored clarity,",
          "UV protection included for durability,",
          "Visible same-day results.",
        ],
      },
    ],
    ctaLine: "Are your headlights yellow or cloudy?",
    images: [
      "/images/gallery-01.jpg",
      "/images/gallery-02.jpg",
      "/images/gallery-03.jpg",
      "/images/gallery-04.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    relatedSlugs: ["exterior-detailing", "paint-correction", "upholstery-wash"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs
    .map((slug) => services.find((s) => s.slug === slug)!)
    .filter(Boolean);
}
