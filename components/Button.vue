<template>
  <a
    @click="$emit('click')"
    :href="link"
    :target="targetlink"
    :class="'button-' + type + ' ' + 'button-' + type + '--' + color + (width ? ' button-' + type + '--' + width : '')"
  ><span>{{ text }}</span></a>
</template>

<script>
export default {
  name: "Button",
  props: {
    link: {
      type: String,
      required: true
    },
    target: {
      type: String,
      required: false
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
  },
  computed:{
    targetlink(){
      if (this.target && this.target === '_blank') return '_blank'
      return  this.text === 'play tutorial' ? '_blank' : '_self'
    }
  }
};
</script>
