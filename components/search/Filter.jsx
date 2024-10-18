import FilterByAmenities from "../filter/FilterByAmenities";
import FilterByCategory from "../filter/FilterByCategory";
import FilterByPrice from "../filter/FilterByPrice";
import FilterByPriceRange from "../filter/FilterByPriceRange";

const Filter = () => {
  return (
    <>
      <div className="col-span-3 space-y-4">
        <FilterByPrice />
        <FilterByPriceRange />
        <FilterByCategory />
        <FilterByAmenities />
      </div>
    </>
  );
};

export default Filter;
