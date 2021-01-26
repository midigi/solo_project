import {fetch} from '../store/csrf';

export const fetchAllArticles = () => async (dispatch) => {
    const res = await fetch('/api/articles');
    if (!res.ok) throw res;
    const {articles} = await res.data;
    // console.log("this is the articles", articles);
    return articles;
}
