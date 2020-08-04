import React from 'react'
import { propTypes, defaultProps } from './Testing.prop'

export function SpecificationsStandardsGuidelines({ className }) {
  return (
    <div className={className}>
      <h2>📗 Specifications/Standards/Guidelines</h2>
      <br />
      <br />
      <h3>📖. Unit Testing</h3>
      <br />
      <h4>📃. Jest</h4>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/getting-started">Getting Started</a>
      </div>
      <h4>📃. Knowledge base</h4>
      <h5>📄. Jest API</h5>
      <h6>📝. async/await</h6>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/tutorial-async#async-await">async/await</a> must be used with test blocks covering asyncronous
        functions conforming to the following pattern
        <pre>
          <code>
            {`
  test('must ...', async () => {
    ...
    await expect(someFunction).someExpectMethod()
  })
          `}
          </code>
        </pre>
      </div>
      <h6>📝. describe</h6>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/api#describename-fn">describe()</a> must be used to group related tests conforming to the
        following pattern
        <pre>
          <code>
            {`
  describe('file name of module under test', () => {
    beforeEach(() => {
      jest.resetModules()
      ...
    })
    afterEach(() => {
      jest.clearAllMocks()
      ...
    }
    describe('name of function as the unit under test', () => {
      test('must do something', () => {
      })
      test('must do something else', () => {
      })
    })
  })
          `}
          </code>
        </pre>
      </div>
      <h6>📝. mock</h6>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options">jest.mock()</a> must be used to mock
        dependency modules
        <pre>
          <code>
            {`
  jest.mock('some dependency module name or relative path with module name', () => ({
    someExposedFunction: () => ({}),
    someOtherExposedFunction: jest.fn(),
  }))
          `}
          </code>
        </pre>
      </div>
      <h6>📝. require</h6>
      <div>
        ﹘ <a href="https://nodejs.org/api/modules.html#modules_require_id">require()</a> must be used to mock dependency modules
        <pre>
          <code>
            {`
  const someModuleMockObject = require('some-module')
  const someOtherModuleMockObject = require('../../../relative-path-to/some-module')
          `}
          </code>
        </pre>
      </div>
      <h6>📝. spyOn</h6>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname">jest.spyOn()</a>must be used to mock functions exposed
        by mocked dependency modules conforming to the following pattern
        <pre>
          <code>
            {`
  jest.spyOn(requiredMockObject, 'functionExposedByRequiredMockObject')
          `}
          </code>
        </pre>
      </div>
      <h6>📝. mockImplementation</h6>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/mock-function-api#mockfnmockimplementationfn">jest.mockImplementation()</a> must be used to
        mock the implementations of mocked functions exposed by mocked dependency modules conforming to the following pattern
        <pre>
          <code>
            {`
  jest.spyOn(requiredMockObject, 'functionExposedByRequiredMockObject').mockImplementation(jest.fn())
  jest.spyOn(requiredMockObject, 'functionExposedByRequiredMockObject').mockImplementation(jest.fn() => { replace with desired implementation})
          `}
          </code>
        </pre>
      </div>
      <h6>📝. mockReturnValue</h6>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/mock-function-api#mockfnmockreturnvaluevalue">jest.mockReturnValue()</a> must be used to mock
        return values of mocked functions exposed by mocked dependency modules conforming to the following pattern
        <pre>
          <code>
            {`
  jest.spyOn(requiredMockObject, 'functionExposedByRequiredMockObject').mockReturnValue(someValue)
          `}
          </code>
        </pre>
      </div>
      <h6>📝. expect</h6>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/expect">expect()</a> must be used to assert expected values against received values using
        matchers conforming to the following pattern
        <pre>
          <code>
            {`
  expect(someMockFunction).toHaveBeenCalled()
  expect(someMockFunction).not.toHaveBeenCalled()
  ...
  expect(someMockFunction).toHaveBeenCalledTimes(someNumber)
  expect(someMockFunction).not.toHaveBeenCalled()
  ...
  expect(someMockFunction).toHaveBeenCalledWith({ someObjectProperty: 'some-value', someOtherObjectProperty; expect.any(Boolean)})
  ...
  expect(someObject).toMatchObject(someOtherObject)
  expect(someObject).not.toMatchObject(someOtherObject)
  ...
  expect(someObject).toBe(someOtherObject)
  expect(someObject).not.toBe(someOtherObject)
  ...
  expect(someValue).toEqual(someOtherValue)
  expect(someValue).not.toEqual(someOtherValue)
  ...
  expect(someObject).toBeUndefined()
  expect(someObject).not.toBeUndefined()
  ...
  expect(somevAlue).toBeTruthy()
  expect(somevAlue).toBeFalsy()
          `}
          </code>
        </pre>
      </div>
      <br />
      <br />
      <h3>📖. Integration Testing</h3>
      <br />
      <h4>📃. Jest</h4>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/getting-started">Getting Started</a>
      </div>
      <h4>📃. Storybook</h4>
      <div>
        ﹘ <a href="https://storybook.js.org/docs/basics/introduction/">Introduction</a> Storybook is a user interface development
        environment and playground for UI components. The tool enables developers to create components independently and showcase components
        interactively in an isolated development environment.
      </div>
      <h4>📃. Knowledge base</h4>
      <h5>📄. Jest API</h5>
      <h6>📝. Snapshot Testing with Jest</h6>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/snapshot-testing#snapshot-testing-with-jest">Snapshot Testing with Jest</a> Snapshots must be
        implemented conforming to the following pattern
        <pre>
          <code>
            {`
  describe('<SomeComponent />', () => {
    describe('Render', () => {
      test('must match composition', () => {
        expect(global.renderToJSON(<SomeComponent />)).toMatchSnapshot()
      })
    })
  })
          `}
          </code>
        </pre>
      </div>
      <h5>📄. Storybook API</h5>
      <h6>📝. Writing Stories with Storybook</h6>
      <div>
        ﹘ <a href="https://storybook.js.org/docs/basics/writing-stories/#docs-content">Writing Stories with Storybook</a> Stories must be
        implemented conforming to the following pattern
        <pre>
          <code>
            {`
  storiesOf('SomeApplication/SomeAtomicDesignPattern/SomeComponent', module).add(someRenderInfo.text, () => someRender, someRenderInfo.parameters)
          `}
          </code>
        </pre>
      </div>
      <br />
      <br />
      <h3>📖. End to end Testing</h3>
      <br />
      <h4>📃. Puppeteer</h4>
      <div>
        ﹘ <a href="https://developers.google.com/web/tools/puppeteer/get-started">Quick start</a>
      </div>
    </div>
  )
}

SpecificationsStandardsGuidelines.propTypes = propTypes
SpecificationsStandardsGuidelines.defaultProps = defaultProps

export function OpenSourceDependencyProjects({ className }) {
  return (
    <div className={className}>
      <h2>📗 Open Source Dependency Projects</h2>
      <br />
      <br />
      <h3>📖. Unit Testing</h3>
      <br />
      <h4>📃. Jest</h4>
      <div>
        ﹘ <a href="https://jestjs.io/">Website</a>
      </div>
      <div>
        ﹘ <a href="https://github.com/facebook/jest">GitHub Repository</a>
      </div>
      <br />
      <br />
      <h3>📖. Integration Testing</h3>
      <br />
      <h4>📃. Jest</h4>
      <div>
        ﹘ <a href="https://jestjs.io/">Website</a>
      </div>
      <div>
        ﹘ <a href="https://github.com/facebook/jest">GitHub Repository</a>
      </div>
      <h4>📃. Storybook</h4>
      <div>
        ﹘ <a href="https://storybook.js.org/">Website</a>
      </div>
      <div>
        ﹘ <a href="https://github.com/storybookjs/storybook">GitHub Repository</a>
      </div>
      <br />
      <br />
      <h3>📖. End to end Testing</h3>
      <br />
      <h4>📃. Puppeteer</h4>
      <div>
        ﹘ <a href="https://pptr.dev/">Website</a>
      </div>
      <div>
        ﹘ <a href="https://github.com/puppeteer/puppeteer">GitHub Repository</a>
      </div>
    </div>
  )
}

OpenSourceDependencyProjects.propTypes = propTypes
OpenSourceDependencyProjects.defaultProps = defaultProps

export function DesignSystemCore({ className }) {
  return (
    <div className={className}>
      <h2>📗 Papillon Ads Implementation</h2>
      <h3>📖. Design System Core</h3>
      <h4>📃. Setup file(s)</h4>
      <div>﹘ Coming soon.</div>
      <h4>📃. Knowledge base</h4>
      <div>﹘ Coming soon.</div>
    </div>
  )
}

DesignSystemCore.propTypes = propTypes
DesignSystemCore.defaultProps = defaultProps

export function ProductMicrosites({ className }) {
  return (
    <div className={className}>
      <h2>📗 Papillon Ads Implementation</h2>
      <br />
      <br />
      <h3>📖. Product Microsites</h3>
      <br />
      <h4>📃. Unit Testing</h4>
      <h5>📄. Unit tests run by Jest</h5>
      <h6>📝. Setup file(s)</h6>
      <div>
        ﹘ <a href="https://github.com/papillonads/marketplace/blob/master/jest.config.js">jest.config.js</a>
      </div>
      <div>
        ﹘ <a href="https://github.com/papillonads/marketplace/blob/master/jest.setup.js">jest.setup.js</a>
      </div>
      <h6>📝. Script(s)</h6>
      <div>﹘ &quot;test&quot;: &quot;jest -u --no-cache --silent --runInBand --coverage</div>
      <div>﹘ &quot;report-coverage&quot;: &quot;codecov&quot;</div>
      <h4>📃. Integration Testing</h4>
      <h5>📄. Snaphot tests run by Jest</h5>
      <h6>📝. Setup file(s)</h6>
      <div>
        ﹘ <a href="https://github.com/papillonads/marketplace/blob/master/jest.config.js">jest.config.js</a>
      </div>
      <div>
        ﹘ <a href="https://github.com/papillonads/marketplace/blob/master/jest.setup.js">jest.setup.js</a>
      </div>
      <h6>📝. Script(s)</h6>
      <div>﹘ &quot;test&quot;: &quot;jest -u --no-cache --silent --runInBand --coverage&quot;</div>
      <div>﹘ &quot;report-coverage&quot;: &quot;codecov&quot;</div>
      <h5>📄. Stories run by Storybook</h5>
      <h6>📝. Setup file(s)</h6>
      <div>
        ﹘ <a href="https://github.com/papillonads/marketplace/blob/master/.storybook/addons.js">.storybook/addons.js</a>
      </div>
      <div>
        ﹘ <a href="https://github.com/papillonads/marketplace/blob/master/.storybook/config.js">.storybook/config.js</a>
      </div>
      <h6>📝. Script(s)</h6>
      <div>﹘ &quot;start-storybook&quot;: &quot;NODE_ENV=develop start-storybook -p 3003 -c .storybook&quot;</div>
      <h4>📃. End to end Testing</h4>
      <div>﹘ 📝 Coming soon 🐬</div>

      <h4>📃. Knowledge base</h4>
      <h5>📄. Using mock store with mock state</h5>
      <h6>📝. Mock Store</h6>
      <div>
        ﹘ Mock store is acquired in{' '}
        <a href="https://github.com/papillonads/marketplace/blob/master/packages/library/src/store/mock.js">store/mock.js</a> and uses
        redux-mock-store
      </div>
      <h6>📝. Mock State</h6>
      <div>
        ﹘ Mock state is acquired in{' '}
        <a href="https://github.com/papillonads/marketplace/blob/master/packages/library/src/state/mock.js">state/mock.js</a>
      </div>
      <h6>📝. Immutability</h6>
      <div>﹘ Immutability of mock state across integration tests is achieved using deepCloneObject()</div>
      <div>﹘ Changes specific to a test scenario can be applied to the immutable mock state clone</div>
      <div>
        ﹘ Then adjusted mock state clone is passed on to the mock store and mock store is provided to any UI components involved in the
        test using react-redux provider
      </div>
      <h6>📝. React Redux Provider</h6>
      <div>﹘ React Redux Provider is used to provide the mock store with a mock state to any UI component</div>
      <div>﹘ It accepts any store object in the store prop and provides the store to UI components rendered as its children</div>
    </div>
  )
}

ProductMicrosites.propTypes = propTypes
ProductMicrosites.defaultProps = defaultProps

export const Testing = {
  SpecificationsStandardsGuidelines,
  OpenSourceDependencyProjects,
  Implementation: {
    DesignSystemCore,
    ProductMicrosites,
  },
}
