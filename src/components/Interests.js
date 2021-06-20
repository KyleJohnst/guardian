
const Interests = ({yourInterests}) => {

    let interests = []
    
    const getInterests = () => {
        if(yourInterests.length < 1){
            return <p>You have not set any interests yet</p>
        } else {
            for(let  i = 0; i < yourInterests.length; i++){
                interests.push(yourInterests[i])
            }
            const returnInterests = interests.map((interest, index) => {
                return <section key={index}>{interest}</section>
            })
            return returnInterests
            }
        }
    
    return (
        <>
    <h4 className="centre-text">Your Interests</h4>
    {getInterests()}
    </>
    )
}

export default Interests;