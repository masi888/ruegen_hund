"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function FilterBar() {
  const router = useRouter();
  const sp = useSearchParams();
  const [maxPrice, setMaxPrice] = React.useState(sp.get("maxPrice") || "");
  const [minRating, setMinRating] = React.useState(sp.get("minRating") || "4.0");
  const [district, setDistrict] = React.useState(sp.get("district") || "");
  const [dogs, setDogs] = React.useState(sp.get("dogs") || "1");

  const apply = () => {
    const params = new URLSearchParams({});
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (minRating) params.set("minRating", minRating);
    if (district) params.set("district", district);
    if (dogs) params.set("dogs", dogs);
    router.push("/?" + params.toString());
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 bg-neutral-900/60 p-4 border border-neutral-800 rounded-2xl">
      <input className="px-3 py-2 rounded-xl bg-neutral-800 border border-neutral-700" placeholder="Max Preis / Nacht (€)" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      <input className="px-3 py-2 rounded-xl bg-neutral-800 border border-neutral-700" placeholder="Mindestbewertung (z.B. 4.2)" value={minRating} onChange={(e) => setMinRating(e.target.value)} />
      <input className="px-3 py-2 rounded-xl bg-neutral-800 border border-neutral-700" placeholder="Ort/Ortsteil (z.B. Binz)" value={district} onChange={(e) => setDistrict(e.target.value)} />
      <input className="px-3 py-2 rounded-xl bg-neutral-800 border border-neutral-700" placeholder="Anzahl Hunde" value={dogs} onChange={(e) => setDogs(e.target.value)} />
      <button onClick={apply} className="px-4 py-2 rounded-2xl border border-neutral-700 bg-neutral-100 text-neutral-900 font-medium">Filtern</button>
    </div>
  );
}
