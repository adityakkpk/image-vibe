"use client";

// import { UploadDropzone } from "@/lib/uploadthings";
// import { XIcon } from "lucide-react";

interface ImageUploadProps {
  // endpoint: "postImage";
  // onChange: (url: string) => void;
  // value: string;
  setImageUrl: (url: string) => void;
}

// function ImageUpload({ endpoint, onChange, value }: ImageUploadProps) {
//   if (value) {
//     return <div className="relative">
//       <img src={value} alt="Upload" className="rounded-md size-40 object-cover" />
//       <button
//         onClick={() => onChange("")}
//         className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-md"
//         type="button"
//       >
//         <XIcon className="h-4 w-4 text-white" />
//       </button>
//     </div>;
//   }

//   return (
//     <UploadDropzone
//       endpoint={endpoint}
//       onClientUploadComplete={(res) => {
//         onChange(res?.[0].url);
//       }}
//       onUploadError={(error: Error) => {
//         console.error("Failed to upload imag: ", error);
//       }}
//     />
//   );
// }

// export default ImageUpload;

import React, { useState, useRef } from "react";
import { CloudUpload } from "lucide-react";
import toast from "react-hot-toast";

interface DragEvent extends React.DragEvent<HTMLDivElement> {
  type: 'dragenter' | 'dragover' | 'dragleave' | 'drop';
}

interface FileInputEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & {
    files: FileList;
  };
}

const ImageUpload = ({ setImageUrl }: ImageUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: FileInputEvent) => {
    e.preventDefault();

    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      toast.error("No file selected");
      return;
    }

    if (!selectedFile.type.match("image.*")) {
      toast.error("Only image files are allowed");
      return;
    }

    // You can also check the file size if needed
    const maxSize = 1024 * 1024 * 5; // 5MB
    if (selectedFile.size > maxSize) {
      toast.error("File size exceeds the limit");
      return;
    }

    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file: File) => {
    setFile(file);
    // You would typically upload the file here
    console.log("File selected:", file.name);
    
    try {
      const formInputData = new FormData();
      formInputData.append("image", file);

      const res = await fetch("/api/uploadImage", {
        method: "POST",
        body: formInputData,
      })

      if (res.ok) {
        const data = await res.json();
        setImageUrl(data.url);
        console.log(data);
        toast.success("Image uploaded successfully");
      }
    } catch (error) {
      console.error("Error submitting nomination:", error);
      toast.error("Failed to submit nomination: " + (error instanceof Error ? error.message : "Unknown error"));
    }
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div
      className="w-full max-w-md mx-auto p-6 bg-black rounded-lg border border-gray-800"
      onDragEnter={handleDrag}
    >
      <div
        className={`relative flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg transition-colors ${
          dragActive ? "border-blue-500 bg-blue-50/5" : "border-gray-700"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />

        <div className="flex flex-col items-center">
          <div className="p-3 mb-3 bg-gray-700 rounded-full">
            <CloudUpload size={24} className="text-gray-400" />
          </div>
          <p className="mb-2 text-gray-400">Choose a file or drag and drop</p>
          <p className="text-sm text-gray-500">Image (4MB)</p>
        </div>

        <div className="mt-8">
          <button
            onClick={handleButtonClick}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Choose File
          </button>
        </div>

        {file && (
          <div className="mt-4 text-sm text-gray-400">
            Selected file: {file.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
