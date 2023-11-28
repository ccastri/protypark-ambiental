import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import { Afiliado } from './Test3';
import { Chart, registerables} from 'chart.js';

Chart.register(...registerables);
interface GraficaAfiliadosProps {
  datosAfiliados: Afiliado[];
}

const GraficaAfiliados: React.FC<GraficaAfiliadosProps> = ({ datosAfiliados }) => {
  const [dataChart, setDataChart] = useState<ChartData<'bar'> | null>(null);

  useEffect(() => {
    const epsUnicasSet = new Set<string>();
    datosAfiliados.forEach(afiliado => {
      epsUnicasSet.add(afiliado.eps);
    });
    const epsUnicas = Array.from(epsUnicasSet);

    const conteoAfiliadosPorEPS = epsUnicas.map(eps => {
      return {
        EPS: eps,
        cantidadAfiliados: datosAfiliados.filter(afiliado => afiliado.eps === eps).length,
      };
    });

    const labels = conteoAfiliadosPorEPS.map(item => item.EPS);
    const data = conteoAfiliadosPorEPS.map(item => item.cantidadAfiliados);

    const dataset: ChartData<'bar'> = {
      labels: labels,
      datasets: [
        {
          label: 'Cantidad de Afiliados por EPS',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
        },
      ],
    };

    setDataChart(dataset);
  }, [datosAfiliados]);

  return (
    <div>
      {dataChart && (
        <Bar
          data={dataChart}
          options={{
            scales: {
              y: {
                type: 'linear', // Asegúrate de especificar 'linear' como tipo de escala para el eje y
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Cantidad de Afiliados',
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default GraficaAfiliados;
