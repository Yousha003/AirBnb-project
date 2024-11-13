import React from 'react';

function FooterComponent() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-8 border-t border-gray-300 dark:border-gray-700">
      <section className="py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <h6 className="text-lg font-semibold text-red-600 dark:text-red-400">
              HomeBNB
            </h6>
          </div>

          <div className="space-y-2">
            <h6 className="text-lg font-semibold text-red-600 dark:text-red-400">Joina oss</h6>
            <p>
              <a href="/Login" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
                Logga in
              </a>
            </p>
            <p>
              <a href="/Register" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
                Registrera dig
              </a>
            </p>
            <p>
              <a href="/About" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
                Om oss
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <h6 className="text-lg font-semibold text-red-600 dark:text-red-400">Börja här</h6>
            <p>
              <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
                Våra boenden
              </a>
            </p>
            <p>
              <a href="/Reservations" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
                Mina reservationer
              </a>
            </p>
            <p>
              <a href="/Support" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
                Support
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <h6 className="text-lg font-semibold text-red-600 dark:text-red-400">Kontakta oss</h6>
            <p>
              <span className="text-gray-600 dark:text-gray-300">Abu Dhabi marketing, UAE</span>
            </p>
            <p>
              <span className="text-gray-600 dark:text-gray-300">info@homebnb.com</span>
            </p>
            <p>
              <span className="text-gray-600 dark:text-gray-300">+ 01 234 567 77</span>
            </p>
          </div>
        </div>
      </section>

      <section className="pt-4 border-t border-gray-300 dark:border-gray-700">
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © 2024 Copyright
        </div>
      </section>
    </footer>
  );
}

export default FooterComponent;