<script setup>
import { useStore } from '@/stores/counter'
const store = useStore()
</script>

<template>
  <div class="button-wrapper">
    <button class="button-wrapper__button--restart" v-on:click="store.restartCount">Restart the counter</button>
  </div>
</template>

