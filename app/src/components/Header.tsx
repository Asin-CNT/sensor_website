import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '../../dist/assets/logo/Companylogo.svg'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
{
  /*

  const navItems = [
    { label: '서비스 소개', href: '#features' },
    { label: '기능', href: '#functions' },
    { label: '고객사', href: '#partners' },
    { label: '문의하기', href: '#contact' },
  ];
  */

}


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
          bg-white
        ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="flex 
          bg-white
        items-center justify-between h-16 lg:h-19">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
           <img 
           className='h-5'
           src={logo}></img>
          </a>

          {/* Desktop Navigation 
          
             <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>   
          
          
          
          */}
       

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              className={`text-sm font-medium
                px-8
                ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              문의하기
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
              로그인
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 px-4 pt-4 border-t border-gray-100 mt-2">
                <Button variant="outline" className="w-full">
                  문의하기
                </Button>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  로그인
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
