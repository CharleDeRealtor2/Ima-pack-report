import React from "react";

export default function Page3() {
  return (
    <div className="p-6 space-y-6 bg-white">
      <h1 className="text-2xl font-bold text-center text-blue-800 uppercase">
        Final Section
      </h1>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Team Lead</label>
            <input type="text" className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Supervisor</label>
            <input type="text" className="w-full border rounded p-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Comments</label>
          <textarea className="w-full border rounded p-2" rows="4" />
        </div>

        <div className="flex gap-4 justify-end mt-4">
          <button type="button" className="bg-blue-600 text-white py-2 px-6 rounded">
            Previous
          </button>
          <button type="submit" className="bg-green-600 text-white py-2 px-6 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
