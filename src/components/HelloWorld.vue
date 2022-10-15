<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);

function increment() {
  count.value++;
}
</script>

<template>
  <div class="bg-red-400 p-6 text-center text-3xl">
    <h1 class="text-blue-400">Hello {{ msg }}</h1>
    <button @click="increment">Counter {{ count }}</button>
  </div>
</template>

<style scoped></style>
