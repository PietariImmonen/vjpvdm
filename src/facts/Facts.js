import React from 'react'
import FactBoxes from './factBoxes/FactBoxes'
import FactsFooter from './factsFooter/FactsFooter'
import FactsHeader from './factsHeader/FactsHeader'
import FactsThird from './factsThird/FactsThird'

export default function Facts() {
  return (
    <div>
        <FactsHeader />
        <FactBoxes />
        <FactsThird />
        <FactsFooter />
    </div>
  )
}
