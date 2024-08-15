export const Faq = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium text-center py-10">FAQ</h1>
      

      <div
        tabIndex={0}
        className="collapse collapse-plus border-base-300 bg-base-200 border"
      >
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabindex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </div>
  );
};
