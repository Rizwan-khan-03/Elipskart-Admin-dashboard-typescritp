import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useAppSelector } from '../../../App/Redux/hooks';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
  import { storage } from "../../../firebase";
  import { v4 } from "uuid";
const AddProduct = ({ formData, setFormData }: any) => {
    const user: any = useAppSelector(state => state?.commonDataSlice?.user)
    const [loading,setLoaading]=useState<any>({
        isLoading:false,
        errorMessage:'loading'

    })
    const uploadFile = async (file:any) => {
        if (file == null) return;
        try {
          const imageRef = ref(storage, `grocerImage/${file?.img?.name + v4()}`);
          const snapshot = await uploadBytes(imageRef, file?.img);
          const url = await getDownloadURL(snapshot.ref);
          console.log("url", url);
      
          return url;
        } catch (error) {
          // Handle any potential errors
          console.error(error);
        }
      };

    const handleChange =async (e: any) => {
        const name = e.target?.name
        const value = e.target?.value ? e.target?.value : ''
        const files = e.target?.files
        
     
         if (name === 'img' && files && files.length > 0) {
            const filesImg: any = files[0];
            console.log('filesImg',filesImg);
            const imgurl:any = await uploadFile(filesImg)
            console.log('imgurl',imgurl);
            
            setLoaading((pre:any)=>({
                ...pre,
                isLoading:true
            }))
            if(imgurl){
                await setFormData((prevFormData: any) => ({
                    ...prevFormData,
                    img: imgurl,
                    userId:user?._id
                }));
                await setLoaading((pre:any)=>({
                    ...pre,
                    isLoading:false,
                    errorMessage:'image uploaded'
                }))
            
            }else{
                await  setLoaading((pre:any)=>({
                    ...pre,
                    isLoading:false,
                    errorMessage:'image not uploaded'
                }))
            }
           
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
                    {loading?.isLoading && loading?.errorMessage}
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
                            name="weight"
                            label="Weight"
                            value={formData?.weight}
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

