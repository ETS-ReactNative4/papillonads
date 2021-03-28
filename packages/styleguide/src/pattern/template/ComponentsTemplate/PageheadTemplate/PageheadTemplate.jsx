import { Fragment } from 'react'
import { defaultProps, propTypes } from './PageheadTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './PageheadTemplate.MainContent'

export function PageheadTemplate() {
  return (
    <Fragment>
      <Navigation />
      <FlashAlert />
      <div className="d-flex flex-wrap flex-lg-nowrap">
        <MainContent />
        <SideBar />
      </div>
    </Fragment>
  )
}

PageheadTemplate.defaultProps = defaultProps

PageheadTemplate.propTypes = propTypes
