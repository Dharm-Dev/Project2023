import { useParams } from "react-router-dom";
import articles from './article-content';
import NotFoundPage from "./NotFoundPage";
const ArticlePage = ()=>{
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);
    if(!article) {
        return <NotFoundPage />;
    }
    return (
        <div>    
        <h3>{article.title}</h3>
        {article.content.map((para,i) => (
            <p key={i}>{para}</p>
        ))}
        </div>
    );
}
export default ArticlePage;