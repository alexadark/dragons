/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { Layout, SEO } from "../components"
const browser = typeof window !== "undefined" && window
const NotFoundPage = () => {
  return (
    browser && (
      <Layout>
        <SEO title="404: Not found" />
        <Container sx={{ maxWidth: "l", textAlign: "center" }}>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Container>
      </Layout>
    )
  )
}

export default NotFoundPage
