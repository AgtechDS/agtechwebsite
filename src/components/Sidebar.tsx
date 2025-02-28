import { Server, FileSpreadsheet, Code, Info, Mail, DollarSign, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const menuItems = [
    { title: "Home", icon: <Home className="h-5 w-5" />, description: "Torna alla Home", path: "/" },
    { title: "NodePI", icon: <Server className="h-5 w-5" />, description: "Noleggio nodi Pi per progetti AI", path: "/nodepi" },
    { title: "Excel File", icon: <FileSpreadsheet className="h-5 w-5" />, description: "File Excel personalizzati", path: "/excel" },
    { title: "Software", icon: <Code className="h-5 w-5" />, description: "Sviluppo software su misura", path: "/software" },
    { title: "Chi Siamo", icon: <Info className="h-5 w-5" />, description: "La nostra storia", path: "/about" },
    { title: "Contatti", icon: <Mail className="h-5 w-5" />, description: "Rimani in contatto", path: "/contact" },
    { title: "Donazioni", icon: <DollarSign className="h-5 w-5" />, description: "Sostieni i nostri progetti", path: "/donate" },
  ];

  return (
    <aside
      className={`bg-white border-r border-gray-200 transition-all duration-300 ease-in-out overflow-hidden h-screen fixed md:sticky top-0 z-40 
        ${isOpen ? "w-64 left-0" : "-left-64"} md:w-90 md:left-0`}
    >
      <div className="flex flex-col h-full">
        {/* Logo e Titolo */}
        <div className="p-6 flex items-center gap-5">
          <img src="\agicon.jpg" alt="AGtech" className="h-20 w-20" />
          {isOpen && <h1 className="text-xl font-semibold text-gray-900">AGtechdesigne</h1>}
        </div>

        {/* Navigazione */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)} // Chiude la sidebar dopo il click
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <span className="text-gray-500 group-hover:text-brand-600 transition-colors border rounded-full p-2">
                    {item.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">{item.title}</span>
                    {isOpen && <p className="text-xs text-gray-500">{item.description}</p>}
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