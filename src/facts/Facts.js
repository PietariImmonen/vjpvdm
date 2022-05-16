import React from 'react'
import FactBoxes from './factBoxes/FactBoxes'
import FactsFooter from './factsFooter/FactsFooter'
import FactsHeader from './factsHeader/FactsHeader'
import FactsThird from './factsThird/FactsThird'
import FactsSources from './factsSources/FactsSources'

export default function Facts() {

  //used for gather all the components to one place
  return (
    <div>
        <FactsHeader />
        <FactBoxes />
        <FactsThird />
        <FactsFooter />
        <FactsSources />
    </div>
  )
}
