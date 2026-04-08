import React from 'react';
import Hero from './animated-shader-hero';

// Demo Component showing how to use the Hero
const HeroDemo: React.FC = () => {
  const handlePrimaryClick = () => {
    console.log('Get Started clicked!');
    const projects = document.getElementById('projects');
    projects?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSecondaryClick = () => {
    console.log('Hire Me clicked!');
    const contact = document.getElementById('contact');
    contact?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      <Hero
        trustBadge={{
          text: "Trusted by forward-thinking teams.",
          icons: ["✨"]
        }}
        headline={{
          line1: "Launch Your",
          line2: "Portfolio Into Orbit"
        }}
        subtitle="Supercharge your presence with AI-powered automation and integrations built for the next generation of developers — fast, seamless, and limitless."
        buttons={{
          primary: {
            text: "Get Started for Free",
            onClick: handlePrimaryClick
          },
          secondary: {
            text: "Explore Features",
            onClick: handleSecondaryClick
          }
        }}
      />
      
      {/* Additional documentation content below hero */}
      <div className="bg-dark-secondary p-8 border-t border-dark-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            How to Use the Hero Component
          </h2>
          <div className="bg-dark-card p-6 rounded-lg shadow-sm border border-green-primary/20">
            <pre className="text-sm text-green-light/80 overflow-x-auto">
{`<Hero
  trustBadge={{
    text: "Your trust badge text",
    icons: ["🚀", "⭐", "✨"] // optional
  }}
  headline={{
    line1: "Your First Line",
    line2: "Your Second Line"
  }}
  subtitle="Your compelling subtitle text goes here..."
  buttons={{
    primary: {
      text: "Primary CTA",
      onClick: handlePrimaryClick
    },
    secondary: {
      text: "Secondary CTA", 
      onClick: handleSecondaryClick
    }
  }}
  className="custom-classes" // optional
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDemo;
