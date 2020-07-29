import React from 'react'
import { defaultProps, propTypes } from './MarketingPaddingTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MarketingPaddingTemplate.MainContent'

export function MarketingPaddingTemplate() {
  return (
    <React.Fragment>
      <Navigation />
      <FlashAlert />
      <div className="d-flex flex-wrap flex-lg-nowrap">
        <MainContent />
        <SideBar />
      </div>
    </React.Fragment>
  )
}

MarketingPaddingTemplate.defaultProps = defaultProps

MarketingPaddingTemplate.propTypes = propTypes
