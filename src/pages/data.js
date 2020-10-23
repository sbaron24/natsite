import React from "react"
import Layout from "../components/layout"
import { Banner } from "../components/imageContainer"
import { DataContent, ContentContainer } from "../components/contentContainer"
import imageContainerStyles from "../components/imageContainer.module.css"
import { DATA } from "../text/data";

export default function Data() {

  let data = DATA.map(dataContent => {

    return (
      <DataContent 
        text1={dataContent.text1}
        text2={dataContent.text2}
      />
    )
  })

  return (
    <Layout>
      <Banner bannerClass={imageContainerStyles.dataBanner}/>
      <ContentContainer>
        <h1 className="pageTitle">Data</h1>
        {data}
      </ContentContainer>
    </Layout>
  )
}