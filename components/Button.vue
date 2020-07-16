<template>
  <a
    :href="link"
    :class="'button-' + type + ' ' + 'button-' + type + '--' + color + (width ? ' button-' + type + '--' + width : '')"
  >{{ text }}</a>
</template>

<script>
export default {
  name: "Button",
  props: {
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false
    },
    width: {
      type: String,
      required: false
    }
  }
};
</script>
