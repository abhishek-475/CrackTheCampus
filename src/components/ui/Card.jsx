export default function Card({ children }) {
    return (
        <div className="group relative overflow-hidden p-7 rounded-3xl border bg-white dark:bg-slate-900 transition">
            {children}
        </div>
    );
}