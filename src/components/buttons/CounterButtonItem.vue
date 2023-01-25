<script setup>
import { useStore } from '@/stores/counter'
import TooltipItem from '../TooltipItem.vue'
const store = useStore()
</script>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      clickedCount: 0,
      clientX: 0,
      clientY: 0
    }
  },
  methods: {
    buttonClick(event) {
      this.clickedCount++;
      this.offsetX = event.offsetX+10;
      this.offsetY = event.offsetY+10;
    }
  }
});
</script>

<template>
  <div class="button-wrapper">
    <button class="button-wrapper__button--tooltip" v-on:click="(event) => { buttonClick(event), store.incrementCount(), store.showTooltip()}">{{store.buttonText}}
      <span :style="{fontWeight: 'bold'}">{{store.count}}</span>
    </button>
    <TooltipItem v-bind:offsetX="offsetX" v-bind:offsetY="offsetY" v-if="store.tooltip" />
  </div>
</template>

