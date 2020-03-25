import React from 'react'
import { Text, Flex } from 'rebass'
import {useWindowSize} from 'react-use'
import Confetti from 'react-confetti'

const index = () => {
  const { width, height } = useWindowSize()
  return (
    <Flex sx={{ flex: 1, minHeight: '100vh' }} bg="skyblue">
      <Confetti width={width} height={height} />
      <Text
      p={2}
      sx={{position:'relative', zIndex:2}}
        textAlign="center"
        m="auto"
        fontFamily="system-ui"
        fontSize={[6, 7, 8]}
      >
        <b>Happy Birthday!<Text>🎉</Text></b>
      </Text>
      <style jsx>{`
        :global(body) {
          margin: 0;
        }
      `}</style>
    </Flex>
  )
}

export default index
