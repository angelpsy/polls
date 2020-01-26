<template>
  <nav class="b-navigation">
    <ul class="b-navigation__list">
      <li class="b-navigation__item" v-for="item in items" :key="item.id">
        <nuxt-link :to="item.path" class="b-navigation__item-link">
          <component :is="item.iconComponentName" class="b-navigation__item-icon"/>
          <span class="b-navigation__item-name">{{item.name}}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import IconPlaceholder from '@/icons/placeholder';
  import items from './items';

  export default {
    name: 'Navigation',
    components: {
      IconPlaceholder,
    },
    data() {
      return {
        items,
      }
    },
  }
</script>

<style lang="sass">
  .b-navigation__list
    list-style: none
    padding: 0
    margin: 0

  .b-navigation__item
    margin-bottom: 10px

  .b-navigation__item-link
    display: flex
    flex-direction: column
    align-items: center
</style>
