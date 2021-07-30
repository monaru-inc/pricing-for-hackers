import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("CXGKTUDN", {
      includedDomains: ["pricingforhackers.com"],
      // url: ["https://kite.pricingforhackers.com/script.js"],
    });

    function onRouteChangeComplete(url) {
      Fathom.trackPageview({ url });
    }
    router.events.on("routeChangeComplete", onRouteChangeComplete);
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
