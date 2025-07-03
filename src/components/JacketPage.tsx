import React from 'react';

const JacketPage = () => {
  const handleCallBackClick = () => {
    window.dispatchEvent(new Event('showCallBackPopup'));
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Banner Section */}
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Jackets Cleaning and Repairing Service Near Me</h1>
        <p className="text-lg mb-6">| Free delivery in 3-5 days</p>
        <button 
          className="bg-green-600 px-6 py-2 rounded-full hover:bg-green-700"
          onClick={handleCallBackClick}
        >
          Request Call Back
        </button>
      </section>

      {/* Leather Jackets Info */}
      <section className="max-w-4xl mx-auto py-12 px-4 space-y-8">
        <h2 className="text-2xl font-bold">We know how to handle Leather Jackets</h2>
        <p className="text-gray-700">
          Your Leather Jackets deserve expert care 🧥💎 We clean, protect & shine them like brand new ✨ Trusted by thousands, loved by all ❤️
        </p>
      </section>

      {/* Price Table */}
      <section className="max-w-5xl mx-auto py-8 px-4">
        <h2 className="text-xl font-semibold mb-4">Leather Jacket Cleaning Rates (Delhi)</h2>
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Leather Jacket</th>
              <th className="border p-2">Leather Jacket - H</th>
              <th className="border p-2">Leather Jacket Rexine</th>
              <th className="border p-2">Leather Jacket Suede</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">
                <span className="line-through text-gray-500">₹660</span> <span className="text-black font-semibold">₹400</span>
              </td>
              <td className="border p-2">
                <span className="line-through text-gray-500">₹529</span> <span className="text-black font-semibold">₹300</span>
              </td>
              <td className="border p-2">
                <span className="line-through text-gray-500">₹470</span> <span className="text-black font-semibold">₹250</span>
              </td>
              <td className="border p-2">
                <span className="line-through text-gray-500">₹809</span> <span className="text-black font-semibold">₹400</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-4">FAQs - Jacket Cleaning</h2>
        <ul className="space-y-4">
          <li className="border p-4 rounded">How does WearWisely clean leather jackets?</li>
          <li className="border p-4 rounded">How long does cleaning take?</li>
          <li className="border p-4 rounded">Is pickup and delivery free?</li>
          <li>
            <button 
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={handleCallBackClick}
            >
              Request Call Back
            </button>
          </li>
        </ul>
      </section>

    </div>
  );
};

export default JacketPage;
