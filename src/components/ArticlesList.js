

const ArticlesList = ({articlesList}) => {

    const articles = articlesList.map(article => {
        return <li>{article}</li>
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