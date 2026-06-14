import { Link } from 'react-router';
import { Home, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-[120px] md:text-[180px] font-bold text-[#388EED] leading-none" style={{ fontFamily: 'Playfair Display' }}>
          404
        </h1>
        <h2 className="text-3xl md:text-4xl mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-[#717182] mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-[#388EED] hover:bg-[#2d7ad4] text-white px-8 py-6 text-lg flex items-center gap-2">
              <Home className="w-5 h-5" />
              Go to Homepage
            </Button>
          </Link>
          <Link to="/news">
            <Button variant="outline" className="border-2 border-[#388EED] text-[#388EED] hover:bg-[#388EED] hover:text-white px-8 py-6 text-lg flex items-center gap-2">
              View News
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
