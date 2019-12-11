// import Cookies from 'js-cookie'
// import Vue from 'vue'

const state = {
    related: {
        // 相关文章
        visible: false,
        data: {},
    }
};

const mutations = {

    SET_RELATED_SHOW(state, bool) {
        state.related.visible = bool;
    },
    SET_RELATED_DATA(state, data) {
        state.related.data = data;
    },

};

const actions = {
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
