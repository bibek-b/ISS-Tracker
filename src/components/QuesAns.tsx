import { useState } from "react";

const QuesAns = ({ question, answer }: { question: string; answer: string }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex justify-center">
     <div>
         <h2>{question}</h2>
      <div 
        className="grid transition-all duration-700"
        style={{ gridTemplateRows: showMore ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="mt-4 text-[rgba(200,218,255,0.55)]">
            {answer}
          </p>
        </div>
      </div>
     </div>
      <button 
        className='flex justify-end w-full text-blue-500 hover:text-blue-600 cursor-pointer' 
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Hide Answer" : "Show Answer"}
      </button>
    </div>
  );
};
export default QuesAns;