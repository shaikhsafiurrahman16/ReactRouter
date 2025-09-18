import {useSearchParams} from 'react-router-dom'
function Search(){
    const [searchParams , setSearchParams] = useSearchParams(); 
    const myName = searchParams.get('name')
    const myAge = searchParams.get('age')
    return (
        <div>
            <h2>search params</h2>
            <p>My name is {myName} and My age is {myAge}</p>
        </div>
    )   
}
export default Search