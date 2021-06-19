
const Interests = ({yourInterests}) => {

    let interests = []
    
    const getInterests = () => {
        if(yourInterests.length < 1){
            return <p>You have not set any interests yet</p>
        } else {
            for(let  i = 0; i < yourInterests.length; i++){
                console.log(yourInterests[i])
                interests.push(yourInterests[i])
            }
            const returnInterests = interests.map((interest, index) => {
                return <p key={index}>{interest}</p>
            })
            return returnInterests
            }
        }
    
    return (
        <>
    <h2>Your Interests</h2>
    {getInterests()}
    </>
    )
}

export default Interests;