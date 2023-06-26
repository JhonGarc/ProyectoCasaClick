<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  elements: any
}>()

const visible = ref(false)
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="bg-[#d9d9d9] mx-19 my-4 rounded-lg">
      <p class="mb-3 ml-3">Las más vistas</p>
      <div class="card">
        <Carousel :value="elements" :numVisible="3" :numScroll="1" circular :autoplayInterval="3000">
          <template #item="products">
            <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
              <div class="mb-3">
                <img :src="products.data.images[2]" class="h-70 w-full" />
              </div>
              <div>
                <h4 class="mb-1">{{ products.data.precio }}</h4>
                <div class="mt-5">
                  <Button icon="pi pi-search" rounded class="mr-2" />
                  <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                  <Button icon="pi pi-cog" rounded severity="help" />
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
    <router-link class="btn bg-[#ffa945] w-60 ml-7 mb-3" :to="{ name: 'formVenta' }">{{
      $t('Publica tu anuncio aquí')
    }}</router-link>
  </div>
  <div v-for="(element, index) in elements" :key="index" class="mx-7 my-2">
    <div>
      <Card style="width: 25.4em" class="bg-[#dff1f8]">
        <template #header>
          <img v-if="element.images" :src="element.images[0]" class="h-70 w-full" />
          <img v-else src="https://primefaces.org/cdn/primevue/images/usercard.png" class="h-70 w-full" />
        </template>
        <template #title> {{ element.precio }} </template>

        <template #content>
          <div></div>
          <div>
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-dimensions"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 5h11" />
                <path d="M12 7l2 -2l-2 -2" />
                <path d="M5 3l-2 2l2 2" />
                <path d="M19 10v11" />
                <path d="M17 19l2 2l2 -2" />
                <path d="M21 12l-2 -2l-2 2" />
                <path d="M3 10m0 2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2z" />
              </svg>
              <p>{{ element.dimension }} m² <br /></p>
            </div>
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-map-pin"
                width="23"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg
              >{{ element.ubicacion }} <br />
            </div>
          </div>

          <div class="flex">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-bath"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z" />
                <path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" />
                <path d="M4 21l1 -1.5" />
                <path d="M20 21l-1 -1.5" />
              </svg>
              <p class="mt-2">{{ element.baños }} baños</p>
            </div>
            <div class="flex ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-bed-filled"
                width="28"
                height="40"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M3 6a1 1 0 0 1 .993 .883l.007 .117v6h6v-5a1 1 0 0 1 .883 -.993l.117 -.007h8a3 3 0 0 1 2.995 2.824l.005 .176v8a1 1 0 0 1 -1.993 .117l-.007 -.117v-3h-16v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-11a1 1 0 0 1 1 -1z"
                  stroke-width="0"
                  fill="currentColor"
                />
                <path
                  d="M7 8a2 2 0 1 1 -1.995 2.15l-.005 -.15l.005 -.15a2 2 0 0 1 1.995 -1.85z"
                  stroke-width="0"
                  fill="currentColor"
                />
              </svg>
              <p class="mt-2">{{ element.habitaciones }} habitaciones</p>
            </div>
          </div>
        </template>
        <template #footer>
          <Button class="ml-22" icon="pi" label="comprar" @click="visible = true" />
          <Dialog v-model:visible="visible" modal header="" :style="{ width: '50vw' }">
            <div v-for="(element, index) in elements" :key="index">
              <div v-for="(elementss, idx) in element.images" :key="idx">
                <img :src="elementss" class="h-70 w-full" />
              </div>
            </div>
          </Dialog>
        </template>
      </Card>
    </div>
  </div>
  <div v-for="(element, index) in elements" :key="index">
    <div v-for="(image, idx) in element.images" :key="idx">
      <img :src="image" class="h-70 w-full" />
    </div>
  </div>
</template>
