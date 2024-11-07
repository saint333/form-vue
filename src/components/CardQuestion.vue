<script setup lang="ts">
import { ref } from "vue";

defineProps<{ question: string }>();
</script>

<template>
  <div
    class="border dark:border-gray-700 border-gray-200 bg-black-100 rounded-md px-3 py-2 shadow-lg"
  >
    <span
      class="block text-sm tracking-tight leading-7 dark:text-gray-400 sm:text-base mb-3"
    >
      {{ question }}
    </span>
    <div class="flex flex-col gap-2">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
