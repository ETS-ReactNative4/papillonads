import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const compilingRoute = {
  path: conceptPagePath.compiling,
  exact: true,
  clientComponent: ConceptPage.Compiling.AsyncCompiling,
  serverComponent: ConceptPage.Compiling.Compiling,
}
