<template>
  <div class="p-polls-index">
    <nuxt-link to="/polls/add">Добавить опрос</nuxt-link> <br/>
    <nuxt-link to="/polls/list">Список опросов</nuxt-link> <br/>
    <nuxt-link to="/polls/123">Опрос с id = 123</nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'PagePollsIndex',
  }
</script>

<style></style>
