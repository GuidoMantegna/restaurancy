"use client";

import Link from "next/link";
import type { Restaurant } from "../../../types";
export default function RestaurantPage(restaurant: Restaurant) {
  return (
    <div className="flex flex-col items-center gap-4">
    <article key={restaurant.id} className="max-w-[50%] h-full">
      <div className="relative flex justify-center items-center">
        <img
          alt={restaurant.name}
          className="w-full mb-2 object-cover brightness-50 rounded-t-md"
          src={restaurant.image}
        />
        <h2 className="flex flex-col items-center text-5xl font-light absolute">
          <span>{restaurant.name}</span>
          <small className="flex gap-2 text-base justify-end w-full mt-2 mr-6">
            <span>⭐</span>
            <span>{restaurant.score}</span>
            <span className="font-normal opacity-75">
              ({restaurant.ratings})
            </span>
          </small>
        </h2>
      </div>
      <div className="p-5 border-x border-b border-stone-700 rounded-b-md">
        <p className="opacity-90 font-light">{restaurant.description}</p>
      </div>
    </article>
    <Link href="/" className="border border-stone-700 rounded-md px-5 py-2">Go Back</Link>
    </div>
  );
}
