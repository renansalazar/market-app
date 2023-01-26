<a class="hover:underline underline-offset-2" href="/">Volver</a>
<h1 class="inline-flex justify-center text-center w-full font-semibold">Crear lista</h1>
<form method="POST" action="?/crear" class="flex flex-col">
  <label for="producto">Ingrese Producto</label>
  <input id="producto" class="bg-white rounded-lg ring-1 py-1 px-2" type="text" name="producto" required/>
  <label for="cantidad">Ingrese Cantidad</label>
  <input id="cantidad" class="bg-white rounded-lg ring-1 py-1 px-2" type="number" name="cantidad" required>
  <input type="submit" value="Crear" class="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"/>
</form>
