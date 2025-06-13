import { ToggleGroup, ToggleGroupItem } from "@shared/ui/toggle-group";
import { setRequestType, type RequestType } from "../model/requestTypeSlice";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks";
import { selectRequestType } from "../model/selectors";

export const RequestTypeToggle = () => {
    const dispatch = useAppDispatch();

    const type = useAppSelector(selectRequestType);

    return (
        <ToggleGroup
            type="single"
            value={type}
            onValueChange={(val) => {
                if (val) dispatch(setRequestType(val as RequestType));
            }}
            className="flex"
        >
            <ToggleGroupItem value="rest" variant="outline" className="w-24">
                REST
            </ToggleGroupItem>
            <ToggleGroupItem value="graphql" variant="outline" className="w-24">
                GraphQL
            </ToggleGroupItem>
            <ToggleGroupItem value="query" variant="outline" className="w-24">
                Query
            </ToggleGroupItem>
            <ToggleGroupItem value="mock" variant="outline" className="w-24">
                Mock
            </ToggleGroupItem>
        </ToggleGroup>
    );
};
