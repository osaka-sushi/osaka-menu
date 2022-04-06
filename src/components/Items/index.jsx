import {ItemsDiv} from './styles'
import qs from 'qs'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Items({currentCategory}){

    const [items, setItems] = useState([])

    // fetch current category items
    useEffect(() => {

        const query = qs.stringify({
        filters:{
            osaka_jales_category: {
            title:{
                $eq: currentCategory
            }
            }
        }
        })

        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/osaka-jales-items?${query}`)
        .then(({data}) => (
        setItems(data.data)
        ))
        
    }, [currentCategory])

    return(
        <ItemsDiv>
        {
          items &&
          items.map(({attributes}, index) => (
            <div key={index}>
              
              <div>
                <img src={attributes.image_url}/>
              </div>

              <h4>{attributes.title}</h4>
              <p>{attributes.description}</p>
              <h5>{attributes.price}</h5>
            </div>
          ))
        }
      </ItemsDiv>
    )
}