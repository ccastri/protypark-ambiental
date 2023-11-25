import axios from 'axios';
import { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
interface FileUploaderProps {
  onUpload: (files: File[]) => void;
  handleClick: ()=>void
}

export const FileUploader: React.FC<FileUploaderProps> = ({ onUpload, handleClick }) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Establecer el archivo recién aceptado como el único archivo en el estado
      setFiles([...acceptedFiles]);
      // Enviar solo el archivo recién aceptado
      onUpload(acceptedFiles);
    },
    [onUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
console.log(files)
  const filesPreview = useMemo(
    () =>
      files.map((file) => (
        <li key={file.name}>
          {file.name} - {file.size} bytes
        </li>
      )),
    [files]
  );

  return (
    <div className='flex h-auto flex-col'>
    <div className='border-2 border-red-500 bg-slate-400 relative h-72 flex flex-col justify-center items-center'>
      <div {...getRootProps() }
      className='flex flex-col justify-center  px-8 items-center border-2 border-sky-900 h-full '
      >
        <input {...getInputProps() }className='h-full border-2 border-red-500' /><span className=' border-2 border-black rounded-full my-0 p-1'>
          {/* <CloudUploadIcon sx={{fontSize:'30px'}} className='text-white  items-center border-2 rounded-full border-gray-400'/> */}
          </span>
        <p>Drag and drop some files here, or click to select files</p>
      </div>
    </div>
      <div className='flex flex-col text-italic  my-auto  h-auto  border-2 border-black  flex-wrap'>
        <span>{filesPreview}</span>
        </div>

        <div className="border-2 rounded-full p-2 bg-blue-500 cursor-pointer" onClick={handleClick}><>Adivina quienes son estos afiliados!</></div>
        </div>
  );
};