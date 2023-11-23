import { useState, useEffect } from 'react';
interface DocumentoAfiliado {
  id: number;
  tipo_identificacion: string;
  identificacion: number;
}
const DocumentosAfiliados = () => {
  const [documentos, setDocumentos] = useState<DocumentoAfiliado []|[]>([]);

  useEffect(() => {
    const fetchDocumentos = async () => {
      try {
        const response = await fetch('/api/afiliados/documentos/'); // Ruta de tu API en el backend
        if (!response.ok) {
          throw new Error('Error al obtener los documentos de afiliados');
        }
        const data = await response.json();
        setDocumentos(data);
      } catch (error) {
        console.error(error);
        // Manejo de errores
      }
    };

    fetchDocumentos();
  }, []);

  return (
    <div>
      <h1>Documentos de Afiliados</h1>
      <table>
        <thead>
          <tr>
            <th>Tipo de Documento</th>
            <th>Número de Documento</th>
          </tr>
        </thead>
        <tbody>
          {documentos.map((documento: any, index: number) => (
            <tr key={index}>
              <td>{documento.tipo_identificacion}</td>
              <td>{documento.identificacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentosAfiliados;
