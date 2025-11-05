"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
function FavoriteButton({
  restaurant,
}: {
  restaurant: {
    id: string;
    name: string;
    image: string;
    description: string;
    score: number;
    ratings: number;
  };
}) {
  const [favorites, setFavorites] = useState<string | null>(
    window.localStorage.getItem("favorites"),
  );
  const isFavourite = favorites?.split(",").includes(restaurant.id);

  const handleClick = () => {
    const storedFavorites = window.localStorage.getItem("favorites");

    if (!storedFavorites) {
      window.localStorage.setItem("favorites", restaurant.id);
      setFavorites(restaurant.id);
      return;
    }

    let newFavorites: string;

    if (isFavourite) {
      newFavorites = storedFavorites
        .split(",")
        .filter((id: string) => id !== restaurant.id)
        .join(",");
    } else {
      newFavorites = storedFavorites.split(",").concat(restaurant.id).join(",");
    }
    window.localStorage.setItem("favorites", newFavorites);
    setFavorites(newFavorites);
  };

  return (
    <button
      type="button"
      className={`text-red-500 text-xl ${isFavourite ? "opacity-100" : "opacity-20"}`}
      onClick={handleClick}
    >
      ♥
    </button>
  );
}

// Creamos un componente dinámico para que no se renderice en el servidor
export const DynamicFavoriteButton = dynamic(async () => FavoriteButton, {
  ssr: false,
});
