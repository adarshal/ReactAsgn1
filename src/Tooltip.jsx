// import React from 'react'
import { Tooltip as ReactTooltip} from 'react-tooltip'

const Tooltip = ({tooltipId, tooltipContent,placement}) => {
  return (
    <div>
      <ReactTooltip
        id={tooltipId}
        place={placement}
        variant="info"
        content={tooltipContent}
      />
    </div>
  )
}

export default Tooltip
