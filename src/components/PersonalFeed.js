const PersonalFeed = ({interestArticles, yourInterests}) => {

    let articlesBoxes = []

        const getArticles = (specificInterest) => {
            let displayTitles = specificInterest.map((article, index) => {
                return <li key={index}>{article.webTitle}</li>
            })
            return displayTitles
            }
        
            for(let i = 0; i < interestArticles.length; i++){
            let newArticle = 
            (
            <>          
                <div className="feedArticle">
                    <h4>Articles related to {yourInterests[i]}</h4>
                        <ul>
                            {getArticles(interestArticles[i])}
                        </ul>
                </div>
            </>
        )
        articlesBoxes.push(newArticle)
    }
    
    return (
        <>
        <h2>Your personalised newsfeed</h2>
        <div className="newsFeedBoxes">
        {articlesBoxes}
        </div>
        </>
    )
}

export default PersonalFeed;