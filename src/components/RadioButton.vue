<script setup lang="ts">
import { ref } from "vue";

defineProps<{ name: string; value: string; id: string; text: string }>();

</script>

<template>
  <div>
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      class="peer hidden"
    />
    <label
      :for="id"
      class="flex px-3 py-2 w-full peer-checked:bg-blue-500 peer-checked:text-white dark:bg-gray-700 bg-gray-200 -z-0 rounded-lg"
    >
      {{ text }}
    </label>
  </div>
</template>

<style scoped></style>
