<template>
  <div class="b-poll-respondents">
    <div v-for="field in fields" class="b-poll-respondents__field">
      fieldName: {{constructorFields.byId[field.id].name}} <br>
      fieldId: {{ field.id }} <br>
      fieldValue: {{ field.value }} <br>
      typeField: {{constructorFields.byId[field.id].typeField}} <br>
      <template v-if="constructorFields.byId[field.id].typeField === typeFields.SELECT">
        fieldOptions: {{constructorFields.byId[field.id].options}} <br>
      </template>
      <hr>
    </div>
  </div>
</template>

<script>
  import {TypeFields} from "@/constants/fields";

  export default {
    name: 'PollRespondents',
    props: {
      /**
       * Поля формы
       */
      fields: {
        type: Object,
        require: true,
      },
      /**
       * Настройки контруктора полей
       */
      constructorFields: {
        type: Object,
        require: true,
      },
    },
    data() {
      return {
        typeFields: TypeFields
      };
    },
  }
</script>

<style scoped>

</style>
