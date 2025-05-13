import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Mail, Phone, Globe, ChevronRight, CheckCircle } from 'lucide-react';

function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Protect Yourself From Digital Fraud With Advanced Detection
              </h1>
              <p className="text-xl text-indigo-100">
                FraudShield uses trusted data sources and verification services to detect fraudulent phone numbers, emails, and URLs before they can cause harm.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/detect"
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors duration-200"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Try It Now
                </Link>
                <Link
                  to="/resources"
                  className="inline-flex justify-center items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-500 transition-colors duration-200"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="m-8 relative space-y-4">
                <div className="p-5 bg-white rounded-lg shadow-lg flex items-center transform transition-all hover:scale-105">
                  <div className="rounded-full p-2 bg-red-100">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Fraudulent Phone Detection</p>
                    <p className="text-sm text-gray-500">Identify scam phone numbers instantly</p>
                  </div>
                  <AlertTriangle className="ml-auto h-5 w-5 text-red-500" />
                </div>
                <div className="p-5 bg-white rounded-lg shadow-lg flex items-center transform transition-all hover:scale-105">
                  <div className="rounded-full p-2 bg-yellow-100">
                    <Mail className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Email Fraud Analysis</p>
                    <p className="text-sm text-gray-500">Detect phishing and scam emails</p>
                  </div>
                  <AlertTriangle className="ml-auto h-5 w-5 text-yellow-500" />
                </div>
                <div className="p-5 bg-white rounded-lg shadow-lg flex items-center transform transition-all hover:scale-105">
                  <div className="rounded-full p-2 bg-green-100">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">URL Safety Check</p>
                    <p className="text-sm text-gray-500">Verify websites before clicking</p>
                  </div>
                  <CheckCircle className="ml-auto h-5 w-5 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">How FraudShield Protects You</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive verification system analyze multiple data points to detect fraudulent activity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-5">
                <Phone className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Phone Number Verification</h3>
              <p className="text-gray-600">
                Checks phone numbers against databases of known scams, analyzes number patterns,
                and detects suspicious VoIP services that fraudsters commonly use.
              </p>
            </div>
            <div className="rounded-lg p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-5">
                <Mail className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Safety Analysis</h3>
              <p className="text-gray-600">
                Identifies suspicious email patterns, detects spoofing attempts, and verifies sender reputation using comprehensive databases.
              </p>
            </div>
            <div className="rounded-lg p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-5">
                <Globe className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">URL Risk Assessment</h3>
              <p className="text-gray-600">
                Analyzes URLs for phishing attempts, malware distribution, and reputation
                issues by examining domain age, SSL certificates, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-indigo-600">98.5%</p>
              <p className="mt-2 text-lg text-gray-600">Detection Accuracy</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-indigo-600">1000+</p>
              <p className="mt-2 text-lg text-gray-600">Scans Performed</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-indigo-600">24/7</p>
              <p className="mt-2 text-lg text-gray-600">Protection</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Protecting Yourself Today</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Don't wait until it's too late. Check suspicious communications before they cause harm.
          </p>
          <Link
            to="/detect"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors"
          >
            <Shield className="mr-2 h-5 w-5" />
            Try FraudShield Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
