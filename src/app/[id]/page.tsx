import api from "@/api";
import RestaurantCard from "../components/RestaurantCard";

export default async function RestaurantPage({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const restaurant = await api.fetch(id);

  return (
    <RestaurantCard {...restaurant} />
  );
}