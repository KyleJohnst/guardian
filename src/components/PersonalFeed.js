const PersonalFeed = ({interestArticles, yourInterests}) => {

    const getFeed = (interestArticles, yourInterests) => {

        console.log(interestArticles)

        let articlesBoxes = []

        const getArticles = (specificInterest) => {
            let displayTitles = specificInterest.map((article, index) => {
                return <li key={index}>{article.webTitle}</li>
            })
            return displayTitles
            }
        
        if(interestArticles){
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
}

    return articlesBoxes
    }
    
    return (
        <>
        {getFeed()}
        </>
    )
}

export default PersonalFeed;