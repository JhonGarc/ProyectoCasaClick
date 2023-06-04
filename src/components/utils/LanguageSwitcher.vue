<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const locales = ref()
const localLocale = ref<{ label: string; code: string }>()

const { locale, availableLocales } = useI18n()

function setLanguage(event: any) {
  localStorage.setItem('locale', event.value.code)
  locale.value = getLanguage()
}
function getLanguage() {
  return localStorage.getItem('locale') || 'en'
}

onMounted(() => {
  locale.value = getLanguage()
  locales.value = availableLocales.map((lang) => {
    return {
      label: lang,
      code: lang,
    }
  })
  localLocale.value = {
    label: getLanguage(),
    code: getLanguage(),
  }
})
</script>

<template>
  <Dropdown v-if="locales" v-model="localLocale" optionLabel="label" :options="locales" @change="setLanguage" />
</template>
