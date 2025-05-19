import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
const fallbackImage =
  'https://static.vecteezy.com/system/resources/previews/020/248/866/original/no-pictures-icon-free-vector.jpg'
export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ link, children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink target={'_blank'} href={link} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail || fallbackImage}
          alt={title}
          className="grid-item-thumbnail"
          width={300}
          height={150}
          unoptimized
        />
        <LinkOverlay target={'_blank'} href={link}>
          <Text mt={2} mb={2} fontSize={18}>
            <div dangerouslySetInnerHTML={{ __html: title }} />
          </Text>
        </LinkOverlay>
        <Text fontSize={12} textAlign={'justify'}>
          <div dangerouslySetInnerHTML={{ __html: children }} />
        </Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
