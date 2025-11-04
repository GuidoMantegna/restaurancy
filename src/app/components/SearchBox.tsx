"use client";

import Form from "next/form";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Prevenimos que la página se refresque al enviar el formulario
    event.preventDefault();

    // Obtenemos los datos del formulario
    const formData = new FormData(event.currentTarget);

    // Obtenemos el valor del input
    const query = formData.get("query");

    // Redireccionamos al index con una query
    router.push(`/?q=${query}`);
  }

  return (
    <Form action="/search" className="mb-8 flex w-full justify-center" onSubmit={handleSubmit}>
      {/* Inicializamos el input para que contenga el valor actual de la query */}
      <input
        className="px-2 border border-stone-700 rounded-s-md w-75"
        placeholder="Search your favourite restaurant"
        defaultValue={searchParams.get("q") || ""}
        name="query"
      />
      <button className="bg-white/20 py-2 px-4 rounded-e-md" type="submit">
        Search
      </button>
    </Form>
  );
}
