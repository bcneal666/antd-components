import { Helmet } from "react-helmet";

const Meta = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>antd-components</title>
      <link rel="icon" href="favicon.ico" />
      <meta name="title" content={"antd-components"} />
      <meta name="description" content={"description"} />
      <meta name="keywords" content={"Keywords"} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:site_name" content={"antd-components"} />
      <meta property="og:title" content={"antd-components"} />
      <meta property="og:description" content={"description"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.coss.com.tw/" />
      {/* <meta property="og:image" content="logo192.png"/> */}
      <meta name="twitter:title" content={"antd-components"} />
      <meta name="twitter:description" content={"description"} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default Meta;
