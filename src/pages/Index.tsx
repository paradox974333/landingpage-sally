import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Additional sections can be added below */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Powered by Advanced AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our machine learning algorithms analyze market trends, sentiment, and technical indicators 
            to provide you with actionable trading insights.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
