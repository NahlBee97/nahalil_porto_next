import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-mycolor4 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-mycolor2">
            <p className="text-lg font-bold">NahlBee</p>
            <p>Contact: nahlbee@example.com</p>
          </div>
          <div className="flex space-x-4">
            <Link className="text-mycolor2 hover:text-mycolor1" href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
            <Link className="text-mycolor2 hover:text-mycolor1" href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
            <Link className="text-mycolor2 hover:text-mycolor1" href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              Twitter
            </Link>
            {/* Add more social media links as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};