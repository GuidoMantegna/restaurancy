import type { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

// Este método nos permite revalidar el contenido de una ruta en particular
// https://github.com/goncy/nextjs-course?tab=readme-ov-file#revalidatepath
export async function GET(request: NextRequest) {
  // Validamos la variable de entorno REVALIDATE_SECRET
  if (
    request.nextUrl.searchParams.get("secret") !== process.env.REVALIDATE_SECRET
  ) {
    return Response.json({ success: false });
  }
  // Obtenemos la ruta a revalidar
  const path = request.nextUrl.searchParams.get("path") || "/";

  revalidatePath(path);

  return Response.json({ success: true });
}
