import { useState, useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { addAfiliado } from '../../../redux/selectedUserReducer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store'; // Asegúrate de importar correctamente el RootState

// Definición de la interfaz para representar un afiliado
export interface Afiliado {
    id: number;
    primer_nombre: string;
    primer_apellido:string;
    identificacion: number;
    tipo_identificacion: string;
  // ... Otras propiedades de Afiliado
}

// Definición de la interfaz para representar un documento de afiliado
export interface DocumentoAfiliado {
  tipo_identificacion: string;
  identificacion: number;
}

const ListaAfiliados = ({ handleAfiliadoSeleccionado }: { handleAfiliadoSeleccionado: (id: number, tipoIdentificacion: string, identificacion:number) => void }) => {
  const [afiliados, setAfiliados] = useState<Afiliado[]>([]);
  const [pagination, setPagination] = useState({ skip: 0, limit: 10 });


  useEffect(() => {
    const fetchAfiliados = async () => {
      try {
        const response = await fetch(`http://localhost:8000/afiliados/?skip=${pagination.skip}&limit=${pagination.limit}`);
        if (!response.ok) {
          throw new Error('Error al obtener los afiliados');
        }
        const data: Afiliado[] = await response.json();
        setAfiliados(data);
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
    <div className='border-2 flex flex-col  items-center justify-center space-y-4'>
      <h1>Lista de Afiliados</h1>
      <button onClick={handlePreviousPage}>Anterior</button>
      <button onClick={handleNextPage}>Siguiente</button>
      <ul>
        {afiliados.map((afiliado, index) => (
          <li key={index}>
            <div className="border-2 py-2" onClick={() => handleAfiliadoSeleccionado(afiliado.id, afiliado.tipo_identificacion, afiliado.identificacion)}>
                {afiliado.id}. {afiliado.primer_nombre}{ afiliado.primer_apellido} ID: {afiliado.identificacion}, Tipo: {afiliado.tipo_identificacion}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DocumentosAfiliados = ({ documentosAfiliados }: { documentosAfiliados: DocumentoAfiliado[] }) => {
    console.log(documentosAfiliados)
    const selectedAfiliados = useSelector((state: RootState) => state.selectedUser.selectedAfiliados);
  return (
    <div className="flex flex-col w-full h-full py-4 border-2">
      <h1>Documentos de Afiliados Seleccionados</h1>
      <div className="w-full h-full border-2">
        {/* <div className> */}
          <div className="flex items-center justify-center space-x-4">
            <h2>Tipo de Documento</h2>
            <h2>Número de Documento</h2>
          </div>
        </div>
        <div className="h-full w-full border-2 ">
{selectedAfiliados.map((afiliado, index) => (
          <div className='w-full space-x-2 flex  items-center justify-center h-auto border-2-black' key={index}>
            <p className="w-auto text-center border-green-500">{afiliado.tipo_identificacion}</p>
            <p className="w-auto">{afiliado.identificacion}</p>
          </div>
        ))}
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
