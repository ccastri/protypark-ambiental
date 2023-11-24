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
    addAfiliado: (state, action: PayloadAction<DocumentoAfiliado>) => {
      const existingAfiliado = state.selectedAfiliados.find((doc) => doc.id === action.payload.id);
      if (!existingAfiliado) {
        state.selectedAfiliados.push(action.payload);
      }
    },
removeAfiliado: (state, action: PayloadAction<number>) => {
      state.selectedAfiliados = state.selectedAfiliados.filter((doc: DocumentoAfiliado) => doc.id !== action.payload);
    },
  },
});

export const { addAfiliado, removeAfiliado } = selectedAfiliadosSlice.actions;

export default selectedAfiliadosSlice.reducer;
