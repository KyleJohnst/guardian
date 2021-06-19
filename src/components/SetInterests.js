
const SetInterests = ({onInterestChange}) => {

    const setNewInterest = (event) => {
            event.preventDefault();
            onInterestChange(event.target[0].value)
        
    }

    return (
        <>
            <p>Add interest to your favourites</p>
            <form onSubmit={setNewInterest}>
            <label>New Interest: </label>
            <input type="text" placeholder="New Interest" id="newInterest" name="newInterest"></input>
            <input type="submit"></input>
            </form>
        </>
    )
}

export default SetInterests