<template>
  <div class="errors">
    <div class="input-form-error">
      {{errors[0]}}
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
