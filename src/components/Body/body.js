import React from 'react'
import Carousel from '../carousel/carousel'
import Banner from '../Banner/banner'
import TicketsPage from '../tickets/tickets'

export default function Body() {
  return (
    <>
      <Banner/>
      <Carousel/>
      <TicketsPage/>
    </>
  )
}
