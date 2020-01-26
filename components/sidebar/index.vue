<template>
  <aside class="b-sidebar">
    <nuxt-link to="/" class="b-sidebar__link-to-home">
      <Logo class="b-sidebar__logo"/>
    </nuxt-link>
    <Navigation class="b-sidebar__navigation"/>
  </aside>
</template>

<script>
  import Logo from '@/components/logo';
  import Navigation from '@/components/navigation';
  export default {
    name: 'Sidebar',
    components: {
      Logo,
      Navigation,
    },
  }
</script>

<style lang="sass">
  .b-sidebar
    display: flex
    flex-direction: column
    align-items: center
    border-right: 1px solid #ccc
    padding: 10px

  .b-sidebar__link-to-home
    margin-bottom: 20px

</style>
