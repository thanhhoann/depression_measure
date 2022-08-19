import { Box, SimpleGrid } from "@chakra-ui/react";
import ProfileCard from "./ProfileCard";
import getData from "./utils/getData";

export default function Dashboard() {
  const people = getData();
  return (
    <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} gap="1rem">
      {people.map(
        (
          {
            name,
            title,
            profile_img,
            background_img,
            phone_number,
            bank_name,
            bank_account,
          },
          index
        ) => (
          <Box key={index}>
            <ProfileCard
              name={name}
              title={title}
              profile_img={profile_img}
              phone_number={phone_number}
              bank_name={bank_name}
              bank_account={bank_account}
              background_img={background_img}
            />
          </Box>
        )
      )}
    </SimpleGrid>
  );
}
