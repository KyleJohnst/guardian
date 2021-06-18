
const SearchArticles = (onSearchChange) => {

    const handleSearchChange = (event) => {
        console.log(event.target.value)
        onSearchChange(event.target.value)
    }


    return(
    <>
    <h1>Guardian Search</h1>
    <form onSubmit={handleSearchChange}>
    <label>Search for Guardian articles: </label>
    <input type="text" id="search" placeholder="Search Term"></input>
    <input type="submit"></input>
    </form>
    </>
    )
}

export default SearchArticles;