<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

// Obtén la instancia de autenticación
const auth = getAuth()
const value = ref(null)
const value2 = ref(null)
var email = ref('')
var password = ref('')
const register = async () => {
  try {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    console.log('Usuario creado')
  } catch (error) {
    console.log('se ha presentado un errror')
  }
}
</script>

<template>
  <div class="relative">
    <img src="@/assets/images/fondoRegistrar.png" alt="" class="w-full h-231" />
    <div class="">
      <div class="flex">
        <div class="absolute z-0 top-0 left-0">
          <div class="flex min-h-full flex-col lg:px-8">
            <div>
              <div class="flex">
                <p class="mt-10 ml-2 text-white text-6xl">Registro</p>
                <img class="mx-auto h-30 mr-0 mt-10 ml-120" src="@/assets/images/casapng.png" alt="Your Company" />
              </div>

              <p class="text-[#f3c280] mt-2 text-lg ml-4">Crear cuenta</p>
            </div>
            <div class="mt-8 w-150">
              <!-- <form class="space-y-6" action="#" method="POST">
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
                  <label for="Apellidos" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]">Apellidos</label>
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
                  <label for="Telefono" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]">Telefono</label>
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
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]">Email address</label>
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
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]">Password</label>
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

                <div class="ml-50">
                  <button
                    type="submit"
                    class="flex w-110 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Registrar
                  </button>
                </div>
              </form> -->
              <form class="space-y-6" action="#" method="POST">
                <div class="w-10 ml-70 mt-7">
                  <label for="correo" class="text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]">Correo</label>
                  <InputText class="p-inputtext-lg" v-model="email" type="text" />
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

                <div class="ml-50">
                  <button
                    type="submit"
                    class="flex w-110 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    @click="register()"
                  >
                    Registrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="bg">
          <img
            class="mx-auto h-135 w-auto absolute z-10 top-60 left-240"
            src="@/assets/images/gif3d.gif"
            alt="Your Company"
          />
        </div>
      </div>
    </div>
  </div>
</template>
