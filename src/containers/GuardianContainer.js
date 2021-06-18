import SearchArticles from "../components/SearchArticles";
import { useEffect, useState, useRef } from "react";
import ArticlesList from "../components/ArticlesList";

const GuardianContainer = () => {

    const [searchTerm, setSearchTerm] = useState(null);
    const [allArticles, setAllArticles] = useState(null);
    const [recentSearches, setRecentSearches] = useState([]);

    const onSearchChange = (search) => {
      setSearchTerm(search)
    }

    const getArticles = () => {
        if(searchTerm){
        fetch(`https://content.guardianapis.com/search?q=${searchTerm}&format=json&api-key=test`)
        .then(results => results.json()).then(articles => setAllArticles(articles.response.results))
        }
    }

    useEffect(() => {
        getArticles();
    }, [searchTerm])

    return (
        <>
            <SearchArticles onSearchChange={onSearchChange}/>
            {allArticles ? <ArticlesList allArticles={allArticles} searchTerm={searchTerm}/> : null}
        </>

    )
}

export default GuardianContainer;