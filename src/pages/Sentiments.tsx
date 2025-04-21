
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";

const Sentiments = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-gradient-to-r from-goa-blue to-goa-teal text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
              Tourism Sentiment Analysis
            </h1>
            <p className="text-sm sm:text-base opacity-90">
              Analyzing social media opinions and reviews to gauge tourist sentiment about Goa
            </p>
          </div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 -mt-6">
        <Card className="p-8 shadow-lg mb-8 animate-fade-in text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sentiment Analysis Dashboard</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Detailed sentiment analysis for Goa tourism based on social media data and reviews.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-4xl">📊</span>
            </div>
            <p className="text-sm text-gray-500">Sentiment analysis charts coming soon!</p>
          </div>
        </Card>
      </main>
      
      <footer className="bg-white border-t py-4 text-center text-sm text-gray-500">
        <p>© 2025 Goa Insight Navigator | AI-Powered Tourism Analytics</p>
      </footer>
    </div>
  );
};

export default Sentiments;
