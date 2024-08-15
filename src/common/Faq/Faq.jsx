import { faq } from "../../utils/faq";

export const Faq = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-10 ">FAQ</h1>
      <div className="flex flex-col justify-center items-center gap-5">
        {faq?.map((item, index) => <div
            key={index}
            tabIndex={0}
            className="collapse collapse-plus border-base-300 bg-base-200 border"
          >
            <div className="collapse-title text-xl font-medium">
              {item?.question}
            </div>
            <div className="collapse-content">
              <p>
                {item?.answer}
              </p>
            </div>
          </div>)}
      </div>
    </div>
  );
};
