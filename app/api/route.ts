import { writeFile } from 'fs/promises'
import {NextResponse} from "next/server"
import {v2 as cloudinary} from 'cloudinary';

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
      unique_filename: false,
      overwrite: true,
      colors:true
    };



export async function GET(request:Request){
    console.log(request)
  return NextResponse.json({
    method: "GET",
    name: "Habeeb Yunus Habeeb"
})
}

export async function POST(request:Request){
   // console.log(request)
    // const data = await request.json()
   // console.log(data)
const data = await request.formData()
  const file: File | null = data.get('file') as unknown as File
const name = data.get("name")
  

  if (!file) {
return NextResponse.json({
    method: "POST",
    name: name,
    success: false
})
    
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  

  // const path = `/home/d-code-h/lab/personal/vacancy-questionaire/app/uploads/${file.name}`;


  try {
    // await writeFile(path, buffer)
    const result = await cloudinary.uploader.upload("../uploads/anne-laure-p-45pxdvG7wa4-unsplash.jpg", options);

    // const result = await cloudinary.uploader.upload(file.name, options);
    console.log(result)
  } catch (error) {
    console.log("Something unfortunate happened here!!!")
    console.log(error)
  }
  finally{

    return NextResponse.json({
      method: "POST",
      name: name,
      success: true
    })
  }

//  console.log({method: "POST",
//     name: name,
//     success: true
// })
}