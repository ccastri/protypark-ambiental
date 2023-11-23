// selectedAfiliadosReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Afiliado, DocumentoAfiliado } from '../src/app/_components/Test3'; // Asegúrate de importar la interfaz Afiliado desde donde sea que la tengas definida

interface SelectedAfiliadosState {
  selectedAfiliados: DocumentoAfiliado[];
}

const initialState: SelectedAfiliadosState = {
  selectedAfiliados: [],
};

const selectedAfiliadosSlice = createSlice({
  name: 'selectedAfiliados',
  initialState,
  reducers: {
    addAfiliado: (state, action: PayloadAction<{ id: number; tipo_identificacion: string; identificacion:number }>) => { // Cambio aquí
      state.selectedAfiliados.push(action.payload);
    },
    removeAfiliado: (state, action: PayloadAction<number>) => {
      state.selectedAfiliados = state.selectedAfiliados.filter((afiliado:Afiliado) => afiliado.id !== action.payload);
    },
  },
});

export const { addAfiliado, removeAfiliado } = selectedAfiliadosSlice.actions;

export default selectedAfiliadosSlice.reducer;
