<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <!-- Contenido de la página -->
  <div class="relative">
    <img src="@/assets/images/diseñoNot.png" alt="" class="w-480 h-231" />
    <div class="absolute z-0 top-0 left-0">
      <div class="flex aling-betwen mx-20">
        <img class="w-230 mb-6 mt-10" src="@/assets/images/notfound1.png" />
        <img class="w-230 mb-6 ml-3 mt-10" src="@/assets/images/notfound2.png" />
      </div>
      <h6 class="ml-200 text-4xl font-bold">Sitio en construcción</h6>
      <br />
      <p class="ml-215 text-lg font-bold mb-4">¡GRACIAS POR TU VISITA!</p>
      <router-link class="btn btn-primary w-40 mx-220" :to="{ name: 'index' }">{{ $t('To Index') }}</router-link>
    </div>
  </div>
</template>
