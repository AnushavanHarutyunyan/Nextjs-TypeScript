import { IReviewProps } from "./Review.props";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import cn from "classnames";
import styles from "./Review.module.css";
import UserIcon from "./userIcon.svg";
import { Rating } from "../Rating/Rating";

export const Review = ({ review, className, ...props }: IReviewProps): JSX.Element => {
    const { name, title, description, createdAt, rating } = review;
    
    return (
        <div className={cn(styles.review, className)} {...props}>
            <UserIcon />
            <div className={styles.title}>
                <span className={styles.name}>{name}</span>&nbsp;&nbsp;
                <span>{title}</span>
            </div>
            <div>
                <span className={styles.date}>{format(new Date(createdAt), "dd MMM yyyy", { locale: ru })}</span>
                <span>{title}</span>
            </div>
            <div className={styles.rating}>
                <Rating rating={rating} />
            </div>
            <div className={styles.description}>{description}</div>
        </div>
    );
};
