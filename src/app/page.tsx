"use client"

import Image from 'next/image'
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

interface UploadImage {
  event: "success"
  info: { public_id: string };
}

export default function Home() {
  // use state to change the Image
  const [imageId , setImageId]= useState("cld-sample-5")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Upload Button */}
      <CldUploadButton
       uploadPreset="tu2vzffl" 
       onUpload={(result) => {
        let response = result as UploadImage
        setImageId(response.info.public_id);
      }}
    />
    {/* View Image  */}
      <CldImage
  width="400"
  height="400"
  src={imageId}
  sizes="100vw"
  alt="Description of my image"
/>
    </main>
);
}
