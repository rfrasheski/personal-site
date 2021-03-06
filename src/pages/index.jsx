import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'
import { NavBar, NavEntry, NavEntryLeftSpace, NavEntrySpacer } from '../elements/NavBar'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpeg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`
var parallax = {};

const Index = () => (
  <>
    <Layout />
      <Parallax pages={5} ref={ref => (parallax = ref)}>
      <NavBar>
        <NavEntryLeftSpace>
        </NavEntryLeftSpace>
        <NavEntry
          onClick={() => parallax.scrollTo(1)}
        >
          Projects
        </NavEntry>
        <NavEntrySpacer>
        </NavEntrySpacer>
        <NavEntry
          onClick={() => parallax.scrollTo(3)}
        >
          About
        </NavEntry>
        <NavEntrySpacer>
        </NavEntrySpacer>
        <NavEntry
          onClick={() => parallax.scrollTo(4)}
        >
          Contact
        </NavEntry>
      </NavBar>
        <Hero offset={0}>
          <BigTitle>
            Hello, <br /> I'm Ryan Frasheski.
          </BigTitle>
          <Subtitle>I build full-stack software for the next generation of companies.</Subtitle>
        </Hero>
        <Projects offset={1}>
          <Title>Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="ChessAI"
              link="https://chessai.ryanfrasheski.com"
              bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            >
              A Chess AI playable in browser
            </ProjectCard>
            <ProjectCard
              title="glVisualizer"
              link="https://github.com/rfrasheski/glVisualizer"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            >
              This project is an adaptive Spotify music visualizer based on WebGL.
            </ProjectCard>
          </ProjectsWrapper>
        </Projects>
        <About offset={3}>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="Ryan Frasheski" />
            <AboutSub>
              Graduating Software Engineer specializing in network technologies, back end software, mobile development, and communication. Experienced with large companies to small startups and public organizations.
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            Currently based in Seattle where I attend Seattle University, pursuing a BA in Computer Science. <br />
            Previous companies I've worked for include Amazon, F5 Networks, Tack Technologies, and UW Medicine. <br />
            Primary languages of expertise are Java, C++, and NodeJS. Specialized in full-stack cloud deployed applications and technologies.
          </AboutDesc>
        </About>
        <Contact offset={4}>
          <Inner>
            <Title>Get in touch</Title>
            <ContactText>
              Say <a href="mailto:ryan@ryanfrasheski.com">Hi</a> or find me on other platforms:{' '}
              <a href="https://www.linkedin.com/in/ryan-frasheski-23611b16b">LinkedIn</a>
            </ContactText>
          </Inner>
          <Footer>
            &copy; 2019 Ryan Frasheski.{' '}
          </Footer>
        </Contact>
      </Parallax>
  </>
)

// <ProjectCard
//   title="Harry Potter"
//   link="https://www.behance.net/gallery/52915793/Harry-Potter"
//   bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
// >
//   I entered the DOCMA 2017 award with this Harry Potter inspired image.
// </ProjectCard>
// <ProjectCard
//   title="Tomb Raider"
//   link="https://www.behance.net/gallery/43907099/Tomb-Raider"
//   bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
// >
//   Recreation of a Tomb Raider Wallpaper (Fan Art)
// </ProjectCard>
// <ProjectCard
//   title="Eagle"
//   link="https://www.behance.net/gallery/38068151/Eagle"
//   bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
// >
//   A fantasy image manipulation relocating the habitat of wild animals.
// </ProjectCard>

export default Index
