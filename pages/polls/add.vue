<template>
  <div class="p-polls-add">
    <Poll
      :item="poll"
      :constructorFields="constructorFields"
    />
  </div>
</template>

<script>
  import Poll from '@/components/_polls/poll';
  import {ActionNames} from '@/store/polls';

  export default {
    name: 'PagePollsAdd',
    components: {
      Poll,
    },
    async fetch({store}) {
      await store.dispatch(`polls/${ActionNames.ADD_NEW_POLL}`);
    },
    computed: {
      poll() {
        return this.$store.getters[`polls/currentPool`];
      },
      constructorFields() {
        return this.$store.getters[`polls/constructorFields`];
      },
    },
  }
</script>

<style></style>
