import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { SentimentMeter } from "@/components/sentiment/SentimentMeter";
import { SentimentBarChart } from "@/components/sentiment/SentimentBarChart";
import { WordMap } from "@/components/sentiment/WordMap";

const REVIEW_PLATFORMS = [
  { value: "google", label: "Google Reviews" },
  { value: "tripadvisor", label: "TripAdvisor" },
];

const LOCATIONS = [
  { value: "baga", label: "Baga Beach" },
  { value: "aguada", label: "Fort Aguada" },
  { value: "dudhsagar", label: "Dudhsagar Falls" },
];

const sampleReviewData = [
  { name: "Google Reviews", positive: 80, negative: 20 },
  { name: "TripAdvisor", positive: 70, negative: 30 },
];

const sampleWords = [
  { text: "Beautiful", value: 64 },
  { text: "Amazing", value: 50 },
  { text: "Beaches", value: 43 },
  { text: "Food", value: 35 },
  { text: "Culture", value: 28 },
];

const Reviews = () => {
  const [reviewPlatform, setReviewPlatform] = useState("google");
  const [location, setLocation] = useState("baga");
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <SentimentMeter 
            title="Reviews" 
            scores={{
              positive: 50,
              neutral: 35,
              negative: 15
            }} 
          />
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Review Sentiment Analysis</h2>
          <div className="grid grid-cols-1 gap-6">
            <SentimentBarChart
              title="Review Sentiment Distribution"
              data={sampleReviewData}
              filterOptions={LOCATIONS}
              onFilterChange={setLocation}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <WordMap
                title="Positive Keywords"
                words={sampleWords}
                filterOptions={[
                  {
                    label: "Platform",
                    options: REVIEW_PLATFORMS,
                    value: reviewPlatform,
                    onChange: setReviewPlatform,
                  },
                  {
                    label: "Location",
                    options: LOCATIONS,
                    value: location,
                    onChange: setLocation,
                  },
                ]}
              />
              <WordMap
                title="Negative Keywords"
                words={sampleWords}
                filterOptions={[
                  {
                    label: "Platform",
                    options: REVIEW_PLATFORMS,
                    value: reviewPlatform,
                    onChange: setReviewPlatform,
                  },
                  {
                    label: "Location",
                    options: LOCATIONS,
                    value: location,
                    onChange: setLocation,
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Reviews;
