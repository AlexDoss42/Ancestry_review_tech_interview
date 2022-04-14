// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case 'setOriginPage':
            return { ...state, origin_page: action.payload };
        default: 
            return state;
    }
}