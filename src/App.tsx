import React from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {AddPage} from "./components/Screen/AddPage/AddPage";
import {BasicInfo} from "./components/basicInfo/basicInfo";
import {Box, Grid} from "@material-ui/core";
import {ImagePicker} from "./components/imagePicker/imagePicker";

function App() {
  return (
    <Box >
        <Box>
            <Header/>
        </Box>

        <Box mt={10} ml={5} mr={5}>
            <hr/>
        </Box>

        <Box mt={2}>
            <BasicInfo />
        </Box>

        <Box ml={5} mr={5}>
            <hr/>
        </Box>
        <Box>
            <AddPage/>
        </Box>
                    {/*<ImagePicker />*/}

        </Box>
  );
}

export default App;
