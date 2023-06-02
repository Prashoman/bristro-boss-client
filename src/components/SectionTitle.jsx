const SectionTitle = ({ headingTitle, subTitle }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <p className="text-orange-500 mb-2">-------{subTitle}--------</p>
      <h1 className="uppercase font-bold text-3xl  border-y-4 py-4">
        {headingTitle}
      </h1>
    </div>
  );
};

export default SectionTitle;
