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
  const afiliado = action.payload;

  // Verificar si el afiliado ya existe en selectedAfiliados
  const existingIndex = state.selectedAfiliados.findIndex((item) => item.id === afiliado.id);

  if (afiliado.afp === null) {
    // Si afp es null y el afiliado aún no está en selectedAfiliados, agregar dos veces
    if (existingIndex === -1) {
      state.selectedAfiliados.push(afiliado);
      state.selectedAfiliados.push(afiliado);
    }
  } else {
    // Si afp no es null y el afiliado aún no está en selectedAfiliados, agregar una vez
    if (existingIndex === -1) {
      state.selectedAfiliados.push(afiliado);
    }
  }
},
removeAfiliado: (state, action: PayloadAction<number>) => {
      state.selectedAfiliados = state.selectedAfiliados.filter((doc: DocumentoAfiliado) => doc.id !== action.payload);
    },
  },
});

export const { addAfiliado, removeAfiliado } = selectedAfiliadosSlice.actions;

export default selectedAfiliadosSlice.reducer;
