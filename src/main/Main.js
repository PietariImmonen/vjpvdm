import React from 'react'
import GradientMain from './gradientMain/GradientMain'
import Header from './header/Header'
import { SliderData } from './header/SliderData'
import Talks from './talks/Talks'
import Video from './video/Video'

export default function Main() {
  return (
    <div>
        <Header slides={SliderData}/>
        <Video />
        <Talks/>
        <GradientMain />
    </div>
  )
}
