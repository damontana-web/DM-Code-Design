import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export type TextFieldType = "text" | "email" | "password" | "tel" | "textarea";

interface SharedFieldProps {
  label: string;
  id: string;
  name?: string;
  /** Renders the <label> visually hidden (sr-only) — used for the plain TextInput/EmailContactInput variants. */
  hideLabel?: boolean;
  /** Validation message shown in red below the field; omit to render nothing. */
  error?: string;
  /** Password-only: renders a "Forgot password?" link next to the label (PasswordInput.astro). */
  forgotPasswordHref?: string;
}

export type TextFieldProps = SharedFieldProps &
  (
    | ({ type?: Exclude<TextFieldType, "textarea"> } & Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "id" | "name" | "type" | "className"
      >)
    | ({ type: "textarea" } & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id" | "name" | "className">)
  );

const fieldClasses =
  "block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-hidden focus:ring-3 focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1";

/** Text/email/password/tel/textarea field — the five Astro input components share this one class string verbatim. */
export function TextField(props: TextFieldProps) {
  const { label, id, name, hideLabel, error, forgotPasswordHref, type = "text", ...rest } = props;
  const errorId = `${id}-error`;

  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className={hideLabel ? "sr-only" : "mb-2 block text-sm text-neutral-800 dark:text-neutral-200"}
        >
          {label}
        </label>
        {forgotPasswordHref ? (
          <a
            href={forgotPasswordHref}
            className="rounded-lg text-sm font-medium text-magenta-500 decoration-2 outline-hidden ring-zinc-500 hover:underline focus-visible:ring-3 dark:text-magenta-500 dark:ring-zinc-200 dark:focus:outline-hidden dark:focus:ring-1"
          >
            Forgot password?
          </a>
        ) : null}
      </div>
      <div className="relative">
        {type === "textarea" ? (
          <textarea
            id={id}
            name={name ?? id}
            rows={4}
            placeholder={label}
            className={fieldClasses}
            aria-describedby={error ? errorId : undefined}
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={id}
            name={name ?? id}
            type={type}
            placeholder={label}
            className={fieldClasses}
            aria-describedby={error ? errorId : undefined}
            {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
      </div>
      {error ? (
        <p className="mt-2 text-xs text-red-600" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
