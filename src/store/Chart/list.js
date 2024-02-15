import ChartAPI from '../../api/api-chart'

export default {
    namespaced: true,
    state: {
        data: []
    },
    mutations: {
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        getData({ commit }, payload) {
            return ChartAPI.getData(payload)
                .then((response) => {
                    commit('setData', response.data)
                })
                // .catch((error) => {
                //     console.error(error)
                // })
        }
    }
}
