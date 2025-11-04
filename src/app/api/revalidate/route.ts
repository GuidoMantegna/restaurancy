import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

// Este método nos permite revalidar el contenido de una ruta en particular
// https://github.com/goncy/nextjs-course?tab=readme-ov-file#revalidatepath
export async function GET(request: NextRequest) {
  // Validamos la variable de entorno REVALIDATE_SECRET
  if (
    request.nextUrl.searchParams.get("secret") !== process.env.REVALIDATE_SECRET
  ) {
    return Response.json({ success: false });
  }
  // Obtenemos el tag a revalidar
  const tag = request.nextUrl.searchParams.get("tag") || "restaurants";

  revalidateTag(tag, "restaurants");

  return Response.json({success: true});
}
