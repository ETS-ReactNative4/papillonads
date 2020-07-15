/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export function MainContent() {
  return (
    <main className="flex-row flex-lg-column main-content mt-4 mt-lg-6 pb-6 mx-auto px-3" id="js-pjax-container" data-pjax-container="">
      <div className="clearfix">
        <nav aria-label="Breadcrumb" data-pjax="">
          <ol>
            <li className="breadcrumb-item text-small">
              <a href="/primer/">Primer</a>
            </li>
            <li className="breadcrumb-item text-small">
              <a href="/primer/utilities/">Utilities</a>
            </li>
            <li className="breadcrumb-item text-small breadcrumb-item-selected">
              <a href="/primer/utilities/marketing-type/" aria-current="page" className="text-gray">
                Marketing typography
              </a>
            </li>
          </ol>
        </nav>
        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Marketing typography</h2>
        <div className="border-top border-bottom py-3 mb-4 clearfix">
          <div className="float-right">
            <a
              href="https://github.com/primer/primer/issues/new?title=primer-marketing-type"
              className="d-inline-block link-gray-dark no-underline tooltipped tooltipped-nw mt-2 mr-2"
              aria-label="Provide feedback"
            >
              <svg
                height="16"
                aria-label="issue"
                className="octicon octicon-comment"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                role="img"
              >
                <path
                  fillRule="evenodd"
                  d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/primer/primer/tree/master/modules/primer-marketing-type/"
              className="d-inline-block link-gray-dark no-underline tooltipped tooltipped-nw mt-2"
              aria-label="View source"
            >
              <svg
                height="16"
                aria-label="issue"
                className="octicon octicon-file-code"
                viewBox="0 0 12 16"
                version="1.1"
                width="12"
                role="img"
              >
                <path
                  fillRule="evenodd"
                  d="M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM5 6.98L3.5 8.5 5 10l-.5 1L2 8.5 4.5 6l.5.98zM7.5 6L10 8.5 7.5 11l-.5-.98L8.5 8.5 7 7l.5-1z"
                />
              </svg>
            </a>
          </div>
          <div className="d-inline-block Box mr-3">
            <a
              href="/primer/whats_new/status-key/#new-release"
              aria-label="Safe to use; provide feedback in issue"
              className="d-inline-block tooltipped tooltipped-n link-gray-dark no-underline px-2 py-1 border-right"
            >
              <span className="text-green mr-1" aria-label="New Release">
                <svg
                  height="18"
                  className="octicon octicon-primitive-dot v-align-text-top"
                  viewBox="0 0 8 16"
                  version="1.1"
                  width="9"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                </svg>
              </span>
              New Release
            </a>
            <a className="d-inline-block px-2 py-1" href="https://npmjs.com/package/primer-marketing-type">
              1.4.11
            </a>
          </div>
          <div className="d-inline-block">
            <span className="text-bold">Package:</span>
            <a href="https://github.com/primer/primer/tree/master/modules/primer-marketing">primer-marketing</a>
          </div>
        </div>
        <div className="markdown-body">
          <p>
            The typography for our marketing pages differs slightly from what is in Primer&apos;s core--it is responsive, on a slightly
            different scale, and headlines are in a different font (Roboto).
          </p>
          <a name="//apple_ref/cpp/Style/Heading%20Utilities" className="dashAnchor" />
          <h2>
            <a id="heading-utilities" className="anchor" href="#heading-utilities" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Heading Utilities
          </h2>
          <p>
            Use <code>.alt-h1</code> – <code>.alt-h6</code> to change an element&apos;s font, size, and weight on marketing pages.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <p className="alt-h1">Pizza 1</p>
          <p className="alt-h2">Pizza 2</p>
          <p className="alt-h3">Pizza 3</p>
          <p className="alt-h4">Pizza 4</p>
          <p className="alt-h5">Pizza 5</p>
          <p className="alt-h6">Pizza 6</p>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;alt-h1&quot;</span>
                <span className="nt">&gt;</span>Pizza 1<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;alt-h2&quot;</span>
                <span className="nt">&gt;</span>Pizza 2<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;alt-h3&quot;</span>
                <span className="nt">&gt;</span>Pizza 3<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;alt-h4&quot;</span>
                <span className="nt">&gt;</span>Pizza 4<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;alt-h5&quot;</span>
                <span className="nt">&gt;</span>Pizza 5<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;alt-h6&quot;</span>
                <span className="nt">&gt;</span>Pizza 6<span className="nt">&lt;/p&gt;</span>
              </code>
            </pre>
          </div>
          <button
            type="button"
            className="position-absolute text-gray right-0 top-0 m-2 js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s"
            aria-label="Copy"
            data-copied-hint="Copied!"
          >
            <svg className="octicon octicon-clippy js-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"
              />
            </svg>
          </button>
        </div>
        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Typographic%20Utilities" className="dashAnchor" />
          <h2>
            <a id="typographic-utilities" className="anchor" href="#typographic-utilities" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Typographic Utilities
          </h2>
          <p>These utilities are meant to be used in addition to Primer&apos;s core utilities.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <p className="alt-lead text-gray">
            I&apos;m a lead paragraph. Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto
            hamburger porchetta sausage alcatra tail.
          </p>
          <p className="text-gray">
            I&apos;m a regular paragraph, except I&apos;m gray. Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef
            ground round prosciutto hamburger porchetta sausage alcatra tail.
          </p>
          <p className="text-gray alt-text-small">
            And I&apos;m a tiny lil&apos; baby paragraph. Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground
            round prosciutto hamburger porchetta sausage alcatra tail.
          </p>
          <p className="alt-mono-font text-gray">Occasionally we want to use a mono font, there is a utility class for that.</p>
          <p className="pullquote">I&apos;m a pullquote. Someone said these words in real life, and now they&apos;re on the internet</p>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;alt-lead text-gray&quot;</span>
                <span className="nt">&gt;</span>I&apos;m a lead paragraph. Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef
                corned beef ground round prosciutto hamburger porchetta sausage alcatra tail.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;text-gray&quot;</span>
                <span className="nt">&gt;</span>I&apos;m a regular paragraph, except I&apos;m gray. Bacon ipsum dolor amet tri-tip chicken
                kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail.
                <span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;text-gray alt-text-small&quot;</span>
                <span className="nt">&gt;</span>And I&apos;m a tiny lil&apos; baby paragraph. Bacon ipsum dolor amet tri-tip chicken
                kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail.
                <span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;alt-mono-font text-gray&quot;</span>
                <span className="nt">&gt;</span>Occasionally we want to use a mono font, there is a utility class for that.
                <span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;pullquote&quot;</span>
                <span className="nt">&gt;</span>I&apos;m a pullquote. Someone said these words in real life, and now they&apos;re on the
                internet
                <span className="nt">&lt;/p&gt;</span>
              </code>
            </pre>
          </div>
          <button
            type="button"
            className="position-absolute text-gray right-0 top-0 m-2 js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s"
            aria-label="Copy"
            data-copied-hint="Copied!"
          >
            <svg className="octicon octicon-clippy js-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div>
          <a href="/primer/utilities/marketing-padding/">
            <svg
              height="14"
              className="octicon octicon-chevron-left v-align-text-bottom"
              viewBox="0 0 8 16"
              version="1.1"
              width="7"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M5.5 3L7 4.5 3.25 8 7 11.5 5.5 13l-5-5 5-5z" />
            </svg>
            Marketing padding
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/utilities/padding/">
            Padding
            <svg
              height="14"
              className="octicon octicon-chevron-right v-align-text-bottom"
              viewBox="0 0 8 16"
              version="1.1"
              width="7"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  )
}
/* eslint-enable jsx-a11y/anchor-has-content */
/* eslint-enable jsx-a11y/anchor-is-valid */
