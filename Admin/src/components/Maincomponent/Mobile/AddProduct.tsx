import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { uploadFile } from '../../../utills/firebaseUpload';
import { getUserId } from '../../../App/Service/Service';
import Loader from '../Helper/Loader';
const AddProduct = ({ formData, setFormData, selectedFile, setSelectedFile }: any) => {
    const [loading, setLoaading] = useState<boolean>(false)
    const handleChange = async (e: any) => {
        // const { name, value,files } = e.target;
        const name = e.target?.name
        const value = e.target?.value ? e.target?.value : ''
        const files = e.target?.files

        if (name.startsWith('features.')) {
            const featureField = name.split('.')[1];
            setFormData((prevFormData: any) => ({
                ...prevFormData,
                features: {
                    ...prevFormData.features,
                    [featureField]: value,
                },
            }));
        }
        else if (name === 'img' && files && files.length > 0) {
            const filesImg: any = files[0];
            await setLoaading(true)
            const imgurl: any = await uploadFile(filesImg,"mobileImages")
            if (imgurl) {
                await setFormData((prevFormData: any) => ({
                    ...prevFormData,
                    img: imgurl,
                    userId: getUserId()
                }));
                await setLoaading(false)
            } else {
                await setLoaading(false)
            }

        }
        else if (name === 'available') {
            setFormData((prevFormData: any) => ({
                ...prevFormData,
                available: e.target.checked
            }));
        }
        else if (name.startsWith('ratings.')) {
            const featureField = name.split('.')[1];
            setFormData((prevFormData: any) => ({
                ...prevFormData,
                ratings: {
                    ...prevFormData.ratings,
                    [featureField]: value,
                },
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
            {loading ? <Loader show={loading} /> : null}
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
                            name="features.ram"
                            label="RAM"
                            value={formData?.features?.ram}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="features.rom"
                            label="ROM"
                            value={formData?.features?.rom}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="features.screenSize"
                            label="Screen Size"
                            value={formData?.features?.screenSize}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="features.secondaryCamera"
                            label="Secondary Camera"
                            value={formData?.features?.secondaryCamera}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="features.primaryCamera"
                            label="Primary Camera"
                            value={formData?.features?.primaryCamera}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="features.batteryCapacity"
                            label="Battery Capacity"
                            value={formData?.features?.batteryCapacity}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="features.warranty"
                            label="Warranty"
                            value={formData?.features?.warranty}
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
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="ratings.overallRating"
                            label="Overall Rating"
                            value={formData?.ratings?.overallRating}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="ratings.totalRatings"
                            label="Total Ratings"
                            value={formData?.ratings?.totalRatings}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="ratings.totalReviews"
                            label="Total Reviews"
                            value={formData?.ratings?.totalReviews}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                    {/* <Button type="submit">Submit</Button> */}
                </Grid>
            </form>
        </React.Fragment>
    );
};

export default AddProduct;

