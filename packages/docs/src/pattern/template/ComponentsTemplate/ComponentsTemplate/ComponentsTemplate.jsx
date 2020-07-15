import React from 'react'
import { defaultProps, propTypes } from './ComponentsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ComponentsTemplate.MainContent'

export function ComponentsTemplate() {
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

ComponentsTemplate.defaultProps = defaultProps

ComponentsTemplate.propTypes = propTypes
