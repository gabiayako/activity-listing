import { Heading, Stack, Center, Input } from "@chakra-ui/react";
import { useState } from "react";

function Lesson() {
  const [text, setText] = useState<string>();
  return (
    <Center bg="gray.200">
      <Stack p={8} w="100%" maxWidth="720px">
        <Heading mb={4}>Hey</Heading>
        <Input
          variant="filled"
          placeholder="Filled"
          value={text}
          onChange={(e: { target: { value: string } }) =>
            setText(e.target.value)
          }
        />
      </Stack>
    </Center>
  );
}

export default Lesson;
