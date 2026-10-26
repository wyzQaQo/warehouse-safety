import Script from 'next/script';

/** GA4（100guards.com · G-6VTDQH748K）。内部流量排除在 GA4 后台「数据流 → 配置标记设置」里配。 */
export default function GoogleAnalytics() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6VTDQH748K" strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-6VTDQH748K');`}
      </Script>
    </>
  );
}
