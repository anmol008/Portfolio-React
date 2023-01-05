import React,{useContext} from 'react'
import { AppContext } from '../context'
import { Banner } from './Banner'
export const Home = () => {
  const firstName = useContext(AppContext)
  const data={
    name: 'ANMOL BHARGAVA',
    bannerText: "Hello, Welcome to Anmol's profile.", 
    image: './images/hero.svg'
   }
  return (
    <div>
    <Banner {...data}/>
    </div>
  )
}
