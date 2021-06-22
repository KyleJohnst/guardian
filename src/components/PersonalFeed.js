const PersonalFeed = ({ interestArticles }) => {
  
    const getArticles = (specificInterest) =>
    specificInterest.map((article, index) => (
      <li key={index}>
        <a href={article.webUrl}>{article.webTitle}</a>
      </li>
    ));

  function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const buildArticleBoxes = (articles) =>
    Object.keys(articles).map((key, index) => (
      <div key={index} className="feedArticle">
        <h4>Articles related to {capitaliseFirstLetter(key)}</h4>
        <ul className="interestArticlesList">{getArticles(articles[key])}</ul>
      </div>
    ));

  return (
    <>
      <h2>Your personalised newsfeed</h2>
      <div className="newsFeedBoxes">{buildArticleBoxes(interestArticles)}</div>
    </>
  );
};

export default PersonalFeed;
