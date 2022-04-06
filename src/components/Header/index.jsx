import axios from 'axios'
import { useEffect, useState } from 'react'
import {Container} from './styles'

export default function Header(){
  
  const [companyInfo, setCompanyInfo] = useState([])

  // fetch company info
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/osaka-jales-infos`)
    .then(({data}) => (
      setCompanyInfo(data.data[0].attributes)
    ))
  }, [])

  return(
      <Container>
      {
        companyInfo &&
        <>
          <div className='image'>
            <img src={companyInfo.logo_url}/>
          </div>
          <div className='text'>
            <h4>{companyInfo.name}</h4>
            <p>Bem Vindo</p>
          </div>
        </>
      }
    </Container>
  )
}