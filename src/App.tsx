import React, { useState } from 'react'
import { Box, Flex, Textarea, Text } from '@chakra-ui/react'
import { Header } from './components/headers/Header'

function App() {
  const [jsonText, setJsonText] = useState('')
  const handleChangeInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setJsonText(JSON.stringify(JSON.parse(e.target.value), null, 2))

  return (
    <div className="App">
      <Header />
      <Box w="80vw" p="5vh 5vw" m="0 auto" rounded="10" bgColor="white">
        <Flex w="100%">
          <Box w="50%" mr="10px">
            <Text>Input JSON</Text>
            <Textarea onChange={handleChangeInputText} w="100%" h="70vh" placeholder="Input your json" resize="none" />
          </Box>
          <Box w="50%">
            <Text>Output formatted JSON</Text>
            <Textarea value={jsonText} w="100%" h="70vh" placeholder="Result" resize="none" readOnly />
          </Box>
        </Flex>
      </Box>
    </div>
  )
}

export default App
