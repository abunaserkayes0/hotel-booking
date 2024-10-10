import { getHotelsForReview } from "@/database/reviews/reviews.query";
import Link from "next/link";

export default async function HotelReviews({ hotelId }) {
  const reviews = await getHotelsForReview(hotelId);

  return (
    <>
      {reviews.length === 0 ? (
        <Link href="#">Be first comment for this hotel</Link>
      ) : (
        <Link href={`/hotel/${hotelId}/reviews`} className="underline">
          {reviews?.length} Reviews
        </Link>
      )}
    </>
  );
}
