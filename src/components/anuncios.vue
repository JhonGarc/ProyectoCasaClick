<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  elements: any
}>()

const visible = ref(false)
</script>

<template>
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
              <p>{{ element.dimension }} <br /></p>
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
              <p class="mt-2">{{ element.baños }}</p>
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
              <p class="mt-2">{{ element.habitaciones }}</p>
            </div>
          </div>
        </template>
        <template #footer>
          <Button class="ml-22" icon="pi" label="comprar" @click="visible = true" />
          <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw'}">
            <p>gola goosdamdmasdmkmxczc</p>
            <img src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            <img src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            <img src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            <img src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            <img src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            <img src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            <img src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            <img src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            <img src="https://primefaces.org/cdn/primevue/images/usercard.png" />
          </Dialog>
        </template>
      </Card>
    </div>
  </div>
</template>
