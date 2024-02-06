import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gradient-to-l from-gray-200 to-slate-300
      dark:bg-gradient-to-l dark:from-gray-600 dark:to-gray-1200 
      dark:text-white
      transition-all duration-500 ease-in-out
        ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
