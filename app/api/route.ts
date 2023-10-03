import { writeFile } from 'fs/promises'
import {NextResponse} from "next/server"
import streamifier from "streamifier";
import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs/promises'
// Return "https" URLs by setting secure: true
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});



// Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions
    const options = {
      use_filename: true,
      unique_filename: true,
      overwrite: true,
      colors:true
    };



export async function GET(request:Request){
  
  return NextResponse.json({
    method: "GET",
    name: "Habeeb Yunus Habeeb"
})
}

export async function POST(request:Request){
   // console.log(request)
    // const data = await request.json()
   // console.log(data)
const d = await request.formData()
  //const file: File | null = data.get('file') as unknown as File
  const data = d.get('person');
  const person = await JSON.parse(data);

  console.log(d.has.length)
let l = d.length -1;
console.log(l)
let files = [];
while (l >= 0) {
  files.push(
    d.get(`file${l}`)
  )
  l = l -1;
}
console.log(files)

  // const files = d.get('files');
  // const f = await JSON.parse(files)
  // console.log(files)
  // console.log(f)
  // console.log(f[0])


  // const [fx, fy] = files;
  // console.log(fx);
  // console.log(fy);

  // const files = f;

  // console.log(person);



  // console.log(person.email);
  
  
  const {email} = person;
  //console.log(name, email)
  

  // if (!fx && !fy) {
  // if (files.length === 0) {

//     console.log("A mighty thunder blews")
// return NextResponse.json({
//     method: "POST",
//     success: false
// })
    
  // }

  // console.log(files)

  // const bytes1 = await fx.arrayBuffer()
  // const buffer1 = Buffer.from(bytes1)


  // const bytes2 = await fy.arrayBuffer()
  // const buffer2 = Buffer.from(bytes2)
  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  

  // const path = `/home/d-code-h/lab/personal/vacancy-questionaire/app/uploads/${file.name}`;


  try {
    // await writeFile(path, buffer)
   // const result = await cloudinary.uploader.upload("../uploads/anne-laure-p-45pxdvG7wa4-unsplash.jpg", options);

let cld_upload_stream = cloudinary.uploader.upload_stream(
    {
      folder: `vacancy/${email}`,
      ...options
    },
    function(error, result) {
        console.log(error, result);
    }
);

// await Promise.all( [streamifier.createReadStream(buffer1).pipe(cld_upload_stream), streamifier.createReadStream(buffer2).pipe(cld_upload_stream)]);




    // const result = await cloudinary.uploader.upload(file.name, options);
    //console.log(result)
  } catch (error) {
    console.log("Something unfortunate happened here!!!")
    console.log(error)
  }
  finally{

    return NextResponse.json({
      method: "POST",
      success: true
    })
  }

}