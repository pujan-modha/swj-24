const Title = ({title}: {title: string}) => {
  return (
    <div>
      <h2 className="font-bold text-brand mb-5 py-10 text-5xl text-center uppercase">
        {title}
      </h2>
    </div>
  );
};

export default Title;
