import React from "react";
import { ListingCard } from "@/components/ListingCard";
import { FilterBar } from "@/components/FilterBar";
import { fetchListings } from "@/lib/data";
import { rankListings } from "@/lib/ranking";

export default async function Page({ searchParams }: { searchParams?: Record<string, string> }) {
  const params = {
    maxPrice: searchParams?.maxPrice ? Number(searchParams.maxPrice) : undefined,
    minRating: searchParams?.minRating ? Number(searchParams.minRating) : 4.0,
    district: searchParams?.district ?? "",
    dogs: searchParams?.dogs ? Number(searchParams.dogs) : 1,
  };

  const raw = await fetchListings(); // Mock → später echte Provider
  const ranked = rankListings(raw, params);

  return (
    <div className="space-y-6">
      <FilterBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ranked.map((item) => (
          <ListingCard key={`${item.id}-${item.source}`} item={item} />
        ))}
      </div>
    </div>
  );
}
