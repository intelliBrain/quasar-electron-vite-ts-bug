<template>
  <q-page class="column items-center justify-center">
    <div class="text-h6">Quasar / Vite / Trypescript / Electron bug</div>
    <div class="text-caption text-weight-light">
      Quasar v{{ $q.version }} | Vue v{{ vueVersion }}
    </div>
    <q-btn class="q-mt-md" @click="testMeAsync">Test API Async</q-btn>
    <q-btn class="q-mt-md" @click="maximize">Maximize</q-btn>
  </q-page>
</template>

<script setup lang="ts">
import { electronApi } from 'src/api/electron-api';
import { version as vueVersion } from 'vue';

const testMeAsync = async () => {
  console.log('testMeAsync');
  await electronApi.testMeAsync();
};

const maximize = () => {
  console.log('maximize');
  electronApi.maximize();
};
</script>
