import { writeFile } from 'fs/promises'
import {NextResponse} from "next/server"

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
  const path = `../uploads/${file.name}`
  await writeFile(path, buffer)
  console.log(`open ${path} to see the uploaded file`)

 console.log({method: "POST",
    name: name,
    success: true
})
  return NextResponse.json({
    method: "POST",
    name: name,
    success: true
})
}