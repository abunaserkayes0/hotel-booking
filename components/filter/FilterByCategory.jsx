"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterByCategory() {
  const [query, setQuery] = useState([]);
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
    const category = params.get("category");
    if (category) {
      const decodedCategory = decodeURI(category);
      const encodeCategory = decodedCategory.split("|");
      setQuery(encodeCategory);
    }
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      params.set("category", encodeURI(query.join("|")));
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [query]);

  return (
    <div>
      <h3 className="font-bold text-lg">Star Category</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        <label htmlFor="five">
          <input
            type="checkbox"
            name="5"
            id="five"
            onChange={handleChange}
            checked={query.includes("5")}
          />
          5 Star
        </label>

        <label htmlFor="four">
          <input
            type="checkbox"
            name="4"
            id="four"
            onChange={handleChange}
            checked={query.includes("4")}
          />
          4 Star
        </label>

        <label htmlFor="three">
          <input
            type="checkbox"
            name="3"
            id="three"
            onChange={handleChange}
            checked={query.includes("3")}
          />
          3 Star
        </label>

        <label htmlFor="two">
          <input
            type="checkbox"
            name="2"
            id="two"
            onChange={handleChange}
            checked={query.includes("2")}
          />
          2 Star
        </label>

        <label htmlFor="one">
          <input
            type="checkbox"
            name="1"
            id="one"
            onChange={handleChange}
            checked={query.includes("1")}
          />
          1 Star
        </label>
      </form>
    </div>
  );
}
