import Link from "next/link";
import type { Restaurant } from "../../../types";
import { DynamicFavoriteButton as FavoriteButton } from "./FavoriteButton";
import BackButton from "./BackButton";

const TRANSITIONS_STYLES = `transition-all duration-300 ease-in-out`;
export default function RestaurantCard(restaurant: Restaurant) {
  return (
    <>
      <article
        key={restaurant.id}
        className={`max-w-[500px] border border-stone-700 rounded-md p-5 hover:bg-stone-800 hover:border-none ${TRANSITIONS_STYLES}`}
      >
        <img
          alt={restaurant.name}
          className={`mb-3 h-[300px] w-full object-cover rounded-md hover:scale-102 ${TRANSITIONS_STYLES} grayscale hover:filter-none`}
          src={restaurant.image}
        />
        <h2 className="inline-flex gap-2 text-lg font-bold">
          <Link href={`/${restaurant.id}`} key={restaurant.id}>
            <span>{restaurant.name}</span>
          </Link>
          <small className="inline-flex gap-1">
            <span>⭐</span>
            <span>{restaurant.score}</span>
            <span className="font-normal opacity-75">
              ({restaurant.ratings})
            </span>
          </small>
          <FavoriteButton restaurant={restaurant} />
        </h2>
        <p className="opacity-90">{restaurant.description}</p>
      </article>
      <BackButton />
    </>
  );
}
