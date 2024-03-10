type Props = {
  title: string;
  children?: JSX.Element;
};

const DetailsCard = ({ title, children }: Props) => {
  return (
    <article className="text-zinc-700 bg-white/80 rounded-xl p-6 flex flex-col justify-between">
      <div className="flex items-center text-l">
        <h4 className="ml-1 text-zinc-400">{title}</h4>
      </div>
      {children}
    </article>
  );
};
export default DetailsCard;
