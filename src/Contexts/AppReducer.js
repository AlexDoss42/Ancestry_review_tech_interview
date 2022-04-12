// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case 'setOriginPage':
            return { ...state, origin_page: action.payload };
          case 'setPath':
            return { ...state, path: action.payload };
        default: 
            return state;
    }
}