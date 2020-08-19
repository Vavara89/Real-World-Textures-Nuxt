<template>
  <div>
    There is!
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return  /^[a-z0-9][a-z0-9\-]*[a-z0-9]$/.test(params.slug)
  }
}
</script>
