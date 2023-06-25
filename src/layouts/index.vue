<script setup lang="ts"></script>

<template>
  <!-- <nav class="w-full flex flex-row px-9 bg-[#e9edf4] mt-8">
    <router-link class="btn btn-primary my-4" :to="{ name: 'index' }">{{ $t('Home') }}</router-link>
    <router-link class="btn btn-primary my-4" :to="{ name: 'planes' }">{{ $t('Planes') }}</router-link>
    <router-link class="btn btn-primary my-4" :to="{ name: 'Ingresar' }">{{ $t('Login') }}</router-link>
  </nav> -->
  <nav class="flex justify-between bg-[#e9edf4]">
    <div>
      <ul class="w-full flex flex-row px-0">
        <img class="w-19 ml-10" src="@/assets/images/casapng.png" />
        <li class="ml-10 mt-7 text-[#006086]">
          <router-link class="hover:blue-500" :to="{ name: 'index' }">{{ $t('Home') }}</router-link>
        </li>
        <li class="ml-10 mt-7 text-[#006086]">
          <router-link :to="{ name: 'planes' }">{{ $t('Planes') }}</router-link>
        </li>
        <li class="ml-10 mt-7 text-[#006086]">
          <router-link :to="{ name: 'notList' }">{{ $t('SitioConstrucción') }}</router-link>
        </li>
        <li class="ml-10 mt-7 text-[#006086]">
          <router-link :to="{ name: 'anuncios' }">{{ $t('Anuncios') }}</router-link>
        </li>
      </ul>
    </div>
    <div>
      <ul class="mb-3 flex flex-row px-0">
        <li class="mr-10 mt-4">
          <router-link
            class="btn bg-[#91ccdf] text-[#00537d] shadow-md hover:bg-blue-300 transition-all"
            :to="{ name: 'login' }"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-user"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg
            >{{ $t('Ingresar') }}</router-link
          >
        </li>
        <li class="mr-10 mt-4">
          <router-link
            class="btn bg-[#2f73ac] text-white shadow-md hover:bg-blue-300 transition-all"
            :to="{ name: 'contactanos' }"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-headset"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
              <path d="M18 19c0 1.657 -2.686 3 -6 3" />
              <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
              <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" /></svg
            >{{ $t('Contactanos') }}</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
  <div class="flex flex-col">
    <router-view></router-view>
  </div>
</template>
