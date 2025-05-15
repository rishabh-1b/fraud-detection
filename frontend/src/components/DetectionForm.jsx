import { useState } from 'react';
import { Search, AlertTriangle } from 'lucide-react';
import { callingCodes } from '../utils/callingCode';
import { useEffect } from 'react';

function DetectionForm({ type, onSubmit, isLoading, setIsLoading, error }) {
  const [input, setInput] = useState('');
  const [callingCode, setCallingCode] = useState('+1');

  useEffect(
    () => {
      setInput('');
      setIsLoading(false);
    }, [type]
  )

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (type === 'phone')
      onSubmit(callingCode + input);
    else
      onSubmit(input);
  }

  return (
    <div className="max-w-full mx-auto bg-white p-4">
      <form onSubmit={handleOnSubmit}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter {type === 'phone' ? 'a phone number' : type === 'email' ? 'an email address' : 'a URL'} to check
        </label>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
          {type === 'phone' && (
            <>
              <select
                value={callingCode}
                onChange={(e) => setCallingCode(e.target.value)}
                disabled={isLoading}
                className="w-20 py-3 px-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              >
                {callingCodes.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>

              <div className="relative flex-1">
                <input
                  type="tel"
                  placeholder={"1234567890"}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                  className={`w-full py-3 px-4 pr-10 border ${error ? 'border-red-500' : 'border-gray-300'
                    } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  required
                />
                {error && (
                  <div className="absolute inset-y-0 right-3 flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                  </div>
                )}
              </div>
            </>
          )}

          {(type === 'email') && (
            <div className="relative w-full sm:flex-1">
              <input
                type="email"
                placeholder={"example@example.com"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className={`w-full py-3 px-4 pr-10 border ${error ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                required
              />
              {error && (
                <div className="absolute inset-y-0 right-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
              )}
            </div>
          )}

          {(type === 'url') && (
            <div className="relative w-full sm:flex-1">
              <input
                type="url"
                placeholder={"https://example.com"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className={`w-full py-3 px-4 pr-10 border ${error ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                required
              />
              {error && (
                <div className="absolute inset-y-0 right-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full sm:w-auto flex justify-center items-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ${isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Analyzing...
              </>
            ) : (
              <>
                <Search className="mr-2 h-5 w-5" />
                Check for Fraud
              </>
            )}
          </button>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}
      </form>
    </div>
  );
}

export default DetectionForm;
