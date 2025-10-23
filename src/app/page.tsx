import api from "@/api";

const TRANSITIONS_STYLES = `transition-all duration-300 ease-in-out`

export default async function Home() {
  const restaurants = await api.list();

  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant) => {
        return (
          <article key={restaurant.id}  className={`border border-stone-700 rounded-md p-5 hover:bg-stone-800 hover:border-none ${TRANSITIONS_STYLES}`}>
            <img
              alt={restaurant.name}
              className={`mb-3 h-[300px] w-full object-cover rounded-md hover:scale-102 ${TRANSITIONS_STYLES} grayscale hover:filter-none`}
              src={restaurant.image}
            />
            <h2 className="inline-flex gap-2 text-lg font-bold">
              <span>{restaurant.name}</span>
              <small className="inline-flex gap-1">
                <span>⭐</span>
                <span>{restaurant.score}</span>
                <span className="font-normal opacity-75">({restaurant.ratings})</span>
              </small>
            </h2>
            <p className="opacity-90">{restaurant.description}</p>
          </article>
        );
      })}
    </section>
  );
}