// src/components/BreakthroughsSection.tsx
import BreakthroughCard from "./BreakthroughCard";

const mockBreakthroughs = [
  {
    type: "News",
    title: "Goldwater & McNair Scholar: Zac Ahmed receives prestigious national scholarship",
    description: "Zac Ahmed has been recognized for his outstanding work in polymer electronics with two of the nation's most prestigious scholarships.",
    link: "#", // Link to a future news article page
  },
  {
    type: "News",
    title: "Dr. Song Zhang inducted into the Graduate School Hall of Fame",
    description: "For outstanding contributions to the field and the university, Dr. Zhang was honored with an induction into the Graduate School Hall of Fame at USM.",
    link: "#",
  },
  {
    type: "Research Highlight",
    title: "Impactful Science: Luke Galuska's work published in Nature Communications",
    description: "A recent publication by Luke Galuska on polymer thin film mechanics is set to advance the field of deformable electronics.",
    link: "#",
  },
] as const;

const BreakthroughsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Latest Breakthroughs</h2>
          <p className="mt-4 max-w-2xl mx-auto opacity-80">
            Discover our most recent publications, news, and innovations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBreakthroughs.map((item, index) => (
            <BreakthroughCard
              key={index}
              type={item.type}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
        <div className="text-center mt-16">
           <button className="px-6 py-3 border border-light-accent dark:border-dark-accent text-light-accent dark:text-dark-accent rounded hover:bg-light-accent/10 dark:hover:bg-dark-accent/10 transition-colors font-semibold">
            View All Updates
          </button>
        </div>
      </div>
    </section>
  );
};

export default BreakthroughsSection;