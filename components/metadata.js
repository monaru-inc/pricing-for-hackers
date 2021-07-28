import Head from "next/head";
import { useRouter } from "next/router";

const StandardMetadata = ({ title, description }) => (
  <Head>
    <meta charSet="utf-8" />
    <link
      rel="canonical"
      key="canonical"
      href="https://pricingforhackers.com"
    />
    <title key="title">{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta charSet="utf-8" />
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💰</text></svg>"
    />
    <link
      rel="shortcut icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💰</text></svg>"
    />
    <meta
      name="twitter:image"
      content="https://pricingforhackers.com/assets/logo.png"
    />
    <meta
      property="og:image"
      content="https://pricingforhackers.com/assets/logo.png"
    />
    <meta property="og:image:height" content="650" />
    <meta property="og:image:width" content="650" />
    <meta name="twitter:card" content="summary" />
    <meta property="og:title" content={title} key="og-title" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://pricingforhackers.com" />
    <meta
      property="og:description"
      content={description}
      key="og-description"
    />

    <meta
      name="description"
      property="description"
      content={description}
      key="description"
    />
    <meta property="og:site_name" content={title} key="og-site_name" />
    <meta property="og:locale" content="en" />
    <meta name="twitter:title" content={title} key="twitter-title" />
    <meta
      name="twitter:description"
      content={description}
      key="twitter-description"
    />
  </Head>
);

const CommonMetadata = ({ title, description }) => {
  const router = useRouter();

  return (
    <Head>
      <link
        key="canonical"
        rel="canonical"
        href={`https://pricingforhackers.com${router.pathname}`}
      />

      {title && <title>{title} - Pricing for Hackers</title>}
      {title && (
        <meta
          property="og:title"
          content={`${title} - Pricing for Hackers`}
          key="title"
        />
      )}
      {title && (
        <meta
          property="og:site_name"
          content={`${title} - Pricing for Hackers`}
          key="og-site_name"
        />
      )}
      {title && (
        <meta
          name="twitter:title"
          content={`${title} - Pricing for Hackers`}
          key="twitter-title"
        />
      )}
      {description && (
        <meta
          property="og:description"
          content={description}
          key="og-description"
        />
      )}
      {description && (
        <meta property="description" content={description} key="description" />
      )}
      {description && (
        <meta
          name="twitter:description"
          content={description}
          key="twitter-description"
        />
      )}
    </Head>
  );
};

export { StandardMetadata, CommonMetadata };
