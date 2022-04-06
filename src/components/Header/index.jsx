import axios from 'axios'
import { useEffect, useState } from 'react'
import {HeaderDiv} from './styles'

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
      <HeaderDiv>
      {
        companyInfo &&
        <>
          <img src={companyInfo.logo_url}/>
          <h4>{companyInfo.name}</h4>
          <p>Bem Vindo</p>
        </>
      }
    </HeaderDiv>
  )
}