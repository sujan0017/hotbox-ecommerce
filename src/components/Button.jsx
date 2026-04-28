import { Link } from "react-router";

export function PrimaryButton({ title, href }) {
  return (
    <Link
      to={href}
      className="bg-red-500 border border-red-500 text-white font-medium px-7 py-3 rounded-md hover:bg-red-400 transition"
    >
      {title}
    </Link>
  );
}
export function SecondaryButton({ title, href }) {
  return (
    <Link
      to={href}
      className="border border-slate-700 text-slate-800 px-7 py-3 rounded-md hover:border-red-500 transition"
    >
      {title}
    </Link>
  );
}
