import { getHotelsForRating } from "@/database/ratings/ratings.query";

export default async function HotelRatings({ hotelId }) {
  const ratings = await getHotelsForRating(hotelId);

  let averagedRating = 0;

  function getReviewerRating(rating) {
    if (rating === 0) {
      return "Not Good";
    }
    if (rating > 1 && rating <= 2) {
      return "Below Average";
    }
    if (rating > 2 && rating <= 3) {
      return "Average";
    }
    if (rating > 3 && rating <= 4) {
      return "Above Average";
    }
    if (rating > 4) {
      return "Very Good";
    }
  }

  if (ratings.length === 1) {
    averagedRating = ratings[0]?.rating;
  }
  if (ratings.length > 1) {
    averagedRating =
      ratings.reduce((accumulatedRating, currentRating) => {
        return accumulatedRating.rating + currentRating.rating;
      }) / ratings.length;
  }
  return (
    <>
      <div className="flex gap-2 items-center my-4">
        <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
          {averagedRating}
        </div>
        <span className="font-medium">{getReviewerRating(averagedRating)}</span>
      </div>
    </>
  );
}
