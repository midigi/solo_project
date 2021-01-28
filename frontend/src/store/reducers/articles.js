//Action Creators
export const articleAdded = (article) =>{
    return {type: 'ADD_ARTICLE', article}
}

export const receiveArticles = (articles) =>{
    return {type: 'RECEIVE_ARTICLE', articles}
}

export const viewArticle = (article) => {
    return {type: 'VIEW_ARTICLE', article}
}

//Reducers
const initialState=[]
export const articleReducer = (state={}, action) => {
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
        case 'VIEW_ARTICLE':
            let newState;
            action.articles.forEach((article) => (nextState[article.id] = article))
            return Object.assign(newState, nextState)
        default:
            return state

    }
}
