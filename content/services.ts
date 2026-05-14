export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  includes: string[];
  closing?: string;
  cta: string;
  image: { url: string; alt: string };
  lifestyleImage?: { url: string; alt: string; headline: string };
  number: string;
  description: string;
}

export const services: Service[] = [
  {
    slug: "full-painting",
    number: "01",
    title: "Full Painting",
    subtitle: "Walls that sell the lease before the tour ends.",
    intro:
      "A fresh coat of paint is the fastest way to lift a unit's value and shorten its days on market. Our painting crews handle interiors and exteriors with the speed and finish quality property managers count on between tenants — no missed deadlines, no patchy walls, no callbacks. We deliver units that look ready to live in from day one.",
    includes: [
      "Full unit repaints",
      "Partial paint and targeted touch-ups",
      "Exterior painting",
    ],
    cta: "Create work order",
    image: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643399/10_vrkpru.jpg",
      alt: "Painter applying a fresh coat of paint to an interior wall",
    },
    lifestyleImage: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643415/23_bhkost.jpg",
      alt: "A freshly painted apartment room ready for a new resident",
      headline: "A fresh coat, a fresh start.",
    },
    description:
      "Fast, clean, professional painting between tenants — interiors, exteriors, full units or touch-ups.",
  },
  {
    slug: "resurfacing",
    number: "02",
    title: "Resurfacing",
    subtitle: "Renew the surfaces tenants notice first — without the replacement cost.",
    intro:
      "Countertops, tubs, tiles, and cabinets are the surfaces every prospect inspects on the walkthrough — and they're also the most expensive to replace. Resurfacing restores them to look-new condition for a fraction of the price, with finishes built to hold up under real tenant use. It's the upgrade that protects your unit's value and your renovation budget at the same time.",
    includes: ["Countertops", "Tubs and tiles", "Cabinets"],
    closing:
      "Tailored to your needs, whether you're refreshing a single bathroom or rolling out a property-wide upgrade.",
    cta: "Create work order",
    image: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643400/11_ib3whj.jpg",
      alt: "Technicians resurfacing a bathtub and kitchen countertop",
    },
    lifestyleImage: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643394/3_wol2qa.jpg",
      alt: "Restored apartment kitchen ready for a new tenant",
      headline: "Renewed, not replaced.",
    },
    description:
      "Restore countertops, tubs, tiles, and cabinets to look-new condition — no replacement required.",
  },
  {
    slug: "make-ready",
    number: "03",
    title: "Make Ready",
    subtitle: "Turn units faster. Lease them sooner.",
    intro:
      "Every day a unit sits vacant is rent lost. Our Make Ready service brings cleaning, repairs, paint, and final touches under one schedule and one point of contact — so your turnover doesn't stall waiting on three different vendors. We prep units to leasing-team standards so they're ready to show the moment the keys come back.",
    includes: [
      "Full make-ready packages for every unit size",
      "Townhomes of all configurations",
      "Seamless coordination between cleaning, paint, and repair crews",
    ],
    closing:
      "This package takes the hassle out of turnover, so you can focus on leasing instead of chasing schedules.",
    cta: "Create work order",
    image: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643401/12_qm5xjn.jpg",
      alt: "A unit fully prepared and ready for the next tenant",
    },
    lifestyleImage: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643415/22_zcdulg.jpg",
      alt: "A couple unpacking moving boxes in a freshly-prepared apartment",
      headline: "The new resident moment.",
    },
    description:
      "Full unit turnover under one schedule and one point of contact — ready to show the moment keys come back.",
  },
  {
    slug: "maid-service",
    number: "04",
    title: "Maid Service",
    subtitle: "Cleaning that passes the final walkthrough — not just the eye test.",
    intro:
      "A clean unit closes leases faster. Our maid service is built around the standards property managers actually inspect against: no streaks on glass, no dust on baseboards, no shortcuts in the corners that get checked first. We tailor every clean to the unit's layout and condition, from a light refresh to a full deep clean.",
    includes: [
      "Cleaning for every unit size — 1×1, 2×1, 2×2, and 3×2 configurations",
      "Touch-up cleans between showings",
      "Townhomes and heavy-duty deep cleaning",
    ],
    cta: "Create work order",
    image: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643402/13_xjv31t.jpg",
      alt: "Maid service team deep-cleaning an apartment",
    },
    lifestyleImage: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643411/20_sutvmo.jpg",
      alt: "A resident reading on a clean, tidy sofa with a cat on the windowsill",
      headline: "What clean feels like.",
    },
    description:
      "Inspection-ready cleaning built around property management standards — every size unit, every configuration.",
  },
  {
    slug: "carpet-services",
    number: "05",
    title: "Carpet Cleaning",
    subtitle: "Deep clean that erases the last tenant — stains, smells, and all.",
    intro:
      "Carpet is where the previous lease shows itself first. Pet odors, spills, foot traffic, and lingering smells all live in the fibers — and prospects notice on the walkthrough. Our deep carpet cleaning removes the buildup that surface vacuuming can't touch, leaving the unit smelling neutral and looking rental-ready. No replacement quote needed.",
    includes: [
      "Deep extraction cleaning for all carpet types",
      "Stain and pet odor removal",
      "Sanitizing and deodorizing treatment",
    ],
    closing: "Rental-ready results, guaranteed.",
    cta: "Create work order",
    image: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643404/14_q6c80m.jpg",
      alt: "Deep carpet cleaning service in a bedroom",
    },
    lifestyleImage: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643393/2-2_jugrd6.jpg",
      alt: "Clean apartment living room ready for new tenants",
      headline: "No trace of the last tenant.",
    },
    description:
      "Deep extraction cleaning that removes stains, pet odors, and residue — no replacement quote needed.",
  },
  {
    slug: "ac-duct",
    number: "06",
    title: "Air Duct Cleaning",
    subtitle: "Better air. Longer leases.",
    intro:
      "Dust, mold, and allergens build up inside AC ducts where no one looks — but every tenant feels them. Poor air quality leads to complaints, early lease breaks, and bad reviews. Our duct cleaning clears out the buildup so the air coming out of the vents is as clean as the rest of the unit. Healthier tenants stay longer.",
    includes: [
      "Full AC duct cleaning",
      "Dust, mold, and allergen removal",
      "Vent and register sanitization",
    ],
    cta: "Create work order",
    image: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643404/15_iyyeor.jpg",
      alt: "Technician cleaning an air duct system",
    },
    lifestyleImage: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643408/18_ggnr6r.jpg",
      alt: "Family settled in a clean, fresh apartment",
      headline: "Fresh air from day one.",
    },
    description:
      "Full AC duct cleaning — remove dust, mold, and allergens so tenants breathe clean from day one.",
  },
  {
    slug: "water-extraction",
    number: "07",
    title: "Water Extraction",
    subtitle: "Act in hours, not days — before water damage doubles your repair bill.",
    intro:
      "Water spreads fast. Padding soaks, drywall wicks, and what could have been a quick extraction turns into a full restoration job. Our crews respond around the clock to occupied and vacant units, pulling water out and starting the dry-down before the damage sets in. We minimize the loss so you can avoid the gut-job.",
    includes: [
      "Regular business hours",
      "24/7 after-hours emergency response",
    ],
    closing:
      "Service includes water extraction from every affected room, padding removal, enzyme treatment, and deodorizing.",
    cta: "Create work order",
    image: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643406/16_gyigai.jpg",
      alt: "Team performing emergency water extraction",
    },
    lifestyleImage: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643394/4-2_kjbows.jpg",
      alt: "Restored apartment after water damage remediation",
      headline: "Dry before the damage sets in.",
    },
    description:
      "24/7 emergency water extraction — fast response, padding removal, enzyme treatment, and full dry-down.",
  },
  {
    slug: "mold-remediation",
    number: "08",
    title: "Mold Remediation",
    subtitle: "Stop the mold before it stops the lease.",
    intro:
      "Mold scares prospects, fails inspections, and turns into legal exposure fast. Our remediation crews treat affected surfaces, repair the damaged drywall, and prep the area for repainting — leaving no trace of the problem behind. We get vacant units back into leasing condition without the long, expensive replacement route.",
    includes: [
      "Surface mold treatment and removal",
      "Drywall patching and repair",
      "Anti-microbial sealing and repaint prep",
    ],
    closing: "Fast, clean, and rental-ready when we're done.",
    cta: "Create work order",
    image: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778708758/hf_20260513_213736_89c7c174-01a4-4e11-9132-89de398e27a1_hjfiqn.jpg",
      alt: "Remediation crew treating mold-affected surfaces in an apartment",
    },
    lifestyleImage: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643415/22_zcdulg.jpg",
      alt: "Residents moving into a clean, remediated apartment",
      headline: "Clean, sealed, ready to lease.",
    },
    description:
      "Surface treatment, drywall repair, and anti-microbial sealing — units back in leasing inventory fast.",
  },
  {
    slug: "fire-damage-restoration",
    number: "09",
    title: "Fire Damage Restoration",
    subtitle: "From burned to back on market.",
    intro:
      "After a fire, every day the unit sits unrentable is a direct hit to your bottom line. Our restoration crews handle the full cleanup, smoke and soot removal, surface repairs, and repainting needed to bring damaged units back into leasing inventory. We move fast because we know what downtime costs property managers.",
    includes: [
      "Smoke, soot, and odor removal",
      "Wall and ceiling repair and repainting",
      "Full cleanup and turnover prep to return the unit to market",
    ],
    cta: "Create work order",
    image: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778708759/Layer_0-5_smwhes.jpg",
      alt: "Restoration crew repairing fire-damaged walls and ceiling",
    },
    lifestyleImage: {
      url: "https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643415/23_bhkost.jpg",
      alt: "Freshly restored apartment ready for a new resident",
      headline: "Restored from the ground up.",
    },
    description:
      "Full fire and smoke damage cleanup, repair, and repaint — back on the rental market as fast as possible.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
