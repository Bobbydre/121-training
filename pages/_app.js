import "@/styles/globals.scss";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export default function App({ Component, pageProps }) {
  return (
    <>
     <title>121-training</title>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
