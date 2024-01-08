export function PutText(props) {
  const el_text = props.el_text;
  const text = props.text;
  return (
    <div>
      <div ref={el_text} className="container flex justify-center items-center h-12 my-3 p-3 text-black bg-yellow-100 text-xl md:text-2xl lg:text-3xl font-bold">
        {text}
      </div>
    </div>
  );
}
