<script setup>
import { useStore } from '@/stores/counter'
const store = useStore()

defineProps({
  offsetX: {
    type: Number,
    required: true
  },
  offsetY: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="tooltip-wrapper" v-bind:style="{ top: offsetY + 'px', left: offsetX + 'px' }">
    <p class="tooltip-wrapper__p">{{store.tooltipText}}</p>
  </div>
</template>