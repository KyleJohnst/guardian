import SearchArticles from "../components/SearchArticles";
import { useState } from "react";

const GuardianContainer = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const onSearchChange = (search) => {
      setSearchTerm(search)
    }


    return (
        <SearchArticles onSearchChange={onSearchChange}/>
    )
}

export default GuardianContainer;