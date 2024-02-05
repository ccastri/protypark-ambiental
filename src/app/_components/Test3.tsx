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
import OverlappedBarChart from './OverlappedBarChart';
import { ArrowDownwardOutlined, ArrowDropDown, ArrowDropUp, ReportOffOutlined } from '@mui/icons-material';
import CircularProgressBar from './ProgressBar';
// import { selectAuthUser } from '../../../redux/authSlice';

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

const ListaAfiliados = ({ handleAfiliadoSeleccionado }: { handleAfiliadoSeleccionado: (id: number, tipoIdentificacion: string, identificacion:number, afp: string) => void }) => {
  const [afiliados, setAfiliados] = useState<Afiliado[]>([]);
  const [pagination, setPagination] = useState({ skip: 0, limit: 5 });
  const [combinedAfiliados, setCombinedAfiliados] = useState<Afiliado[]>([]);
  // const dispatch = useDispatch()
  //  const user = useSelector(selectAuthUser);

  // Extrae el campo role del objeto user
  // const role = user?.role || 'No Role';

    const [totalAfiliados, setTotalAfiliados] = useState(0);
const [filtros, setFiltros] = useState<any>({
  orden: '',
  // eps: '',
  afp: '',
  identificacion: '',
  // riesgo: null,
});

// Función para manejar cambios en los filtros
const handleFilterChange = (filterName: string, value: string) => {
  const parsedValue = value === 'null' ? null : value;
  setFiltros({ ...filtros, [filterName]: parsedValue });
};


  useEffect(() => {
    const fetchAfiliados = async () => {
      try {
          const queryParams = new URLSearchParams(filtros);

    const response = await fetch(`http://localhost:8000/afiliados/?skip=${pagination.skip}&limit=${pagination.limit}&${queryParams.toString()}`);
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
  }, [pagination, filtros]);
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
    {/* <UserDataDisplay/> */}
{/* <>Probando hot  reload 2.0 por que no refrescaasdssfkfsa</> */}
    {/* <>{user?.role}</> */}
    <div 
    id="lista-afiliados"
    className='border-2 text-gray-900 flex flex-col w-full items-center justify-center h-auto py-8 space-y-2 bg-[#E2E2E2]'>
      <h1 className='text-gray-900 text-left w-full  font-bold text-3xl text-center pt-6 px-20 mb-4'>Lista de Estaciones</h1>
      <div className="flex flex-col w-full ">
      <h2 className="w-auto text-gray-900 text-xl  font-semibold px-6 text-center pb-12">1. Selecciona una estación para ver el detalle</h2>
      <div className='p-2 space-y-4 border-2 flex flex-col w-12/12 bg-white rounded-md shadow-md'>
        <div className='p-2 space-y-4 border-2 flex  flex-col w-12/12'>
          <h2 className='text-center text-gray-900 font-semibold text-xl'>Informacion Estaciones</h2>
          <p>Filtrar busqueda:</p>
<div className="flex flex-col space-y-2 md:flex-row justify-evenly space-x-8">  
   <label className="px-2 items-center flex justify-between"> Orden alfabético <span className="px-2 relative">
    <select 
className="p-2 border-2 cursor-pointer rounded-full border-[#000f] bg-[#fafafa]"
 onChange={(e) => handleFilterChange('orden', e.target.value)}>
  <option value="A-Z">A-Z</option>
  <option value="Z-A">Z-A</option>

</select>
</span>
    
</label>
  <label className="px-2 items-center flex justify-between"> Zona <span className="px-2"><select 
className="p-2 border-2 cursor-pointer rounded-full border-[#000f] bg-[#fafafa]"
 onChange={(e) => handleFilterChange('eps', e.target.value)}
>
  <option value="">SELECCIONAR</option>
  <option value="SOS EPS">Norte</option>
  <option value="SALUD TOTAL EPS">ORIENTE</option>
  <option value="EPS SANITAS">OCCIDENTE</option>
  <option value="EPS SURA">SUR</option>

  {/* Add more options as needed */}
</select></span></label>
  <label className="px-2 items-center flex justify-between"> Tipo de Estación <span className="px-2"><select 
className="p-2 border-2 cursor-pointer rounded-full border-[#000f] bg-[#fafafa]"
 onChange={(e) => handleFilterChange('afp', e.target.value)}
 >
  <option value="">SELECCIONAR</option>
  <option value="null">Tipo I</option>
  <option value="COLPENSIONES">Tipo II</option>
  <option value="PROTECCION">Tipo III</option>

</select></span></label>
  {/* <label className="px-2 flex"> <input className="pl-2" type="checkbox" id="riesgo"/> <span className="px-2">RIESGO</span></label> */}
  </div>
  <div className=" justify-between  flex flex-col space-y-4 md:space-y-0 md:flex-row p-4">

  <label className="px-2 flex items-center space-x-6"><span className="bg-blue-200  text-gray-700  px-2 space-x-4 shadow-md rounded-lg"
>Direccion</span> <input 
 onChange={(e) => handleFilterChange('identificacion', e.target.value)}
className="w-44 border-2 rounded-full" type="text" id="numeroCedula"/> </label>
  {/* <label><span className="px-2">RIESGO</span>

  <select 
  onChange={(e) => handleFilterChange('riesgo', e.target.value)}
className=" border-2 rounded-full space-x-2 p-2 bg-[#fafafa]">
  <option value="">SELECCIONAR</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>

</select>
  </label> */}
  </div>
          <table className="w-full">
            <thead className=''>
              <tr className=" w-full ">
                <th className="border-2 border-gray-700 px-4">Nombre</th>
                <th className="border-2 border-gray-700 px-4">Direccion</th>
                <th className="border-2 border-gray-700 px-4">Zona</th>
                <th className="border-2 border-gray-700 px-4">Tipo</th>
                <th className="border-2 hidden md:table-cell border-gray-700 px-4"># Bioreactores</th>
                <th className="border-2 hidden md:table-cell border-gray-700 px-4">Estado</th>
                
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
      <div className='flex w-auto space-x-32 p-4 items-center ml-48 justify-evenly'>
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
    {/* <div className="flex  items-center h-full flex-col">
<h2 className="font-bold text-3xl py-8 ">Estadísticas de mis afiliados</h2>
<>Estas graficas amplian la informacion mostrada en la tabla de afiliados</>
    <div className="grid  grid-cols-1 md:grid-cols-2 max-w-4xl space-x-6 h-full pt-4 bg-[#fafafa] ">
    <GraficaAfiliados datosAfiliados={afiliados}/>
    <GraficaAfiliados datosAfiliados={afiliados}/>
    <GraficaAfiliados datosAfiliados={afiliados}/>
    <GraficaAfiliados datosAfiliados={afiliados}/>
    <GraficaAfiliados datosAfiliados={afiliados}/>
    <GraficaAfiliados datosAfiliados={afiliados}/>
    </div>
    </div> */}
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
<div 
id="seleccion-descarga"
className="flex flex-col  bg-gray-900 text-[#E2E2E2]  items-center justify-center my-auto  h-auto py-20  ">
  <div 
   
  className="h-auto w-full max-w-4xl">
    
  <h1 className="text-center  text-3xl mb-4">Documentos de Afiliados Seleccionados</h1>
  <h6 className="text-cente max-w-4-xl mx-auto px-6 mb-4">Cuando desees descargar multiples planillas de Simple: descarga el siguiente listado de cedulas e importalo en simple para obtener y descargar el listado de planillas correspondientes.
  <br/>  
  <br/> 
  <span className="font-bold mt-4">¡IMPORTANTE! presionar botón para obtener un achivo .xls: </span> 
  Este formato será requerido por el sistema de Simple
  </h6>
  
  <div className="w-full h-auto  cursor-pointer">
    {selectedAfiliados.length > 0 && (
      <div className="">
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

          className="w-screen "
        >
          <span 
                    onClick={handleConvertirAXLS}
          className="border-2 w-2/12 mx-auto flex justify-center rounded-full p-4 bg-green-300 text-gray-500 items-center  mt-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            Convertir a xls
          </span>
        </div>
      </div>
    )}


    </div>
  </div>
      <div 
      id="renombrar-planillas"
      className="flex flex-col  h-full  text-center">
        <div 
        
        className="flex h-screen  flex-col">
        {/* <h2>{`Aqui puedes cargar archivos para formatear el nombre y preparar envío de notificación de pago. Presiona aquí si estás seguro.`}</h2> */}
            <span className='mx-auto  w-full '>3. En esta seccion prepararás tus archivos. Debes usar el archivo obtenido en la pagina de simple con las planillas de tus afiliados
            <br/> Usa el espacio para carga de imagenes (parte izquierda) y presiona el boton procesar los archivos</span>
        <div 
        
        className="items-center  text-center flex flex-col py-8 mx-auto h-full space-x-8 px-12  w-full">
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
        <div className="flex h-full p-8 flex-col">
                      <div
                      
                      className="flex py-20 flex-col p">
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
const moneySpentData = [1000, 500, 300]; // Example data for money spent


  return (
    <div className="space-y-4 h-full px-8">
      <ListaAfiliados handleAfiliadoSeleccionado={handleAfiliadoSeleccionado} />
      {/* <DocumentosAfiliados documentosAfiliados={documentosAfiliados} /> */}
      <div className='grid grid-cols-4'>

        <div className='grid grid-cols-2 gap-4 mx-auto'>
          <h2 className='text-xl font-bold'>Captacion de Carbono</h2> <span className='text-green-800 underline cursor-pointer'>ver todo</span>
          <span className='px-6 py-4 border-2 border-green-700 rounded-lg text-center'>Por zona</span> <span className='px-6 py-4 border-2  rounded-lg text-center'>Por estación</span>
          <p>Norte</p> <span className=''>101136 kg <ArrowDropDown className='text-red-500'/></span>
          <div className="col-span-2 border-b-2 border-gray-200 mr-12 flex h-2"/>
          <p>Sur</p>  <span className=''>43136 kg <ArrowDropUp className='text-green-500'/></span>
          <div className="col-span-2 border-b-2 border-gray-200 mr-12 flex h-2"/>
          <p>Oriente</p> <span className=''>243136 kg <ArrowDropUp className='text-green-500'/></span>
          <div className="col-span-2 border-b-2 border-gray-200 mr-12 flex h-2"/>
          <p>Occidente</p> <span className=''>3136 kg <ArrowDropUp className='text-green-500'/></span>
          <div className="col-span-2 border-b-2 border-gray-200 mr-12 flex h-2"/>
        </div>

        <div className='col-span-2'>
          <div className='flex justify-between'>
          <h1 className='col-span-1'>Balance financiero del proyecto</h1> <span className='col-span-1'> 3,227,222 CO2e</span>
          </div>
          <OverlappedBarChart data={moneySpentData} />
        </div>

        <div>
        <CircularProgressBar
          title='Actores Viales Contaminantes'
          data={{
            labels: ["Vehiculos particulares", "Transporte publico", "Taxis"],
            values: [20, 30, 50],
            bgColors: ["#75c0c0", "#ff6384", "#ffcd56"],
          }}
        circleWidth={30}
        />
        </div>
      </div>


      <div className='grid grid-cols-6 mx-auto max-w-6xl '>
      <div className='px-4'>
        <CircularProgressBar
          title='Total Emisiones CO2 / Captacion de carbono'
          data={{
            labels: ["Emisiones de CO2", "Captacion de Carbono"],
            values: [70, 30],
            bgColors: [ "#ff6384", "#ffcd56"],
          }}
        circleWidth={70}
        />
        </div>


        <div className=' gap-4 grid grid-cols-2 col-span-3 mx-auto  '>
        <h2 className='text-xl font-bold'>Top Captacion de Carbono</h2> <span className='text-green-800 underline cursor-pointer'>ver todo</span>
          <div><p>Estacion A</p> <span>Norte</span></div> <span className=''>101136 kg <ArrowDropDown className='text-red-500'/></span>
          <div className="col-span-2 border-b-2 border-gray-200 mr-12 flex h-2"/>
          <div><p>Estacion B </p><span>Oriente</span></div>  <span className=''>43136 kg <ArrowDropUp className='text-green-500'/></span>
          <div className="col-span-2 border-b-2 border-gray-200 mr-12 flex h-2"/>
          <div><p>Estacion C </p><span>Oriente</span></div> <span className=''>243136 kg <ArrowDropUp className='text-green-500'/></span>
          <div className="col-span-2 border-b-2 border-gray-200 mr-12 flex h-2"/>
          <div><p>Estacion D</p> <span>Oriente</span></div> <span className=''>3136 kg <ArrowDropUp className='text-green-500'/></span>
          <div className="col-span-2 border-b-2 border-gray-200 mr-12 flex h-2"/>
        </div>


        <div className='col-span-2'>
          <h2>Notificaciones</h2>
          <div className='grid grid-cols-6 border-2 py-4 px-8 rounded-xl '>
         <ReportOffOutlined/><div className='col-span-4'><h2 className='text-sm'>Reporte de Mantenimiento</h2></div>
          <>x</>
          <div></div>
          <p className='text-sm col-span-4 pl-2 pb-2'>Crea un reporte mensual</p>
          <div></div>
          <div></div>
          <span className='col-span-3 px-6 py-2 border-2 bg-green-600 w-40 rounded-xl text-center text-[#e2e2e2] flex'>Añadir reporte</span>
          </div>


          <div className='grid grid-cols-6 border-2 py-4 px-8 rounded-xl '>
         <ReportOffOutlined/><div className='col-span-4'><h2 className='text-sm'>Reportes de la comunidad</h2></div>
          <>x</>
          <div></div>
          <p className='text-sm col-span-4 pl-2 pb-2'>Ver zonas con mayor cantidad reportes comunitarios</p>
          <div></div>
          <div></div>
          <span className='col-span-3 px-6 py-2 border-2 bg-green-600 w-40 rounded-xl text-center text-[#e2e2e2] flex'>Ver reportes</span>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default TuComponentePrincipal;
