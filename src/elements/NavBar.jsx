import styled from 'styled-components'
import tw from 'tailwind.macro'
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

export const NavBar = styled.div`
  ${tw` p-5 border-white border-b border-l-0 border-r-0 border-t-0 border-solid items-center flex`}
  background-color: ${props => props.bg};
`

export const NavEntrySpacer = styled.span`
  ${tw`w-1 h-1 mx-4 rounded-sm inline-block`}
  background-color: #aaa
`

export const NavEntryLeftSpace = styled.span`
  ${tw`w-1 h-1 mx-4 inline-block`}
`

export const NavEntry = styled.span`
  ${tw`text-xl text-white border-1 cursor-pointer font-sans hover:text-grey`}
`
