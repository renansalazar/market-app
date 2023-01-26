import { urlBase } from '$lib/contants';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  crear: async ({ request }) => {
    const data = await request.formData();
    const producto = data.get('producto');
    const cantidad= data.get('cantidad');
    const response = await fetch(`${urlBase}/api/productos`, {
      method: 'POST',
      body: JSON.stringify({
        producto,
        cantidad
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    await response.json()
    throw redirect(303, '/');
  }
};

export const prerender = false;
