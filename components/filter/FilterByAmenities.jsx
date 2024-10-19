"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterByAmenities() {
  const [query, setQuery] = useState([]);
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  const handelChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const checked = e.target.checked;
    if (checked) {
      setQuery((previous) => [...previous, name]);
    } else {
      const filterValue = query.filter((item) => item != name);
      setQuery(filterValue);
    }
  };

  useEffect(() => {
    const amenities = params.get("amenity");
    if (amenities) {
      const decodedAmenities = decodeURI(amenities);
      const encodeAmenities = decodedAmenities.split("|");
      setQuery(encodeAmenities);
    }
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      params.set("amenity", encodeURI(query.join("|")));
    } else {
      params.delete("amenity");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [query]);

  return (
    <div>
      <h3 className="font-bold text-lg">Amenities</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        <label htmlFor="wifi">
          <input
            type="checkbox"
            name="wifi"
            id="wifi"
            onChange={handelChange}
            checked={query.includes("wifi")}
          />
          Wi-fi
        </label>

        <label htmlFor="swimmingPool">
          <input
            type="checkbox"
            name="swimmingPool"
            id="swimmingPool"
            onChange={handelChange}
            checked={query.includes("swimmingPool")}
          />
          Swimming Pool
        </label>
      </form>
    </div>
  );
}
