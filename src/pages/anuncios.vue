<script setup lang="ts">
import { db } from '@/services/firebase'
import { collection, getDocs, query } from 'firebase/firestore'
import { onMounted, ref } from 'vue'

import anuncios from '@/components/anuncios.vue'

const products = ref<any>([])

async function getHouses() {
  const colRef = collection(db, 'casas')
  const querySnap = await getDocs(query(colRef))

  querySnap.forEach((doc) => {
    products.value.push(doc.data())
  })
}

onMounted(() => {
  getHouses()
})
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="bg-[#d9d9d9] mx-19 my-4 rounded-lg">
      <p class="mb-3 ml-3">Las más vistas</p>
      <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="1" circular :autoplayInterval="3000">
          <template #item="slotProps">
            <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
              <div class="mb-3">
                <img src="@/assets/images/casa.jpg" :alt="slotProps.data.name" class="w-full shadow-2" />
              </div>
              <div>
                <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                <h6 class="mt-0 mb-3">${{ slotProps.data.precio }}</h6>
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
  <div class="flex flex-row flex-wrap justify-start ml-8">
    <anuncios :elements="products"></anuncios>
  </div>

</template>
