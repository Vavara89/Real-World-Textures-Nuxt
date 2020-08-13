<template>
  <div class="errors">
    <div v-for="error in errors" class="input-form-error">
      {{error}}
    </div>
  </div>
</template>

<script>
export default {
  name: "FormInputErrors",
  props: {
    errors: Array,
  }
};
</script>
