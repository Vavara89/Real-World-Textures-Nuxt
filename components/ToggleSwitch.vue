<template>
  <div class="toggle">
    <fieldset class="toggle__fieldset superb" :class="{'pricing': first_text && second_text}">
      <input id="monthly" type="radio" value="monthly" name="toggle" checked>
      <label for="monthly"><span v-if="first_text">{{ first_text }}</span><span v-if="!first_text">Monthly</span></label>
      <input id="yearly" type="radio" value="yearly" name="toggle">
      <label for="yearly"><span v-if="second_text">{{ second_text }}</span><span v-if="!second_text">Yearly</span></label>
      <span class="toggle__switch"/>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'ToggleSwitch',
  props: {
    first_text: {
      type: String,
      required: false
    },
    second_text: {
      type: String,
      required: false
    }
  }
};
</script>
