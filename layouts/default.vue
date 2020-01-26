<template>
  <div class="l-default">
    <Sidebar class="l-default__sidebar"/>
    <main class="l-default__main">
      <Header class="l-default__header" />
      <Breadcrumbs class="l-default__breadcrumbs" />
      <nuxt class="l-default__page"/>
    </main>
  </div>
</template>

<script>
  import Sidebar from '@/components/sidebar';
  import Header from '@/components/header';
  import Breadcrumbs from '@/components/breadcrumbs';

  export default {
    components: {
      Sidebar,
      Header,
      Breadcrumbs,
    }
  }
</script>

<style lang="sass">
  html,
  body
    height: 100%

  #__nuxt,
  #__layout
    height: 100%


  .l-default
    height: 100%
    display: flex

  .l-default__sidebar
    height: 100%
    width: 200px

  .l-default__main
    flex-grow: 1
    height: 100%
    padding-left: 20px
    padding-right: 20px

  .l-default__header
    margin-bottom: 10px

  .l-default__breadcrumbs
    margin-bottom: 10px
</style>
