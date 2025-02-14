
import { Server, FileSpreadsheet, Code, Info, Mail, DollarSign, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const menuItems = [
    {
      title: "Home",
      icon: <Home className="h-5 w-5" />,
      description: "Torna alla Home",
      path: "/",
    },
    {
      title: "NodePI",
      icon: <Server className="h-5 w-5" />,
      description: "Noleggio nodi Pi per progetti AI",
      path: "/nodepi",
    },
    {
      title: "Excel File",
      icon: <FileSpreadsheet className="h-5 w-5" />,
      description: "File Excel personalizzati",
      path: "/excel",
    },
    {
      title: "Software",
      icon: <Code className="h-5 w-5" />,
      description: "Sviluppo software su misura",
      path: "/software",
    },
    {
      title: "Chi Siamo",
      icon: <Info className="h-5 w-5" />,
      description: "La nostra storia",
      path: "/about",
    },
    {
      title: "Contatti",
      icon: <Mail className="h-5 w-5" />,
      description: "Rimani in contatto",
      path: "/contact",
    },
    {
      title: "Donazioni",
      icon: <DollarSign className="h-5 w-5" />,
      description: "Sostieni i nostri progetti",
      path: "/donate",
    },
  ];

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-0 md:w-20"
      } bg-white border-r border-gray-200 transition-all duration-300 ease-in-out overflow-hidden h-screen fixed md:sticky top-0 z-40`}
    >
      <div className="flex flex-col h-full">
        <div className="p-6">
          <h1 className={`text-xl font-semibold ${!isOpen && "md:hidden"}`}>
            AgTechDesigne
          </h1>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <span className="text-gray-500 group-hover:text-brand-600 transition-colors">
                    {item.icon}
                  </span>
                  <div className={`${!isOpen && "md:hidden"}`}>
                    <span className="text-sm font-medium text-gray-900">
                      {item.title}
                    </span>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
