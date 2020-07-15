import React from 'react'
import { defaultProps, propTypes } from './RuntimeTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './RuntimeTemplate.MainContent'

export function RuntimeTemplate() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="d-flex flex-wrap flex-lg-nowrap">
        <MainContent />
        <SideBar />
      </div>
    </React.Fragment>
  )
}

RuntimeTemplate.defaultProps = defaultProps

RuntimeTemplate.propTypes = propTypes
