<script setup>
import { useStore } from '@/stores/counter'
import AnimationTooltipItem from '../components/AnimationTooltipItem.vue'
const store = useStore()
</script>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      tooltip: 0,
      count: 0,
      buttonBackground: "#4369EE",
      restartButtonBackground: "#ea9200"
    }
  },
  mounted() {
    //Doing the animation
    setInterval(() => {
      if ( this.count !== 10 ) {
        this.buttonBackground = "#002091";
        setTimeout(() => {
          this.buttonBackground = "#4369EE";
          this.count++;
          this.tooltip = 1;
        }, 200)
      }
      else {
        this.restartButtonBackground = "#ff622d";
        setTimeout(() => {
          this.restartButtonBackground = "#ea9200";
          this.count = 0;
          this.tooltip = 0;
        }, 200)
      }
    },1200)
  }
});

</script>

<template>
  <main>
    <h3 >Check the animation about the app is working below</h3>

    <div class="animation">
      <button class="animation__button--tooltip" :style="{background: buttonBackground}">{{store.buttonText}}
        <span :style="{fontWeight: 'bold'}">{{count}}</span>
      </button>
      <AnimationTooltipItem v-bind:offsetX="100" v-bind:offsetY="60" v-if="tooltip" />
      <button class="animation__button--restart" :style="{background: restartButtonBackground}">Restart the counter</button>
    </div>

  </main>

</template>

<style>

</style>
