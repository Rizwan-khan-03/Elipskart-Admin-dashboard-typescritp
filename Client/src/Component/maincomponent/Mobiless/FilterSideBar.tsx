import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import Typography from '@mui/material/Typography';
import { siedbarData } from "./data";
import { useDispatch } from 'react-redux';
import * as action from './Reduxx/MobileAction';
export default function FilterSideBar() {
    const [sections, setSections] = React.useState([...siedbarData]);
    const [filterData, setFilterData] = React.useState<any>({
        brand: "",
        categories: "",
        overallRating: "",
        discount: "",
        ram: "",
        internalstorage: "",
        batterycapacity: "",
        screensize: "",
        primarycamera: "",
        secondrycamera: ""
    });

    const dispatch = useDispatch();
    // React.useEffect(() => {
    //     
    // }, [])

    const handleClick = (sections: any) => {
        setSections((prevSections) =>
            prevSections.map((section) =>
                section.id === sections?.id ? { ...section, open: !section.open } : section
            )
        );
    };
    const handleFilter = async (item: any, section: any) => {
        const key = section?.title?.toLowerCase().replace(/\s+/g, '');
        console.log('item', item, 'section', section,'key',key);

        setFilterData((prev: any) => {
            if (prev.hasOwnProperty(key)) {
                return {
                    ...prev,
                    [key]: item?.text.toLowerCase(),
                };
            }
            return prev;
        });

        // Now, outside of the state update callback, you can use the updated filterData.
        if (filterData[key]) {
            dispatch(action.getMobileListRequest({ data: filterData, url: "product/search" }));
        }
    };

    return (
        <List
            sx={{ width: "100%", bgcolor: "background.paper", textAlign: "initial", paddingLeft: 0, height: '100%' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{ textTransform: 'capitalize', fontSize: "small", fontWeight: 900, color: "#000" }}>
                    <h3>Filters</h3>
                </ListSubheader>
            }
        >
            {sections.map((section) => (
                <React.Fragment key={section.id}>
                    <ListItemButton onClick={() => handleClick(section)}>
                        <ListItemText
                            primary={
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textTransform: 'uppercase',
                                        fontSize: '11px',
                                        fontWeight: 900,
                                        color: '#000',
                                    }}
                                >
                                    {section.title}
                                </Typography>
                            }
                        />
                        {section.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={section.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding >
                            {section.items.map((item) => (
                                <ListItemButton key={item.id} sx={{ pl: 1 }} onClick={() => handleFilter(item, section)}>
                                    <ListItemIcon sx={{ minWidth: "unset", width: "auto" }}>
                                        <Checkbox size="small" sx={{ fontSize: "small" }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontSize: "small",
                                                    fontWeight: 900,
                                                    color: "#000",
                                                    textAlign: "initial",
                                                    paddingLeft: 0,
                                                }}
                                            >
                                                {item.text}
                                            </Typography>
                                        }
                                    />
                                </ListItemButton>

                            ))}
                        </List>
                    </Collapse>
                </React.Fragment>
            ))}
        </List>
    );
}
