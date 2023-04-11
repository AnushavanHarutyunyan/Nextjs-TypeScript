import { useForm, Controller } from "react-hook-form";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../TextArea/TextArea";
import { Button } from "../Button/Button";
import CloseIcon from "./close.svg";
import { IReviewFormProps } from "./ReviewForm.props";
import { IReviewForm, IReviewSentResponse } from "./IReviewForm.interface";
import axios from "axios";
import { API } from "@/helpers/api";
import { useState } from "react";
import cn from "classnames";
import styles from "./ReviewForm.module.css";

export const ReviewForm = ({ productId, className, ...props }: IReviewFormProps): JSX.Element => {
    const {
        handleSubmit,
        register,
        control,
        reset,
        formState: { errors },
        clearErrors,
    } = useForm<IReviewForm>();

    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId });
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError("Error request");
            }
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input
                    {...register("name", { required: { value: true, message: "Please fill" } })}
                    error={errors.name}
                    placeholder="Имя"
                />
                <Input
                    {...register("title", { required: { value: true, message: "Please fill" } })}
                    error={errors.title}
                    placeholder="Заголовок отзыва"
                    className={styles.title}
                />
                <div className={styles.rating}>
                    <span>Оценка</span>
                    <Controller
                        name="rating"
                        control={control}
                        rules={{ required: { value: true, message: "Please fill" } }}
                        render={({ field }) => (
                            <Rating
                                isEditable
                                ref={field.ref}
                                rating={field.value}
                                setRating={field.onChange}
                                error={errors.rating}
                            />
                        )}
                    />
                </div>
                <Textarea
                    error={errors.description}
                    {...register("description", { required: { value: true, message: "Please fill" } })}
                    placeholder="Текст отзыва"
                    className={styles.description}
                />
                <div className={styles.submit}>
                    <Button appearance="primary" onClick={() => clearErrors()}>
                        Отправить
                    </Button>
                    <span className={styles.info}>
                        * Перед публикацией отзыв пройдет предварительную модерацию и проверку
                    </span>
                </div>
            </div>
            {isSuccess && (
                <div className={cn(styles.success, styles.panel)} role="alert">
                    <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                    <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
                    <button
                        className={styles.close}
                        aria-label="Закрыть оповещение"
                        onClick={() => setIsSuccess(false)}
                    >
                        <CloseIcon />
                    </button>
                </div>
            )}
            {error && (
                <div className={cn(styles.error, styles.panel)} role="alert">
                    {error}
                    <CloseIcon className={styles.close} onClick={() => setError(undefined)} />
                </div>
            )}
        </form>
    );
};
