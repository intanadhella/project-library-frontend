const initialState = {
    books: [],
    dataDelete: {},
    dataEdit: {},
    isShowAdd: false,
    isShowEdit: false,
    isShowDelete: false
}

export default (state = initialState, action) => {
    let data;
    switch (action.type){
        case 'BOOKS_ADD':
            data = [...state.books, action.payload]
            return {...state, books: data}
        case 'BOOKS_LIST':
            return {...state, books: action.payload}
        case 'BOOKS_DELETE':
            data = state.books.filter((item) => {
                if (item.id === action.payload) {
                    return false
                } else { return true }
            })
            return {...state, books: data}
        case 'BOOKS_EDIT':
            data = state.books.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                } else { return item }
            })            
            return {...state, books: data}

        case 'BOOKS_HIDE_ADD':
            return {...state, isShowAdd: false}
        case 'BOOKS_HIDE_DELETE':
            return {...state, isShowDelete: false}
        case 'BOOKS_HIDE_EDIT':
            return {...state, isShowEdit: false}
        
        case 'BOOKS_SHOW_ADD':
            return {...state, isShowAdd: true}
        case 'BOOKS_SHOW_DELETE':
            return {...state, isShowDelete: true, dataDelete: action.payload}
        case 'BOOKS_SHOW_EDIT':
            return {...state, isShowEdit: true, dataEdit: action.payload}
                
        default:
            return state;
    }
}