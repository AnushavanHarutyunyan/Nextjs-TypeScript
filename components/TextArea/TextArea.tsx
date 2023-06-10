import { ForwardedRef, forwardRef } from "react";
import { ITextAreaProps } from "./TextArea.props";
import styles from "./TextArea.module.css";
import cn from "classnames";

export const Textarea = forwardRef(
    ({ error, className, ...props }: ITextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
        return (
            <div className={cn(styles.textareaWrapper, className)}>
                <textarea
                    className={cn(styles.textarea, {
                        [styles.error]: error,
                    })}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <span role="alert" className={styles.errorMessage}>
                        {error.message}
                    </span>
                )}
            </div>
        );
    }
);
