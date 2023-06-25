<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
const auth = getAuth()

var email = ref('')
var password = ref('')

const login = async () => {
  try {
    signInWithEmailAndPassword(auth, email.value, password.value)
    console.log('bienvenido')
  } catch (error) {
    console.log('No se pudo iniciar sesión')
  }
}
</script>

<template>
  <!-- <div class="flex bg-yellow-200 w-full h-145">
    <div class="bg-[#28252c] w-full h-full">
      <p class="text-white">Registro</p>
      <p class="text-[#fec37e]">Crea tu cuenta</p>
      <img class="w-12 mb-2" src="@/assets/images/casa.jpg" />
    </div>

    <div class="bg-yellow-400 h-full">si soy 2</div>
  </div> -->
  <div class="relative">
    <img src="@/assets/images/FondoLogin.png" alt="" class="w-full h-231" />
    <div class="">
      <div class="flex">
        <div class="w-full">
          <img class="mx-auto w-240 top-45 absolute" src="@/assets/images/login.gif" alt="Your Company" />
        </div>
        <div class="w-full">
          <div class="mx-auto w-165.8 top-10 absolute">
            <img src="@/assets/images/titulocasaclick2.png" alt="" class="mt-10 ml-20 w-110" />
            <p class="mt-15 ml-70 text-white text-6xl">Iniciar sesión</p>
            <form class="space-y-6">
              <div class="w-10 ml-70 mt-7">
                <label for="correo" class="text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]">Correo</label>
                <InputText class="p-inputtext-lg" v-model="email" type="text" />
              </div>
              <div class="ml-70">
                <div class="flex items-center justify-between">
                  <label for="password" class="text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Contraseña</label
                  >
                </div>
                <div class="card flex justify-content-center">
                  <Password class="p-inputtext-lg" v-model="password" toggleMask :feedback="false" required />
                </div>
              </div>

              <div class="ml-70" @click="login()">
                <button
                  class="flex w-74 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Acceder
                </button>
              </div>
              <div class="flex">
                <p class="text-[#f7c086] text-sm ml-70">¿Has olvidado tu contraseña?</p>
              </div>
            </form>
            <img src="@/assets/images/casaclicklogin.png" alt="" class="w-45 ml-75" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
