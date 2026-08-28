import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white p-4">
        <h1 className="text-lg font-bold">PC Health Monitor</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}