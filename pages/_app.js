import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

const pageview = (url) =>
  window.gtag("config", "G-4RWBNY6D03", {
    page_path: url,
  });

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return <Component {...pageProps} />;
}

export default MyApp;
