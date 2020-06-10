import React, { useState, useContext } from "react"
import Logo from "../Logo"
import Box from "../Box"
import Text from "../Text"
import styled from "styled-components"
import css from "@styled-system/css"
import { motion, AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProductNotes = () => {
  const data = useStaticQuery(graphql`
    query BottleFrontImageQuery {
      bottleFront: file(relativePath: { eq: "bottle-front.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Box px="3">
      <Box position="absolute" top="0" width="100%" left="0" pt="5">
        <Logo variant="secondary" animate={false} />
      </Box>
      <Box
        maxWidth="1600px"
        display={["block", "block", "grid"]}
        gridTemplateColumns={"50% 50%"}
        mx="auto"
      >
        <Box>
          <Box
            layoutId="content-box-copy"
            as={motion.div}
            css={`
              border: 1px solid ${props => props.theme.colors.text};
            `}
            p="4"
            mt="8"
            maxWidth="36rem"
            mx="auto"
          >
            <motion.div animate>
              <Text lineHeight="1.5" textAlign="center">
                "THE BEAUTIFUL LEMON MYRTLE TONE INFUSED IN THIS GIN AFFORDS THE
                FORTUNATE CONSUMER THE CHANCE TO WAIVE THE EFFORT OF ADDING
                FRUIT. ENJOY WITH OR WITHOUT!"
              </Text>
            </motion.div>
          </Box>
        </Box>
        <Box
          css={`
            overflow: hidden;
          `}
        >
          <Box maxWidth="400px" mx="auto">
            <AnimatePresence>
              <Box
                as={motion.div}
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
              >
                <Img fluid={data.bottleFront.childImageSharp.fluid} />
              </Box>
            </AnimatePresence>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductNotes