<template>
  <h1 :class="{brand: isBrand}">
    <slot></slot>
  </h1>
</template>

<script>
  export default {
    props: ['isBrand']
  }
</script>
