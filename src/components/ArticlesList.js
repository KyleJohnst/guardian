

const ArticlesList = ({allArticles, searchTerm}) => {

    console.log(`All articles log: ${allArticles}`)

    const articles = allArticles.map((article, index) => {
        return <li key={index}>{article.webTitle}</li>
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