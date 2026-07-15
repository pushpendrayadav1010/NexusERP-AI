function Button({ children }) {
  return (
    <button
      className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl font-semibold transition"
    >
      {children}
    </button>
  );
}

export default Button;