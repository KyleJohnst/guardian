

const ArticlesList = ({allArticles, searchTerm}) => {

    const articles = allArticles.map((article, index) => {
        return <li key={index}><a href={article.webUrl}>{article.webTitle}</a></li>
    })
    

    return(
        <>
        <p>Articles related to {searchTerm}</p>
        <ul>
            {articles}
        </ul>
        </>
    )

}

export default ArticlesList;