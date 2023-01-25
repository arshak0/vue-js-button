import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('counter', () => {
  const buttonText = "Was clicked: "
  const tooltipText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem et fuga laboriosam."

  const count = ref(0)
  const tooltip = ref(0)
  function appClick(event) {
    if ( !event.target.className.includes("button--tooltip") && !event.target.className.includes("tooltip-wrapper") ) {
      tooltip.value = 0
    }
  }

  function incrementCount() {
    count.value++
  }
  function restartCount() {
    count.value = 0
  }
  function showTooltip() {
    tooltip.value = 1
  }

  const doubleCount = computed(() => count.value * 2)

  return { buttonText, tooltipText, count, incrementCount, restartCount, tooltip, showTooltip, appClick }
})
