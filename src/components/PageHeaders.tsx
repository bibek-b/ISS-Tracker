
const PageHeaders = ({ title, subtitle, description }: { title: string; subtitle: string; description?: string }) => {
  return (
    <div
      className="px-4 py-2 rounded-xl bg-[rgba(8,12,20,0.82)]
                            border border-[rgba(99,180,255,0.18)] backdrop-blur-md"
    >
      <p
        className="text-[12px] tracking-[0.25em] uppercase text-[#7ec4ff]"
        style={{ fontFamily: "'Orbitron', monospace" }}
      >
        {title}
      </p>
      <h1 className="text-2xl font-semibold mt-1">
        {subtitle}
      </h1>
        {description && (
            <p className="mt-4 text-[rgba(220,232,255,0.7)] max-w-3xl"> 
              {description}
            </p>
          )}
    </div>
  );
};

export default PageHeaders;
