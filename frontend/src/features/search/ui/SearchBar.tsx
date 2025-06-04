import { useAppDispatch, useAppSelector } from "@shared/lib/hooks";
import { setQuery } from "../model/searchSlice";
import { selectSearchQuery } from "../model/selectors";
import { Input } from "@shared/ui";

type Props = {
    children?: React.ReactNode;
};

export const SearchBar: React.FC<Props> = ({ children }: Props) => {
    const dispatch = useAppDispatch();
    const query = useAppSelector(selectSearchQuery);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setQuery(e.target.value));
    };

    return (
        <div className="w-full max-w-full flex justify-between items-center">
            <Input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={handleChange}
                className="w-full max-w-lg"
            />
            {children}
        </div>
    );
};
