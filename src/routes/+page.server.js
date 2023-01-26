import { urlBase } from '$lib/contants';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  let productos = []
  const response = await fetch( `${urlBase}/api/productos`);
  productos = await response.json()
  return {
    productos
  };
}
export const prerender = false;
