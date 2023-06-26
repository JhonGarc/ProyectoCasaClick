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
  <div class="flex flex-row flex-wrap justify-start ml-8">
    <anuncios :elements="products"></anuncios>
  </div>
</template>
