import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@shared/ui/card";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@shared/ui/accordion";

import { Button } from "@shared/ui/button";
import { openModal } from "@features/uiModal";
import { useAppDispatch } from "@shared/lib/hooks";

type Comment = {
    id: string;
    content: string;
};

type Product = {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    comments: Comment[];
};

interface ProductDetailsCardProps {
    product: Product;
    onAddToBasket?: () => void;
}

export const ProductDetailsCard = ({
    product,
    onAddToBasket,
}: ProductDetailsCardProps) => {
    const dispatch = useAppDispatch();

    return (
        <Card className="w-full max-w-2xl">
            <CardHeader>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover rounded-lg border"
                />
                <p className="text-lg font-semibold text-gray-800">
                    ${product.price}
                </p>

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="w-full text-left">
                            View Comments
                        </AccordionTrigger>

                        <AccordionContent>
                            {product.comments && product.comments.length > 0 ? (
                                <ul className="space-y-2">
                                    {product.comments.map((comment) => (
                                        <li
                                            key={comment.id}
                                            className="rounded-lg bg-gray-50 p-3 border"
                                        >
                                            <p className="text-gray-800">
                                                {comment.content}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500 italic">
                                    No comments yet. Be the first to comment!
                                </p>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button
                    variant="default"
                    className="bg-blue-600 hover:bg-blue-700 text-white mr-auto"
                    onClick={() =>
                        dispatch(
                            openModal({
                                type: "addComment",
                                props: { productId: product.id },
                            })
                        )
                    }
                >
                    Add Comment
                </Button>

                {onAddToBasket && (
                    <Button
                        variant="default"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={onAddToBasket}
                    >
                        Add to Basket
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
};
