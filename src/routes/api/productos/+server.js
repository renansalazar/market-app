import { crearProducto, listarProductos } from '$lib/db/mysql';
import { building } from '$app/environment';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  let response = [[]]
  if(!building) {
    response = await listarProductos()
  }
  return new Response(JSON.stringify(response[0]), { status: 200 });
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  let response = [{}]
  if(!building) {
    const { producto, cantidad } = await request.json()
    response = await crearProducto(producto, cantidad)
  }
  return new Response(JSON.stringify(response[0]), { status: 200 });
}

export const prerender = false;