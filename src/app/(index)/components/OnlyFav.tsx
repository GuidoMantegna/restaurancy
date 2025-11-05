"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function OnlyFav() {
  const [showFav, toggleShowFav] = useState(false);

  const router = useRouter();
  const handleClick = () => {
    const favorites = window.localStorage.getItem("favorites");

    if (!showFav) {
      router.push(`/?favs=${favorites}`)
    } else {
      router.push("/")
    }
    toggleShowFav(!showFav);
  };

  return (
    <button className="mb-4 cursor-pointer opacity-80 hover:opacity-100 transition duration-300" onClick={handleClick}>
      {showFav ? "All Restaurants 🍴" : "Favorites ❤️"}
    </button>
  );
}

export default OnlyFav;
