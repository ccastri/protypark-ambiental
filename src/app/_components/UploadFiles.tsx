import { MouseEventHandler, useState } from "react";
// Interface para el tipo de archivo: es un string o uno de los tipos dentro del AcceptedFileType
interface UploaderProps {
  fileType?: string | AcceptedFileType[];
}

enum AcceptedFileType {
  Text = ".txt",
  Gif = ".gif",
  Jpeg = ".jpg",
  Png = ".png",
  Doc = ".doc",
  Pdf = ".pdf",
  AllImages = "image/*",
  AllVideos = "video/*",
  AllAudios = "audio/*"
}
// Los props son del tipo de la interface UploaderProps
// registerForm: string, name: string, validator: string
export const Upload = (fileType: UploaderProps, ) => {
    // Desestructuro el fileType de la interface
  // const { fileType } = props;
//   Defino los formatos aceptados: Tipo string o cualquiera de la lista de enum AcceptedFileType
  const acceptedFormats: string | AcceptedFileType[] =
    typeof fileType === "string"
      ? fileType
      : Array.isArray(fileType)
      ? fileType?.join(",")
      : AcceptedFileType.Text;
    //   El tipo de archivo es igual a un string? entonces devuelva el tipo del archivo, 
    //   sino, es un array del tipo de alguna de las opciones de fileType?  entonces si existe el tipo del archivo separelo por una coma
    //   Si no cumple ninguna de las condiciones anteriores es un archivo de texto


    // Defino un estado para almacenar los archivos, como inicalmente no hay nada el estado es undefined
  const [selectedFiles, setSelectedFiles] = useState<File | undefined>(
    undefined
  );
// Actualizar el estado con el archivo seleccionado  si hay un evento cuando alguien esta cargando el archivo
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {

    setSelectedFiles(event?.target?.files?.[0]);
  };
// Mostrame pues que estas cargando un objeto tipo file hacela realllll
  const onUpload = () => {

    console.log(selectedFiles);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
        <div className="w-full border border-gray-400 py-16 rounded-lg flex flex-col items-center justify-center space-y-4">
          {!selectedFiles?.name && <p className="text-gray-500">Drag and drop your file here or click to browse</p>}
          {selectedFiles?.name && <p className="text-gray-500">{selectedFiles?.name}</p>}
          <input
            className="hidden"
            type="file"
            accept={acceptedFormats}
            onChange={handleFileSelect}
          />
        </div>
        {selectedFiles?.name && (
          <div className="flex w-full justify-end space-x-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => setSelectedFiles(undefined)}
            >
              Clear
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={onUpload}
            >
              Upload
            </button>
          </div>
        )}
    </div>
  );
};
