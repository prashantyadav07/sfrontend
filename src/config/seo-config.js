// SEO Configuration for EdNora.com
// Enterprise-level keyword strategy and meta tag optimization

export const SEO_CONFIG = {
    // ==================== KEYWORD STRATEGY ====================
    keywords: {
        primary: ['school erp', 'school erp software', 'school management software', 'EdNora', 'EdNora erp'],
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
            'EdNora school erp',
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
        name: 'EdNora',
        url: 'https://www.EdNora.com',
        logo: 'https://www.EdNora.com/logo.png',
        foundingDate: '2015',
        description: 'EdNora - India\'s #1 School ERP Software. Complete cloud-based school management system for student management, fee collection, attendance tracking, exam management, and more. Trusted by 1000+ schools across India.',
        slogan: '#1 School ERP Software in India',
        email: 'info@EdNora.com',
        phone: '+91-8869883042',
        address: {
            country: 'India',
            region: 'IN'
        }
    },

    // ==================== DEFAULT META TAGS ====================
    defaultMeta: {
        title: 'School ERP Software India - #1 EdNora | Best School Management System 2026',
        titleTemplate: '%s | EdNora',
        description: 'EdNora - India\'s #1 School ERP Software trusted by 1000+ schools. Complete cloud-based school management system with student management, online fee collection, attendance tracking, exam management, mobile apps, and 24/7 support. Get free demo today!',
        keywords: 'school erp, school erp software, school management software, school erp software india, best school erp, EdNora, EdNora erp, cloud based school erp, student information system, fee management software, attendance management, exam management, school administration software, educational erp, K12 school software, cbse school erp, online school management, digital school system',
        author: 'EdNora',
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
        siteName: 'EdNora',
        image: {
            url: 'https://www.EdNora.com/og-image.png',
            width: 1200,
            height: 630,
            alt: 'EdNora - #1 School ERP Software in India | Cloud-based School Management System'
        }
    },

    // ==================== TWITTER CARD DEFAULTS ====================
    twitter: {
        card: 'summary_large_image',
        site: '@EdNora',
        creator: '@EdNora',
        image: 'https://www.EdNora.com/twitter-image.png'
    },

    // ==================== SOCIAL MEDIA PROFILES ====================
    social: {
        facebook: 'https://facebook.com/EdNora',
        twitter: 'https://twitter.com/EdNora',
        linkedin: 'https://linkedin.com/company/EdNora',
        instagram: 'https://instagram.com/EdNora',
        youtube: 'https://youtube.com/@EdNora'
    },

    // ==================== STRUCTURED DATA TEMPLATES ====================
    structuredData: {
        // Organization Schema
        organization: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'EdNora',
            alternateName: 'EdNora School ERP',
            url: 'https://www.EdNora.com',
            logo: 'https://www.EdNora.com/logo.png',
            description: 'India\'s #1 school ERP software provider offering comprehensive cloud-based educational management solutions. Trusted by 1000+ schools for student management, fee collection, attendance tracking, and more.',
            foundingDate: '2015',
            email: 'info@EdNora.com',
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
                email: 'info@EdNora.com',
                areaServed: 'IN',
                availableLanguage: ['English', 'Hindi']
            },
            sameAs: [
                'https://facebook.com/EdNora',
                'https://twitter.com/EdNora',
                'https://linkedin.com/company/EdNora',
                'https://instagram.com/EdNora',
                'https://youtube.com/@EdNora'
            ]
        },

        // Software Application Schema
        softwareApplication: {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'EdNora School ERP',
            alternateName: 'EdNora',
            applicationCategory: 'BusinessApplication',
            applicationSubCategory: 'Educational Management Software',
            operatingSystem: 'Web, Windows, macOS, Linux, iOS, Android',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
                priceValidUntil: '2027-12-31',
                url: 'https://www.EdNora.com'
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
                name: 'EdNora'
            },
            provider: {
                '@type': 'Organization',
                name: 'EdNora',
                url: 'https://www.EdNora.com'
            },
            description: 'Complete cloud-based school ERP and management software for educational institutions in India. Features include student management, fee collection, attendance tracking, exam management, report cards, timetable, staff management, library, transport, and mobile apps.',
            featureList: 'Student Information Management, Online Fee Collection, Attendance Tracking System, Exam Management, Automated Report Cards, Timetable Management, Staff Management, Payroll System, Library Management, Transport Management, Hostel Management, Mobile Apps for Parents and Students, SMS Notifications, Email Alerts, Online Admission, Gate Pass System, Assignment Management, Parent-Teacher Communication',
            screenshot: 'https://www.EdNora.com/screenshot.png',
            softwareVersion: '3.0',
            releaseNotes: 'Latest version with AI-powered features, enhanced mobile apps, and improved performance',
            downloadUrl: 'https://www.EdNora.com/school-apps',
            installUrl: 'https://www.EdNora.com/school-apps'
        },

        // WebSite Schema
        website: {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'EdNora',
            alternateName: 'EdNora School ERP',
            url: 'https://www.EdNora.com',
            description: '#1 School ERP software in India - Complete cloud-based school management system',
            publisher: {
                '@type': 'Organization',
                name: 'EdNora',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.EdNora.com/logo.png'
                }
            },
            potentialAction: {
                '@type': 'SearchAction',
                target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://www.EdNora.com/search?q={search_term_string}'
                },
                'query-input': 'required name=search_term_string'
            }
        },

        // LocalBusiness Schema (for Contact page)
        localBusiness: {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.EdNora.com',
            name: 'EdNora',
            image: 'https://www.EdNora.com/logo.png',
            telephone: '+91-8869883042',
            email: 'info@EdNora.com',
            url: 'https://www.EdNora.com',
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
                    name: 'Why choose EdNora School ERP?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'EdNora is India\'s #1 School ERP Software trusted by 1000+ schools. It offers complete automation, mobile apps for parents and students, 24/7 support, cloud-based access, affordable pricing, and comprehensive features including student management, fee collection, attendance tracking, exam management, and much more.'
                    }
                },
                {
                    '@type': 'Question',
                    name: 'Is EdNora suitable for CBSE and ICSE schools?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, EdNora School ERP is designed to work with all educational boards including CBSE, ICSE, State Boards, and International Boards. It is fully customizable to meet your specific curriculum and grading requirements.'
                    }
                },
                {
                    '@type': 'Question',
                    name: 'Does EdNora provide mobile apps?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, EdNora provides free mobile apps for both Android and iOS platforms. Parents and students can access attendance, grades, fees, assignments, notifications, and communicate with teachers through the mobile app.'
                    }
                },
                {
                    '@type': 'Question',
                    name: 'How much does School ERP software cost?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'EdNora offers flexible and affordable pricing plans based on the number of students and features required. Contact us at +91-8869883042 or info@EdNora.com for a free demo and custom quote.'
                    }
                },
                {
                    '@type': 'Question',
                    name: 'Is EdNora cloud-based or on-premise?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'EdNora is a cloud-based School ERP software accessible from anywhere with internet connection. This ensures automatic updates, data security, backup, and no need for expensive hardware or IT infrastructure.'
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
                    item: 'https://www.EdNora.com/'
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'School ERP Software',
                    item: 'https://www.EdNora.com/#features'
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Contact',
                    item: 'https://www.EdNora.com/contact'
                }
            ]
        }
    },

    // ==================== PAGE-SPECIFIC SEO ====================
    pages: {
        home: {
            title: 'School ERP Software India - #1 EdNora | Best School Management System 2026',
            description: 'EdNora - India\'s #1 School ERP Software trusted by 1000+ schools. Complete cloud-based school management system with student management, online fee collection, attendance tracking, exam management, mobile apps, and 24/7 support. Get free demo today!',
            keywords: 'school erp, school erp software, school management software, school erp software india, best school erp, EdNora, cloud based school erp, student information system, online school management, K12 school software',
            canonical: 'https://www.EdNora.com/',
            ogImage: 'https://www.EdNora.com/og-home.png'
        },

        contact: {
            title: 'Contact Us | EdNora School ERP - Get Free Demo',
            description: 'Contact EdNora for school ERP software inquiries. Get a free demo, pricing, or support. Call +91-8869883042 or email info@EdNora.com. Expert team ready to help transform your school.',
            keywords: 'contact EdNora, school erp contact, school erp demo, school software inquiry, EdNora support',
            canonical: 'https://www.EdNora.com/contact',
            ogImage: 'https://www.EdNora.com/og-contact.png',
            robots: 'index, follow'
        },

        about: {
            title: 'About EdNora | Leading School ERP Software Provider in India Since 2015',
            description: 'Learn about EdNora - India\'s #1 school ERP software provider trusted by 1000+ schools since 2015. Our mission is to empower educational institutions with cutting-edge cloud-based ERP technology.',
            keywords: 'about EdNora, school erp company, educational software provider india, school management solution provider',
            canonical: 'https://www.EdNora.com/about',
            ogImage: 'https://www.EdNora.com/og-about.png'
        },

        schoolApps: {
            title: 'School Mobile Apps | EdNora Apps for Parents & Students - Free Download',
            description: 'Download free EdNora School Apps for Android & iOS. Parents and students can access attendance, grades, fees, assignments, notifications, and communicate with teachers. Best school app in India.',
            keywords: 'school app, student app, parent app, school mobile application, EdNora app, school erp app, best school app india',
            canonical: 'https://www.EdNora.com/school-apps',
            ogImage: 'https://www.EdNora.com/og-apps.png'
        },

        login: {
            title: 'Login to EdNora | School ERP Management System Access',
            description: 'Secure login to EdNora school ERP system. Access your dashboard for student management, fee collection, attendance tracking, exam management, and more.',
            keywords: 'EdNora login, school erp login, educational software login',
            canonical: 'https://www.EdNora.com/login',
            robots: 'noindex, nofollow' // Don't index login page
        },

        impactReport: {
            title: 'Impact Report | EdNora School ERP Success Stories',
            description: 'Read how EdNora School ERP has transformed 1000+ schools across India. Real impact stories, data insights, and success metrics from our partner schools.',
            keywords: 'school erp impact, EdNora success stories, school management case studies, erp impact report',
            canonical: 'https://www.EdNora.com/impact-report',
            ogImage: 'https://www.EdNora.com/og-impact.png'
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
