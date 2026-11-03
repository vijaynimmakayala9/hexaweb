export default function SectionHeading({
  id,
  title,
  text,
  light = false,
  className = "",
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 id={id} className={`text-h2 ${light ? "!text-white" : ""}`}>
        {title}
      </h2>
      {text && (
        <p
          className={`mt-5 text-lead ${light ? "text-brand-mint/85" : "text-muted"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
