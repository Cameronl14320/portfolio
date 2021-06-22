import { AppBar, Tabs, Tab } from '@material-ui/core'
import { TabPanel } from '@material-ui/lab'
import { useState } from 'react';

export default function header() {
    const [value, setValue] = useState(0);

    const handleChange = (event: any, newValue: number) => {
        setValue(newValue)
    }

    return (
        <>
        <AppBar position = "static">
            <Tabs value = {value} onChange={handleChange}>
                <Tab label = "Item One">
                
                </Tab>
                <Tab label = "Item Two">

                </Tab>
                <Tab label = "Item Three">

                </Tab>
            </Tabs>
        </AppBar>          
        </>
    )
}

function handleChange() {
    return
}