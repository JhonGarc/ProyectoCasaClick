<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from '@/components/HelloWorld.vue'
// import { ref, onMounted } from 'vue'

// onMounted(() => {
//   ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)))
// })

// const products = ref()
// const responsiveOptions = ref([
//   {
//     breakpoint: '1199px',
//     numVisible: 3,
//     numScroll: 3,
//   },
//   {
//     breakpoint: '991px',
//     numVisible: 2,
//     numScroll: 2,
//   },
//   {
//     breakpoint: '767px',
//     numVisible: 1,
//     numScroll: 1,
//   },
// ])

// const getSeverity = (status) => {
//   switch (status) {
//     case 'INSTOCK':
//       return 'success'

//     case 'LOWSTOCK':
//       return 'warning'

//     case 'OUTOFSTOCK':
//       return 'danger'

//     default:
//       return null
//   }
// }
</script>

<template>
  <!-- <img class="w-sm mb-6" src="@/assets/images/logo.svg" />
  <HelloWorld :msg="$t('Hello!')" />
  <p>pagina principal de inicio</p> -->
  <div class="relative">
    <img src="@/assets/images/fondo de pagina (1).jpg" alt="" class="w-full" />
    <div class="absolute z-0 top-0 left-0">
      <div class="flex justify-between w-full ml-42">
        <div class="mt-20 w-155">
          <h3 class="text-7xl ml-15 mb-20 mt-6 font-bold">
            Tu hogar es <br />
            nuestra pasión.
          </h3>
          <p class="text-2xl ml-37">
            Encuentra la casa de tus sueños en un <br />
            solo click, en nuestra inmobiliaria, nos <br />
            enorgullece ser tus aliados en el proceso <br />
            de compra o venta de una <br />
            propiedad, brindándote un servicio <br />
            integral, Sabemos que tu hogar es mucho <br />
            más que una simple propiedad, es el <br />
            lugar donde construyes recuerdos, creas <br />
            vínculos y vives tus sueños.
          </p>
        </div>
        <div class="w-240">
          <img src="@/assets/images/casaInicio.png" />
        </div>
      </div>
      <div class="flex">
        <div class="ml-170">
          <h3 class="mt-19 text-center text-lg italic text-[#005173">
            Registrate para ser parte <br />
            de nuestra comunidad.
          </h3>
        </div>
        <div class="bg-[#6090a5] flex w-90 mb-14 rounded-lg">
          <div>
            <router-link
              class="btn bg-[#fc5b29] w-44 ml-8 shadow-md hover:bg-[#f97316] transition-all mt-4"
              :to="{ name: 'register' }"
              >{{ $t('Registrate') }}</router-link
            >
          </div>
          <div>
            <p class="text-[#00537d] text-white text-lg ml-7 mt-4">Dale click!!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
