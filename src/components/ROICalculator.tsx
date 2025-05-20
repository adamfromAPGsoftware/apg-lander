
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DollarSign, Calculator } from "lucide-react";

type SaasToolType = {
  name: string;
  minCost: number;
  maxCost: number;
  checked: boolean;
};

const ROICalculator = () => {
  const [saasTools, setSaasTools] = useState<SaasToolType[]>([
    { name: "Trello", minCost: 5, maxCost: 10, checked: false },
    { name: "Asana", minCost: 10.99, maxCost: 24.99, checked: false },
    { name: "Monday.com", minCost: 8, maxCost: 16, checked: false },
    { name: "Pipedrive", minCost: 14.90, maxCost: 49.90, checked: false },
    { name: "HubSpot", minCost: 50, maxCost: 800, checked: false },
    { name: "Salesforce", minCost: 25, maxCost: 300, checked: false },
    { name: "Slack", minCost: 8.75, maxCost: 15, checked: false },
    { name: "DocuSign", minCost: 10, maxCost: 40, checked: false },
    { name: "PandaDoc", minCost: 29, maxCost: 59, checked: false },
    { name: "Xero", minCost: 13, maxCost: 70, checked: false },
    { name: "QuickBooks", minCost: 10, maxCost: 115, checked: false },
    { name: "MYOB", minCost: 13, maxCost: 75, checked: false },
    { name: "Power BI", minCost: 14, maxCost: 14, checked: false },
    { name: "Make.com", minCost: 9, maxCost: 29, checked: false },
    { name: "Zapier", minCost: 19.99, maxCost: 69.99, checked: false },
    { name: "ClickUp", minCost: 5, maxCost: 12, checked: false },
    { name: "Databox", minCost: 72, maxCost: 231, checked: false },
    { name: "Looker Studio", minCost: 0, maxCost: 0, checked: false },
    { name: "Hootsuite", minCost: 99, maxCost: 739, checked: false },
    { name: "Buffer", minCost: 6, maxCost: 12, checked: false },
    { name: "SocialBee", minCost: 19, maxCost: 79, checked: false },
    { name: "Tableau", minCost: 70, maxCost: 280, checked: false },
  ]);
  
  const [hoursWasted, setHoursWasted] = useState<number>(10);
  const [teamSize, setTeamSize] = useState<number>(5);
  const [hourlyRate, setHourlyRate] = useState<number>(50);
  const [totalWaste, setTotalWaste] = useState<number>(0);
  

  useEffect(() => {
    const selectedTools = saasTools.filter(tool => tool.checked);
    // Calculate average cost for selected tools (min + max) / 2
    const monthlySaasCost = selectedTools.reduce((acc, tool) => {
      const avgCost = (tool.minCost + tool.maxCost) / 2;
      return acc + (avgCost * teamSize);
    }, 0);
    
    const monthlyTimeWaste = hoursWasted * teamSize * hourlyRate * 4; // 4 weeks in a month
    
    setTotalWaste(monthlySaasCost + monthlyTimeWaste);
  }, [saasTools, hoursWasted, teamSize, hourlyRate]);

  const handleToolToggle = (index: number) => {
    const updatedTools = [...saasTools];
    updatedTools[index].checked = !updatedTools[index].checked;
    setSaasTools(updatedTools);
  };

  const handleHourlyRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setHourlyRate(value);
    }
  };

  return (
    <section id="roi-calculator" className="py-16 md:py-24 bg-[#111] rounded-xl my-16 max-width">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Tool Chaos Costing You?</h2>
          <p className="text-lg text-gray-300">
            Still paying for multiple tools and manually tracking tasks across different platforms?
          </p>
        </div>

        <div className="bg-black p-6 md:p-10 rounded-xl border border-gray-800 animate-fade-in animation-delay-200">
          <div className="flex items-center gap-2 mb-6">
            <Calculator className="text-brand-green" />
            <h3 className="text-xl font-bold">Interactive ROI Calculator</h3>
          </div>
          
          <div className="mb-8">
            <h4 className="text-lg mb-3">Which tools are you currently paying for?</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {saasTools.map((tool, index) => (
                <div key={tool.name} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`tool-${index}`} 
                    checked={tool.checked}
                    onCheckedChange={() => handleToolToggle(index)}
                  />
                  <Label htmlFor={`tool-${index}`} className="flex items-center justify-between w-full">
                    <span>{tool.name}</span>
                    {tool.maxCost > 0 && (
                      <span className="text-xs text-gray-400">
                        ${tool.minCost}{tool.minCost !== tool.maxCost ? `-${tool.maxCost}` : ""}
                      </span>
                    )}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
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
            
            <div>
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
          </div>
          
          <div className="mt-8 mb-8">
            <h4 className="text-lg mb-3">What's your team's average hourly rate?</h4>
            <div className="flex items-center">
              <div className="relative w-full max-w-xs">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="number"
                  value={hourlyRate}
                  onChange={handleHourlyRateChange}
                  className="pl-10"
                  min="0"
                />
              </div>
              <span className="ml-3 text-gray-400">USD per hour</span>
            </div>
          </div>
          
          <div className="bg-brand-green bg-opacity-10 rounded-lg p-6 mb-8 mt-10">
            <h4 className="text-lg font-bold text-brand-green mb-2">Your Estimated Monthly Waste</h4>
            <p className="text-3xl md:text-4xl font-bold">${totalWaste.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
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
