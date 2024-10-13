"use client";
import { useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";

const Search = ({ fromList, destination, checkout, checkin }) => {
  /**
   * Next Custom Router
   */
  const searchParams = useParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  /**
   * Custom Hooks
   */
  const [searchTerm, setSearchTerm] = useState({
    destination: destination || "Puglia",
    checkin: checkin,
    checkout: checkout,
  });
  const [allowedSearch, setAllowedSearch] = useState(true);

  /**
   * Handel Search Function
   */
  const handelSearch = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const currentState = { ...searchTerm, [name]: value };

    if (
      new Date(currentState.checkin).getTime() >
      new Date(currentState.checkout).getTime()
    ) {
      setAllowedSearch(false);
    } else {
      setAllowedSearch(true);
    }
    setSearchTerm(currentState);
  };

  /**
   * Doing Searching Function
   */

  const doingSearch = (e) => {
    const params = new URLSearchParams(searchParams);
    params.set("destination", searchTerm?.destination || "all");

    if (searchTerm.checkin && searchTerm?.checkout) {
      params.set("checkin", searchTerm?.checkin);
      params.set("checkout", searchTerm?.checkout);
    }

    if (pathname.includes("hotels")) {
      replace(`${pathname}?${params.toString()}`);
    } else {
      replace(`${pathname}hotels?${params.toString()}`);
    }
  };

  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div id="searchParams" className={fromList && "!shadow-none"}>
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select
                name="destination"
                id="destination"
                onChange={handelSearch}
                defaultValue={searchTerm.destination}
              >
                <option value="Puglia">Puglia</option>
                <option value="Catania">Catania</option>
                <option value="Frejus">Frejus</option>
                <option value="Calvi">Calvi</option>
                <option value="Paris">Paris</option>
              </select>
            </h4>
          </div>

          <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input
                type="date"
                name="checkin"
                id="checkin"
                onChange={handelSearch}
                value={searchTerm.checkin}
              />
            </h4>
          </div>

          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input
                type="date"
                name="checkout"
                id="checkout"
                onChange={handelSearch}
                value={searchTerm.checkout}
              />
            </h4>
          </div>
        </div>
      </div>

      <button
        disabled={!allowedSearch}
        onClick={doingSearch}
        className="search-btn"
      >
        🔍️ {fromList ? "Modify Search" : "Search"}
      </button>
    </>
  );
};

export default Search;
