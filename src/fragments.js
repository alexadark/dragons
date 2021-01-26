import { graphql } from "gatsby"

export const fragments = graphql`
  fragment dragonHome on WpMediaItem {
    sourceUrl
    localFile {
      childImageSharp {
        fluid(maxWidth: 418) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }

  fragment dragonResultLargeImage on WpMediaItem {
    sourceUrl
    localFile {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

  fragment dragonResultSmallImage on WpMediaItem {
    sourceUrl
    localFile {
      childImageSharp {
        fluid(maxHeight: 500) {
          ...GatsbyImageSharpFluid
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

  # fragment dragonResultLarge on WpDragon {
  #   title
  #   featuredImage {
  #     node {
  #       ...dragonResultsLargeImage
  #     }
  #   }
  #   dragonFields {
  #     dragonorigins
  #     dragonTriggers
  #     dragonMovies
  #     dragonMoviesTitle
  #     dragonsTaming
  #   }
  # }

  fragment allDragons on WpPage {
    allDragons {
      dragons {
        ... on WpDragon {
          title
          databaseId
          slug
          featuredImage {
            node {
              localFile {
                publicURL
              }
              ...dragonResultSmallImage
            }
          }
          dragonFields {
            dragonReactions
            dragonTriggers
            dragonorigins

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

  fragment homeSections on WpPage {
    homeHero {
      sentenceOne
      sentenceTwo
      sentenceThree
      sentenceFour
      sentenceFive
    }
    homeSectionOne {
      sectionOneTitle
      sectionOneContent
    }
    homeSectionTwo {
      sectionTwoContent
    }
    homeSectionThree {
      sectionThreeTitle
      sectionThreeSubtitle
    }
    homeSectionFour {
      sectionFourContent
    }
  }
`
