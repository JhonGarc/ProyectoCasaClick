<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue'

const value2 = ref(null)
const nombre = ref('')
function info() {
  alert('Dentro de poco tiempo alguien se comunicara contigo' + ' ' + nombre.value)
}
</script>

<template>
  <!-- Contenido de la página -->
  <div class="relative">
    <img src="@/assets/images/fondoContacto.png" alt="" class="w-full h-220" />
    <div class="absolute z-0 top-0 left-0">
      <div class="flex ml-180 mt-35">
        <p class="text-3xl text-[#0037f7] mt-80">
          ¡¡Tu hogar es <br />
          nuestra pasión!!
        </p>
        <div class="bg-[#d9d9d9] ml-40 w-93 h-80 mt-51 rounded-[20px]">
          <p class="text-[#0f3ef4] ml-22 mt-5">Dejanos tus datos para <br />ponernos en contacto.</p>
          <form @submit.prevent>
            <span class="p-float-label ml-17 mt-10">
              <InputText id="Nombre" v-model="nombre" required />
              <label for="Nombre">Nombre</label>
            </span>
            <span class="p-float-label ml-17 mt-4">
              <InputText id="Telefono" v-model="value2" required />
              <label for="Telefono">Telefono</label>
            </span>
            <button
              @click="info"
              class="flex w-56 ml-17 mt-5 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
