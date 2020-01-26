<template>
  <div class="b-poll">
    <b-tabs v-model="activeTab" class="b-poll__tabs">
      <b-tab-item label="Параметры">
        content tab params
      </b-tab-item>
      <b-tab-item label="Вопросы">
        content tab questions
      </b-tab-item>
      <b-tab-item label="Логика">
        content tab logic
      </b-tab-item>
      <b-tab-item label="Условия">
        content tab conditions
      </b-tab-item>
      <b-tab-item label="Респонденты">
        <PollRespondents />
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
  import PollRespondents from '@/components/_polls/poll-respondents'
  export default {
    name: 'Poll',
    components: {
      PollRespondents
    },
    data() {
      return {
        activeTab: 0,
      };
    },
    // props: {
    //   item: {
    //     type: Object,
    //     require: true,
    //   }
    // },
  }
</script>

<style lang="sass">
</style>
