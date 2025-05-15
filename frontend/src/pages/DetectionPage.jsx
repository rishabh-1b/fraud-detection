import { Shield, Phone, Mail, Globe, Search, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import DetectionForm from '../components/DetectionForm';

const DetectionPage = () => {
  const [activeTab, setActiveTab] = useState('phone');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleOnSubmit = async (input) => {
    setIsLoading(true);
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fraud Detection Tool</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Check suspicious phone numbers, emails, or URLs for potential fraud using our advanced detection system.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('phone')}
            className={`flex-1 py-4 px-4 text-center font-medium text-sm focus:outline-none transition-colors duration-200 ${activeTab === 'phone'
              ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-500'
              : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Phone Number
            </div>
          </button>

          <button
            onClick={() => setActiveTab('email')}
            className={`flex-1 py-4 px-4 text-center font-medium text-sm focus:outline-none transition-colors duration-200 ${activeTab === 'email'
              ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-500'
              : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            <div className="flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              Email Address
            </div>
          </button>

          <button
            onClick={() => setActiveTab('url')}
            className={`flex-1 py-4 px-4 text-center font-medium text-sm focus:outline-none transition-colors duration-200 ${activeTab === 'url'
              ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-500'
              : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            <div className="flex items-center justify-center">
              <Globe className="h-5 w-5 mr-2" />
              URL
            </div>
          </button>
        </div>

        <div className="p-6">
          <DetectionForm
            type={activeTab}
            onSubmit={handleOnSubmit}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            error={error}
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                <Search className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold">Step 1: Input</h3>
            </div>
            <p className="text-gray-600">
              Enter the phone number, email address, or URL you want to check for potential fraud.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                <Shield className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold">Step 2: Analysis</h3>
            </div>
            <p className="text-gray-600">
              Our advanced system analyzes the input against known fraud patterns and reputation databases.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                <CheckCircle className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold">Step 3: Results</h3>
            </div>
            <p className="text-gray-600">
              Get detailed results showing the fraud risk level and specific concerns detected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetectionPage;
