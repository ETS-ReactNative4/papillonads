import React from 'react'
import { marketingBordersTemplateDefaultProps, marketingBordersTemplatePropTypes } from './MarketingBordersTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MarketingBordersTemplate.MainContent'

export function MarketingBordersTemplate() {
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

MarketingBordersTemplate.defaultProps = marketingBordersTemplateDefaultProps

MarketingBordersTemplate.propTypes = marketingBordersTemplatePropTypes
