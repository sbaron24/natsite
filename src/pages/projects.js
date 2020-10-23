import React from "react"
import Layout from "../components/layout"
import { Banner } from "../components/imageContainer"
import { Content, ContentContainer } from "../components/contentContainer"
import imageContainerStyles from "../components/imageContainer.module.css"
import { PROJECTS } from "../text/projects";

export default function Projects() {

  let projects = PROJECTS.map(projectContent => {

    return (
      <Content 
        imageFilename={projectContent.imageFilename}
        title={projectContent.title}
        text={projectContent.text}
        collaborators={projectContent.collaborators}
      />
    )
  })

  return (
    <Layout>
      <Banner bannerClass={imageContainerStyles.projectsBanner}/>
      <ContentContainer>
        <h1 className="pageTitle">Current Projects</h1>
        {projects}
      </ContentContainer>
    </Layout>
  )
}