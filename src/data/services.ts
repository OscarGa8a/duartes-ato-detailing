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
    slug: 'premium-package',
    name: 'Paquete Premium (Interior + Exterior)',
    tagline: 'Una transformación de 360 grados para tu vehículo.',
    shortDescription:
      'Renovación integral profunda. Detallado minucioso de interior y exterior en un solo proceso.',
    includes: [
      {
        label: 'Lavado Exterior:',
        items: [
          'Prelavado sin contacto,',
          'lavado seguro con dos cubetas,',
          'limpieza profunda de rines,',
          'acondicionamiento de llantas',
          'aplicación de sellador protector.',
        ],
      },
      {
        label: 'Lavado Interior:',
        items: [
          'Aspirado profundo',
          'limpieza detallada de tablero, consola, rejillas, paneles de puertas, desmanchado ligero de tapicería y acondicionador de plásticos/cuero con filtro UV.',
        ],
      },
    ],
    ctaLine: '¿Tu auto necesita este nivel de detalle?',
    images: [
      '/images/services/premium-1.jpg',
      '/images/services/premium-2.jpg',
      '/images/services/premium-3.jpg',
      '/images/services/premium-4.jpg',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    relatedSlugs: ['exterior-detailing', 'interior-detailing', 'paint-decontamination'],
  },
  {
    slug: 'ceramic-coating',
    name: 'Recubrimiento Cerámico',
    tagline: 'Protección avanzada contra UV y contaminación. Brillo extremo y duradero por años.',
    shortDescription:
      'Protección avanzada contra los rayos UV y la contaminación. Brillo extremo y duradero por años.',
    includes: [
      {
        label: 'Preparación de superficie:',
        items: [
          'Descontaminación química completa',
          'Clay bar para remoción de contaminantes adheridos',
          'Corrección de superficie de 1 paso',
        ],
      },
      {
        label: 'Aplicación cerámica:',
        items: [
          'Recubrimiento cerámico de grado profesional',
          'Curado controlado con lámpara IR',
          'Protección de 2+ años garantizada',
          'Hidrofobicidad extrema (efecto de agua)',
        ],
      },
    ],
    ctaLine: '¿Querés proteger la inversión en tu auto?',
    images: [
      '/images/services/ceramic-1.jpg',
      '/images/services/ceramic-2.jpg',
      '/images/services/ceramic-3.jpg',
      '/images/services/ceramic-4.jpg',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    relatedSlugs: ['paint-correction', 'paint-decontamination', 'exterior-detailing'],
  },
  {
    slug: 'paint-correction',
    name: 'Corrección de Pintura y Pulido',
    tagline: 'Eliminamos imperfecciones y micro-rayones para restaurar la claridad y profundidad del color.',
    shortDescription:
      'Eliminamos imperfecciones y micro-rayones para restaurar la claridad y profundidad del color.',
    includes: [
      {
        label: 'Evaluación y preparación:',
        items: [
          'Inspección con luz de detallado de alta potencia',
          'Medición de espesor de pintura',
          'Lavado y descontaminación de superficie',
        ],
      },
      {
        label: 'Corrección:',
        items: [
          'Corrección de 1 o 2 pasos según la condición',
          'Pulido con compuesto abrasivo de alta performance',
          'Refinamiento con polish de acabado',
          'Sellador de protección post-corrección',
        ],
      },
    ],
    ctaLine: '¿Tu pintura perdió su brillo original?',
    images: [
      '/images/services/paint-correction-1.jpg',
      '/images/services/paint-correction-2.jpg',
      '/images/services/paint-correction-3.jpg',
      '/images/services/paint-correction-4.jpg',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    relatedSlugs: ['ceramic-coating', 'paint-decontamination', 'exterior-detailing'],
  },
  {
    slug: 'exterior-detailing',
    name: 'Detallado Exterior',
    tagline: 'Limpieza profunda y segura. Incluye lavado manual y rines. Protección para el brillo.',
    shortDescription:
      'Limpieza profunda y segura. Incluye lavado manual y rines. Protección para brillo.',
    includes: [
      {
        label: 'Proceso de lavado:',
        items: [
          'Prelavado sin contacto con espuma',
          'Lavado seguro con método dos cubetas',
          'Limpieza detallada de rines y llantas',
          'Acondicionamiento de llantas',
        ],
      },
      {
        label: 'Protección y acabado:',
        items: [
          'Aplicación de sellador de pintura',
          'Limpieza de vidrios exteriores',
          'Acondicionador de plásticos exteriores',
          'Secado con soplador y microfibras',
        ],
      },
    ],
    ctaLine: '¿Tu auto necesita un lavado profesional?',
    images: [
      '/images/services/exterior-1.jpg',
      '/images/services/exterior-2.jpg',
      '/images/services/exterior-3.jpg',
      '/images/services/exterior-4.jpg',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    relatedSlugs: ['premium-package', 'paint-decontamination', 'interior-detailing'],
  },
  {
    slug: 'interior-detailing',
    name: 'Detallado Interior',
    tagline: 'Higiene y confort. Limpieza de interiores. Protección UV.',
    shortDescription:
      'Higiene y confort. Limpieza de interiores. Protección UV.',
    includes: [
      {
        label: 'Limpieza completa:',
        items: [
          'Aspirado profundo de toda la cabina',
          'Limpieza de tablero, consola y paneles de puertas',
          'Limpieza de rejillas y orificios con pinceles',
          'Desmanchado de tapicería',
        ],
      },
      {
        label: 'Protección y aroma:',
        items: [
          'Acondicionador de plásticos y cuero con filtro UV',
          'Limpieza de vidrios interiores',
          'Perfumado de habitáculo',
        ],
      },
    ],
    ctaLine: '¿Cuánto tiempo tiene tu auto sin un detallado interior?',
    images: [
      '/images/services/interior-1.jpg',
      '/images/services/interior-2.jpg',
      '/images/services/interior-3.jpg',
      '/images/services/interior-4.jpg',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    relatedSlugs: ['premium-package', 'upholstery-wash', 'exterior-detailing'],
  },
  {
    slug: 'paint-decontamination',
    name: 'Descontaminación de Pintura',
    tagline: 'Superficies puras. Eliminamos hierro, savia y contaminación. Más allá del lavado normal.',
    shortDescription:
      'Superficies puras. Eliminamos hierro, savia y contaminación. Más allá del lavado normal.',
    includes: [
      {
        label: 'Descontaminación química:',
        items: [
          'Removedor de hierro y partículas metálicas',
          'Removedor de savia de árbol',
          'Removedor de brea y alquitrán',
        ],
      },
      {
        label: 'Descontaminación mecánica:',
        items: [
          'Tratamiento con clay bar de grado profesional',
          'Remoción de insectos incrustados',
          'Sellador protector post-descontaminación',
        ],
      },
    ],
    ctaLine: '¿Tu pintura se siente áspera al tacto?',
    images: [
      '/images/services/decontamination-1.jpg',
      '/images/services/decontamination-2.jpg',
      '/images/services/decontamination-3.jpg',
      '/images/services/decontamination-4.jpg',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    relatedSlugs: ['paint-correction', 'ceramic-coating', 'exterior-detailing'],
  },
  {
    slug: 'upholstery-wash',
    name: 'Lavado Profundo de Tapicería',
    tagline: 'Extracción y revitalización. Eliminamos suciedad y olores. Frescura en asientos y textiles.',
    shortDescription:
      'Extracción y revitalización. Eliminamos suciedad y olores. Frescura en asientos y textiles.',
    includes: [
      {
        label: 'Tratamiento de telas:',
        items: [
          'Pre-spray de desgrasante en asientos',
          'Fregado con cepillo rotativo de baja velocidad',
          'Extracción con aspiradora de agua caliente',
          'Secado con soplador de aire',
        ],
      },
      {
        label: 'Tratamiento de cuero (si aplica):',
        items: [
          'Limpieza con limpiador de cuero de pH neutro',
          'Acondicionador de cuero con factor UV',
          'Tratamiento antiolor con ozono (opcional)',
        ],
      },
    ],
    ctaLine: '¿Manchas, olores o tapicería descuidada?',
    images: [
      '/images/services/upholstery-1.jpg',
      '/images/services/upholstery-2.jpg',
      '/images/services/upholstery-3.jpg',
      '/images/services/upholstery-4.jpg',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    relatedSlugs: ['interior-detailing', 'premium-package', 'headlight-restoration'],
  },
  {
    slug: 'headlight-restoration',
    name: 'Restauración de Faros',
    tagline: 'Estética y seguridad nocturna. Claridad restaurada en faros opacos.',
    shortDescription:
      'Estética y seguridad nocturna. Claridad en faros opacos.',
    includes: [
      {
        label: 'Proceso de restauración:',
        items: [
          'Inspección del nivel de oxidación/opacidad',
          'Lijado progresivo (400, 800, 1500, 2000 grit)',
          'Pulido con compound de acabado fino',
          'Sellador UV para lentes de faros',
        ],
      },
      {
        label: 'Resultado garantizado:',
        items: [
          'Claridad hasta un 90% restaurada',
          'Protección UV incluida para durabilidad',
          'Resultados visibles en el mismo día',
        ],
      },
    ],
    ctaLine: '¿Tus faros están amarillos u opacos?',
    images: [
      '/images/services/headlights-1.jpg',
      '/images/services/headlights-2.jpg',
      '/images/services/headlights-3.jpg',
      '/images/services/headlights-4.jpg',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    relatedSlugs: ['exterior-detailing', 'paint-correction', 'upholstery-wash'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map((slug) => services.find((s) => s.slug === slug)!).filter(Boolean);
}
