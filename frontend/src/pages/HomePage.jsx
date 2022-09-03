import React from "react";
import {
  Box,
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Admin from "./Admin";
import User from "./User";

const HomePage = () => {
  return (
    <Center>
<Box bg="aquamarine" w="30%" p={4} marginTop={100} color="Black">
        <h1>Welcome To ApnaGhar</h1>
        <Tabs variant="soft-rounded" float="center" colorScheme="blue">
          <TabList>
            <Tab>User</Tab>
            <Tab>Admin</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <User />
            </TabPanel>
            <TabPanel>
              <Admin />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Center>
  );
};

export default HomePage;
