import {Container} from './styles'
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
        <Container>
        {
          items &&
          items.map(({attributes}, index) => (
            <div key={index}>
              
              <div className='image' alt={"imagem de " + attributes.title}>
                <img src={attributes.image_url}/>
              </div>

              <div className='text'>
                <h4>{attributes.title}</h4>
                <p>{attributes.description}</p>
                <h5>
                  {new Intl.NumberFormat('pt-BR', 
                  { style: 'currency', currency: 'BRL' })
                  .format(attributes.price)}
                </h5>
                
              </div>
            </div>
          ))
        }
      </Container>
    )
}