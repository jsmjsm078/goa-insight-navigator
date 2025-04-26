import { TrendingHashtags } from "@/components/charts/TrendingHashtags";
import { KeyTalkingPoints } from "@/components/charts/KeyTalkingPoints";
import { TourismTrends } from "@/components/charts/TourismTrends";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { ActivityHeatmap } from "@/components/maps/ActivityHeatmap";
import { LocationsList } from "@/components/maps/LocationsList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="relative bg-gradient-to-r from-goa-blue to-goa-teal text-white py-8 sm:py-12 mt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80"
            alt="Goa Beach"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
              AI-Powered Tourist Sentiment Dashboard
            </h1>
            <p className="text-sm sm:text-base opacity-90">
              Analyzing social media data to provide insights about Goa tourism
              trends and sentiments
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 -mt-6">
        <Card className="p-4 sm:p-6 mb-8 animate-fade-in bg-white/80 backdrop-blur-sm shadow-none border-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
              <p className="text-lg text-gray-500">Total Mentions</p>
              <p className="text-3xl font-bold text-goa-blue">24,789</p>
            </div>
            <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
              <p className="text-lg text-gray-500">Positive Sentiment</p>
              <p className="text-3xl font-bold text-goa-palm">76%</p>
            </div>
            <div className="p-4">
              <p className="text-lg text-gray-500">Active Sources</p>
              <p className="text-3xl font-bold text-goa-coral">14</p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {/* Removed fixed height for better responsiveness */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <TrendingHashtags />
              </section>
            </div>
            <div className="md:col-span-1">
              <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <KeyTalkingPoints />
              </section>
            </div>
          </div>
           */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <div className="md:col-span-2 flex flex-col">
              <section
                className="flex flex-col flex-grow animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <TrendingHashtags />
              </section>
            </div>
            <div className="md:col-span-1 flex flex-col">
              <section
                className="flex flex-col flex-grow animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <KeyTalkingPoints />
              </section>
            </div>
          </div>

          <section
            className="animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <TourismTrends />
          </section>

          {/* Removed fixed height for better responsiveness */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <div className="md:col-span-2 flex flex-col">
              <section
                className="flex flex-col flex-grow animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <ActivityHeatmap />
              </section>
            </div>
            <div className="md:col-span-1 flex flex-col">
              <section
                className="flex flex-col flex-grow animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <LocationsList />
              </section>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200/20 py-4 text-center text-sm text-gray-500">
        <p>© 2025 Goa Insight Navigator | AI-Powered Tourism Analytics</p>
      </footer>
    </div>
  );
};

export default Index;
