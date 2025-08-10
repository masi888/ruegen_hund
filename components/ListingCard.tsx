import React from "react";
import { type RankedListing } from "@/lib/types";

export function ListingCard({ item }: { item: RankedListing }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/60">
      <div className="aspect-[4/3] bg-neutral-800" style={{backgroundImage: `url(${item.image || "/placeholder.svg"})`, backgroundSize: "cover", backgroundPosition: "center"}} />
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-base leading-tight">{item.name}</h3>
          {item.isDirectCheapest && (
            <span className="text-xs px-2 py-1 rounded-full bg-emerald-500 text-emerald-950 font-semibold">Direkt am günstigsten</span>
          )}
        </div>
        <p className="text-sm text-neutral-300 line-clamp-2">{item.location} · {item.dogsAllowed ? `Hunde erlaubt (${item.maxDogs ?? 1})` : "Haustiere auf Anfrage"}</p>
        <div className="flex items-center justify-between pt-2">
          <div className="text-lg font-bold">{item.totalPricePerNight.toFixed(2)} € <span className="text-xs text-neutral-400">/Nacht</span></div>
          <div className="text-sm text-neutral-300">⭐ {item.rating?.toFixed(1) ?? "–"}</div>
        </div>
        <a href={item.deepLink} target="_blank" className="block text-center mt-3 px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 transition">Zum Angebot</a>
      </div>
    </div>
  );
}
