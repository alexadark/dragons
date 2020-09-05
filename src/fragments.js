import { graphql } from "gatsby"

export const fragments = graphql`
  fragment dragonHome on WpMediaItem {
    sourceUrl
    localFile {
      childImageSharp {
        fixed(width: 418, height: 398) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }

  fragment dragonResultLargeImage on WpMediaItem {
    sourceUrl
    localFile {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }

  fragment dragonResultSmallImage on WpMediaItem {
    sourceUrl
    localFile {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }

  fragment dragonQuestions on WpDragon {
    title
    dragonFields {
      dragonQuestions {
        questions
      }
    }
  }

  fragment dragonResultSmall on WpDragon {
    title
    featuredImage {
      node {
        ...dragonResultsSmallImage
      }
    }
  }

  fragment dragonResultLarge on WpDragon {
    title
    featuredImage {
      node {
        ...dragonResultsLargeImage
      }
    }
    dragonFields {
      dragonorigins
      dragonTriggers
      dragonMovies
      dragonMoviesTitle
      dragonsTaming
    }
  }

  fragment questions on WpPage {
    quizzFields {
      questions {
        ... on WpDragon {
          dragonFields {
            dragonSmallDark {
              localFile {
                publicURL
              }
            }
            dragonSmallWhite {
              localFile {
                publicURL
              }
            }
            dragonQuestions {
              questions
            }
          }
        }
      }
    }
  }

  fragment homeFields on WpPage {
    homeFields {
      heroImage {
        ...dragonHome
      }
      homeSubtitle
      homeTitle
      homeSteps {
        stepTitle
        stepText
      }
    }
  }
`
