import SearchArticles from "../components/SearchArticles";
import { useEffect, useState } from "react";

const GuardianContainer = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [allArticles, setAllArticles] = useState([]);

    const onSearchChange = (search) => {
      setSearchTerm(search)
    }

    const getArticles = () => {
        fetch(`https://content.guardianapis.com/search?q=${searchTerm}&format=json&api-key=test`)
        .then(results => results.json()).then(articles => setAllArticles(articles))
    }

    useEffect(() => {
        getArticles();
    }, [searchTerm])



    return (
        <SearchArticles onSearchChange={onSearchChange}/>
    )
}

export default GuardianContainer;