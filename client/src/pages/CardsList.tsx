import { useEffect, useMemo, useState } from "react";
import {
  Heading,
  Text,
  Stack,
  Flex,
  HStack,
  Button,
  Badge,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useReports } from "../hooks";
import axios from "axios";

// const colors = ["pink", "orange", "green", "blue", "teal", "purple"];

// const card = (randomColor: string) => ({
//   subject: "Matemática",
//   chapter: "Equações",
//   studentGroup: "M1",
//   color: randomColor,
// });

// const cards = [...Array(10)].map((_, i) => {
//   const random = Math.floor(Math.random() * colors.length);
//   const randomColor = colors[random];
//   return card(randomColor);
// });

function CardsList() {
  const [cards, setCards] = useState();

  useEffect(() => {
    const fetchActivities = async () => {
      const { data } = await axios.get("http://localhost:9000/activities");
      console.log("data", data);
      setCards(data);
      return data;
    };
    fetchActivities();
  }, []);

  const navigator = useNavigate();
  const { data } = useReports();
  const meanGrade = useMemo(() => {
    if (data) {
      const sumData = data.reduce((mean: number, { grade }) => {
        mean = mean + grade;
        return mean;
      }, 0);
      const mean = sumData / data.length;
      return mean;
    }
  }, [data]);

  return (
    <Flex bg="gray.200" h="100%" justifyContent="center">
      <Stack
        spacing="1rem"
        p={8}
        w="100%"
        maxWidth="720px"
        bg="white"
        borderRadius="20px"
        m="2rem"
      >
        <Heading mb={4}>Hey</Heading>
        {(cards || [])?.map(({ subject, chapter, studentGroup }) => (
          <Button
            onClick={() => {
              navigator("/report", { replace: false });
            }}
            bg="#FAFAFF"
            p={8}
            h={32}
            borderRadius="10px"
            boxShadow="md"
          >
            <HStack w="100%" justifyContent="space-between">
              <HStack spacing="3rem">
                <Stack>
                  <Text color="#9592A6" fontSize="2rem" fontWeight="700">
                    10
                  </Text>
                  <Text color="#9592A6" fontSize="sm" fontWeight="400">
                    ABRIL
                  </Text>
                </Stack>
                <Stack alignItems="flex-start">
                  <Text color="#021442" fontSize="lg">
                    {subject}
                  </Text>
                  <Text color="#9592A6" fontSize="md">
                    {chapter}
                  </Text>
                </Stack>
              </HStack>

              <Stack alignItems="flex-end" spacing="0.5rem">
                <HStack>
                  <Text fontSize="md" fontWeight="bold">
                    Turma
                  </Text>
                  <Badge
                    ml="1"
                    fontSize="0.8em"
                    variant="outline"
                    colorScheme="purple"
                  >
                    {studentGroup}
                  </Badge>
                </HStack>

                <HStack>
                  <Text fontSize="md" fontWeight="bold">
                    Média
                  </Text>
                  <Badge
                    ml="1"
                    fontSize="0.8em"
                    variant="subtle"
                    colorScheme="purple"
                  >
                    {meanGrade}
                  </Badge>
                </HStack>

                <HStack>
                  <Text fontSize="md" fontWeight="bold">
                    Participação
                  </Text>
                  <Badge ml="1" colorScheme="purple" variant="solid">
                    90%
                  </Badge>
                </HStack>
              </Stack>
            </HStack>
          </Button>
        ))}
      </Stack>
    </Flex>
  );
}

export default CardsList;
