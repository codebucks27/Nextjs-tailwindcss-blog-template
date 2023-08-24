import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "20+ Projects Completed",
  "3+ Years of Freelancing",
  "99% Client Satisfaction",
  "20K+ Subscribers",
  "Authored In-Depth Course on Educative",
  "Contributed as a Technical Course Reviewer 📝",
  "Recipient of the Hackernoon Noonies Award 🏆",
];

export default function About() {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      <AboutCoverSection />
    </main>
  );
}
