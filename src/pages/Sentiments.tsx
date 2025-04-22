import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { SentimentMeter } from "@/components/sentiment/SentimentMeter";
import { SentimentBarChart } from "@/components/sentiment/SentimentBarChart";
import { WordMap } from "@/components/sentiment/WordMap";

const SNS_PLATFORMS = [
  { value: "twitter", label: "Twitter" },
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
];

const TOPICS = [
  { value: "beach", label: "Beach" },
  { value: "food", label: "Food" },
  { value: "nightlife", label: "Nightlife" },
];

const LOCATIONS = [
  { value: "baga", label: "Baga Beach" },
  { value: "aguada", label: "Fort Aguada" },
  { value: "dudhsagar", label: "Dudhsagar Falls" },
];

const REVIEW_PLATFORMS = [
  { value: "google", label: "Google Reviews" },
  { value: "tripadvisor", label: "TripAdvisor" },
];

const sampleBarData = [
  { name: "Twitter", positive: 65, negative: 35 },
  { name: "Facebook", positive: 75, negative: 25 },
  { name: "Instagram", positive: 85, negative: 15 },
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

const Sentiments = () => {
  const [snsPlatform, setSnsPlatform] = useState("twitter");
  const [topic, setTopic] = useState("beach");
  const [reviewPlatform, setReviewPlatform] = useState("google");
  const [location, setLocation] = useState("baga");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-gradient-to-r from-goa-blue to-goa-teal text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">Tourism Sentiment Analysis</h1>
          <p className="text-sm opacity-90">
            Analyzing social media opinions and reviews to gauge tourist sentiment about Goa
          </p>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <SentimentMeter title="SNS" score={75} />
          <SentimentMeter title="Reviews" score={82} />
        </div>

        <div className="space-y-8">
          {/* SNS Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Social Network Sentiment</h2>
            <div className="grid grid-cols-1 gap-6">
              <SentimentBarChart
                title="SNS Sentiment Distribution"
                data={sampleBarData}
                filterOptions={TOPICS}
                onFilterChange={setTopic}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <WordMap
                  title="Positive Keywords"
                  words={sampleWords}
                  filterOptions={SNS_PLATFORMS}
                  onFilterChange={setSnsPlatform}
                />
                <WordMap
                  title="Negative Keywords"
                  words={sampleWords}
                  filterOptions={SNS_PLATFORMS}
                  onFilterChange={setSnsPlatform}
                />
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Review Sentiment</h2>
            <div className="grid grid-cols-1 gap-6">
              <SentimentBarChart
                title="Review Sentiment Distribution"
                data={sampleReviewData}
                filterOptions={LOCATIONS}
                onFilterChange={setLocation}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
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
                </div>
                <div className="space-y-6">
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
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Sentiments;
