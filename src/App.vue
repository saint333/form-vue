<script setup lang="ts">
import RadioButton from "./components/RadioButton.vue";
import CardQuestion from "./components/CardQuestion.vue";
import { ref, onMounted } from 'vue'
import { formService } from './service/form.ts'

const posts = ref({})
const loading = ref(false)
const error = ref(null)

const fetchPosts = async () => {
  loading.value = true
  error.value = null
  try {
    posts.value = await formService()
    console.log("🚀 ~ fetchPosts ~ posts:", posts.value)
  } catch (err) {
    error.value = 'Hubo un error al cargar los datos'
    console.error('Error al cargar los posts:', err)
  } finally {
    loading.value = false
  }
}

onMounted(fetchPosts)
</script>

<template>
  <div class="max-w-2xl m-auto h-full px-5 py-10">
    <header>
      <img
        src="https://backoffice.grupodocenteperu.com/assets/full_logo-C3D2EQY1.png"
        alt="logo"
        loading="lazy"
        class="m-auto"
      />
      <h1
        class="block text-3xl font-bold tracking-tight leading-7 sm:text-4xl text-gray-400 text-center mt-5"
      >
        {{ posts.value?.title ? posts.value.title : '' }}
      </h1>
    </header>
    <main class="flex flex-col gap-6 mt-6">
      <p v-if="loading">Cargando datos...</p>
      <p v-if="error" class="text-red-500">{{ error }}</p>
      <CardQuestion question="¿Qué tan satisfecho estás con el curso?">
        <RadioButton
          v-for="i in 5"
          :key="i"
          name="satisfaccion"
          :id="`satisfaccion-${i}`"
          :value="i"
          :text="i"
        />
      </CardQuestion>

    </main>
  </div>
</template>

<style scoped></style>
