import { propTypes, defaultProps } from './Runtime.prop'

export function SpecificationsStandardsGuidelines({ className }) {
  return (
    <div className={className}>
      <h2>📗 Specifications/Standards/Guidelines</h2>
      <br />
      <br />
      <h3>📖. Client</h3>
      <br />
      <h4>📃. Google Chrome</h4>
      <div>
        ﹘ <a href="https://developer.chrome.com/home">Google Documentation</a>
      </div>
      <div>
        ﹘ <a href="https://www.google.com/chrome/">Download</a>
      </div>
      <h4>📃. Mozilla Firefox</h4>
      <div>
        ﹘ <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Firefox">Mozilla Documentation</a>
      </div>
      <div>
        ﹘ <a href="https://www.mozilla.org/en-US/firefox/new/">Download</a>
      </div>
      <h4>📃. Apple Safari</h4>
      <div>
        ﹘ <a href="https://developer.apple.com/library/archive/navigation/index.html?filter=safari">Apple Documentation</a>
      </div>
      <div>
        ﹘ <a href="https://www.apple.com/safari/">Download</a>
      </div>
      <h4>📃. Microsoft Edge</h4>
      <div>
        ﹘ <a href="https://docs.microsoft.com/en-us/microsoft-edge/">Microsoft Documentation</a>
      </div>
      <div>
        ﹘ <a href="https://www.microsoft.com/en-us/edge/">Download</a>
      </div>
      <h4>📃. Microsoft IE11</h4>
      <div>
        ﹘ <a href="https://docs.microsoft.com/en-us/internet-explorer/">Microsoft Documentation</a>
      </div>
      <div>
        ﹘ <a href="https://support.microsoft.com/en-us/help/18520/download-internet-explorer-11-offline-installer">Download</a>
      </div>
      <br />
      <br />
      <h3>📖. Server</h3>
      <br />
      <h4>📃. Node.JS</h4>
      <div>
        ﹘ <a href="https://nodejs.org/en/docs/">Node.JS Documentation</a>
      </div>
      <div>
        ﹘ <a href="https://nodejs.org/en/">Download</a>
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
      <h3>📖. Client</h3>
      <br />
      <h4>📃. Google Chrome</h4>
      <div>
        ﹘ <a href="https://github.com/googlechrome">GitHub Organization</a>
      </div>
      <h4>📃. Mozilla Firefox</h4>
      <div>
        ﹘ <a href="https://github.com/mozilla">GitHub Organization</a>
      </div>
      <h4>📃. Apple Safari</h4>
      <div>📝. Coming soon 🐬</div>
      <h4>📃. Microsoft Edge</h4>
      <div>
        ﹘ <a href="https://github.com/MicrosoftEdge">GitHub Organization</a>
      </div>
      <h4>📃. Microsoft IE11</h4>
      <div>📝. Coming soon 🐬</div>
      <br />
      <br />
      <h3>📖. Server</h3>
      <br />
      <h4>📃. Node.JS</h4>
      <div>
        ﹘ <a href="https://github.com/nodejs">GitHub Organization</a>
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
      <h3>📖. Product Microsites</h3>
      <h4>📃. Setup file(s)</h4>
      <div>﹘ Coming soon.</div>
      <h4>📃. Knowledge base</h4>
      <div>﹘ Coming soon.</div>
    </div>
  )
}

ProductMicrosites.propTypes = propTypes
ProductMicrosites.defaultProps = defaultProps

export const Runtime = {
  SpecificationsStandardsGuidelines,
  OpenSourceDependencyProjects,
  Implementation: {
    DesignSystemCore,
    ProductMicrosites,
  },
}
