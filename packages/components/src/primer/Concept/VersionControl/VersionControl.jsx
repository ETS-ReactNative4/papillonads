import React from 'react'
import { propTypes, defaultProps } from './VersionControl.prop'

export function SpecificationsStandardsGuidelines({ className }) {
  return (
    <div className={className}>
      <h2>📗 Specifications/Standards/Guidelines</h2>
      <br />
      <br />
      <h3>📖. Git</h3>
      <div>
        ﹘ <a href="https://git-scm.com/">Git SCM</a> Git is a free and open source distributed version control system designed to handle
        everything from small to very large projects with speed and efficiency.
      </div>
      <div>
        ﹘ <a href="https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud">Git Commands</a> Learn Git with Bitbucket Cloud
      </div>
      <br />
      <br />
      <h3>📖. Git Hooks</h3>
      <div>
        ﹘ <a href="https://git-scm.com/docs/githooks">Git SCM Documentation</a> Hooks are programs you can place in a hooks directory to
        trigger actions at certain points in git’s execution. Hooks that don’t have the executable bit set are ignored.{' '}
      </div>
      <div>
        ﹘ <a href="https://www.atlassian.com/git/tutorials/git-hooks">Atlassian Documentation</a> Git hooks are scripts that run
        automatically every time a particular event occurs in a Git repository. They let you customize Git’s internal behavior and trigger
        customizable actions at key points in the development life cycle.
      </div>
      <br />
      <br />
      <h3>📖. GitHub</h3>
      <div>
        ﹘ <a href="https://www.githubstatus.com/">Status</a>
      </div>
      <div>
        ﹘ <a href="https://guides.github.com/">Guides</a>
      </div>
      <div>
        ﹘ <a href="https://help.github.com/en">Help</a>
      </div>
      <div>
        ﹘ <a href="https://lab.github.com/">Learning Lab</a>
      </div>
      <div>
        ﹘ <a href="https://opensource.guide/">Open Source Guides</a>
      </div>
      <div>
        ﹘ <a href="https://github.com/topics/">Topics</a>
      </div>
      <div>
        ﹘ <a href="https://github.com/trending/">Trending</a>
      </div>
      <div>
        ﹘ <a href="https://github.com/collections">Collections</a>
      </div>
      <div>
        ﹘ <a href="https://github.com/marketplace">Marketplace</a>
      </div>
      <div>
        ﹘ <a href="https://github-debug.com/">Debug</a>
      </div>
      <div>
        ﹘ <a href="https://desktop.github.com/">Desktop</a>
      </div>
      <div>
        ﹘ <a href="https://githubengineering.com/">Engineering</a>
      </div>
      <div>
        ﹘ <a href="https://github.blog/">Blog</a>
      </div>
      <div>
        ﹘ <a href="https://github.com/explore">Explore</a>
      </div>
      <div>
        ﹘ <a href="https://services.github.com/">Services</a>
      </div>
      <br />
      <br />
      <h3>📖. Git Client</h3>
      <br />
      <h4>
        📃. <a href="https://www.gitkraken.com/">Git Kraken</a>
      </h4>
      <div>﹘ The coolest, the finest and the best Git client in the world 👌</div>
      <div>﹘ Over 1.5 Million GitKraken Users❗</div>
      <div>﹘ Legendary Git Client 🚀</div>
      <br />
      <h4>
        📃. <a href="https://www.sublimemerge.com/">Sublime Merge</a>
      </h4>
      <div>﹘ Meet a new Git Client, from the makers of Sublime Text</div>
      <div>﹘ It's alright</div>
      <br />
      <h4>
        📃. <a href="https://desktop.github.com/">GitHub Desktop</a>
      </h4>
      <div>﹘ Focus on what matters instead of fighting with Git</div>
      <div>﹘ It's alright</div>
      <br />
      <h4>
        📃. <a href="https://www.sourcetreeapp.com/">Sourcetree</a>
      </h4>
      <div>﹘ Simplicity and power in a beautiful Git GUI</div>
      <div>﹘ It's alright</div>
    </div>
  )
}

SpecificationsStandardsGuidelines.propTypes = propTypes
SpecificationsStandardsGuidelines.defaultProps = defaultProps

export function OpenSourceDependencyProjects({ className }) {
  return (
    <div className={className}>
      <h2>📗 Open Source Dependency Projects</h2>
    </div>
  )
}

OpenSourceDependencyProjects.propTypes = propTypes
OpenSourceDependencyProjects.defaultProps = defaultProps

export function DesignSystemCore({ className }) {
  return (
    <div className={className}>
      <h2>📗 Papillon Ads Implementation</h2>
    </div>
  )
}

DesignSystemCore.propTypes = propTypes
DesignSystemCore.defaultProps = defaultProps

export function ProductMicrosites({ className }) {
  return (
    <div className={className}>
      <h2>📗 Papillon Ads Implementation</h2>
    </div>
  )
}

ProductMicrosites.propTypes = propTypes
ProductMicrosites.defaultProps = defaultProps

export const VersionControl = {
  SpecificationsStandardsGuidelines,
  OpenSourceDependencyProjects,
  Implementation: {
    DesignSystemCore,
    ProductMicrosites,
  },
}
