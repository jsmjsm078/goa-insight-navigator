
import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", icon: <Home size={20} />, path: "/" },
    { name: "Sentiments", path: "/sentiments" },
    { name: "Surveys", path: "/surveys" }
  ];

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-lg sm:text-xl font-bold text-goa-blue">Goa Insight Navigator</span>
          </div>
          <div className="flex space-x-4 sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-16",
                  location.pathname === item.path
                    ? "border-goa-blue text-goa-blue"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                )}
              >
                {item.icon ? (
                  item.icon
                ) : (
                  <span className="hidden sm:inline">{item.name}</span>
                )}
                {!item.icon && <span className="sm:hidden">{item.name.charAt(0)}</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
