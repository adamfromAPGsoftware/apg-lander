import React from 'react';
import { Button } from '@/components/ui/button';
import { Wrench, GraduationCap, ArrowRight } from 'lucide-react';

const ResourceCTA: React.FC = () => {
  return (
    <div className="mt-16 pt-12 border-t border-border/50">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          Ready to Take the Next Step?
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Whether you want hands-on help or prefer to learn at your own pace, we've got you covered.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Get Help Implementing */}
        <div className="bg-card border border-border rounded-xl p-6 hover:border-brand-green/50 transition-colors">
          <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
            <Wrench className="w-6 h-6 text-brand-green" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Get Help Implementing</h4>
          <p className="text-muted-foreground text-sm mb-4">
            Let us handle the technical work while you focus on running your business.
          </p>
          <Button
            variant="outline"
            className="w-full group"
            onClick={() => window.open('https://go.apgsoftware.com', '_blank')}
          >
            Book a Free Call
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Learn on Your Own */}
        <div className="bg-card border border-border rounded-xl p-6 hover:border-brand-green/50 transition-colors">
          <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
            <GraduationCap className="w-6 h-6 text-brand-green" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Learn on Your Own</h4>
          <p className="text-muted-foreground text-sm mb-4">
            Prefer DIY? Join our free community or check out YouTube for tutorials.
          </p>
          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              className="w-full group"
              onClick={() => window.open('https://bit.ly/ai-builders-hub', '_blank')}
            >
              Join AI Builders Hub
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="ghost"
              className="w-full group text-muted-foreground hover:text-foreground"
              onClick={() => window.open('https://www.youtube.com/@AdamGoodyer', '_blank')}
            >
              Watch on YouTube
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCTA;
