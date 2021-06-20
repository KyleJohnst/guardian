
const SetInterests = ({onInterestChange}) => {

    const setNewInterest = (event) => {
            event.preventDefault();
            onInterestChange(event.target[0].value)
        
    }

    return (
        <>
        <div className="addFavourites">
            <h3>Add interest to your favourites</h3>
            <form onSubmit={setNewInterest}>
            <label>New Interest: </label>
            <input type="text" placeholder="New Interest" id="newInterest" name="newInterest"></input>
            <input type="submit"></input>
            </form>
        </div>
        </>
    )
}

export default SetInterests