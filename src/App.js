import axios from "axios";
import { useEffect, useState } from "react";
import qs from 'qs'

import {Categories, Header, Items, Layout} from './global.js'

function App() {

  const [categories, setCategories] = useState([])
  const [currentCategory, setCurrentCategory] = useState()
  const [items, setItems] = useState([])
  const [companyInfo, setCompanyInfo] = useState([])

  // fetch categories
  useEffect(() => {
    

    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/osaka-jales-categories`)
    .then(({data}) => {
      setCategories(data.data)
      setCurrentCategory(data.data[0].attributes.title)
    })
    
  }, [])

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

  // fetch company info

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/osaka-jales-infos`)
    .then(({data}) => (
      setCompanyInfo(data.data[0].attributes)
    ))
  }, [])

  return (
    <Layout>

      <Header>
        {
          companyInfo &&
          <>
            <img src={companyInfo.logo_url}/>
            <h4>{companyInfo.name}</h4>
            <p>Bem Vindo</p>
          </>
        }
      </Header>

      <Categories>
      {
        categories && 
        categories.map(({attributes}, index) => (
          <h1 key={index}
          className={currentCategory == attributes.title ? "selected" : ""}
          onClick={() => setCurrentCategory(attributes.title)}
          > 
            {attributes.title}
          </h1>
        ))
      }
      </Categories>

      <Items>
        {
          items &&
          items.map(({attributes}, index) => (
            <div key={index}>
              
              <div>
                <img src={attributes.image_url}/>
                <span/>
              </div>

              <h4>{attributes.title}</h4>
              <p>{attributes.description}</p>
              <h5>{attributes.price}</h5>
            </div>
          ))
        }
      </Items>
    </Layout>
  );
}

export default App;
