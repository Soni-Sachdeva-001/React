import React from 'react';
import {
    Box,
    Button,
    createStyles,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Theme
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import './AddPage.scss';

interface IProps{
    submitFormValues: (value: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            minWidth: 200,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        shortDescription: {
            minWidth: 665,
        },
        longdescription: {
            minWidth: 900,
        }
    }),
);

export const AddPage = (IProps: any) => {
    const classes = useStyles();

    const [brand, setBrand] = React.useState('');
    const [name, setName] = React.useState('');
    const [productNumber, setProductNumber] = React.useState('');
    const [productCategory, setProductCategory] = React.useState('');
    const [configurationType, setConfigurationType] = React.useState('');
    const [ShortDescription, setShortDescription] = React.useState('');
    const [longDescription, setLongDescription] = React.useState('');
    const [Topics, setTopics] = React.useState('');
    const [submit, setSubmit] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setBrand(event.target.value as string);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value );
    };
    const handleProductNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductNumber(event.target.value);
    };
    const handleProductCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductCategory(event.target.value );
    };
    const handleConfigurationType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfigurationType(event.target.value );
    };
    const handleShortDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShortDescription(event.target.value );
    };
    const handleLongDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLongDescription(event.target.value );
    };
    const handleTopics = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTopics(event.target.value );
    }
    const handleSubmit = (values: any): void =>  {

    }
    return (
        <>
            <Box ml={40}>
        <form>
            <Grid item container direction={'row'}>
                <Box mr={4}>
                <TextField label = 'Name' onChange={handleNameChange}/>
                </Box>
                <Box mr={4}>
                <TextField label = 'Product Number' onChange={handleProductNumber}/>
                </Box>
            <Box>
                  <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={brand}
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
            </Box>
                <Grid item container direction={'row'}>
                    <Box mr={4}>
                        <TextField  label = 'Product Category' onChange={handleProductCategory}/>
                    </Box>
                    <Box mr={4}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Product Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={brand}
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>                    </Box>
                    <Box>
                        <TextField  label = 'Configurator Type' onChange={handleConfigurationType}/>
                    </Box>
                </Grid>
                <Grid item container direction={'column'}>
                    <Box>
                        <TextField
                            className={classes.shortDescription}
                            label = 'Short Description' onChange={handleShortDescription}/>
                    </Box>
                </Grid>
                </Grid>
        </form>
            </Box>
    <Grid>
        <Box ml={30}>
            <TextField
                className={classes.longdescription}
                label = 'Long Description'
                onChange={handleLongDescription}
            />
        </Box>
        <Box ml={30}>
            <TextField
                className={classes.longdescription}
                label = 'Topics'
                onChange={handleTopics}
            />
        </Box>
    </Grid>
            <Grid item container justify={'center'}>
                <Box mt={4} mr={4}>
                    <Button className={'buttons'} onSubmit={handleSubmit}>
                        Save
                    </Button>
                </Box>
                <Box mt={4}>
                    <Button>
                        Cancel
                    </Button>
                </Box>

            </Grid>
    </>
    );

}