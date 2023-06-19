import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/styles.scss"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <StaticImage src="../images/logo.png" loading="eager" width={400} height={320} alt="Logo"/>
      <h1>Coming Soon</h1>
      <span>Our website is under construction</span>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Porto Campus Studios</title>
