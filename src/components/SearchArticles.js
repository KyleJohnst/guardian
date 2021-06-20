
const SearchArticles = ({onSearchChange}) => {

    const handleSearchChange = (event) => {
        event.preventDefault()
        const searchTerm = event.target[0].value
        onSearchChange(searchTerm)
    }


    return(
    <>
    <h3>Search for articles</h3>
    <form className="searchForm" onSubmit={handleSearchChange}>
    <label>Search for Guardian articles: </label>
    <input type="text" id="search" name="search" placeholder="Search Term"></input>
    <input type="submit"></input>
    </form>
    </>
    )
}

export default SearchArticles;