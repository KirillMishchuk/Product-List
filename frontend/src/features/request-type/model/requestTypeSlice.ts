import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type RequestType = "rest" | "graphql" | "query" | "mock";

interface RequestTypeState {
    type: RequestType;
}

const initialState: RequestTypeState = {
    type: "graphql",
};

const requestTypeSlice = createSlice({
    name: "requestType",
    initialState,
    reducers: {
        setRequestType(state, action: PayloadAction<RequestType>) {
            state.type = action.payload;
        },
    },
});

export const { setRequestType } = requestTypeSlice.actions;
export const requestTypeReducer = requestTypeSlice.reducer;
