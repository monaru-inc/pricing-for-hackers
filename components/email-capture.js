import { useState } from "react";

const postToBackend = async (email) => {
  const res = await fetch("/api/newsletter", {
    method: "POST",
    body: JSON.stringify({ name, email }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  console.log(data);
  return data;
};

export default function Example() {
  const [email, setEmail] = useState("");
  return (
    <div className="mx-auto w-full">
      <form
        className="sm:flex w-full"
        onSubmit={(e) => {
          e.preventDefault();
          postToBackend(email);
        }}
      >
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email-address"
          name="email-address"
          type="email"
          autoComplete="email"
          required
          className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 text-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs rounded-md"
          placeholder="Enter your email"
        />
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Notify me
          </button>
        </div>
      </form>
    </div>
  );
}
