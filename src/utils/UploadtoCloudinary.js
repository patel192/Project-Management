export const UploadtoCloudinary = async (file)=>{
const data = new FormData();
data.append("file",file);
data.append("upload_present","My_Images")
data.append("cloud_name","dfaou6haj");
const res = await fetch("https://api.cloudinary.com/v1_1/dfaou6haj/image/upload",{
    method:"POST",
    body:data
})
const result = await res.json();
return result.secure_url;
}
