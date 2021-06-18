import SearchArticles from "../components/SearchArticles";
import { useEffect, useState, useRef } from "react";
import ArticlesList from "../components/ArticlesList";

const GuardianContainer = () => {

    const [searchTerm, setSearchTerm] = useState(null);
    const [allArticles, setAllArticles] = useState([]);

    const onSearchChange = (search) => {
      setSearchTerm(search)
    }

    const getArticles = () => {
        fetch(`https://content.guardianapis.com/search?q=${searchTerm}&format=json&api-key=test`)
        .then(results => results.json()).then(articles => setAllArticles(articles))
    }

    const isInitialMount = useRef(true);

    useEffect(() => {
    if (isInitialMount.current) {
        isInitialMount.current = false;
    } else {
        getArticles();
    }
    });

    // useEffect(() => {
    //     getArticles();
    // }, [searchTerm])

    // const renderArticlesList = () => {
    //     {if(allArticles.length > 0){
    //         <ArticlesList allArticles={allArticles}/>
    //         console.log(allArticles.length)
    //     }}
    // }

    return (
        <>
            <SearchArticles onSearchChange={onSearchChange}/>
            {allArticles ? <ArticlesList allArticles={allArticles} searchTerm={searchTerm}/> : null}
        </>

    )
}

export default GuardianContainer;