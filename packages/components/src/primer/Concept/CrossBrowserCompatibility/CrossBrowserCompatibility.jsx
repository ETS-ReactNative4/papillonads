import React from 'react'
import { propTypes, defaultProps } from './CrossBrowserCompatibility.prop'

export function SpecificationsStandardsGuidelines({ className }) {
  return (
    <div className={className}>
      <h2>📗 Specifications/Standards/Guidelines</h2>
      <h3>📖. ES6 / ES2015</h3>
      <br />
      <h4>📃. From var to const/let</h4>
      <h5>📄. Reference</h5>
      <h6>📝. MDN</h6>
      <div>
        ﹘ <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const">const</a> Constants are
        block-scoped, much like variables defined using the let keyword. The value of a constant can't be changed through reassignment, and
        it can't be redeclared.
      </div>
      <div>
        ﹘ <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let">let</a> The let statement declares a
        block scope local variable, optionally initializing it to a value.
      </div>
      <h5>📄. Compatibility</h5>
      <h6>📝. Browser Support</h6>
      <div>﹘ const > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ✓</div>
      <div>﹘ let > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer 🌦</div>
      <h6>📝. Transpiled / Polyfilled</h6>
      <div>﹘ Transpiled ✓, Safe to use ✅</div>
      <br />
      <h4>📃. From objects to maps</h4>
      <h5>📄. Reference</h5>
      <h6>📝. MDN</h6>
      <div>
        ﹘ <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">Array.prototype.map()</a>{' '}
        The map() method creates a new array populated with the results of calling a provided function on every element in the calling
        array.
      </div>
      <h5>📄. Compatibility</h5>
      <h6>📝. Browser Support</h6>
      <div>﹘ Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ✓</div>
      <h6>📝. Transpiled / Polyfilled</h6>
      <div>﹘ Polyfilled if not native ✓ Safe to use ✅</div>
      <br />
      <h4>📃. New Array methods</h4>
      <h5>📄. Reference</h5>
      <h6>📝. MDN</h6>
      <div>
        ﹘
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexof">
          from Array.prototype.indexOf()
        </a>
        The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
      </div>
      <div>
        ﹘
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex">
          to Array.prototype.findIndex()
        </a>
        The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise,
        it returns -1, indicating that no element passed the test.
      </div>
      <div>
        ﹘
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">
          from Array.prototype.slice()
        </a>
        The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not
        included) where begin and end represent the index of items in that array. The original array will not be modified.
      </div>
      <div>
        ﹘
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from">
          to Array.from() or the spread operator
        </a>
        The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
      </div>
      <div>
        ﹘<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">from Array.apply()</a>
        The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.
      </div>
      <div>
        ﹘
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill">to Array.prototype.fill()</a>
        The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default
        array.length). It returns the modified array.
      </div>
      <h5>📄. Compatibility</h5>
      <h6>📝. Browser Support</h6>
      <div>﹘ indexOf > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ✓</div>
      <div>﹘ findIndex > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ╳</div>
      <div>﹘ Array.prototype.slice() > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ✓</div>
      <div>﹘ Array.from() > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ╳</div>
      <div>﹘ Array.apply() > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ✓</div>
      <div>﹘ Array.prototype.fill() > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ╳</div>
      <h6>📝. Transpiled / Polyfilled</h6>
      <div>﹘ Polyfilled if not native ✓, Safe to use ✅</div>
      <div>﹘ Polyfilled if not native ✓, Safe to use ✅</div>
      <div>﹘ Polyfilled if not native ✓, Safe to use ✅</div>
      <br />
      <h4>📃. From CommonJS modules to ES6 modules</h4>
      <h5>📄. Reference</h5>
      <h6>📝. MDN</h6>
      <div>
        ﹘ <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules">JavaScript modules</a> This guide gives you all
        you need to get started with JavaScript module syntax.
      </div>
      <h5>📄. Compatibility</h5>
      <h6>📝. Browser Support</h6>
      <div>﹘ Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ╳</div>
      <h6>📝. Transpiled / Polyfilled</h6>
      <div>﹘ Transpiled ✓, Safe to use ✅</div>
      <br />
      <br />
      <h3>📖. ES7 / ES2016</h3>
      <br />
      <h4>📃. Array.prototype.includes()</h4>
      <h5>📄. Reference</h5>
      <h6>📝. MDN</h6>
      <div>
        ﹘
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes">
          Array.prototype.includes()
        </a>
        The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate
      </div>
      <h5>📄. Compatibility</h5>
      <h6>📝. Browser Support</h6>
      <div>﹘ Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ╳</div>
      <h6>📝. Transpiled / Polyfilled</h6>
      <div>﹘ Polyfilled if not native ✓, Safe to use ✅</div>
      <br />
      <h4>📃. Exponentiation operator (**)</h4>
      <h5>📄. Reference</h5>
      <h6>📝. MDN</h6>
      <div>
        ﹘
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation">
          Exponentiation (**)
        </a>
        The exponentiation operator returns the result of raising the first operand to the power of the second operand. That is, var1var2,
        in the preceding statement, where var1 and var2 are variables. The exponentiation operator is right-associative. a ** b ** c is
        equal to a ** (b ** c).
      </div>
      <h5>📄. Compatibility</h5>
      <h6>📝. Browser Support</h6>
      <div>﹘ Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ╳</div>
      <h6>📝. Transpiled / Polyfilled</h6>
      <div>﹘ Transpiled ✓, Safe to use ✅</div>
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
      <h3>📖. Design System Core</h3>
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
    </div>
  )
}

ProductMicrosites.propTypes = propTypes
ProductMicrosites.defaultProps = defaultProps

export const CrossBrowserCompatibility = {
  SpecificationsStandardsGuidelines,
  OpenSourceDependencyProjects,
  Implementation: {
    DesignSystemCore,
    ProductMicrosites,
  },
}
