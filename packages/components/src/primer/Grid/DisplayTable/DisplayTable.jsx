import React from 'react'
import cx from 'classnames'
import { v1 as uuidv1 } from 'uuid'
import displayStyles from '@papillonads/css/build/primer/utilities/visibility-display.scss'
import borderStyles from '@papillonads/css/build/primer/utilities/borders.scss'
import paddingStyles from '@papillonads/css/build/primer/utilities/padding.scss'
import typographyStyles from '@papillonads/css/build/primer/utilities/typography.scss'
import colorStyles from '@papillonads/css/build/primer/utilities/colors.scss'
import gridStyles from '../../Layout/grid.scss'
import { propTypes, defaultProps } from './DisplayTable.prop'

export function DisplayTable({ className, items, idIndex, isSelectedIndex }) {
  return (
    <React.Fragment>
      <div className={cx(className, displayStyles['d-table'], gridStyles['col-12'], colorStyles['bg-blue-light'])}>
        {items[0].names.map((name, index) => {
          const isIdColumn = index === idIndex
          const isSelectedColumn = index === isSelectedIndex

          return (
            <React.Fragment key={uuidv1()}>
              {!isIdColumn && (
                <div
                  key={uuidv1()}
                  className={cx(
                    gridStyles['col-2'],
                    displayStyles['d-table-cell'],
                    borderStyles.border,
                    paddingStyles['p-2'],
                    typographyStyles.h6,
                  )}
                >
                  {isSelectedColumn ? '' : name}
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>
      {items.map((item) => {
        return (
          <div key={uuidv1()} className={cx(className, displayStyles['d-table'], gridStyles['col-12'])}>
            {item.values.map((value, index) => {
              const isIdColumn = index === idIndex
              const isSelectedColumn = index === isSelectedIndex

              return (
                <React.Fragment key={uuidv1()}>
                  {!isIdColumn && (
                    <div
                      key={uuidv1()}
                      className={cx(gridStyles['col-2'], displayStyles['d-table-cell'], borderStyles.border, paddingStyles['p-2'])}
                    >
                      {isSelectedColumn ? '' : value?.value ?? value}
                    </div>
                  )}
                </React.Fragment>
              )
            })}
          </div>
        )
      })}
    </React.Fragment>
  )
}

DisplayTable.propTypes = propTypes

DisplayTable.defaultProps = defaultProps
