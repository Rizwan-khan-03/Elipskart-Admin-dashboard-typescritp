// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

// export default function AddProduct() {
//   return (
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//         Add Product
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="title"
//             name="title"
//             label="Product Name"
//             fullWidth
//             autoComplete="given-name"
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="brand"
//             name="brand"
//             label="Product Brand"
//             fullWidth
//             autoComplete="family-name"
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             required
//             id="desc"
//             name="desc"
//             label="Product Description"
//             fullWidth
//             autoComplete="shipping address-line1"
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             id="categories"
//             name="categories"
//             label="Product Category"
//             fullWidth
//             autoComplete="shipping address-line2"
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="available"
//             name="available"
//             label="Available"
//             fullWidth
//             autoComplete="shipping address-level2"
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             id="img"
//             name="img"
//             label="Add Imgage"
//             fullWidth
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="zip"
//             name="zip"
//             label="Zip / Postal code"
//             fullWidth
//             autoComplete="shipping postal-code"
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="country"
//             name="country"
//             label="Country"
//             fullWidth
//             autoComplete="shipping country"
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControlLabel
//             control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
//             label="Use this address for payment details"
//           />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const initialData: any = {
    title: '',
    desc: '',
    brand: '',
    available: false,
    img: '',
    categories: '',
    features: {
        ram: '',
        rom: '',
        screenSize: '',
        secondaryCamera: '',
        primaryCamera: '',
        batteryCapacity: '',
        warranty: '',
    },
    price: 0,
    discountPercentage: 0,
    productCode: 0,
    ratings: {
        overallRating: 0,
        totalRatings: 0,
        totalReviews: 0,
    },
}
const AddProduct = ({ formData, setFormData, selectedFile, setSelectedFile }: any) => {
    // const [formData, setFormData] = useState({ ...initialData });

    // async function createFile(path: any) {
    //     let fileObj: any = {
    //         file: '',
    //         url: ''
    //     }
    //     let response = await fetch(path);
    //     let data = await response.blob();
    //     let metadata = {
    //         type: 'image/jpeg'
    //     };
    //     let file = new File([data], "test.jpg", metadata);
    //     //let url = URL.createObjectURL(file)

    //     setSelectedFile({
    //         file: file,
    //         url: path
    //     })
    //     fileObj = {
    //         file: file,
    //         url: path
    //     }
    //     console.log("fileObj", fileObj)
    //     return fileObj?.url
    // }
    // const handleFileSelected = (e: any): void => {
    //     const files = Array.from(e.target.files)

    //   }
    //   const [selectedFile, setSelectedFile] = useState<any>({
    //     file: null,
    //     url: ''
    // })
    function change_image(e: any) {
        let file = e.target.files[0]
        if (!file) {
            return
        }
         let url = URL.createObjectURL(file)
        // setSelectedFile({
        //     file: file,
        //     url: url
        // })
        setFormData((prevFormData: any) => ({
            ...prevFormData,
            img: file?.name
        }));
        console.log('file', file);
    }
    const handleChange =async (e: any) => {
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
            const reader = new FileReader();
            reader.onload = (event: any) => {
              const base64Data = event.target.result;
              setSelectedFile(base64Data);
            };
            reader.readAsDataURL(filesImg);
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

//  React.useEffect(() => {
//     console.log('selectedFile',selectedFile);
 
//    return () => {
//     console.log('selectedFile',selectedFile);
//    }
//  }, [selectedFile])
 
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
                        // variant="standard"
                        />
                        {/* <TextField
                            name="available"
                            label="Available"
                            value={formData?.available}
                            onChange={handleChange}
                            required
                            variant="standard"
                        /> */}
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
                            value={formData?.ratings.overallRating}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="ratings.totalRatings"
                            label="Total Ratings"
                            value={formData?.ratings.totalRatings}
                            onChange={handleChange}
                            required
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="ratings.totalReviews"
                            label="Total Reviews"
                            value={formData?.ratings.totalReviews}
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

