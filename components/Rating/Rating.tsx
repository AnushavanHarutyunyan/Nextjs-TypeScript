import { IRatingProps } from "./Rating.props";
import Star from "./star.svg";
import cn from "classnames";
import styles from "./Rating.module.css";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";

export const Rating = forwardRef(
    (
        { isEditable = false, rating, setRating, error, ...props }: IRatingProps,
        ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
        const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

        const constructRating = (currentRating: number) => {
            const uppdateArray = ratingArray.map((r: JSX.Element, i: number) => (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                >
                    <Star onClick={() => onClick(i + 1)} />
                </span>
            ));
            setRatingArray(uppdateArray);
        };

        const changeDisplay = (i: number) => {
            if (!isEditable) {
                return;
            }
            constructRating(i);
        };

        const onClick = (i: number) => {
            if (!isEditable || !setRating) {
                return;
            }
            setRating(i);
        };

        useEffect(() => {
            constructRating(rating);
        }, [rating]);

        return (
            <div {...props} ref={ref} className={cn(styles.ratingWrapper, { [styles.error]: error })}>
                {ratingArray.map((r, i) => (
                    <span key={i}>{r}</span>
                ))}
                {error && <span className={styles.errorMessage}>{error.message}</span>}
            </div>
        );
    }
);
