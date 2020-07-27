import React from 'react'
import { boxTemplateDefaultProps, boxTemplatePropTypes } from './BoxTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './BoxTemplate.MainContent'

export function BoxTemplate() {
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

BoxTemplate.defaultProps = boxTemplateDefaultProps

BoxTemplate.propTypes = boxTemplatePropTypes
