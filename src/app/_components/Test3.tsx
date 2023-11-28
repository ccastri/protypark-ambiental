import { useState, useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { addAfiliado, removeAfiliado } from '../../../redux/selectedUserReducer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store'; // Asegúrate de importar correctamente el RootState
import { Upload } from './UploadFiles';
import { FileUploader } from './DragAndDrop';
import axios from'axios'
import GraficaAfiliados from './GraficasAfiliados';
import UserDataDisplay from './Profile';

// Definición de la interfaz para representar un afiliado
export interface Afiliado {
    id: number;
    primer_nombre: string;
    primer_apellido:string;
    identificacion: number;
    tipo_identificacion: string;
    afp: string;
    estado: string;
    eps:string;
  // ... Otras propiedades de Afiliado
}

// Definición de la interfaz para representar un documento de afiliado
export interface DocumentoAfiliado {
  id:number;
  tipo_identificacion: string;
  identificacion: number;
  afp: string
}
// Función que devuelve la lista de afiliados según el tipo de planilla
// const ListaPorTipoPlanilla = ({ afiliados, handleAfiliadoSeleccionado }: any) => {
//   return (
//     <ul className='space-y-2 '>
//       {afiliados.map((afiliado: Afiliado, index: number) => (
//         <li key={index}>
//           <div className=>
//             <>{afiliado.id}. {afiliado.primer_nombre} {afiliado.primer_apellido} {afiliado.tipo_identificacion}  {afiliado.identificacion}{afiliado.afp} </>
//             <span className="items-center flex justify-center w-full">{afiliado.afp !== null ? 'E' : 'N'}</span>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

const ListaAfiliados = ({ handleAfiliadoSeleccionado }: { handleAfiliadoSeleccionado: (id: number, tipoIdentificacion: string, identificacion:number, afp: string) => void }) => {
  const [afiliados, setAfiliados] = useState<Afiliado[]>([]);
  const [pagination, setPagination] = useState({ skip: 0, limit: 5 });
  const [combinedAfiliados, setCombinedAfiliados] = useState<Afiliado[]>([]);
    const [totalAfiliados, setTotalAfiliados] = useState(0);

  useEffect(() => {
    const fetchAfiliados = async () => {
      try {
        const response = await fetch(`http://localhost:8000/afiliados/?skip=${pagination.skip}&limit=${pagination.limit}`);
        if (!response.ok) {
          throw new Error('Error al obtener los afiliados');
        }
        const data = await response.json();
        // console.log(data)
        setAfiliados(data.afiliados); // Asigna los afiliados desde la respuesta del backend
        setTotalAfiliados(data.cantidad); // Asigna el número total de afiliados desde la resp

        // Combinar los afiliados con y sin planilla en un solo array
        const afiliadosCon:Afiliado[] = data.afiliados.filter((afiliado:Afiliado) => afiliado.afp !== null).map((afiliado:Afiliado) => ({ ...afiliado, tipoPlanilla: 'E' }));
        const afiliadosSin:Afiliado[] = data.afiliados.filter((afiliado:Afiliado) => afiliado.afp === null).map((afiliado:Afiliado) => ({ ...afiliado, tipoPlanilla: 'N' }));

        setCombinedAfiliados([...afiliadosCon, ...afiliadosSin]);
      } catch (error) {
        console.error(error);
        // Manejo de errores
      }
    };

    fetchAfiliados();
  }, [pagination]);
// console.log
  const handleNextPage = () => {
    const newSkip = pagination.skip + pagination.limit;
    if (newSkip < totalAfiliados) {
      setPagination((prevPagination) => ({ ...prevPagination, skip: newSkip }));
    }
  };

  const handlePreviousPage = () => {
    const newSkip = pagination.skip - pagination.limit;
    if (newSkip >= 0) {
      setPagination((prevPagination) => ({ ...prevPagination, skip: newSkip }));
    }
  };

  return (
    <>
    <UserDataDisplay/>
    <div 
    id="lista-afiliados"
    className='border-2 flex flex-col w-full items-center justify-center h-auto py-8 space-y-2 bg-blue-100'>
      <h1 className='text-green-600 text-left w-full border-2 font-bold text-3xl pt-6 px-20 mb-4'>Lista de Afiliados</h1>
      <div className="flex w-full space-x-20 px-20">
      <h2 className="w-56 text-3xl opacity-60 font-semibold">1. Selecciona los afiliados de tu listado para consultar la planilla en simple</h2>
      <div className='p-2 space-y-4 border-2 flex flex-col w-12/12 bg-white rounded-md shadow-md'>
        <div className='p-2 space-y-4 border-2 flex  flex-col w-12/12'>
          <h2 className='text-center text-red-600 font-semibold text-xl'>Informacion Afiliados</h2>
          <p>Para buscar más rápido puedes usar los siguientes filtros de busqueda:</p>
<div className="flex justify-between space-x-8">  
   <label className="px-2 items-center flex"> Orden alfabético <span className="px-2 relative">
    <select 
className="p-2 border-2 cursor-pointer rounded-full border-[#000f] bg-[#fafafa]"
onChange={(e) => setPagination({ ...pagination, limit: parseInt(e.target.value) })}>
  <option value="A-Z">A-Z</option>
  <option value="Z-A">Z-A</option>

</select>
</span>
    
</label>
  <label className="px-2 items-center flex"> EPS <span className="px-2"><select 
className="p-2 border-2 cursor-pointer rounded-full border-[#000f] bg-[#fafafa]"
onChange={(e) => setPagination({ ...pagination, limit: parseInt(e.target.value) })}>
  <option value="SOS EPS">SOS EPS</option>
  <option value="SALUD TOTAL EPS">SALUD TOTAL EPS</option>
  <option value="EPS SANITAS">EPS SANITAS</option>
  <option value="EPS SURA">EPS SURA</option>
  <option value="NUEVA EPS">NUEVA EPS</option>
  <option value="EMSSANAR EPS">EMSSANAR EPS</option>
  <option value="COMFENALCO VALLE EPS">COMFENALCO VALLE EPS</option>
  <option value="EPS-S COOSALUD">EPS-S COOSALUD</option>
  {/* Add more options as needed */}
</select></span></label>
  <label className="px-2 items-center flex"> AFP <span className="px-2"><select 
className="p-2 border-2 cursor-pointer rounded-full border-[#000f] bg-[#fafafa]"
onChange={(e) => setPagination({ ...pagination, limit: parseInt(e.target.value) })}>
  <option value="COLPENSIONES">COLPENSIONES</option>
  <option value="PROTECCION">PROTECCION</option>
  <option value="PORVENIR">PORVENIR</option>
  <option value="COLFONDOS">COLFONDOS</option>
</select></span></label>
  {/* <label className="px-2 flex"> <input className="pl-2" type="checkbox" id="riesgo"/> <span className="px-2">RIESGO</span></label> */}
  </div>
  <div className=" justify-between items-center flex p-4">

  <label className="px-2 flex items-center justify-center space-x-6"><span className="bg-blue-200  text-gray-700  px-2 space-x-4 shadow-md rounded-lg"
>Número de Cédula</span> <input className="w-44 border-2 rounded-full" type="text" id="numeroCedula"/> </label>
  <label><span className="px-2">RIESGO</span>

  <select 
className=" border-2 rounded-full space-x-2 p-2 bg-[#fafafa]">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  {/* Add more options as needed */}
</select>
  </label>
  </div>
          <table className="w-full">
            <thead className=''>
              <tr className=" w-full ">
                <th className="border-2 border-gray-700 px-4">Nombre</th>
                <th className="border-2 border-gray-700 px-4">Tipo <br/> Documento</th>
                <th className="border-2 border-gray-700 px-4">Identificación</th>
                <th className="border-2 border-gray-700 px-4">AFP</th>
                <th className="border-2 border-gray-700 px-4">Estado</th>
                <th className="border-2 border-gray-700 px-4">Acciones</th>
                
              </tr>
            </thead>
            <tbody>
              {combinedAfiliados.map((afiliado, index) => (
                // <div key={index} onClick={handleAfiliadoSeleccionado(index, afiliado.primer_nombre, afiliado.identificacion, afiliado.afp)}  className="flex flex-col">
                <tr key={index} 
                onClick={()=>handleAfiliadoSeleccionado(index, afiliado.tipo_identificacion, afiliado.identificacion, afiliado.afp)}
                 className={`${afiliado.afp !== null ? 'bg-red-200' : 'bg-green-200'} hover:bg-yellow-200 transition duration-300 cursor-pointer space-x-12`}>
                  <td className=" text-center button-hovered">{afiliado.primer_nombre} {afiliado.primer_apellido}</td>
                  <td className=" text-center button-hovered">{afiliado.tipo_identificacion}</td>
                  <td className=" text-center button-hovered">{afiliado.identificacion}</td>
                  <td className=" text-center button-hovered">{afiliado.afp ? 'E': 'N'}</td>
                  <td className= {` text-center button-hovered `}><div className= {`${afiliado.estado === 'Activo'? 'bg-green-500 ' :'bg-red-500'} rounded-full text-center button-hovered `}>{afiliado.estado}</div></td>
                  <td><div className="w-3/12 flex items-center justify-between  p-4 space-x-4 right-0">
            <span className=" p-4 h-12 flex w-12 text-center items-center justify-center border-2 rounded-full">Editar</span>
            <span className=" p-4 h-12 flex w-12 text-center items-center justify-center border-2 rounded-full">Ver</span>
            <span className=" p-4 h-12 flex w-12 text-center items-center justify-center border-2 rounded-full">Copiar</span>
          </div></td>
          
                </tr>
                // </div>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
      <div className='flex w-auto space-x-32 p-4 items-center justify-evenly'>
        <span className='border-2 py-2 px-4 rounded-full border-[#000f] text-xl button-hovered' onClick={handlePreviousPage}>
          Anterior
        </span>
<select 
className="p-3 border-2 cursor-pointer rounded-full border-[#000f] bg-[#fafafa] "
onChange={(e) => setPagination({ ...pagination, limit: parseInt(e.target.value) })}>
  <option value="5">5</option>
  <option value="10">10</option>
  <option value="20">20</option>
  <option value="30">30</option>
  {/* Add more options as needed */}
</select>

        <span className='border-2 py-2 px-4 rounded-full bg-[#000f] text-[#fafafa] text-xl button-hovered' onClick={handleNextPage}>
          Siguiente
        </span>
      </div>
    </div>
    <div className="grid grid-cols-3">

    <GraficaAfiliados datosAfiliados={afiliados}/>
    <GraficaAfiliados datosAfiliados={afiliados}/>
    <GraficaAfiliados datosAfiliados={afiliados}/>
    <GraficaAfiliados datosAfiliados={afiliados}/>
    <GraficaAfiliados datosAfiliados={afiliados}/>
    <GraficaAfiliados datosAfiliados={afiliados}/>
    </div>
  </>
  
  );
};

// export default ListaAfiliados;


const DocumentosAfiliados = ({ documentosAfiliados }: { documentosAfiliados: DocumentoAfiliado[] }) => {
    console.log(documentosAfiliados)
      const [files, setFiles] = useState<File[]>([]);
      const [filesToEmail, setFilesToEmail] = useState<File[]>([]);
    const selectedAfiliados = useSelector((state: RootState) => state.selectedUser.selectedAfiliados);
        const dispatch = useDispatch();
const handleConvertirAXLS = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/generar-xls', { selectedAfiliados }, {
      responseType: 'blob', // Indicar que esperamos un archivo binario (blob)
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'datos.xls');

    // Verificar si link.parentNode es null antes de realizar operaciones con él
    if (document.body) {
      document.body.appendChild(link);
      link.click();
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    }
  } catch (error) {
    console.error('Error al convertir a XLS', error);
  }
};
const handleClick = async () => {
  try {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('uploaded_file', file);
    });

    // Enviar el estado 'files' al endpoint de tu API
    const response = await axios.post('http://localhost:8000/afiliados-zip', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      responseType: 'blob', // Esperamos un tipo de respuesta Blob (archivo binario)
    });

    // Crear un objeto URL para el Blob de la respuesta
    const blob = new Blob([response.data], { type: 'application/zip' });
    const url = window.URL.createObjectURL(blob);

    // Crear un enlace (link) para la descarga
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'archivos_renombrados.zip');
    document.body.appendChild(link);

    // Simular clic en el enlace para iniciar la descarga
    link.click();

    // Limpiar recursos después de la descarga
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error al enviar los archivos:', error);
    // Manejar errores
  }
};
const handleSubmitEmails = async () => {
  try {
    const formData = new FormData();
    filesToEmail.forEach((file) => {
      formData.append('uploaded_file', file);
    });

    const response = await axios.post('http://localhost:8000/enviar-archivos', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Respuesta del servidor:', response.data);

    // Aquí puedes manejar la respuesta del servidor según sea necesario
    // Por ejemplo, mostrar un mensaje de éxito al usuario
  } catch (error) {
    console.error('Error al enviar los archivos:', error);
    // Manejar errores
    // Por ejemplo, mostrar un mensaje de error al usuario
  }
};
  const handleRemoveAfiliado = (id: number) => {
    dispatch(removeAfiliado(id));
  };
return (
<div className="flex flex-col  w-full items-center justify-center my-auto  h-auto py-20 border-2 bg-gray-300">
  <h1 className="text-center  text-3xl mb-4">Documentos de Afiliados Seleccionados</h1>
  <h6 className="text-center text-xl mb-4">Este es el listado de cedulas que necesitas cargar en simple para descargar el listado de planillas en pdf correspondiente <br/> <span className="font-bold underline">presiona el boton de convertir a xls</span> para descargar un archivo de excel con el formato requerido</h6>
  <div className="w-full h-screen border-2 cursor-pointer">
    {selectedAfiliados.length > 0 && (
      <div id="seleccion-descarga" className="">
        <div className="flex items-center justify-center space-x-4 bg-gray-300 p-2 border-b-2">
          <h2 className="w-1/2 text-center">Tipo de Documento</h2>
          <h2 className="w-1/2 text-center">Número de Documento</h2>
        </div>
        <div className="h-full w-full border-2">
          {selectedAfiliados.map((afiliado, index) => (
            <div
              className="w-full flex items-center justify-center h-auto border-b-2 transition-colors duration-300 hover:bg-red-200"
              key={index}
              onClick={() => handleRemoveAfiliado(afiliado.id)}
            >
              <p className="w-1/2 text-center">{afiliado.tipo_identificacion}</p>
              <p className="w-1/2 text-center">{afiliado.identificacion}</p>
            </div>
          ))}
        </div>
        <div
          onClick={handleConvertirAXLS}
          className="flex items-center justify-center pb-20 mt-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="border-2 w-auto flex justify-center rounded-full p-4 bg-green-300 text-gray-500">
            Convertir a xls
          </span>
        </div>
      </div>
    )}


      <div className="flex flex-col  h-auto  text-center">
        <div className="flex h-screenp-8 flex-col">
        {/* <h2>{`Aqui puedes cargar archivos para formatear el nombre y preparar envío de notificación de pago. Presiona aquí si estás seguro.`}</h2> */}
            <span>3. En esta seccion prepararás tus archivos. Debes usar el archivo obtenido en la pagina de simple con las planillas de tus afiliados   </span>
            <><br/> Usa el espacio para carga de imagenes (parte izquierda) y presiona el boton procesar los archivos</>
        <div 
        id="renombrar-planillas"
        className="items-center  text-center flex py-8 mx-auto h-full space-x-8 px-12 border-2 w-full">
          <FileUploader
            onUpload={() => {}}
            name={'para renombrar'}
            handleClick={handleClick}
            files={files}
            setFiles={setFiles}
            />

        </div>
        </div>
        <div 
        id="enviar-correos"
        className=" text-center h-auto flex flex-col ">
        <div className="flex h-screenp-8 flex-col">
                      <div className="flex flex-col p">
            <span className="underline p-12">4. En esta seccion enviarás emails a tu listado de afiliados:   </span>
            <><br/> Usa el espacio para carga de imagenes (parte izquierda) y carga el archivo .zip con el listado de pdfs renombrados <br/>
            <span className="text-red-500 font-bold font-3xl">¡NO OLVIDES QUE DEBE CONTENER EL ARCHIVO DE EXCEL OBTENIDO EN EL PASO ANTERIOR! </span>
            Presiona el boton enviarás un correo con el archivo pdf de la planilla a cada afiliado contenido en el excel</>
            </div>
          <FileUploader
            onUpload={() => {}}
            name={'para enviar correos'}
            handleClick={handleSubmitEmails}
            files={filesToEmail}
            setFiles={setFilesToEmail}
          />
        </div>
        </div>
      </div>
    </div>
  </div>
);
            }

const TuComponentePrincipal = () => {
  const [documentosAfiliados, setDocumentosAfiliados] = useState<DocumentoAfiliado[]>([]);
    const dispatch = useDispatch();
// const [state, dispatch] = useReducer(documentosReducer, { documentosAfiliados: [] });


const handleAfiliadoSeleccionado = async (id: number, tipoIdentificacion: string, identificacion: number, afp: string) => {
  try {
    const response = await fetch(`http://localhost:8000/afiliados/documentos/?selected_ids=${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener los documentos del afiliado');
    }
    const data: DocumentoAfiliado = await response.json();
    
    // const { afp, ...rest } = data; // Suponiendo que el campo `afp` está presente en la respuesta
    
    const afiliadoSeleccionado = { id, tipo_identificacion: tipoIdentificacion, identificacion: identificacion, afp: afp };
    console.log(afiliadoSeleccionado); // Asegúrate de que el campo `afp` esté en la respuesta
    console.log(data); // Asegúrate de que el campo `afp` esté en la respuesta
    
    dispatch(addAfiliado(afiliadoSeleccionado));
  } catch (error) {
    console.error(error);
    // Manejo de errores
  }
};


  return (
    <div className="space-y-4 h-full ">
      <ListaAfiliados handleAfiliadoSeleccionado={handleAfiliadoSeleccionado} />
      <DocumentosAfiliados documentosAfiliados={documentosAfiliados} />
    </div>
  );
};

export default TuComponentePrincipal;
