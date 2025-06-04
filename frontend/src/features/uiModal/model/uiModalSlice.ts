import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ModalState = {
    current:
        | null
        | "addProduct"
        | "editProduct"
        | "confirmDelete"
        | "addComment";
    modalProps?: Record<string, unknown>;
};

const initialState: ModalState = {
    current: null,
    modalProps: {},
};

const uiModalSlice = createSlice({
    name: "uiModal",
    initialState,
    reducers: {
        openModal: (
            state,
            action: PayloadAction<{
                type: ModalState["current"];
                props?: Record<string, unknown>;
            }>
        ) => {
            state.current = action.payload.type;
            state.modalProps = action.payload.props || {};
        },
        closeModal: (state) => {
            state.current = null;
            state.modalProps = {};
        },
    },
});

export const { openModal, closeModal } = uiModalSlice.actions;
export default uiModalSlice.reducer;
