import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      
      {/* Hero Section - Matching About Style */}
      <section className="bg-[#1c1162] text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Your trust is important to us. Here is how we protect and handle your data at Report Hub.
        </p>
      </section>

      {/* Privacy Policy Content */}
      <div className="px-6 py-20 max-w-5xl mx-auto">
        
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1c1162]">1. Information We Collect</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We collect personal details (e.g. name email payment info) and technical data (e.g. IP address browser type) to provide and enhance our services.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1c1162]">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>To generate and deliver vehicle reports</li>
            <li>To process payments securely</li>
            <li>To improve customer support and website performance</li>
            <li>To comply with legal requirements</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1c1162]">3. Sharing of Information</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We never sell your personal data. Trusted third-party partners (e.g. payment processors hosting services) may access limited information only to perform essential services.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1c1162]">4. Cookies & Tracking</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We use cookies to personalize your experience and analyze website usage. You can manage cookie settings via your browser at any time.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1c1162]">5. Data Protection</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Your data is encrypted and securely stored. Despite our best efforts no system is 100% secure so we encourage caution while sharing sensitive data online.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1c1162]">6. Your Rights</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Access or request deletion of your data</li>
            <li>Correct inaccuracies in your information</li>
            <li>Withdraw consent for communications</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1c1162]">7. Policy Updates</h2>
          <p className="text-gray-700 dark:text-gray-300">
            This policy may change from time to time. Updates will be posted here with the revision date.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-[#1c1162]">8. Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you have any questions or need assistance, please email us at:{" "}
            <span className="text-[#1c1162] font-medium">support@reporthub.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
