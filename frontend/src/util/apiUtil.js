import {fetch} from '../store/csrf';
import {articleAdded, viewArticle} from '../store/reducers/articles'

export const fetchArticle = (article_id) => async (dispatch) => {
    const res = await fetch(`/api/articles/${article_id}`);
    if (!res.ok) throw res;
    const {article} = await res.data;
    dispatch(viewArticle(article))
    return article;
}

export const addArticle = (payload) => async (dispatch) => {
    const res = await fetch('/api/articles', {
        method: "POST",
        body: JSON.stringify(payload)
    })
    if (!res.ok) throw res;
    const { article } = await res.data
    dispatch(articleAdded(article))
    return article;
}
