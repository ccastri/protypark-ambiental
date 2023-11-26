import axios from 'axios';
import { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileUploaderProps {
  onUpload: (files: File[]) => void;
  handleClick: () => void;
  files: File[] | null;
  setFiles: any;
  name: string;
}

export const FileUploader: React.FC<FileUploaderProps> = ({ onUpload, handleClick, files, setFiles , name}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles([...acceptedFiles]);
      onUpload(acceptedFiles);
    },
    [onUpload, setFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const filesPreview = useMemo(
    () =>
      files &&
      files.map((file) => (
        <li key={file.name}>
          {file.name} - {file.size} bytes
        </li>
      )),
    [files]
  );

  return (
    <div className="flex h-full space-x-12  w-full">
      {/* File uploader */}
      <div className="bg-gradient-to-br from-blue-100 to-green-100 text-gray-800 p-20 items-center group justify-center my-auto mx-auto w-10/12 shadow-md rounded-lg cursor-pointer h-auto transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-900 hover:shadow-lg hover:from-blue-200 hover:to-green-200">
        <div {...getRootProps()} className="flex flex-col justify-center px-8 items-center h-full ">
          <input {...getInputProps()} className="h-full border-2 border-gray-400" />
          <span className="rounded-full h-full my-auto flex justify-center p-1"></span>
          <p>
            <span className=' group-hover:underline hover:w-100 w-0 transition transform duration-200 group-hover:ease-in-out'>Haz clic aquí</span> para cargar o <span className='group-hover:text-gray-700 group-hover:underline'>arrastra </span> <span className="text-blue-500 underline">un_archivo.zip</span> que contenga <span className="text-green-500 underline">información de los afiliados</span>
          </p>
        </div>
      </div>

      {/* File preview */}
      <div className="flex flex-col text-italic my-auto h-full flex-wrap">
        {filesPreview}
      </div>

      {/* Button */}
      <span
        className=" group bg-gradient-to-br h-20 bottom-0 py-20 px-2 opacity-60 from-blue-200 to-green-200 text-gray-800  items-center justify-center my-auto mx-auto w-10/12 shadow-md rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:filter hover:brightness-110 hover:text-xl hover:text-gray-600 hover:opacity-100 group"
        onClick={handleClick}
      >
        <span className='text-gray-700 text-center  group-hover:text-gray-700 text-xl font-bold transition-all duration-400 transform group-hover:underline w-0 group-hover:w-full'>¡Presiona aquí</span> {name}
      </span>
    </div>
  );
};