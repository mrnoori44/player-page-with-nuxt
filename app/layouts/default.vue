<script setup>
import Navbar from '~/components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-primaryBg text-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
    <!-- Navbar (shared) -->
    <Navbar />

    <!-- Page content -->
    <main class="container mx-auto px-4 py-6">
      <slot />
    </main>
  </div>
</template>
