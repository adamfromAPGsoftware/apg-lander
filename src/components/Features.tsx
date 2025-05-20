
import React from 'react';
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";
import { 
  Users, Briefcase, ListChecks, Receipt, 
  FileText, CreditCard, Truck, Clock
} from 'lucide-react';

const Features = () => {
  const featuresList = [
    "Clients, Companies, Leads",
    "Dashboards, Projects, Invoicing",
    "Quoting & Estimates, Proposals",
    "Task Boards, Messaging, Client Portals",
    "Vector DB Sync, AI Agents Ready",
    "First Bi-Weekly Sprint included"
  ];

  return (
    <section id="features" className="py-16 md:py-24 max-width">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need, Nothing You Don't</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Your $20K system comes with everything your business needs to operate efficiently
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {/* First row of database components */}
        <div className="flex justify-center">
          <DatabaseWithRestApi 
            title="Clients"
            circleText="Clients"
            lightColor="#9b87f5"
            icon={<Users className="size-4" />}
            className="h-[280px] w-full max-w-[220px]"
            badgeTexts={{
              first: "Add",
              second: "View",
              third: "Edit",
              fourth: "Delete"
            }}
            buttonTexts={{
              first: "Client Data",
              second: "CRM"
            }}
          />
        </div>
        <div className="flex justify-center">
          <DatabaseWithRestApi 
            title="Projects"
            circleText="Projects"
            lightColor="#1EAEDB"
            icon={<Briefcase className="size-4" />}
            className="h-[280px] w-full max-w-[220px]"
            badgeTexts={{
              first: "Create",
              second: "Assign",
              third: "Track",
              fourth: "Complete"
            }}
            buttonTexts={{
              first: "Project Data",
              second: "Management"
            }}
          />
        </div>
        <div className="flex justify-center">
          <DatabaseWithRestApi 
            title="Tasks"
            circleText="Tasks"
            lightColor="#D6BCFA"
            icon={<ListChecks className="size-4" />}
            className="h-[280px] w-full max-w-[220px]"
            badgeTexts={{
              first: "Create",
              second: "Assign",
              third: "Track",
              fourth: "Complete"
            }}
            buttonTexts={{
              first: "Task Data",
              second: "Workflow"
            }}
          />
        </div>
        <div className="flex justify-center">
          <DatabaseWithRestApi 
            title="Invoices"
            circleText="Invoices"
            lightColor="#90F23C"
            icon={<Receipt className="size-4" />}
            className="h-[280px] w-full max-w-[220px]"
            badgeTexts={{
              first: "Generate",
              second: "Send",
              third: "Track",
              fourth: "Paid"
            }}
            buttonTexts={{
              first: "Invoice Data",
              second: "Billing"
            }}
          />
        </div>
        
        {/* Second row of database components */}
        <div className="flex justify-center">
          <DatabaseWithRestApi 
            title="Proposals"
            circleText="Proposals"
            lightColor="#7E69AB"
            icon={<FileText className="size-4" />}
            className="h-[280px] w-full max-w-[220px]"
            badgeTexts={{
              first: "Create",
              second: "Send",
              third: "Track",
              fourth: "Accept"
            }}
            buttonTexts={{
              first: "Proposal Data",
              second: "Sales"
            }}
          />
        </div>
        <div className="flex justify-center">
          <DatabaseWithRestApi 
            title="Transactions"
            circleText="Finance"
            lightColor="#6E59A5"
            icon={<CreditCard className="size-4" />}
            className="h-[280px] w-full max-w-[220px]"
            badgeTexts={{
              first: "Record",
              second: "Process",
              third: "Report",
              fourth: "Export"
            }}
            buttonTexts={{
              first: "Transaction Data",
              second: "Finance"
            }}
          />
        </div>
        <div className="flex justify-center">
          <DatabaseWithRestApi 
            title="Suppliers"
            circleText="Vendors"
            lightColor="#8E9196"
            icon={<Truck className="size-4" />}
            className="h-[280px] w-full max-w-[220px]"
            badgeTexts={{
              first: "Add",
              second: "Order",
              third: "Track",
              fourth: "Pay"
            }}
            buttonTexts={{
              first: "Supplier Data",
              second: "Vendor Mgmt"
            }}
          />
        </div>
        <div className="flex justify-center">
          <DatabaseWithRestApi 
            title="Timesheets"
            circleText="Time"
            lightColor="#1EAEDB"
            icon={<Clock className="size-4" />}
            className="h-[280px] w-full max-w-[220px]"
            badgeTexts={{
              first: "Log",
              second: "Approve",
              third: "Report",
              fourth: "Bill"
            }}
            buttonTexts={{
              first: "Time Data",
              second: "Tracking"
            }}
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {featuresList.map((feature, index) => (
          <div 
            key={index}
            className="bg-[#111] p-6 rounded-xl border border-gray-800 flex items-center animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-brand-green bg-opacity-20 rounded-full p-2 mr-4">
              <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-xl">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
