<script setup lang="ts">
import { useToast } from 'primevue/usetoast'
const toast = useToast()

const onUpload = () => {
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 })
}
</script>
<template>
  <p>Publica tu propiedad</p>
  <p>Recuerda que despues de publicado no se podran hacer modificaciones</p>
  <div class="bg-[#d9d9d9]">
    <div class="">
      <div class="flex">
        <div class="">
          <div class="flex min-h-full flex-col lg:px-8">
            <div class="mt-8 w-150">
              <form class="space-y-6" action="#" method="POST">
                <div>
                  <label for="Nombres" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Nombres</label
                  >
                  <div class="mt-2">
                    <input
                      id="Nombres"
                      name="Nombres"
                      type="text"
                      autocomplete="Nombres"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label for="Apellidos" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Apellidos</label
                  >
                  <div class="mt-2">
                    <input
                      id="Apellidos"
                      name="Apellidos"
                      type="text"
                      autocomplete="Apellidos"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label for="Telefono" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Telefono</label
                  >
                  <div class="mt-2">
                    <input
                      id="Telefono"
                      name="Telefono"
                      type="tel"
                      autocomplete="Telefono"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Email address</label
                  >
                  <div class="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                      >Fecha Nacimiento</label
                    >
                  </div>
                  <div class="card flex justify-content-center">
                    <div class="card flex justify-content-center">
                      <Calendar v-model="date" />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                      >Password</label
                    >
                  </div>
                  <div class="card flex justify-content-center">
                    <div class="card flex justify-content-center">
                      <Password v-model="value" toggleMask />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                      >Confirmar Password</label
                    >
                  </div>
                  <div class="card flex justify-content-center">
                    <Password v-model="value2" toggleMask :feedback="false" />
                  </div>
                </div>
                <div class="card flex flex-wrap justify-content-center gap-3">
                  <div class="flex align-items-center">
                    <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
                    <label for="ingredient1" class="ml-2"> Cheese </label>
                  </div>
                  <div class="flex align-items-center">
                    <Checkbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
                    <label for="ingredient2" class="ml-2"> Mushroom </label>
                  </div>
                  <div class="flex align-items-center">
                    <Checkbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
                    <label for="ingredient3" class="ml-2"> Pepper </label>
                  </div>
                  <div class="flex align-items-center">
                    <Checkbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
                    <label for="ingredient4" class="ml-2"> Onion </label>
                  </div>
                </div>
                <div>
                  <label for="Nombres" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Nombres</label
                  >
                  <div class="mt-2">
                    <input
                      id="Nombres"
                      name="Nombres"
                      type="text"
                      autocomplete="Nombres"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label for="Nombres" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Nombres</label
                  >
                  <div class="mt-2">
                    <input
                      id="Nombres"
                      name="Nombres"
                      type="text"
                      autocomplete="Nombres"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label for="Nombres" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Nombres</label
                  >
                  <div class="mt-2">
                    <input
                      id="Nombres"
                      name="Nombres"
                      type="text"
                      autocomplete="Nombres"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="ml-50">
                  <button
                    type="submit"
                    class="flex w-110 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Registrar
                  </button>
                </div>
                <div class="card flex justify-content-center">
                  <Toast />
                  <FileUpload
                    mode="basic"
                    name="demo[]"
                    url="./upload.php"
                    accept="image/*"
                    :maxFileSize="1000000"
                    multiple
                    @upload="onUpload"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
