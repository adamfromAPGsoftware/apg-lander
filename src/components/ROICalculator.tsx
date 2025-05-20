
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

type SaasToolType = {
  name: string;
  monthlyCost: number;
  checked: boolean;
};

const ROICalculator = () => {
  const [saasTools, setSaasTools] = useState<SaasToolType[]>([
    { name: "Slack", monthlyCost: 12, checked: false },
    { name: "Trello", monthlyCost: 10, checked: false },
    { name: "Notion", monthlyCost: 8, checked: false },
    { name: "HubSpot", monthlyCost: 45, checked: false },
    { name: "ClickUp", monthlyCost: 12, checked: false },
    { name: "Google Workspace", monthlyCost: 12, checked: false },
    { name: "Airtable", monthlyCost: 20, checked: false },
    { name: "Monday", monthlyCost: 16, checked: false },
  ]);
  
  const [hoursWasted, setHoursWasted] = useState<number>(10);
  const [teamSize, setTeamSize] = useState<number>(5);
  const [totalWaste, setTotalWaste] = useState<number>(0);
  
  const hourlyRate = 50; // Average hourly rate

  useEffect(() => {
    const selectedTools = saasTools.filter(tool => tool.checked);
    const monthlySaasCost = selectedTools.reduce((acc, tool) => acc + tool.monthlyCost, 0) * teamSize;
    const monthlyTimeWaste = hoursWasted * teamSize * hourlyRate * 4; // 4 weeks in a month
    
    setTotalWaste(monthlySaasCost + monthlyTimeWaste);
  }, [saasTools, hoursWasted, teamSize]);

  const handleToolToggle = (index: number) => {
    const updatedTools = [...saasTools];
    updatedTools[index].checked = !updatedTools[index].checked;
    setSaasTools(updatedTools);
  };

  return (
    <section id="roi-calculator" className="py-16 md:py-24 bg-[#111] rounded-xl my-16 max-width">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Tool Chaos Costing You?</h2>
          <p className="text-lg text-gray-300">
            Still paying for Slack, Trello, ClickUp, HubSpot, and manually tracking tasks in Google Sheets?
          </p>
        </div>

        <div className="bg-black p-6 md:p-10 rounded-xl border border-gray-800 animate-fade-in animation-delay-200">
          <h3 className="text-xl font-bold mb-6">Interactive ROI Calculator</h3>
          
          <div className="mb-8">
            <h4 className="text-lg mb-3">Which tools are you currently paying for?</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {saasTools.map((tool, index) => (
                <div key={tool.name} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`tool-${index}`} 
                    checked={tool.checked}
                    onCheckedChange={() => handleToolToggle(index)}
                  />
                  <Label htmlFor={`tool-${index}`}>{tool.name}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-lg mb-3">How many hours per week do you spend on manual work?</h4>
            <Slider 
              value={[hoursWasted]} 
              onValueChange={(value) => setHoursWasted(value[0])}
              max={40}
              step={1}
              className="mb-2"
            />
            <p className="text-sm text-gray-400">{hoursWasted} hours/week</p>
          </div>
          
          <div className="mb-8">
            <h4 className="text-lg mb-3">Team size?</h4>
            <Slider 
              value={[teamSize]} 
              onValueChange={(value) => setTeamSize(value[0])}
              max={50}
              step={1}
              className="mb-2"
            />
            <p className="text-sm text-gray-400">{teamSize} team members</p>
          </div>
          
          <div className="bg-brand-green bg-opacity-10 rounded-lg p-6 mb-8">
            <h4 className="text-lg font-bold text-brand-green mb-2">Your Estimated Monthly Waste</h4>
            <p className="text-3xl md:text-4xl font-bold">${totalWaste.toLocaleString()}</p>
            <p className="text-sm text-gray-400 mt-2">Based on your selections and an average hourly rate of ${hourlyRate}</p>
          </div>
          
          <div className="text-center">
            <Button className="bg-brand-green text-black hover:bg-opacity-90 text-lg py-6 px-8">
              🔥 See What You Could Have Instead
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
