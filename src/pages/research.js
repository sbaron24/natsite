import React from "react"
import Layout from "../components/layout"
import { Banner } from "../components/imageContainer"
import { Content, ContentContainer } from "../components/contentContainer"
import imageContainerStyles from "../components/imageContainer.module.css"
import { RESEARCH } from "../text/research"

export default function Research() {

  let researchProjects = RESEARCH.map(researchProject => {

    return (
      <Content 
        imageFilename={researchProject.imageFilename}
        title={researchProject.title}
        text={researchProject.text}
        biblio={researchProject.biblio}
      />
    )
  })

  return (
    <Layout>
      <Banner bannerClass={imageContainerStyles.researchBanner}/>
      <ContentContainer>
        <h1 className="pageTitle">Past Research</h1>
        {researchProjects}
      </ContentContainer>
    </Layout>
  )
}