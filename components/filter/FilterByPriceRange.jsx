"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function FilterByPriceRange() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState([]);

  const params = new URLSearchParams(searchParams);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const checked = e.target.checked;

    if (checked) {
      setQuery((previous) => [...previous, name]);
    } else {
      const filterValue = query.filter((item) => item !== name);
      setQuery(filterValue);
    }
  };

  useEffect(() => {
    const priceRange = params.get("priceRange");
    if (priceRange) {
      const decodePriceRange = decodeURI(priceRange);
      const encodePriceRange = decodePriceRange.split("|");
      setQuery(encodePriceRange);
    }
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      params.set("priceRange", encodeURI(query.join("|")));
    } else {
      params.delete("priceRange");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [query]);

  return (
    <div>
      <h3 className="font-bold text-lg">Price Range</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        <label htmlFor="range1">
          <input
            type="checkbox"
            name="1300-3000"
            id="range1"
            onChange={handleChange}
            checked={query.includes("1300-3000")}
          />
          $1300 - $3000
        </label>

        <label htmlFor="range2">
          <input
            type="checkbox"
            name="3001-6000"
            id="range2"
            onChange={handleChange}
            checked={query.includes("3001-6000")}
          />
          $3001 - $6000
        </label>

        <label htmlFor="range3">
          <input
            type="checkbox"
            name="6001-9700"
            id="range3"
            onChange={handleChange}
            checked={query.includes("6001-9700")}
          />
          $6001 - $9700
        </label>

        <label htmlFor="range4">
          <input
            type="checkbox"
            name="9701-15200"
            id="range4"
            onChange={handleChange}
            checked={query.includes("9701-15200")}
          />
          $9701 - $15200
        </label>

        <label htmlFor="range5">
          <input
            type="checkbox"
            name="152001-18200"
            id="range5"
            onChange={handleChange}
            checked={query.includes("152001-18200")}
          />
          $152001 - $18200
        </label>
      </form>
    </div>
  );
}
