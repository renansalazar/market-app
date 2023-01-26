<script>
  /** @type {import('./$types').PageData} */
	export let data;
</script>
<a href="/create" class="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Crear elemento</a>
<div class="mt-2">
  <h3 class="inline-flex justify-center text-center w-full font-semibold">Lista de Productos</h3>
  <ul class="flex flex-col gap-2 mt-2">
    {#each data.productos as producto}
      <li class="flex justify-between rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 ">
        <span>{producto.producto}</span>
        <span>{producto.cantidad}</span>
      </li>
    {/each}
  </ul>
</div>
