import * as runtime from 'react/jsx-runtime'
import Image from 'next/image'

const sharedComponents = {
  Image
}

const useMDXComponent = (code) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

 const MDXContent = ({ code, components, ...props }) => {
  const Component = useMDXComponent(code)
  return <Component components={{ ...sharedComponents, ...components }} {...props} />
}

export default MDXContent