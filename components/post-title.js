export default function PostTitle({ children }) {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-5xl tracking-tighter leading-tight md:leading-none text-center md:text-left">
      {children}
    </h1>
  );
}
