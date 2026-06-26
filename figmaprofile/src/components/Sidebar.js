import React, { useState } from "react";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="flex">
      
      <div
        className={`${
          collapsed ? "w-[50px]" : "w-[300px]"
        } bg-blue-500 text-white min-h-screen p-4 transition-all duration-300`}
      >
        <button
        onClick={() => setCollapsed(!collapsed)}
        
      >
        {collapsed ? "▶" : "◀"}
      </button>


        <div className="my-5">
          <h2
            className="text-xl font-bold cursor-pointer flex justify-between items-center hover:bg-blue-600 transition duration-300 p-4 rounded-full"
            onClick={() => setOpen(!open)}
          >
            {!collapsed && "• Account"}
            <span>{open ? "◀" : ""}</span>
          </h2>

          {!collapsed && open && (
            <ul className="mt-4 space-y-3 text-sm">
              <li className="hover:bg-blue-600 transition duration-300 p-4 px-6 rounded-3xl cursor-pointer">Profile</li>
              <li className="hover:bg-blue-600 transition duration-300 p-4 px-6 rounded-3xl cursor-pointer">Dashboard</li>
              <li className="hover:bg-blue-600 transition duration-300 p-4 px-6 rounded-3xl cursor-pointer">Broadcast Messages</li>
              <li className="hover:bg-blue-600 transition duration-300 p-4 px-6 rounded-3xl cursor-pointer">Subscription Plan</li>
              <li className="hover:bg-blue-600 transition duration-300 p-4 px-6 rounded-3xl cursor-pointer">Raise Ticket</li>
            </ul>
          )}
        </div>

        <div className="my-5">
          <h2
            className="text-xl font-bold cursor-pointer flex justify-between items-center hover:bg-blue-600 transition duration-300 p-4 rounded-full"
            onClick={() => setShow(!show)}
          >
            {!collapsed && "• Course"}
            <span>{show ? "◀" : ""}</span>
          </h2>

          {!collapsed && show && (
            <ul className="mt-4 space-y-3 text-sm">
              <li className="hover:bg-blue-600 transition duration-300 p-4 px-6 rounded-3xl cursor-pointer">Python</li>
              <li className="hover:bg-blue-600 transition duration-300 p-4 px-6 rounded-3xl cursor-pointer">Java</li>
              <li className="hover:bg-blue-600 transition duration-300 p-4 px-6 rounded-3xl cursor-pointer">JavaScript</li>
              <li className="hover:bg-blue-600 transition duration-300 p-4 px-6 rounded-3xl cursor-pointer">React</li>
              <li className="hover:bg-blue-600 transition duration-300 p-4 px-6 rounded-3xl cursor-pointer">C++</li>
            </ul>
          )}
        </div>

        <div className="my-5">
          <h2 className="text-xl font-bold cursor-pointer flex items-center hover:bg-blue-600 transition duration-300 p-4 rounded-full">
            {!collapsed && "• Technical Support"}
          </h2>
        </div>

        <div className="my-5">
          <h2 className="text-xl font-bold cursor-pointer flex items-center hover:bg-blue-600 transition duration-300 p-4 rounded-full">
            {!collapsed && "• Request a Callback"}
          </h2>
        </div>

        <div className="my-5">
          <h2 className="text-xl font-bold cursor-pointer flex items-center hover:bg-blue-600 transition duration-300 p-4 rounded-full">
            <span className="scale-150 px-2"></span>
            {!collapsed && "→Logout"}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;