import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const AddProduct = ({ formData, setFormData, selectedFile, setSelectedFile }: any) => {
    const handleChange =async (e: any) => {
        const name = e.target?.name
        const value = e.target?.value ? e.target?.value : ''
        const files = e.target?.files
        
     
         if (name === 'img' && files && files.length > 0) {
            const filesImg: any = files[0];
            setFormData((prevFormData: any) => ({
                ...prevFormData,
                img: filesImg
            }));
          }
          else if (name === 'available' ) {
            setFormData((prevFormData: any) => ({
                ...prevFormData,
                available: e.target.checked
            }));
          }
        
        else {
            setFormData((prevFormData: any) => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

    return (
        <React.Fragment>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="title"
                            label="Title"
                            value={formData?.title}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="desc"
                            label="Description"
                            value={formData?.desc}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="brand"
                            label="Brand"
                            value={formData?.brand}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="available" value={formData?.available}
                                onChange={handleChange} />}
                            label="Available"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  
                            type="file"
                            name="img"
                            label="Image"
                            // value={formData?.img?.name}
                            inputProps={{
                                accept: 'image/*',
                              }}
                            onChange={handleChange}
                            // onChange={(e) => change_image(e)}
                            required
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="categories"
                            label="Categories"
                            value={formData?.categories}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="price"
                            label="Price"
                            value={formData?.price}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="discountPercentage"
                            label="Discount Percentage"
                            value={formData?.discountPercentage}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                   
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="productCode"
                            label="Product Code"
                            value={formData?.productCode}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );
};

export default AddProduct;

