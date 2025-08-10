export type Provider = "direct" | "expedia" | "hotelbeds" | "trivago" | "google" | "booking";

export interface ListingRaw {
  id: string;
  source: Provider;
  name: string;
  location: string;
  coords?: { lat: number; lng: number };
  dogsAllowed: boolean;
  maxDogs?: number;
  rating?: number; // 0–5
  basePricePerNight: number; // Netto-Preis
  cleaningFee?: number; // optional fix
  serviceFeePct?: number; // prozentual (z. B. 12)
  taxesPct?: number; // z. B. 7
  image?: string;
  deepLink: string; // Affiliate / Direct URL
  isDirect?: boolean; // Markierung für Hotel-Webseite
}

export interface RankedListing extends ListingRaw {
  totalPricePerNight: number;
  isDirectCheapest?: boolean;
}

export interface RankParams {
  maxPrice?: number;
  minRating?: number;
  district?: string;
  dogs?: number;
}
