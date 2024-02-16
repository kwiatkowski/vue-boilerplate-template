import ChartAPI from '~/api/api-chart'

import Loader from '~/store/Core/loader'

export default {
    namespaced: true,
    state: {
        dataLoader: {...Loader.states},
        data: []
    },
    mutations: {
        ...Loader.mutations,
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        getData({ commit }, payload) {
            commit('loadStart', { name: 'dataLoader' })

            return ChartAPI.getData(payload)
                .then((response) => {
                    commit('loadSuccess', { name: 'dataLoader' })
                    commit('setData', response.data)
                })
                .catch((error) => {
                    commit('loadError', { name: 'dataLoader' })

                    console.error(error)
                })
        }
    }
}
