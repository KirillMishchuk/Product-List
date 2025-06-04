import clsx from "clsx";

interface SpinnerProps {
    className?: string;
    size?: number;
}

export const Spinner = ({ className, size = 24 }: SpinnerProps) => (
    <div
        className={clsx(
            "animate-spin rounded-full border-2 border-muted-foreground border-t-transparent",
            className
        )}
        style={{ width: size, height: size }}
        role="status"
        aria-label="Loading"
    />
);
