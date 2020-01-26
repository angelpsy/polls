<template>
  <div class="p-polls-item">
    page item polls {{id}}
  </div>
</template>

<script>
  export default {
    name: 'PagePollsItem',
    computed: {
      id() {
        return this.$route.params.id;
      }
    },
    mounted() {
      console.log(this);
    }
  }
</script>

<style></style>
