import React from "react"
import Layout from "../components/layout"
import { Banner } from "../components/imageContainer"
import { BlogPost, BlogContainer } from "../components/contentContainer"
import imageContainerStyles from "../components/imageContainer.module.css"
import { BLOG } from "../text/blog";

export default function Blog() {

  let blogPosts = BLOG.map(blogPost => {

    return (
      <BlogPost
        title={blogPost.title}
        href={blogPost.href}
      />
    )
  })

  return (
    <Layout>
      <Banner bannerClass={imageContainerStyles.dataBanner}/>
      <BlogContainer>
        {blogPosts}
      </BlogContainer>
    </Layout>
  )
}