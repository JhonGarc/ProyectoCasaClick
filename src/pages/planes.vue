<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import plan from '@/components/PlanV.vue'
import plan2 from '@/components/PlanC.vue'
</script>

<template>
  <h1 class="text-8xl text-[#034f75] mb-15 ml-168">Elige tu plan</h1>
  <div>
    <TabView class="ml-55 mr-50">
      <TabPanel header="Vendedor">
        <plan></plan>
      </TabPanel>
      <TabPanel header="Comprador">
        <plan2></plan2>
      </TabPanel>
    </TabView>
  </div>
</template>
