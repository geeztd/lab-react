import React,{useState} from 'react'
import Catalog from '../Catalog/Catalog'

const Search = () => {
    const [request, setRequest] = useState(``)
  return (
    <div>
        <input type="text" placeholder='запрос' onChange={(e)=>{setRequest(e.target.value)}}/>
        <Catalog request={request}/>
    </div>
  )
}

export default Search