
const SearchArticles = ({onSearchChange}) => {

    const handleSearchChange = (event) => {
        event.preventDefault()
        const searchTerm = event.target[0].value
        onSearchChange(searchTerm)
        console.log(`Search term is: ${searchTerm}`)
    }


    return(
    <>
    <h1>Guardian Search</h1>
    <form onSubmit={handleSearchChange}>
    <label>Search for Guardian articles: </label>
    <input type="text" id="search" name="search" placeholder="Search Term"></input>
    <input type="submit"></input>
    </form>
    </>
    )
}

export default SearchArticles;