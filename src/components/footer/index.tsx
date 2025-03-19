import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-mycolor4 py-3">
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-mycolor2 text-center">
            <p className="text-sm font-bold md:text-base">
              <span className="text-mycolor1">Nahl</span>Bee
            </p>
            <p className="text-xs text-mycolor2 md:text-sm">
              ©2025 Nahalil Muchtar. All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
