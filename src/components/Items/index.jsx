import {Container} from './styles'
// import qs from 'qs'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from '../../context/Location'
import Loader from '../Loader'

export default function Items({currentCategory}){
  
  const [items, setItems] = useState([])
  const {currentLocation} = useLocation()
  const [loading, setLoading] = useState(false)
  const [companyInfo, setCompanyInfo] = useState([])

  // fetch current category items
  useEffect(() => {

    async function fetchItems(){

      // const query = qs.stringify({
      //   filters:{
      //     osaka_jales_category: {
      //       title:{
      //         $eq: currentCategory
      //       }
      //     }
      //   }
      // })

      setLoading(true)

      const query = `filters[osaka_${currentLocation}_category][title][$eq]=${currentCategory}`

      let {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/osaka-${currentLocation}-items?${query}`)
      setItems(data.data)

      setLoading(false)
    }

    currentCategory && fetchItems()

    // eslint-disable-next-line
  }, [currentCategory])

  // fetch company info
  useEffect(() => {

    setLoading(true)

    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/osaka-${currentLocation}-infos`)
    .then(({data}) => {
      setCompanyInfo(data.data[0].attributes)
      setLoading(false)
    })
    // eslint-disable-next-line
  }, [])

  return(
      <Container>
      {
        loading && <Loader loading={loading} position="inherit"/>
      }
      {
        (items && !loading) &&
        items.map(({attributes}, index) => (
          <div key={index}>
            <div className='image'>
              <img 
              src={attributes.image_url ? attributes.image_url : companyInfo.logo_url} 
              alt={"imagem de " + attributes.title}/>
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