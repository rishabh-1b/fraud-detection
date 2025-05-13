import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

function Navbar() {
  return (
    <header className="py-1 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <Shield className="h-11 w-11 text-indigo-600" />
              <div>
                <h1 className="text-2xl font-bold">FraudShield</h1>
                <p className="text-sm text-gray-500">Detect. Protect. Secure.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;