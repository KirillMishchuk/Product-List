import { Spinner } from "./Spinner";

export const FullScreenLoader = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <Spinner size={48} />
    </div>
);
