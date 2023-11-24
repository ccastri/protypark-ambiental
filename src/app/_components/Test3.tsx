import { useState, useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { addAfiliado } from '../../../redux/selectedUserReducer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store'; // Asegúrate de importar correctamente el RootState
import { Upload } from './UploadFiles';
import { FileUploader } from './DragAndDrop';
import axios from'axios'

// Definición de la interfaz para representar un afiliado
export interface Afiliado {
    id: number;
    primer_nombre: string;
    primer_apellido:string;
    identificacion: number;
    tipo_identificacion: string;
    afp: string;
  // ... Otras propiedades de Afiliado
}

// Definición de la interfaz para representar un documento de afiliado
export interface DocumentoAfiliado {
  id:number;
  tipo_identificacion: string;
  identificacion: number;
}
// Función que devuelve la lista de afiliados según el tipo de planilla
const ListaPorTipoPlanilla = ({ afiliados, handleAfiliadoSeleccionado }: any) => {
  return (
    <ul className='space-y-2 '>
      {afiliados.map((afiliado: Afiliado, index: number) => (
        <li key={index}>
          <div className={`${afiliado.afp !== null ? 'bg-green-500 ' : 'bg-red-500'} border-2 items-center hover:opacity-80 button-hovered text-[#fafafa] flex flex-col h-auto rounded-full px-4 py-2`} onClick={() => handleAfiliadoSeleccionado(afiliado.id, afiliado.tipo_identificacion, afiliado.identificacion)}>
            <>{afiliado.id}. {afiliado.primer_nombre} {afiliado.primer_apellido} {afiliado.tipo_identificacion}  {afiliado.identificacion}</>
            <span className="items-center flex justify-center w-full">{afiliado.afp !== null ? 'E' : 'N'}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

const ListaAfiliados = ({ handleAfiliadoSeleccionado }: { handleAfiliadoSeleccionado: (id: number, tipoIdentificacion: string, identificacion:number) => void }) => {
  const [afiliados, setAfiliados] = useState<Afiliado[]>([]);
  const [pagination, setPagination] = useState({ skip: 0, limit: 10 });
  const [afiliadosConPlanilla, setAfiliadosConPlanilla] = useState<Afiliado[]>([]);
  const [afiliadosSinPlanilla, setAfiliadosSinPlanilla] = useState<Afiliado[]>([]);

  useEffect(() => {
    const fetchAfiliados = async () => {
      try {
        const response = await fetch(`http://localhost:8000/afiliados/?skip=${pagination.skip}&limit=${pagination.limit}`);
        if (!response.ok) {
          throw new Error('Error al obtener los afiliados');
        }
        const data: Afiliado[] = await response.json();
        setAfiliados(data);

        // Filtrar afiliados por tipo de planilla (afp no es null o es null)
        const afiliadosCon = data.filter((afiliado) => afiliado.afp !== null);
        const afiliadosSin = data.filter((afiliado) => afiliado.afp === null);

        setAfiliadosConPlanilla(afiliadosCon);
        setAfiliadosSinPlanilla(afiliadosSin);
      } catch (error) {
        console.error(error);
        // Manejo de errores
      }
    };

    fetchAfiliados();
  }, [pagination]);

  const handleNextPage = () => {
    setPagination((prevPagination) => ({ ...prevPagination, skip: prevPagination.skip + prevPagination.limit }));
  };

  const handlePreviousPage = () => {
    if (pagination.skip >= pagination.limit) {
      setPagination((prevPagination) => ({ ...prevPagination, skip: prevPagination.skip - prevPagination.limit }));
    }
  };

  return (
    <div className='border-2 flex flex-col w-full items-center justify-center h-auto py-8 space-y-2'>
      <h1>Lista de Afiliados</h1>
      <div className="flex items-center justify-evenly h-auto mx-auto w-10/12 space-x-8">

      <div className='p-2 space-y-4 border-2  w-12/12'>
        <h2 className='text-center '>Planilla E: con pensión</h2>
        <ListaPorTipoPlanilla afiliados={afiliadosConPlanilla} handleAfiliadoSeleccionado={handleAfiliadoSeleccionado} />
      </div>
      <div  className='p-2 space-y-4 w-12/12'>
        <h2 className='text-center'>Planilla N: sin pensión</h2>
        <ListaPorTipoPlanilla afiliados={afiliadosSinPlanilla} handleAfiliadoSeleccionado={handleAfiliadoSeleccionado} />
      </div>
      </div>
      <div className='flex w-auto space-x-32 p-4 items-center justify-evenly'>
        <span className='border-2 py-2 px-4 rounded-full border-[#000f] text-xl button-hovered' onClick={handlePreviousPage}>
          Anterior
        </span>
        <span className='border-2 py-2 px-4 rounded-full bg-[#000f] text-[#fafafa] text-xl   button-hovered' onClick={handleNextPage}>
          Siguiente
        </span>
      </div>
    </div>
  );
};

// export default ListaAfiliados;
// const ListaAfiliados = ({ handleAfiliadoSeleccionado }: { handleAfiliadoSeleccionado: (id: number, tipoIdentificacion: string, identificacion:number) => void }) => {
//   const [afiliados, setAfiliados] = useState<Afiliado[]>([]);
//   const [pagination, setPagination] = useState({ skip: 0, limit: 10 });


//   useEffect(() => {
//     const fetchAfiliados = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/afiliados/?skip=${pagination.skip}&limit=${pagination.limit}`);
//         if (!response.ok) {
//           throw new Error('Error al obtener los afiliados');
//         }
//         const data: Afiliado[] = await response.json();
//         setAfiliados(data);
//       } catch (error) {
//         console.error(error);
//         // Manejo de errores
//       }
//     };

//     fetchAfiliados();
//   }, [pagination]);

//   const handleNextPage = () => {
//     setPagination((prevPagination) => ({ ...prevPagination, skip: prevPagination.skip + prevPagination.limit }));
//   };

//   const handlePreviousPage = () => {
//     if (pagination.skip >= pagination.limit) {
//       setPagination((prevPagination) => ({ ...prevPagination, skip: prevPagination.skip - prevPagination.limit }));
//     }
//   };

//   return (
//     <div className='border-2 flex flex-col w-full items-center justify-center space-y-4'>
//       <h1>Lista de Afiliados</h1>
//       <ul>
//         {afiliados.map((afiliado, index) => (
//           <li key={index}>
//             <div className={`${afiliado.afp !== null ? 'bg-green-500': 'bg-red-500'} border-2 py-2`} onClick={() => handleAfiliadoSeleccionado(afiliado.id, afiliado.tipo_identificacion, afiliado.identificacion)}>
//                 {afiliado.id}. {afiliado.primer_nombre}{ afiliado.primer_apellido} ID: {afiliado.identificacion}, Tipo: {afiliado.tipo_identificacion}, Tipo Planilla: {afiliado.afp !== null ? 'E': 'N'}
//             </div>
//           </li>
//         ))}
//       </ul>
//       <div className = "flex w-auto space-x-8 items-center justify-evenly">

//       <span className="border-2 py-2 px-3 rounded-full border-[#000f] " onClick={handlePreviousPage}>Anterior</span>
//       <span className="border-2 py-2 px-4 rounded-full bg-[#000f] text-[#fafafa] text-xl font-semibold" onClick={handleNextPage}>Siguiente</span>
//       </div>
//     </div>
//   );
// };

const DocumentosAfiliados = ({ documentosAfiliados }: { documentosAfiliados: DocumentoAfiliado[] }) => {
    console.log(documentosAfiliados)
    const selectedAfiliados = useSelector((state: RootState) => state.selectedUser.selectedAfiliados);
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
  return (
    <div className="flex flex-col w-full h-full py-4 border-2">
      <h1>Documentos de Afiliados Seleccionados</h1>
      <div className="w-full h-full border-2">
        {/* <div className> */}
        {selectedAfiliados.length> 0 &&

 (       <>
   <div className="flex items-center justify-center space-x-4">
            <h2>Tipo de Documento</h2>
            <h2>Número de Documento</h2>
          </div>
        <div className="h-full w-full border-2 ">
{selectedAfiliados.map((afiliado, index) => (
  <div className='w-full space-x-2 flex  items-center justify-center h-auto border-2-black' key={index}>
            <p className="w-auto text-center border-green-500">{afiliado.tipo_identificacion}</p>
            <p className="w-auto">{afiliado.identificacion}</p>
          </div>
        ))}
        </div>
        <div onClick={handleConvertirAXLS} className='border- w-auto items-center flex justify center rounded-full p-4 bg-green-300 text-gray-500'>Convertir a xls</div>
        </>
        )
      }
        
          <div className="w-4/12 items-center text-center flex mx-auto">
          <FileUploader onUpload={()=>{}}/>
        </div>
        
        </div>
    </div>
  );
};

const TuComponentePrincipal = () => {
  const [documentosAfiliados, setDocumentosAfiliados] = useState<DocumentoAfiliado[]>([]);
    const dispatch = useDispatch();
// const [state, dispatch] = useReducer(documentosReducer, { documentosAfiliados: [] });


  const handleAfiliadoSeleccionado = async (id: number, tipoIdentificacion: string, identificacion:number) => {
    try {
      const response = await fetch(`http://localhost:8000/afiliados/documentos/?selected_ids=${id}`); // Ruta de tu API para obtener los documentos de un afiliado específico
      if (!response.ok) {
        throw new Error('Error al obtener los documentos del afiliado');
      }
      const data: DocumentoAfiliado = await response.json();
      const afiliadoSeleccionado = { id, tipo_identificacion: tipoIdentificacion, identificacion: identificacion };
    //   setDocumentosAfiliados(prevDocumentos => [...prevDocumentos, data])
      console.log(documentosAfiliados)
          // Agregar el afiliado seleccionado al estado de Redux
    dispatch(addAfiliado(afiliadoSeleccionado));
    } catch (error) {
      console.error(error);
      // Manejo de errores
    }
  };

  return (
    <div className="space-y-4">
      <ListaAfiliados handleAfiliadoSeleccionado={handleAfiliadoSeleccionado} />
      <DocumentosAfiliados documentosAfiliados={documentosAfiliados} />
    </div>
  );
};

export default TuComponentePrincipal;
