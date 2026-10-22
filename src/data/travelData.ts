export interface Vehicle {
  id: string;
  name: string;
  category: string;
  capacity: string;
  luggage: string;
  description: string;
  features: string[];
  image: string;
  badge?: string;
}

export interface Destination {
  id: string;
  title: string;
  subtitle: string;
  attractions: string[];
  driveTime: string;
  recommendedDuration: string;
  image: string;
  tag: string;
  highlights: string;
}

export interface RouteInfo {
  from: string;
  to: string;
  distanceKm: number;
  estDuration: string;
  highlights: string;
  roadCondition: string;
}

export const BUSINESS_INFO = {
  name: "Shaisha Tours & Travels",
  tagline: "Your Trusted Ooty & Nilgiris Cab & Sightseeing Specialist",
  taglineSecondary: "Comfortable hill-driving, reliable local cabs, and unforgettable Nilgiri tour packages.",
  phone1: "7868833712",
  phone2: "6380120276",
  email: "shaishatourstravels@gmail.com",
  location: "Ooty, The Nilgiris, Tamil Nadu - 643001, India",
  serviceHours: "24 Hours / 7 Days a Week",
  whatsappBaseUrl1: "https://wa.me/917868833712",
  whatsappBaseUrl2: "https://wa.me/916380120276",
};

export interface FleetPhoto {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
}

export const REAL_FLEET_PHOTOS: FleetPhoto[] = [
  {
    id: "etios-viewpoint",
    title: "Toyota Etios at 'Welcome to Ooty' Tea Estate Vista",
    subtitle: "Reg: TN 66 F 2106 • Mountain scenic halt with emerald lake & tea hills",
    image: "/assets/aistudio/Silver_Toyota_at_Misty_Ooty_View_c56a6fb2.png",
    tag: "Welcome to Ooty"
  },
  {
    id: "innova-forest",
    title: "Toyota Innova on Misty Ooty Forest Road",
    subtitle: "Reg: TN 38 AR 2945 • Shola forest & eucalyptus hairpin bend excursion",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-21_at_9.57.05_PM__2__3fd8dc29.jpeg",
    tag: "Misty Hill Route"
  },
  {
    id: "ertiga-sunrise",
    title: "Maruti Ertiga at Nilgiri Sunrise Mountain Peak",
    subtitle: "Reg: TN 43 S 4920 • Equipped with top luggage carrier for long-distance family travel",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-21_at_9.57.05_PM__1__10549e00.jpeg",
    tag: "Sunrise Viewpoint"
  },
  {
    id: "dzire-resort",
    title: "Maruti Dzire at Ooty Heritage Hill Resort",
    subtitle: "Reg: TN 43 K 6703 • Punctual doorstep pickup at private cottages & luxury stays",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-21_at_9.57.05_PM_827abbdd.jpeg",
    tag: "Resort Pickup"
  },
  {
    id: "ertiga-garland",
    title: "Maruti Ertiga Ready for Mountain Dispatch",
    subtitle: "Reg: TN 43 S 4920 • Immaculate cleanliness, sanitised cabin, and festive blessings",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-21_at_9.57.04_PM_54bbb227.jpeg",
    tag: "Clean & Ready"
  }
];

export const VEHICLES: Vehicle[] = [
  {
    id: "toyota-etios",
    name: "Toyota Etios (TN 66 F 2106)",
    category: "Executive Mountain Sedan",
    capacity: "4 Passengers",
    luggage: "2 Large + 2 Small Bags",
    description: "Our signature silver Toyota Etios pictured at the iconic 'Welcome to Ooty' tea estate viewpoint. Perfect for couples, solo travelers, and small families wanting comfortable mountain cruising.",
    features: ["Chilled AC & Warm Heater", "Comfortable Rear Legroom", "Spacious 592L Boot Trunk", "Smooth Nilgiri Hill Suspension"],
    image: "/assets/aistudio/Silver_Toyota_at_Misty_Ooty_View_c56a6fb2.png",
    badge: "Featured Ooty Sightseeing Cab"
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova (TN 38 AR 2945)",
    category: "Premium Hill SUV / MUV",
    capacity: "6 - 7 Passengers",
    luggage: "4 - 5 Large Bags",
    description: "Our authentic white Toyota Innova pictured inside Ooty's misty eucalyptus forests. The gold standard for Nilgiri hill journeys with spacious legroom and reliable hill climbing power.",
    features: ["Dual-zone AC & Rear Blowers", "Plush Reclining Captain Seats", "High Ground Clearance for Hills", "Top Roof Carrier for Luggage"],
    image: "/assets/aistudio/WhatsApp_Image_2026-10-21_at_9.57.05_PM__2__3fd8dc29.jpeg",
    badge: "Best for Families & Ghat Roads"
  },
  {
    id: "ertiga-carrier",
    name: "Maruti Suzuki Ertiga (TN 43 S 4920)",
    category: "Comfort 6-Seater with Luggage Carrier",
    capacity: "5 - 6 Passengers",
    luggage: "3 Bags + Roof Carrier",
    description: "Our white Maruti Ertiga captured at an Ooty mountain sunrise viewpoint. Equipped with an aerodynamic roof luggage carrier, providing maximum interior cabin room for your entire family.",
    features: ["Equipped with Roof Luggage Carrier", "Rear AC Vents for All Rows", "Flexible Seating", "Registered Nilgiris Taxi (TN 43)"],
    image: "/assets/aistudio/WhatsApp_Image_2026-10-21_at_9.57.05_PM__1__10549e00.jpeg",
    badge: "Most Popular for Airport Transfers"
  },
  {
    id: "swift-dzire",
    name: "Maruti Dzire Sedan (TN 43 K 6703)",
    category: "Heritage Stay & City Sedan",
    capacity: "4 Passengers",
    luggage: "2 Large Bags",
    description: "Our spotless white Maruti Dzire sedan pictured at a heritage Ooty tea bungalow resort. Perfect for local town sightseeing, shopping, Doddabetta, and Botanical Garden tours.",
    features: ["Chilled Air Conditioning", "Doorstep Hotel & Resort Pickup", "Quiet Smooth Engine", "Economical Mountain Fares"],
    image: "/assets/aistudio/WhatsApp_Image_2026-10-21_at_9.57.05_PM_827abbdd.jpeg",
    badge: "Budget Friendly Couple Sedan"
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller (12 / 17 Seater)",
    category: "Luxury Group Mini-Coach",
    capacity: "12 - 17 Passengers",
    luggage: "Dedicated Heavy Luggage Carrier",
    description: "Ideal for large families, corporate retreats, college groups, and pilgrimage tours exploring Ooty, Coonoor, Mudumalai, and Pykara.",
    features: ["High-Roof Spacious Interior", "Push-back Luxury Seats", "Roof Carrier for Heavy Luggage", "Music System"],
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80",
    badge: "Ideal for Large Groups"
  }
];

export const SIGHTSEEING_PACKAGES: Destination[] = [
  {
    id: "ooty-local",
    title: "Ooty Local Highlights Tour",
    subtitle: "The Queen of Hill Stations iconic landmarks",
    attractions: [
      "Government Botanical Garden",
      "Ooty Lake & Boating",
      "Doddabetta Peak (Highest point in Nilgiris)",
      "Rose Garden (Centenary Rose Park)",
      "Tea Factory & Chocolate Museum",
      "Wax World Museum"
    ],
    driveTime: "Full Day (8 - 9 hours)",
    recommendedDuration: "Ideal for 1st day in Ooty",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80",
    tag: "Essential Ooty",
    highlights: "Spectacular panoramic views of the Nilgiri plateau from Doddabetta and serene boating."
  },
  {
    id: "coonoor-tour",
    title: "Coonoor & Heritage Tea Estate Tour",
    subtitle: "Misty valleys, colonial bungalows, and cascading views",
    attractions: [
      "Sim's Park Botanical Sanctuary",
      "Dolphin's Nose Viewpoint",
      "Lamb's Rock (Deep gorge vista)",
      "Nilgiri Mountain Railway Experience",
      "Wellington Military Campus & Golf Course",
      "Highfield Tea Factory"
    ],
    driveTime: "Full Day or Half Day (6 - 8 hours)",
    recommendedDuration: "Approx 20 km from Ooty",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    tag: "Scenic & Heritage",
    highlights: "Walk through manicured tea gardens and marvel at the Catherine Falls view from Dolphin's Nose."
  },
  {
    id: "pykara-glenmorgan",
    title: "Pykara Lake & Filming Points Tour",
    subtitle: "Pristine waters, pine forests, and cinematic landscapes",
    attractions: [
      "Pykara Lake & Speed Boating",
      "Pykara Cascading Waterfalls",
      "Wenlock Downs (9th Mile / Shooting Medu)",
      "Pine Forest Ooty",
      "Kamraj Sagar / Sandynallah Dam",
      "Toda Tribal Hamlet Vista"
    ],
    driveTime: "5 - 7 hours",
    recommendedDuration: "Approx 21 km from Ooty",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80",
    tag: "Nature & Waterfalls",
    highlights: "Experience peaceful pine needle walks and thrilling speedboat rides on Pykara Lake."
  },
  {
    id: "kotagiri-catherine",
    title: "Kotagiri & Catherine Falls Excursion",
    subtitle: "Untouched quiet beauty of the oldest Nilgiri hill station",
    attractions: [
      "Kodanad Viewpoint (Misty Valley & Rangaswamy Peak)",
      "Catherine Waterfalls View",
      "John Sullivan Memorial",
      "Elk Falls Vista",
      "Organic Tea Plantations"
    ],
    driveTime: "Full Day (7 - 8 hours)",
    recommendedDuration: "Approx 30 km from Ooty",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    tag: "Offbeat Tranquility",
    highlights: "Fewer crowds, crisp eucalyptus air, and sweeping vistas of the Bhavani river plains."
  },
  {
    id: "mudumalai-wildlife",
    title: "Mudumalai Tiger Reserve & Safari",
    subtitle: "Exciting jungle descent through 36 hairpin bends (Kalhatty)",
    attractions: [
      "Mudumalai Jungle Safari (Jeep / Bus)",
      "Theppakadu Elephant Camp",
      "Kalhatty Ghats & Waterfalls",
      "Wildlife Sightings (Elephants, Spotted Deer, Gaurs)",
      "Bandipur Border Drive"
    ],
    driveTime: "Full Day (8 - 10 hours)",
    recommendedDuration: "Approx 40 km descent",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1000&q=80",
    tag: "Wildlife Adventure",
    highlights: "A thrilling drive through Kalhatty Ghats into dense tiger reserve jungles."
  },
  {
    id: "avalanche-emerald",
    title: "Avalanche & Emerald Lake Eco Circuit",
    subtitle: "Pure untouched Nilgiri wilderness and turquoise lakes",
    attractions: [
      "Emerald Lake & Tea Village",
      "Avalanche Lake Sanctuary",
      "Forest Department Safari Entry",
      "Trout Hatchery & Cauliflower Shola",
      "Upper Bhavani (Forest Permission Route)"
    ],
    driveTime: "6 - 8 hours",
    recommendedDuration: "Approx 25 km from Ooty",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1000&q=80",
    tag: "Eco-Reserve",
    highlights: "Mesmerizing reflection lakes ringed by mist-shrouded shola forests."
  }
];

export const POPULAR_ROUTES: RouteInfo[] = [
  {
    from: "Coimbatore Airport / Railway Station",
    to: "Ooty (via Mettupalayam & Coonoor)",
    distanceKm: 88,
    estDuration: "3 to 3.5 hrs",
    highlights: "Scenic mountain ghat climb with tea stall stops",
    roadCondition: "Well-paved National Highway with mountain curves"
  },
  {
    from: "Mysore Railway Station / City",
    to: "Ooty (via Gundlupet & Mudumalai / Gudalur)",
    distanceKm: 125,
    estDuration: "3.5 to 4 hrs",
    highlights: "Passes through Bandipur & Mudumalai wildlife reserves",
    roadCondition: "Smooth scenic highway with daytime forest checkpoints"
  },
  {
    from: "Bangalore City / Airport",
    to: "Ooty (via Mysore Expressway)",
    distanceKm: 275,
    estDuration: "6 to 7 hrs",
    highlights: "Expressway followed by Nilgiri hill ascent",
    roadCondition: "Fast highway until reserve forest, then hill ghats"
  },
  {
    from: "Ooty Central Town",
    to: "Coonoor Sightseeing Round-trip",
    distanceKm: 45,
    estDuration: "Full Day Sightseeing",
    highlights: "Sim's Park, Dolphin's Nose & Wellington",
    roadCondition: "Paved hill roads with tea estate vistas"
  },
  {
    from: "Ooty Central Town",
    to: "Pykara & Shooting Point Round-trip",
    distanceKm: 50,
    estDuration: "Half/Full Day Sightseeing",
    highlights: "9th Mile meadows, Pine Forest, Speedboat Lake",
    roadCondition: "Smooth Nilgiri hillside highway"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Expert Nilgiri Hill Drivers",
    description: "Our chauffeurs have deep experience navigating steep mountain gradients, misty hairpin bends, and Kalhatty ghats safely and gently.",
    icon: "ShieldCheck"
  },
  {
    title: "Clean & Sanitized Fleet",
    description: "Every vehicle is thoroughly vacuumed, washed, and scented before every trip. Comfortable seating with functioning seatbelts.",
    icon: "Sparkles"
  },
  {
    title: "Transparent & Honest Pricing",
    description: "No hidden extras, no forced shopping commissions, and upfront quote clarity for day rentals, fuel, toll, and driver allowances.",
    icon: "BadgeIndianRupee"
  },
  {
    title: "24/7 Cab Dispatch & Assistance",
    description: "Whether you need an early-morning Coimbatore flight transfer or an emergency evening mountain pickup, our team is always on call.",
    icon: "Clock"
  },
  {
    title: "Customized Tour Itineraries",
    description: "Travel at your own pace. Stop for photos at scenic viewpoint curves, tea tasting, or homemade chocolate shopping whenever you desire.",
    icon: "Compass"
  },
  {
    title: "Instant Direct Contact",
    description: "Direct access to owners and drivers via WhatsApp and phone without third-party commission middle-men.",
    icon: "PhoneCall"
  }
];
