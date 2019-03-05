<template>
  <nav>
    <div class="logo">
      <app-h1 is-brand="true">Home</app-h1>
    </div>
    <div class="menu">
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import h1 from './h1'

  export default {
    components: {
      'app-h1': h1
    }
  }
</script>
