import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productInputSchema } from "@entities/product";
import type { z } from "zod";
import { useAddProduct } from "../model/useAddProduct";
import { FormInput } from "@shared/ui/FormInput";
import { Button } from "@shared/ui";

// Infer form data type from Zod schema
type AddProductFormData = z.infer<typeof productInputSchema>;

type Props = {
    onSuccess: () => void;
};

export const AddProductForm = ({ onSuccess }: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AddProductFormData>({
        resolver: zodResolver(productInputSchema),
    });

    const { addProduct, loading, error } = useAddProduct();

    const onSubmit = (formData: AddProductFormData) => {
        addProduct(formData); // ← optimistic mutation
        reset(); // ← clear form right away
        onSuccess(); // ← close modal right away
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 p-4 border rounded-xl bg-white shadow"
        >
            <FormInput
                label="Title"
                {...register("title")}
                error={errors.title?.message}
            />

            <FormInput
                label="Description"
                {...register("description")}
                error={errors.description?.message}
            />

            <FormInput
                label="Price"
                type="number"
                step="0.01"
                {...register("price", { valueAsNumber: true })}
                error={errors.price?.message}
            />

            <FormInput
                label="Image URL"
                {...register("image")}
                error={errors.image?.message}
            />

            <Button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                {loading ? "Adding..." : "Add Product"}
            </Button>

            {error && <p className="text-red-500">Error: {error.message}</p>}
        </form>
    );
};
