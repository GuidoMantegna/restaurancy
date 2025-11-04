import api from "@/api";
import Link from "next/link";
import { redirect } from "next/navigation";
import Form from "next/form";

const TRANSITIONS_STYLES = `transition-all duration-300 ease-in-out`;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const {q} = await searchParams;
  const restaurants = await api.search(q);

  async function searchAction(formData: FormData) {
    'use server'

    redirect(`/?q=${formData.get('query')}`);
  }

  return (
    <>
      <Form action={searchAction} className="mb-8 flex w-full justify-center"> 
      {/* Inicializamos el input para que contenga el valor actual de la query */}
      <input
        className="px-2 border border-stone-700 rounded-s-md w-75"
        placeholder="Search your favourite restaurant"
        defaultValue={q || ""}
        name="query"
      />
      <button className="bg-white/20 py-2 px-4 rounded-e-md" type="submit">
        Search
      </button>
    </Form>
      {!restaurants.length && (
        <h2 className="text-center m-10">No restaurants matched your search</h2>
      )}
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => {
          return (
            <Link href={`/${restaurant.id}`} key={restaurant.id}>
              <article
                key={restaurant.id}
                className={`border border-stone-700 rounded-md p-5 hover:bg-stone-800 hover:border-none ${TRANSITIONS_STYLES}`}
              >
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
                    <span className="font-normal opacity-75">
                      ({restaurant.ratings})
                    </span>
                  </small>
                </h2>
                <p className="opacity-90">{restaurant.description}</p>
              </article>
            </Link>
          );
        })}
      </section>
    </>
  );
}

// export const dynamic = 'force-static' // por defecto: auto
// export const revalidate = 100 // por defecto: false
