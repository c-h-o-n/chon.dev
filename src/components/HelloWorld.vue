<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);

function increment() {
  count.value++;
}
</script>

<template>
  <div class="bg-red-400 p-6">
    <h1 class="text-blue-400">Hello {{ msg }}</h1>
    <button @click="increment">Counter {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
