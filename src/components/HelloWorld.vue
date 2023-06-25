<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="font-bold text-4xl mb-2">{{ msg }}</h1>

  <Button label="Submit" @click="count--"> <i-bi:dash-circle class="mx-2" /> {{ $t('count is') }}: {{ count }} </Button>

  <button class="btn btn-secondary my-4" @click="count++">
    <i-gg-add class="mx-2" /> {{ $t('count is') }}: {{ count }}
  </button>

  <p>{{ $t('Check README for more information') }}</p>
  <p>
    {{ $t('Edit') }}
    <code>components/HelloWorld.vue</code> {{ $t('to test hot module replacement') }}
  </p>
</template>
