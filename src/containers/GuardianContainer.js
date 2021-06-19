import SearchArticles from "../components/SearchArticles";
import { useEffect, useState, useRef } from "react";
import ArticlesList from "../components/ArticlesList";
import Interests from "../components/Interests";
import SetInterests from "../components/SetInterests";
// import NavBar from "../components/NavBar";


const GuardianContainer = () => {

    const [searchTerm, setSearchTerm] = useState(null);
    const [allArticles, setAllArticles] = useState(null);
    const [yourInterests, setYourInterests] = useState([]);
    

    const onSearchChange = (search) => {
      setSearchTerm(search)
    }

    const onInterestChange = (interest) => {
        if(!yourInterests.includes(interest))
            setYourInterests([...yourInterests, interest])
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
            <SetInterests onInterestChange={onInterestChange}/>
            <Interests yourInterests={yourInterests}/>
        </>

    )
}

export default GuardianContainer;