import React from "react";

import {
    DialogOverlay,
    DialogContent,
    // DialogTrigger,
    DialogTitle,
    Dialog,
} from "@shared/ui/dialog";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks";
import { closeModal } from "@features/uiModal";
import { AddCommentForm } from "./AddCommentForm";

const AddCommentModal: React.FC = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(
        (state) => state.uiModal.current === "addComment"
    );
    const data = useAppSelector((state) => state.uiModal.modalProps);

    return (
        <Dialog
            open={isOpen}
            onOpenChange={(open) => {
                if (!open) dispatch(closeModal());
            }}
        >
            {/* <DialogTrigger asChild>
                <button
                    onClick={() => dispatch(openModal({ type: "addProduct" }))}
                    className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
                >
                    <Plus className="w-5 h-5" />
                </button>
            </DialogTrigger> */}

            <DialogOverlay className="fixed inset-0 bg-black/40 z-40" />
            <DialogContent className="z-50 w-full max-w-md bg-white p-6 rounded-xl shadow-xl">
                <DialogTitle className="text-xl font-bold mb-4">
                    Add Comment
                </DialogTitle>
                <AddCommentForm
                    productId={data?.productId as string}
                    onSuccess={() => dispatch(closeModal())}
                />
            </DialogContent>
        </Dialog>
    );
};

export default AddCommentModal;
