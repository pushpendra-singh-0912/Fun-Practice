import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page not found</h1>
        <Link to="/login" className="px-4 py-2 bg-primary text-white rounded">
          Go home
        </Link>
      </div>
    </div>
  );
}
