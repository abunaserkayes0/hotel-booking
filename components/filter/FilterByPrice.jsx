"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterByPrice() {
  const [query, setQuery] = useState("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handelChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  useEffect(() => {
    const decodedPriceRange = params.get("priceQuality");
    if (decodedPriceRange) {
      const priceRange = decodeURI(decodedPriceRange);
      setQuery(priceRange);
    }
  }, []);

  useEffect(() => {
    if (query) {
      params.set("priceQuality", encodeURI(query));
    } else {
      params.delete("priceQuality");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [query]);

  return (
    <div>
      <h3 className="font-bold text-lg">Sort By</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        <label htmlFor="highToLow">
          <input
            type="radio"
            name="priceQuality"
            id="highToLow"
            value="highToLow"
            onChange={handelChange}
            checked={query === "highToLow"}
          />
          Price High to Low
        </label>

        <label htmlFor="lowToHigh">
          <input
            type="radio"
            name="priceQuality"
            id="lowToHigh"
            value="lowToHigh"
            onChange={handelChange}
            checked={query === "lowToHigh"}
          />
          Price Low to high
        </label>
      </form>
    </div>
  );
}
