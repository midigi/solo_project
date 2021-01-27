///Action Creators
export const articleAdded = (article) =>{
    return {type: 'ADD_ARTICLE', article}
}

export const receiveArticles = (articles) =>{
    return {type: 'RECEIVE_ARTICLE', articles}
}

//Reducers
const initialState=[]
export const talesReducer = (state={}, action) => {
    let newState = Object.assign({}, state)
    switch(action.type) {
        case 'ADD_ARTICLE':
            return Object.assign(newState, {
                [action.article.id]: action.article,
            });
        case 'RECEIVE_ARTICLE':
            let nextState={}
            action.articles.forEach((article) => (nextState[article.id] = article))
            return Object.assign(newState, nextState)
        default:
            return state

    }
}
