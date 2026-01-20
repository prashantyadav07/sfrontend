import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEO_CONFIG from '../config/seo-config';

/**
 * SEOHead Component
 * Reusable SEO component using React Helmet Async for dynamic meta tags
 * 
 * @param {string} pageName - Page identifier (home, contact, about, etc.)
 * @param {string} title - Custom page title (optional)
 * @param {string} description - Custom description (optional)
 * @param {string} keywords - Custom keywords (optional)
 * @param {array} schemas - Array of schema objects to include (optional)
 */
const SEOHead = ({
    pageName = 'home',
    title,
    description,
    keywords,
    image,
    schemas = []
}) => {
    // Get page-specific SEO data
    const pageSEO = SEO_CONFIG.pages[pageName] || SEO_CONFIG.pages.home;

    // Use custom values or fall back to page defaults
    const metaTitle = title || pageSEO.title;
    const metaDescription = description || pageSEO.description;
    const metaKeywords = keywords || pageSEO.keywords;
    const metaImage = image || pageSEO.ogImage || SEO_CONFIG.openGraph.image.url;
    const canonical = pageSEO.canonical;
    const robotsDirective = pageSEO.robots || SEO_CONFIG.defaultMeta.robots;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{metaTitle}</title>
            <meta name="title" content={metaTitle} />
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="author" content={SEO_CONFIG.defaultMeta.author} />
            <meta name="robots" content={robotsDirective} />
            <meta name="googlebot" content={SEO_CONFIG.defaultMeta.googlebot} />
            <meta name="language" content={SEO_CONFIG.defaultMeta.language} />
            <meta name="revisit-after" content={SEO_CONFIG.defaultMeta.revisitAfter} />
            <meta name="distribution" content={SEO_CONFIG.defaultMeta.distribution} />
            <meta name="rating" content={SEO_CONFIG.defaultMeta.rating} />

            {/* Canonical URL */}
            <link rel="canonical" href={canonical} />

            {/* Mobile Optimization */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={SEO_CONFIG.openGraph.type} />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:image:width" content={SEO_CONFIG.openGraph.image.width} />
            <meta property="og:image:height" content={SEO_CONFIG.openGraph.image.height} />
            <meta property="og:image:alt" content={SEO_CONFIG.openGraph.image.alt} />
            <meta property="og:site_name" content={SEO_CONFIG.site.name} />
            <meta property="og:locale" content={SEO_CONFIG.openGraph.locale} />

            {/* Twitter Card */}
            <meta name="twitter:card" content={SEO_CONFIG.twitter.card} />
            <meta name="twitter:site" content={SEO_CONFIG.twitter.site} />
            <meta name="twitter:creator" content={SEO_CONFIG.twitter.creator} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />

            {/* Additional SEO Tags */}
            <meta name="theme-color" content="#3b82f6" />
            <meta name="msapplication-TileColor" content="#3b82f6" />
            <meta name="format-detection" content="telephone=yes" />
            <meta name="format-detection" content="address=yes" />

            {/* Geo Tags */}
            <meta name="geo.region" content={SEO_CONFIG.site.address.region} />
            <meta name="geo.placename" content="India" />

            {/* Business Information */}
            <meta name="contact" content={SEO_CONFIG.site.email} />
            <meta name="copyright" content={`© ${new Date().getFullYear()} ${SEO_CONFIG.site.name}. All rights reserved.`} />

            {/* Structured Data (JSON-LD) */}
            {schemas.length > 0 && schemas.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEOHead;
