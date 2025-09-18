import {useSearchParams} from 'react-router-dom'
function Search(){
    const [searchParams , setSearchParams] = useSearchParams(); 
    const myName = searchParams.get('name')
    const myAge = searchParams.get('age')
    return (
        <div>
            <h2>search params</h2>
            <p>My name is {myName} and My age is {myAge}</p>
            <input type="text" placeholder='Enter Your Name'onChange={(n) => setSearchParams({name:n.target.value, age:21})} />
            {/* <input type="text" placeholder='Enter Your Age'onChange={(a) => setSearchParams({age:a.target.value})} /> */}
        </div>
    )   
}
export default Search