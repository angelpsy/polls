import {TypeFields} from '@/constants/fields';


const getConstructorFields = () => ({
  respondents: {
    criteria: {
      byId: {
        ages: {
          id: 'ages',
          name: 'Возраст респонтенда',
          typeField: TypeFields.RANGES_OR,
          defaultValues: [[ null, null], [null, null]],
        },
        typeCard: {
          id: 'typeCard',
          name: 'Тип карты лояльности',
          typeField: TypeFields.SELECT,
          options: [
            {
              id: 1,
              value: 1,
              name: 'Активная',
            },
            {
              id: 2,
              value: 2,
              name: 'Не активная',
            },
          ],
          defaultValue: null,
        },
        statusCard: {
          id: 'statusCard',
          name: 'Статус карты лояльности',
          typeField: TypeFields.SELECT,
          options: [
            {
              id: 1,
              value: 1,
              name: 'Gold',
            },
            {
              id: 2,
              value: 2,
              name: 'Silver',
            },
            {
              id: 3,
              value: 3,
              name: 'Standard',
            },
          ],
          defaultValue: null,
        },
      },
      ids: [
        'ages', 'statusCard', 'typeCard',
      ],
    }
  }
});

export const state = () => ({
  /**
   * Выбранный\текущий опрос
   */
  currentPool: null,
  /**
   * конструктор полей
   */
  constructorFields: getConstructorFields(),
  /**
   * Список опросов
   */
  list: [],
});

export const getters  = {
  currentPool(state) {
    return state.currentPool;
  },
  constructorFields(state) {
    return state.constructorFields;
  }
};

const MutationNames = {
  SET_CURRENT_POLL: 'SET_CURRENT_POLL',
  SET_LIST: 'SET_LIST',
};

export const mutations = {
  [MutationNames.SET_CURRENT_POLL](state, item) {
    state.currentPool = item;
  },
  [MutationNames.SET_LIST](state, list) {
    state.list = list;
  }
};

const getNewPollFields = () => ({
  respondents: {
    criteria: [ // TODO: должно заполняться во время добавления условий (кнопка +)
      {
        id: getConstructorFields().respondents.criteria.byId.ages.id,
        value: getConstructorFields().respondents.criteria.byId.ages.defaultValues,
      },
      {
        id: getConstructorFields().respondents.criteria.byId.statusCard.id,
        value: getConstructorFields().respondents.criteria.byId.statusCard.defaultValues,
      },
      {
        id: getConstructorFields().respondents.criteria.byId.typeCard.id,
        value: getConstructorFields().respondents.criteria.byId.typeCard.defaultValues,
      },
    ],
  }
});

export const ActionNames = {
  ADD_NEW_POLL: 'ADD_NEW_POLL',
  SEND_POLL: 'SEND_POLL',
  FETCH_LIST: 'FETCH_LIST',
  FETCH_POLL_BY_ID: 'FETCH_POLL_BY_ID',
};
export const actions = {
  async [ActionNames.ADD_NEW_POLL]({commit}) {
    const poll = {
      fields: getNewPollFields(),
    };
    commit(MutationNames.SET_CURRENT_POLL, poll);
    return Promise.resolve(poll);
  },
};
