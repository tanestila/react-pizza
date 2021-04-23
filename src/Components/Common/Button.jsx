import classNames from "classnames";

export default function Button({
  className,
  onClick,
  children,
  outline,
  ...props
}) {
  return (
    <button
      className={classNames("button", className, {
        "button--outline": outline,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
