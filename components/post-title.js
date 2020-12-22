export default function PostTitle({ children }) {
  return (
    <h1
      style={{ fontWeight: "400", lineHeigh: ".5" }}
      className="text-3xl tracking-tighter leading-tight md:leading-none  md:text-left"
    >
      {children}
    </h1>
  );
}
