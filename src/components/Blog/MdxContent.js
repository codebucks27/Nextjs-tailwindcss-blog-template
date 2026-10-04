import * as runtime from 'react/jsx-runtime'
import Image from 'next/image'

const sharedComponents = {
  Image
}

// Reuse the component type so rerenders preserve MDX state and DOM nodes.
const compiledComponents = new Map()

const getMDXComponent = (code) => {
  if (!compiledComponents.has(code)) {
    const fn = new Function(code)
    compiledComponents.set(code, fn({ ...runtime }).default)
  }
  return compiledComponents.get(code)
}

const MDXRenderer = ({ Component, ...props }) => <Component {...props} />

const MDXContent = ({ code, components, ...props }) => {
  return <MDXRenderer Component={getMDXComponent(code)} components={{ ...sharedComponents, ...components }} {...props} />
}

export default MDXContent
