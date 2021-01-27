import {fetch} from '../store/csrf';
import {articleAdded, receiveArticles} from '../store/reducers/articles'

// export const fetchAllArticles = () => async (dispatch) => {
//     const res = await fetch('/api/articles');
//     if (!res.ok) throw res;
//     const {articles} = await res.data;
//     // console.log("this is the articles", articles);
//     return articles;
// }

export const addArticle = () => async (dispatch) => {
    const res = await fetch('/api/createArticle')
    if (!res.ok) throw res;
    const { article } = await res.data
    dispatch(articleAdded(article))
}
