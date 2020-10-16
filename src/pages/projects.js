import React from "react"
import Layout from "../components/layout"
import { Banner } from "../components/imageContainer"
import { Content, ContentContainer } from "../components/contentContainer"
import imageContainerStyles from "../components/imageContainer.module.css"
import contentContainerStyles from "../components/contentContainer.module.css"


export default function Projects() {

  return (
    <Layout>
      <Banner bannerClass={imageContainerStyles.projectsBanner}/>
      <ContentContainer>
        <Content imageClass={contentContainerStyles.graph1}/>
        <Content imageClass={contentContainerStyles.graph1}/>
      </ContentContainer>
    </Layout>
  )
}