import type { RootState } from "@app/store";

export const selectRequestType = (state: RootState) => state.requestType.type;
