// AboutISS.tsx

import PageHeaders from "../components/PageHeaders";
import QuesAns from "../components/QuesAns";
import SeparatorLine from "../components/SeparatorLine";
import { terms } from "../constants/learnTerms";
import { scrollViewToTop } from "../utils/window.utils";

const LearnTerms = () => {
  scrollViewToTop();
  return (
    <section className="min-h-screen bg-[#080c14] text-[#e8f2ff] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <PageHeaders
          title="Learn Terms"
          subtitle="Learn about ISS Terminology"
          description="Explore key terms related to the International Space Station (ISS) to enhance your understanding of space exploration and the station's operations."
        />

        <div className="mt-10 rounded-3xl bg-[#0b1220] border border-[rgba(99,180,255,0.12)] p-8 space-y-10">
          {terms.map((term) => (
            <>
              <QuesAns
                key={term.id}
                question={term.question}
                answer={term.answer}
              />
              {terms.length > 1 && <SeparatorLine />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnTerms;
