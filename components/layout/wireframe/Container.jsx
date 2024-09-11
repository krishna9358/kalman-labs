import classNames from "classnames";

export function Container({ className, children, id = "", ...props }) {
  return (
    <section
      className={classNames(
        "mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-7",
        className
      )}
      id={id}
      {...props}
    >
      {children}
    </section>
  );
}
