import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/styles.scss"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <StaticImage src="../images/logo.png" loading="eager" width={400} height={320} alt="Logo"/>
      <h1>Brevemente</h1>
      <span>estamos a construir um novo site 🏗️ 🧱</span>
      <p>os melhores estúdios para estudantes no coração académico da cidade do porto</p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Porto Campus Studios</title>
