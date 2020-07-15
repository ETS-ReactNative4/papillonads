import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const componentDesignRoute = {
  path: conceptPagePath.componentDesign,
  exact: true,
  clientComponent: ConceptPage.ComponentDesign.AsyncComponentDesign,
  serverComponent: ConceptPage.ComponentDesign.ComponentDesign,
}
