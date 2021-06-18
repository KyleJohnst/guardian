

const ArticlesList = ({allArticles, searchTerm}) => {

    const articles = allArticles.map((article, index) => {
        console.log(article.webUrl)
        return <li key={index}><a href={article.webUrl}>{article.webTitle}</a></li>
    })
    

    return(
        <>
        <p>All Articles</p>
        <ul>
            {articles}
        </ul>
        </>
    )

}

export default ArticlesList;