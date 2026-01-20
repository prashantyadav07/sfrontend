// SEO Configuration for ednoraerp.com
// Enterprise-level keyword strategy and meta tag optimization

export const SEO_CONFIG = {
    // ==================== KEYWORD STRATEGY ====================
    keywords: {
        primary: ['ednora erp', 'ednoraerp', 'ed nora erp'],
        secondary: ['ednora school erp', 'nextgen school erp', 'school erp software'],
        tertiary: [
            'school erp software india',
            'best school erp system',
            'school management software',
            'educational erp solution',
            'school administration software',
            'student management system',
            'school fee management software',
            'online school erp',
            'cloud based school erp'
        ]
    },

    // ==================== SITE METADATA ====================
    site: {
        name: 'Ednora ERP',
        url: 'https://ednoraerp.com',
        logo: 'https://ednoraerp.com/logo.png',
        foundingDate: '2015',
        description: 'Leading school ERP software in India - Ednora ERP offers comprehensive school management solutions with nextgen technology for educational institutions.',
        slogan: '#1 School ERP Software in India',
        email: 'info@ednoraerp.com',
        phone: '+91-8869883042',
        address: {
            country: 'India',
            region: 'IN'
        }
    },

    // ==================== DEFAULT META TAGS ====================
    defaultMeta: {
        title: 'Ednora ERP | #1 School ERP Software India | NextGen School Management System',
        titleTemplate: '%s | Ednora ERP',
        description: 'Ednora ERP - India\'s leading school ERP software. Complete school management solution with student information system, fee management, attendance tracking, and more. Transform your educational institution with our nextgen school ERP software.',
        keywords: 'ednora erp, ednoraerp, ed nora erp, ednora school erp, nextgen school erp, school erp software india, best school management software, educational erp, student information system',
        author: 'Ednora ERP',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        googlebot: 'index, follow',
        language: 'en-US',
        revisitAfter: '7 days',
        distribution: 'global',
        rating: 'general'
    },

    // ==================== OPEN GRAPH DEFAULTS ====================
    openGraph: {
        type: 'website',
        locale: 'en_US',
        siteName: 'Ednora ERP',
        image: {
            url: 'https://ednoraerp.com/og-image.png',
            width: 1200,
            height: 630,
            alt: 'Ednora ERP - #1 School ERP Software in India'
        }
    },

    // ==================== TWITTER CARD DEFAULTS ====================
    twitter: {
        card: 'summary_large_image',
        site: '@ednoraerp',
        creator: '@ednoraerp',
        image: 'https://ednoraerp.com/twitter-image.png'
    },

    // ==================== SOCIAL MEDIA PROFILES ====================
    social: {
        facebook: 'https://facebook.com/ednoraerp',
        twitter: 'https://twitter.com/ednoraerp',
        linkedin: 'https://linkedin.com/company/ednoraerp',
        instagram: 'https://instagram.com/ednoraerp',
        youtube: 'https://youtube.com/@ednoraerp'
    },

    // ==================== STRUCTURED DATA TEMPLATES ====================
    structuredData: {
        // Organization Schema
        organization: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Ednora ERP',
            url: 'https://ednoraerp.com',
            logo: 'https://ednoraerp.com/logo.png',
            description: 'Leading school ERP software provider in India offering comprehensive educational management solutions',
            foundingDate: '2015',
            email: 'info@ednoraerp.com',
            telephone: '+91-8869883042',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN'
            },
            sameAs: [
                'https://facebook.com/ednoraerp',
                'https://twitter.com/ednoraerp',
                'https://linkedin.com/company/ednoraerp',
                'https://instagram.com/ednoraerp',
                'https://youtube.com/@ednoraerp'
            ]
        },

        // Software Application Schema
        softwareApplication: {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Ednora School ERP',
            applicationCategory: 'BusinessApplication',
            applicationSubCategory: 'Educational Management Software',
            operatingSystem: 'Web, Windows, macOS, Linux, iOS, Android',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
                priceValidUntil: '2027-12-31'
            },
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '500',
                bestRating: '5',
                worstRating: '1'
            },
            creator: {
                '@type': 'Organization',
                name: 'Ednora ERP'
            },
            description: 'Comprehensive school management ERP software for educational institutions in India',
            featureList: 'Student Management, Fee Management, Attendance Tracking, Exam Management, Report Cards, Timetable Management, Staff Management, Library Management, Transport Management',
            screenshot: 'https://ednoraerp.com/screenshot.png',
            softwareVersion: '2.0',
            releaseNotes: 'Latest version with enhanced features and improved performance'
        },

        // WebSite Schema
        website: {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Ednora ERP',
            url: 'https://ednoraerp.com',
            description: 'Leading school ERP software in India',
            publisher: {
                '@type': 'Organization',
                name: 'Ednora ERP',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://ednoraerp.com/logo.png'
                }
            },
            potentialAction: {
                '@type': 'SearchAction',
                target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://ednoraerp.com/search?q={search_term_string}'
                },
                'query-input': 'required name=search_term_string'
            }
        },

        // LocalBusiness Schema (for Contact page)
        localBusiness: {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://ednoraerp.com',
            name: 'Ednora ERP',
            image: 'https://ednoraerp.com/logo.png',
            telephone: '+91-8869883042',
            email: 'info@ednoraerp.com',
            url: 'https://ednoraerp.com',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN'
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: '28.6139',
                longitude: '77.2090'
            },
            priceRange: '$$',
            openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00'
            }
        }
    },

    // ==================== PAGE-SPECIFIC SEO ====================
    pages: {
        home: {
            title: 'Ednora ERP | #1 School ERP Software India | NextGen School Management System',
            description: 'Transform your school with Ednora ERP - India\'s leading school management software. Complete ERP solution for student management, fee collection, attendance, exams, and more. Trusted by 500+ schools. Get started today!',
            keywords: 'ednora erp, ednoraerp, ed nora erp, ednora school erp, nextgen school erp, school erp software india, best school management system, educational erp solution',
            canonical: 'https://ednoraerp.com/',
            ogImage: 'https://ednoraerp.com/og-home.png'
        },

        contact: {
            title: 'Contact Us | Get in Touch with Ednora ERP Team',
            description: 'Contact Ednora ERP for school management software inquiries. Get a free demo, pricing information, or support. Available via phone, email, or visit our office. Expert team ready to help transform your school.',
            keywords: 'contact ednora erp, school erp contact, ednora support, school software demo, erp inquiry',
            canonical: 'https://ednoraerp.com/contact',
            ogImage: 'https://ednoraerp.com/og-contact.png',
            robots: 'index, follow'
        },

        about: {
            title: 'About Ednora ERP | Leading School Management Software Provider in India',
            description: 'Learn about Ednora ERP - India\'s trusted school management software provider since 2015. Our mission is to empower educational institutions with cutting-edge ERP technology. 500+ schools trust us.',
            keywords: 'about ednora erp, school erp company, educational software provider india, school management solution',
            canonical: 'https://ednoraerp.com/about',
            ogImage: 'https://ednoraerp.com/og-about.png'
        },

        schoolApps: {
            title: 'School Apps | Mobile Applications for Parents & Students | Ednora ERP',
            description: 'Download Ednora School Apps for Android & iOS. Parents and students can access attendance, grades, fees, assignments, and communicate with teachers. Available for free download.',
            keywords: 'school app, student app, parent app, school mobile application, ednora mobile app',
            canonical: 'https://ednoraerp.com/school-apps',
            ogImage: 'https://ednoraerp.com/og-apps.png'
        },

        login: {
            title: 'Login to Ednora ERP | School Management System Access',
            description: 'Secure login to Ednora ERP school management system. Access your dashboard for student management, fee collection, attendance tracking, and more.',
            keywords: 'ednora login, school erp login, educational software login',
            canonical: 'https://ednoraerp.com/login',
            robots: 'noindex, nofollow' // Don't index login page
        }
    }
};

// Helper function to get all keywords as a comma-separated string
export const getAllKeywords = () => {
    const { primary, secondary, tertiary } = SEO_CONFIG.keywords;
    return [...primary, ...secondary, ...tertiary].join(', ');
};

// Helper function to get page-specific SEO data
export const getPageSEO = (pageName) => {
    return SEO_CONFIG.pages[pageName] || SEO_CONFIG.pages.home;
};

export default SEO_CONFIG;
