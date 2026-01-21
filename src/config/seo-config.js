// SEO Configuration for edutally.com
// Enterprise-level keyword strategy and meta tag optimization

export const SEO_CONFIG = {
    // ==================== KEYWORD STRATEGY ====================
    keywords: {
        primary: ['school erp', 'school erp software', 'school management software', 'edutally', 'edutally erp'],
        secondary: [
            'school erp system',
            'school erp software india',
            'best school erp',
            'school management system',
            'educational erp',
            'school administration software'
        ],
        tertiary: [
            'best school erp software india',
            'cloud based school erp',
            'online school management system',
            'student information system',
            'school fee management software',
            'attendance management system',
            'exam management software',
            'school erp solution',
            'education management software',
            'school automation software',
            'institute management system',
            'school software india',
            'erp for schools',
            'school management platform',
            'digital school management',
            'smart school erp',
            'school erp system india',
            'school administration system',
            'complete school erp',
            'integrated school management',
            'school erp with mobile app',
            'affordable school erp',
            'school erp for cbse',
            'school erp for icse',
            'K12 school management software',
            'edutally school erp',
            'school data management system'
        ],
        // LSI Keywords for semantic SEO
        lsi: [
            'student attendance tracking',
            'online fee payment system',
            'parent teacher communication',
            'report card generation',
            'timetable management',
            'library management system',
            'transport management',
            'hostel management',
            'staff payroll management',
            'admission management system'
        ]
    },

    // ==================== SITE METADATA ====================
    site: {
        name: 'eduTally',
        url: 'https://www.edutally.com',
        logo: 'https://www.edutally.com/logo.png',
        foundingDate: '2015',
        description: 'eduTally - India\'s #1 School ERP Software. Complete cloud-based school management system for student management, fee collection, attendance tracking, exam management, and more. Trusted by 1000+ schools across India.',
        slogan: '#1 School ERP Software in India',
        email: 'info@edutally.com',
        phone: '+91-8869883042',
        address: {
            country: 'India',
            region: 'IN'
        }
    },

    // ==================== DEFAULT META TAGS ====================
    defaultMeta: {
        title: 'School ERP Software India - #1 eduTally | Best School Management System 2026',
        titleTemplate: '%s | eduTally',
        description: 'eduTally - India\'s #1 School ERP Software trusted by 1000+ schools. Complete cloud-based school management system with student management, online fee collection, attendance tracking, exam management, mobile apps, and 24/7 support. Get free demo today!',
        keywords: 'school erp, school erp software, school management software, school erp software india, best school erp, edutally, edutally erp, cloud based school erp, student information system, fee management software, attendance management, exam management, school administration software, educational erp, K12 school software, cbse school erp, online school management, digital school system',
        author: 'eduTally',
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
        siteName: 'eduTally',
        image: {
            url: 'https://www.edutally.com/og-image.png',
            width: 1200,
            height: 630,
            alt: 'eduTally - #1 School ERP Software in India | Cloud-based School Management System'
        }
    },

    // ==================== TWITTER CARD DEFAULTS ====================
    twitter: {
        card: 'summary_large_image',
        site: '@edutally',
        creator: '@edutally',
        image: 'https://www.edutally.com/twitter-image.png'
    },

    // ==================== SOCIAL MEDIA PROFILES ====================
    social: {
        facebook: 'https://facebook.com/edutally',
        twitter: 'https://twitter.com/edutally',
        linkedin: 'https://linkedin.com/company/edutally',
        instagram: 'https://instagram.com/edutally',
        youtube: 'https://youtube.com/@edutally'
    },

    // ==================== STRUCTURED DATA TEMPLATES ====================
    structuredData: {
        // Organization Schema
        organization: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'eduTally',
            alternateName: 'eduTally School ERP',
            url: 'https://www.edutally.com',
            logo: 'https://www.edutally.com/logo.png',
            description: 'India\'s #1 school ERP software provider offering comprehensive cloud-based educational management solutions. Trusted by 1000+ schools for student management, fee collection, attendance tracking, and more.',
            foundingDate: '2015',
            email: 'info@edutally.com',
            telephone: '+91-8869883042',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
                addressRegion: 'India'
            },
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-8869883042',
                contactType: 'Customer Service',
                email: 'info@edutally.com',
                areaServed: 'IN',
                availableLanguage: ['English', 'Hindi']
            },
            sameAs: [
                'https://facebook.com/edutally',
                'https://twitter.com/edutally',
                'https://linkedin.com/company/edutally',
                'https://instagram.com/edutally',
                'https://youtube.com/@edutally'
            ]
        },

        // Software Application Schema
        softwareApplication: {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'eduTally School ERP',
            alternateName: 'eduTally',
            applicationCategory: 'BusinessApplication',
            applicationSubCategory: 'Educational Management Software',
            operatingSystem: 'Web, Windows, macOS, Linux, iOS, Android',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
                priceValidUntil: '2027-12-31',
                url: 'https://www.edutally.com'
            },
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '1000',
                bestRating: '5',
                worstRating: '1',
                reviewCount: '850'
            },
            creator: {
                '@type': 'Organization',
                name: 'eduTally'
            },
            provider: {
                '@type': 'Organization',
                name: 'eduTally',
                url: 'https://www.edutally.com'
            },
            description: 'Complete cloud-based school ERP and management software for educational institutions in India. Features include student management, fee collection, attendance tracking, exam management, report cards, timetable, staff management, library, transport, and mobile apps.',
            featureList: 'Student Information Management, Online Fee Collection, Attendance Tracking System, Exam Management, Automated Report Cards, Timetable Management, Staff Management, Payroll System, Library Management, Transport Management, Hostel Management, Mobile Apps for Parents and Students, SMS Notifications, Email Alerts, Online Admission, Gate Pass System, Assignment Management, Parent-Teacher Communication',
            screenshot: 'https://www.edutally.com/screenshot.png',
            softwareVersion: '3.0',
            releaseNotes: 'Latest version with AI-powered features, enhanced mobile apps, and improved performance',
            downloadUrl: 'https://www.edutally.com/school-apps',
            installUrl: 'https://www.edutally.com/school-apps'
        },

        // WebSite Schema
        website: {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'eduTally',
            alternateName: 'eduTally School ERP',
            url: 'https://www.edutally.com',
            description: '#1 School ERP software in India - Complete cloud-based school management system',
            publisher: {
                '@type': 'Organization',
                name: 'eduTally',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.edutally.com/logo.png'
                }
            },
            potentialAction: {
                '@type': 'SearchAction',
                target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://www.edutally.com/search?q={search_term_string}'
                },
                'query-input': 'required name=search_term_string'
            }
        },

        // LocalBusiness Schema (for Contact page)
        localBusiness: {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.edutally.com',
            name: 'eduTally',
            image: 'https://www.edutally.com/logo.png',
            telephone: '+91-8869883042',
            email: 'info@edutally.com',
            url: 'https://www.edutally.com',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
                addressRegion: 'India'
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: '28.6139',
                longitude: '77.2090'
            },
            priceRange: '$$',
            openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '18:00'
            },
            areaServed: {
                '@type': 'Country',
                name: 'India'
            }
        },

        // FAQPage Schema for Rich Snippets
        faqPage: {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'What is School ERP Software?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'School ERP Software is a comprehensive cloud-based management system that helps educational institutions manage student information, fee collection, attendance tracking, exam management, report cards, timetables, staff management, and parent communication - all in one platform.'
                    }
                },
                {
                    '@type': 'Question',
                    name: 'Why choose eduTally School ERP?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'eduTally is India\'s #1 School ERP Software trusted by 1000+ schools. It offers complete automation, mobile apps for parents and students, 24/7 support, cloud-based access, affordable pricing, and comprehensive features including student management, fee collection, attendance tracking, exam management, and much more.'
                    }
                },
                {
                    '@type': 'Question',
                    name: 'Is eduTally suitable for CBSE and ICSE schools?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, eduTally School ERP is designed to work with all educational boards including CBSE, ICSE, State Boards, and International Boards. It is fully customizable to meet your specific curriculum and grading requirements.'
                    }
                },
                {
                    '@type': 'Question',
                    name: 'Does eduTally provide mobile apps?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, eduTally provides free mobile apps for both Android and iOS platforms. Parents and students can access attendance, grades, fees, assignments, notifications, and communicate with teachers through the mobile app.'
                    }
                },
                {
                    '@type': 'Question',
                    name: 'How much does School ERP software cost?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'eduTally offers flexible and affordable pricing plans based on the number of students and features required. Contact us at +91-8869883042 or info@edutally.com for a free demo and custom quote.'
                    }
                },
                {
                    '@type': 'Question',
                    name: 'Is eduTally cloud-based or on-premise?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'eduTally is a cloud-based School ERP software accessible from anywhere with internet connection. This ensures automatic updates, data security, backup, and no need for expensive hardware or IT infrastructure.'
                    }
                }
            ]
        },

        // BreadcrumbList Schema
        breadcrumb: {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://www.edutally.com/'
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'School ERP Software',
                    item: 'https://www.edutally.com/#features'
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Contact',
                    item: 'https://www.edutally.com/contact'
                }
            ]
        }
    },

    // ==================== PAGE-SPECIFIC SEO ====================
    pages: {
        home: {
            title: 'School ERP Software India - #1 eduTally | Best School Management System 2026',
            description: 'eduTally - India\'s #1 School ERP Software trusted by 1000+ schools. Complete cloud-based school management system with student management, online fee collection, attendance tracking, exam management, mobile apps, and 24/7 support. Get free demo today!',
            keywords: 'school erp, school erp software, school management software, school erp software india, best school erp, edutally, cloud based school erp, student information system, online school management, K12 school software',
            canonical: 'https://www.edutally.com/',
            ogImage: 'https://www.edutally.com/og-home.png'
        },

        contact: {
            title: 'Contact Us | eduTally School ERP - Get Free Demo',
            description: 'Contact eduTally for school ERP software inquiries. Get a free demo, pricing, or support. Call +91-8869883042 or email info@edutally.com. Expert team ready to help transform your school.',
            keywords: 'contact edutally, school erp contact, school erp demo, school software inquiry, edutally support',
            canonical: 'https://www.edutally.com/contact',
            ogImage: 'https://www.edutally.com/og-contact.png',
            robots: 'index, follow'
        },

        about: {
            title: 'About eduTally | Leading School ERP Software Provider in India Since 2015',
            description: 'Learn about eduTally - India\'s #1 school ERP software provider trusted by 1000+ schools since 2015. Our mission is to empower educational institutions with cutting-edge cloud-based ERP technology.',
            keywords: 'about edutally, school erp company, educational software provider india, school management solution provider',
            canonical: 'https://www.edutally.com/about',
            ogImage: 'https://www.edutally.com/og-about.png'
        },

        schoolApps: {
            title: 'School Mobile Apps | eduTally Apps for Parents & Students - Free Download',
            description: 'Download free eduTally School Apps for Android & iOS. Parents and students can access attendance, grades, fees, assignments, notifications, and communicate with teachers. Best school app in India.',
            keywords: 'school app, student app, parent app, school mobile application, edutally app, school erp app, best school app india',
            canonical: 'https://www.edutally.com/school-apps',
            ogImage: 'https://www.edutally.com/og-apps.png'
        },

        login: {
            title: 'Login to eduTally | School ERP Management System Access',
            description: 'Secure login to eduTally school ERP system. Access your dashboard for student management, fee collection, attendance tracking, exam management, and more.',
            keywords: 'edutally login, school erp login, educational software login',
            canonical: 'https://www.edutally.com/login',
            robots: 'noindex, nofollow' // Don't index login page
        },

        impactReport: {
            title: 'Impact Report | eduTally School ERP Success Stories',
            description: 'Read how eduTally School ERP has transformed 1000+ schools across India. Real impact stories, data insights, and success metrics from our partner schools.',
            keywords: 'school erp impact, edutally success stories, school management case studies, erp impact report',
            canonical: 'https://www.edutally.com/impact-report',
            ogImage: 'https://www.edutally.com/og-impact.png'
        }
    }
};

// Helper function to get all keywords as a comma-separated string
export const getAllKeywords = () => {
    const { primary, secondary, tertiary, lsi } = SEO_CONFIG.keywords;
    return [...primary, ...secondary, ...tertiary, ...lsi].join(', ');
};

// Helper function to get page-specific SEO data
export const getPageSEO = (pageName) => {
    return SEO_CONFIG.pages[pageName] || SEO_CONFIG.pages.home;
};

export default SEO_CONFIG;
