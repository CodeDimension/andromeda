<template>
  <div class="an-progress-bar" :class="classes">
    <div class="an-progress-bar-value" :style="inlineStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'an-progress-bar',

  props: {
    value: {
      type: Number,
      default: 0
    },
    theme: {
      type: String,
      default: 'primary'
    }
  },

  computed: {
    classes() {
      return {
        [`an-progress-bar-${this.theme}`]: true
      };
    },
    inlineStyle() {
      return {
        width: `${this.value}%`
      };
    }
  }
};
</script>
