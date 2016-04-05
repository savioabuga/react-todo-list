export default function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            Object.assign({}, state, {
                todos: [{
                    // add new to info
                    text: action.text,
                    completed: false,
                    id: getId(state)
                }, ...state.todos ]
                }
            })
        default:
            return state;
    }
}