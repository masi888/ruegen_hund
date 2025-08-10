import { type ListingRaw } from "@/lib/types";

const MOCK: ListingRaw[] = [
  {
    id: "villa-binz-101",
    source: "direct",
    name: "Villa Strandblick Binz",
    location: "Binz, Rügen",
    coords: { lat: 54.4007, lng: 13.611 },
    dogsAllowed: true,
    maxDogs: 2,
    rating: 4.6,
    basePricePerNight: 89,
    cleaningFee: 20,
    serviceFeePct: 0,
    taxesPct: 7,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
    deepLink: "https://hotel-website.example/booking?v=binz101",
    isDirect: true,
  },
  {
    id: "hotel-prora-202",
    source: "expedia",
    name: "Seaside Hotel Prora",
    location: "Prora, Rügen",
    dogsAllowed: true,
    maxDogs: 1,
    rating: 4.4,
    basePricePerNight: 95,
    serviceFeePct: 10,
    taxesPct: 7,
    image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1200&auto=format&fit=crop",
    deepLink: "https://www.expedia.com/affiliate?offer=prora202",
  },
  {
    id: "fewo-sellin-303",
    source: "hotelbeds",
    name: "Ferienwohnung DünenNest",
    location: "Sellin, Rügen",
    dogsAllowed: true,
    maxDogs: 2,
    rating: 4.8,
    basePricePerNight: 79,
    cleaningFee: 35,
    taxesPct: 7,
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1200&auto=format&fit=crop",
    deepLink: "https://www.hotelbeds.com/affiliate?offer=sellin303",
  },
  {
    id: "haus-arkona-404",
    source: "trivago",
    name: "Haus Arkona",
    location: "Göhren, Rügen",
    dogsAllowed: true,
    rating: 4.1,
    basePricePerNight: 69,
    serviceFeePct: 8,
    taxesPct: 7,
    image: "https://images.unsplash.com/photo-1507086182424-c219a2c5b9f3?q=80&w=1200&auto=format&fit=crop",
    deepLink: "https://www.trivago.de/redirect?arkona404",
  }
];

export async function fetchListings(): Promise<ListingRaw[]> {
  return MOCK;
}
