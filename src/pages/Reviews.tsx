
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      <div className="bg-gradient-to-r from-goa-blue to-goa-teal text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">Tourist Reviews Analysis</h1>
          <p className="text-sm opacity-90">
            Analyzing tourist reviews to understand visitor experiences in Goa
          </p>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Sentiment Meter Section with Glass Effect */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-bl from-goa-blue/10 via-goa-teal/5 to-goa-coral/10 p-1 mb-8">
          <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-950/50 rounded-lg p-6 border border-goa-teal/20">
            <SentimentMeter 
              title="Reviews" 
              scores={{
                positive: 50,
                neutral: 35,
                negative: 15
              }} 
            />
          </div>
        </div>

        {/* Review Sentiment Analysis Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold mb-6">Review Sentiment Analysis</h2>
          <div className="grid grid-cols-1 gap-8">
            {/* Bar Chart with Frosted Glass Effect */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-tr from-goa-coral/10 via-goa-sand/5 to-goa-palm/10 p-1">
              <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-950/50 rounded-lg p-6 border border-goa-coral/20">
                <SentimentBarChart
                  title="Review Sentiment Distribution"
                  data={sampleReviewData}
                  filterOptions={LOCATIONS}
                  onFilterChange={setLocation}
                />
              </div>
            </div>

            {/* Word Maps Grid with Unique Styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-bl from-goa-palm/10 via-goa-blue/5 to-goa-teal/10 p-1">
                <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-950/50 rounded-lg p-6 border border-goa-palm/20">
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
              </div>

              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-goa-sunset/10 via-goa-sand/5 to-goa-coral/10 p-1">
                <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-950/50 rounded-lg p-6 border border-goa-sunset/20">
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default Reviews;
