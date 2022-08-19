import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import SideBar from "../components/SideBar";
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
  Image,
  Box,
  HStack,
  useRadio,
  useRadioGroup,
  Text,
  Flex,
  Divider,
  SimpleGrid,
  Editable,
  EditablePreview,
  EditableInput,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import getData from "../components/utils/getData";

export default function Schedule() {
  // const [user, setUser] = React.useState({ name: "", profile_img: "" });
  // const [isSignedIn, setIsSignedIn] = React.useState(false);
  // const router = useRouter();

  // React.useEffect(() => {
  //   if (localStorage.getItem("user_name")) {
  //     setIsSignedIn(true);
  //     setUser({
  //       name: localStorage.getItem("user_name"),
  //       profile_img: localStorage.getItem("user_profile_img"),
  //     });
  //   }
  // });

  const schedule = {
    thead: ["Job", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    tbody: [
      [
        "Giặt đồ + phơi",
        "Khánh",
        "Hoàn",
        "Phúc",
        "Thịnh",
        "Thông",
        "Tú",
        "Khanh",
      ],
      [
        "Quét nhà + lau nhà",
        "Khánh",
        "Hoàn",
        "Phúc",
        "Thịnh",
        "Thông",
        "Tú",
        "Khanh",
      ],
      ["Quét nhà + đổ rác", "Tú", "Tú", "Tú", "Tú", "Tú", "Tú", "Tú"],
      ["Dọn toilet", "", "", "", "Thông", "", "", ""],
      ["Mua nước", "", "", "", "Thịnh", "", "", ""],
    ],
  };

  // "Giặt đồ + phơi",
  // "Quét nhà + lau nhà",
  // "Quét nhà + đổ rác",
  // "Dọn toilet",
  // "Mua nước",

  // React.useEffect(() => {
  //   router.reload();
  // }, []);

  const [selectedWeekday, setSelectedWeekday] = useState();
  const [selectedPerson, setSelectedPerson] = useState();

  console.log(selectedPerson);

  return (
    <>
      {/* <Text>Mon</Text>
      <Editable defaultValue="...">
        <EditablePreview
          borderWidth="1px"
          borderColor="white"
          px="1rem"
          py="0.2rem"
        />
        <EditableInput
          w="5rem"
          borderWidth="1px"
          borderColor="white"
          px="1rem"
          py="0.2rem"
        />
      </Editable> */}
      {/* 
      <SimpleGrid columns={{ sm: 1, md: 2 }} gap="1rem">
        <WeekdaySelect
          setUserSelected={(e) => setSelectedWeekday(e)}
          personInCharge={selectedPerson}
        />
        <PeopleSelect setUserSelected={(e) => setSelectedPerson(e)} />
      </SimpleGrid> */}

      {/* <Text>{selectedWeekday}</Text> */}
      {/* {selectedPerson && (
        <Flex align="center" gap="1rem">
          <Image
            w="2rem"
            rounded="full"
            src={selectedPerson.profile_img.src}
            alt={selectedPerson.name}
          />
          <Text>{selectedPerson.name}</Text>
        </Flex>
      )} */}

      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              {schedule.thead.map((content, index) => (
                <Th key={index}>{content}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {schedule.tbody.map((row, index) => (
              <Tr key={index}>
                {row.map((content, index) => (
                  <Td key={index}>{content}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
export const WeekdaySelect = ({ setUserSelected, personInCharge }) => {
  const weekdays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const [selectedWeekday, setSelectedWeekday] = useState("Mon");
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "weekdays",
    defaultValue: "Mon",
    onChange: (e) => {
      setSelectedWeekday(e);
      setUserSelected(e);
    },
  });

  const group = getRootProps();

  return (
    <Box boxShadow="2xl" rounded="1rem" p="1rem" bg="gray.700" mx="1rem">
      <Text fontSize="1.3rem">Choose a day</Text>
      <Divider w="full" my="1rem" />
      <SimpleGrid {...group} gap="1rem" w="full">
        {weekdays.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              <Text>{value}</Text>
              {personInCharge && value === selectedWeekday && (
                <Flex align="center" gap="1rem">
                  <Image
                    w="2rem"
                    rounded="full"
                    src={personInCharge.profile_img.src}
                    alt={personInCharge.name}
                  />
                  <Text>{personInCharge.name}</Text>
                </Flex>
              )}
            </RadioCard>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export const PeopleSelect = (props) => {
  const [people, setPeople] = useState([]);
  const data = getData();
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "people",
    defaultValue: "Hoàn",
    onChange: (e) => props.setUserSelected(JSON.parse(e)),
  });

  const group = getRootProps();

  React.useEffect(() => {
    setPeople(data);
  }, []);

  return (
    <Box boxShadow="2xl" rounded="1rem" p="1rem" bg="gray.700" mx="1rem">
      <Text fontSize="1.3rem">Choose a person</Text>
      <Divider w="full" my="1rem" />
      <SimpleGrid {...group} gap="1rem" w="full">
        {people.map((value) => {
          const radio = getRadioProps({
            value: JSON.stringify(value),
          });
          return (
            <RadioCard key={value.name} {...radio}>
              <Flex align="center" gap="1rem">
                <Image
                  w="2rem"
                  h="2rem"
                  rounded="full"
                  src={value.profile_img.src}
                  alt={value.name}
                />
                <Text>{value.name}</Text>
              </Flex>
            </RadioCard>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

const RadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Flex
        {...checkbox}
        align="center"
        justify="space-between"
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="xl"
        h="4rem"
        _checked={{
          bg: "gray.600",
          color: "white",
          borderColor: "gray.600",
        }}
        _focus={{
          boxShadow: "2xl",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Flex>
    </Box>
  );
};
