import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
} from "@chakra-ui/react";
import { Router, useRouter } from "next/router";
import React from "react";
import SideBar from "../components/SideBar";

export default function Schedule() {
  const [user, setUser] = React.useState({ name: "", profile_img: "" });
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    if (localStorage.getItem("user_name")) {
      setIsSignedIn(true);
      setUser({
        name: localStorage.getItem("user_name"),
        profile_img: localStorage.getItem("user_profile_img"),
      });
    }
  });

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

  return (
    <>
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
