<route lang="yaml">
meta:
  layout: main
</route>

<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class=" text-dark-700 text-center">
      <div class="text-blue-600 font-bold mb-3"><i class="pi pi-discord"></i>&nbsp;POWERED BY DISCORD</div>
      <div class="font-bold text-5xl mb-3">Join Our Design Community</div>
      <div class="text-2xl mb-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.
      </div>
      <Button
        label="Join Now"
        icon="pi pi-discord"
        class="font-bold px-5 py-3 shadow-md hover:bg-blue-300 transition-all"
      ></Button>
    </div>
  </div>

  <router-link class="btn btn-primary my-4" :to="{ name: 'index' }">{{ $t('To Index') }}</router-link>
</template>
