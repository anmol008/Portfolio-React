import React from 'react'
import { Banner } from './Banner'

export const About = () => {
  const data = {
    name: 'A MERN Developer',
    bannerText: " Hello, my bachelors degree shows that Iam a [Civil engineer] but that is not true, after working for 1 year in civil i did not get that kick so i tranformed myself as Software Developer. I am a full stack developer who has completed PG course in full stack development specialised in [MERN]. I have completed my PG course in july 2022 from UpGrad.com and have done a paid internship of 3 months in a Digital marketing firm as a Frontend Engineer.",
    image: './images/about.svg'
  }
  return (
    <>
      <Banner {...data} />
    </>
  )
}
