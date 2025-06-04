import { useAppSelector } from "@shared/lib/hooks";
import { AddProductModal } from "@features/productCreate/ui/AddProductModal";
import AddCommentModal from "@features/comments/ui/AddCommentModal";

export const UIManager = () => {
    const modal = useAppSelector((state) => state.uiModal.current);

    return (
        <>
            {modal === "addProduct" && <AddProductModal />}
            {modal === "addComment" && <AddCommentModal />}
        </>
    );
};
