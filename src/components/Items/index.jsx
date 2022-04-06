import {Container} from './styles'
import qs from 'qs'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from '../../context/Location'

export default function Items({currentCategory}){

    const [items, setItems] = useState([])

    const {currentLocation} = useLocation()

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

        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/osaka-${currentLocation}-items?${query}`)
        .then(({data}) => (
        setItems(data.data)
        ))
        
        // eslint-disable-next-line
    }, [currentCategory])

    return(
        <Container>
        {
          items &&
          items.map(({attributes}, index) => (
            <div key={index}>
              
              <div className='image'>
                <img src={attributes.image_url} alt={"imagem de " + attributes.title}/>
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