import SearchArticles from "../components/SearchArticles";
import { useEffect, useState, useRef } from "react";
import ArticlesList from "../components/ArticlesList";
import Interests from "../components/Interests";
import SetInterests from "../components/SetInterests";
import PersonalFeed from "../components/PersonalFeed";
// import NavBar from "../components/NavBar";


const GuardianContainer = () => {

    const [searchTerm, setSearchTerm] = useState(null);
    const [allArticles, setAllArticles] = useState(null);
    const [yourInterests, setYourInterests] = useState([]);
    const [interestArticles, setInterestArticles] = useState([]);
    

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

    const getPersonalFeedArticles = () => {
        if(yourInterests.length > 0){
            for(let i = 0; i <= yourInterests.length; i++){
                let searchKey = yourInterests[i]
                fetch(`https://content.guardianapis.com/search?q=${searchKey}&format=json&api-key=test`)
                .then(results => results.json()).then(articles => setInterestArticles([...interestArticles, articles.response.results]))
            }
        }
    }

    useEffect(() => {
        getArticles();
    }, [searchTerm])

    useEffect(() => {
        getPersonalFeedArticles();
    }, [yourInterests])

    const renderPersonalFeed = () => {
        if(interestArticles.length > 0){
            return <PersonalFeed interestArticles={interestArticles} yourInterests={yourInterests}/>
        }
    }

    return (
        <>
            <SearchArticles onSearchChange={onSearchChange}/>
            {allArticles ? <ArticlesList allArticles={allArticles} searchTerm={searchTerm}/> : null}
            <SetInterests onInterestChange={onInterestChange}/>
            <Interests yourInterests={yourInterests}/>
            {renderPersonalFeed()}
            {/* {interestArticles ? <PersonalFeed interestArticles={interestArticles} yourInterests={yourInterests}/> : null} */}
        </>

    )
}

export default GuardianContainer;