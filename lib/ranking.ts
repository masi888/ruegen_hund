import { type ListingRaw, type RankedListing, type RankParams } from "@/lib/types";

export function calcTotal(l: ListingRaw): number {
  const base = l.basePricePerNight ?? 0;
  const cleaning = l.cleaningFee ?? 0;
  const servicePct = l.serviceFeePct ? (base * l.serviceFeePct) / 100 : 0;
  const taxesPct = l.taxesPct ? (base * l.taxesPct) / 100 : 0;
  return base + cleaning + servicePct + taxesPct;
}

export function rankListings(list: ListingRaw[], params: RankParams): RankedListing[] {
  const enriched: RankedListing[] = list.map((l) => ({ ...l, totalPricePerNight: calcTotal(l) }));

  const grouped = new Map<string, RankedListing[]>();
  for (const item of enriched) {
    const arr = grouped.get(item.id) ?? [];
    arr.push(item);
    grouped.set(item.id, arr);
  }
  for (const [, arr] of grouped.entries()) {
    arr.sort((a, b) => a.totalPricePerNight - b.totalPricePerNight);
    const cheapest = arr[0];
    if (cheapest.isDirect) cheapest.isDirectCheapest = true;
  }

  let out = enriched.filter((l) => l.dogsAllowed);
  if (params.maxPrice) out = out.filter((l) => l.totalPricePerNight <= params.maxPrice!);
  if (params.minRating) out = out.filter((l) => (l.rating ?? 0) >= params.minRating!);
  if (params.district) out = out.filter((l) => l.location.toLowerCase().includes(params.district!.toLowerCase()));

  out.sort((a, b) => {
    const priceDiff = a.totalPricePerNight - b.totalPricePerNight;
    if (Math.abs(priceDiff) < 0.01) {
      if (a.isDirect && !b.isDirect) return -1;
      if (!a.isDirect && b.isDirect) return 1;
    }
    return priceDiff;
  });

  return out;
}
