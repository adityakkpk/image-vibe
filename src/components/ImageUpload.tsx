"use client";

import { UploadDropzone } from "@/lib/uploadthings";
import { XIcon } from "lucide-react";

interface ImageUploadProps {
  endpoint: "postImage";
  onChange: (url: string) => void;
  value: string;
}

function ImageUpload({ endpoint, onChange, value }: ImageUploadProps) {
  if (value) {
    return <div className="relative">
      <img src={value} alt="Upload" className="rounded-md size-40 object-cover" />
      <button
        onClick={() => onChange("")}
        className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-md"
        type="button"
      >
        <XIcon className="h-4 w-4 text-white" />
      </button>
    </div>;
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.error("Failed to upload imag: ", error);
      }}
    />
  );
}

export default ImageUpload;
