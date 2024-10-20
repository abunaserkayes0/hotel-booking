import HotelList from "@/components/hotel/HotelList";
import Filter from "@/components/search/Filter";
import Search from "@/components/search/Search";
import { refineItems } from "@/utils/refineCategory";

export default async function Hotel({ searchParams: { destination, checkin, checkout, category, priceRange, priceQuality, amenity } }) {

    return (
        <>
            {/* Search-Modify-Area */}
            <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
                <div className="container items-center py-12 ">
                    <Search destination={destination} checkin={checkin} checkout={checkout} fromList={true} />
                </div>
            </section>
            {/* Search-Filter-Area */}
            <section className="py-12">
                <div className="container grid grid-cols-12">
                    <Filter />
                    <HotelList destination={destination} checkin={checkin} checkout={checkout} category={refineItems(category)} priceRange={refineItems(priceRange)} priceQuality={refineItems(priceQuality)} aminity={refineItems(amenity)} />
                </div>
            </section>
        </>
    );
}