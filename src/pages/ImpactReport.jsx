import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft,
    TrendingUp,
    Target,
    Users,
    School,
    GraduationCap,
    UserCheck,
    BarChart3,
    Clock,
    CheckCircle,
    Zap,
    Database,
    Shield,
    Calendar,
    FileText,
    MessageSquare,
    DollarSign,
    Award,
    TrendingDown,
    AlertCircle
} from 'lucide-react';
import SchoolERPHeader from '../components/sections/SchoolERPHeader';
import Footer from '../components/Footer';

const ImpactReport = () => {
    return (
        <div className="min-h-screen bg-[#FEFEFE]">
            {/* Header */}
            <SchoolERPHeader />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link
                        to="/"
                        className="inline-flex items-center text-sm text-gray-300 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>

                    <div className="max-w-4xl">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 text-sm font-bold tracking-wide uppercase mb-6 border border-blue-400/20">
                            <BarChart3 className="w-4 h-4 mr-2" />
                            School ERP Impact Report 2025
                        </span>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                            Transforming Education Through{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                                Data-Driven Innovation
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
                            A comprehensive analysis of how our School ERP solution is revolutionizing
                            educational administration, improving efficiency, and empowering stakeholders
                            across 500+ partner institutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

                {/* Executive Summary */}
                <section className="mb-20">
                    <SectionHeader
                        icon={Target}
                        title="Executive Summary"
                        subtitle="What is the Impact Report and why does it matter?"
                    />

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                        <p className="text-base text-gray-700 leading-relaxed mb-6">
                            The <strong>School ERP Impact Report</strong> is a comprehensive documentation of measurable
                            improvements and transformative outcomes achieved by educational institutions using our
                            Enterprise Resource Planning system. This report exists to provide transparent, data-backed
                            evidence of how technology can streamline school operations, reduce administrative burden,
                            and enhance the educational experience for all stakeholders.
                        </p>

                        <p className="text-base text-gray-700 leading-relaxed mb-6">
                            Based on data collected from over 500 partner schools during the 2023-2024 academic year,
                            this report demonstrates real-world impact across key metrics: administrative efficiency,
                            teacher satisfaction, student engagement, and operational cost reduction.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <MetricCard
                                number="500+"
                                label="Partner Schools"
                                icon={School}
                                color="blue"
                            />
                            <MetricCard
                                number="12M+"
                                label="Hours Saved Annually"
                                icon={Clock}
                                color="emerald"
                            />
                            <MetricCard
                                number="97%"
                                label="User Satisfaction Rate"
                                icon={Award}
                                color="purple"
                            />
                        </div>
                    </div>
                </section>

                {/* Problem Statement */}
                <section className="mb-20">
                    <SectionHeader
                        icon={AlertCircle}
                        title="The Challenge"
                        subtitle="Common problems in traditional school management"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ProblemCard
                            title="Manual Data Entry Overload"
                            description="Staff spending countless hours on repetitive paperwork, attendance tracking, and grade entry instead of focusing on educational quality."
                            icon={FileText}
                        />
                        <ProblemCard
                            title="Communication Gaps"
                            description="Fragmented communication between administration, teachers, students, and parents leading to misalignment and delays."
                            icon={MessageSquare}
                        />
                        <ProblemCard
                            title="Lack of Real-Time Insights"
                            description="Decision-makers operating without access to current data, making it difficult to identify trends or respond to issues promptly."
                            icon={BarChart3}
                        />
                        <ProblemCard
                            title="Inefficient Resource Allocation"
                            description="Poor visibility into resource utilization, scheduling conflicts, and budget management leading to waste and inefficiency."
                            icon={DollarSign}
                        />
                    </div>
                </section>

                {/* Our Solution */}
                <section className="mb-20">
                    <SectionHeader
                        icon={Zap}
                        title="Our Solution"
                        subtitle="How the School ERP addresses these challenges"
                    />

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <SolutionItem
                                title="Automated Workflows"
                                description="Eliminate repetitive tasks through intelligent automation. From attendance tracking to grade calculation, report generation to fee management—our system handles it all with precision."
                                icon={Zap}
                            />
                            <SolutionItem
                                title="Unified Communication Hub"
                                description="Centralize all communication channels. Announcements, notifications, parent-teacher interactions, and administrative updates flow seamlessly through a single platform."
                                icon={MessageSquare}
                            />
                            <SolutionItem
                                title="Real-Time Analytics Dashboard"
                                description="Access comprehensive, real-time insights into every aspect of school operations. Make data-driven decisions with customizable dashboards and detailed reports."
                                icon={BarChart3}
                            />
                            <SolutionItem
                                title="Smart Resource Management"
                                description="Optimize allocation of classrooms, staff, equipment, and budgets. Our intelligent scheduling prevents conflicts and maximizes utilization."
                                icon={Database}
                            />
                        </div>
                    </div>
                </section>

                {/* Key Benefits by Stakeholder */}
                <section className="mb-20">
                    <SectionHeader
                        icon={Users}
                        title="Stakeholder Benefits"
                        subtitle="How each user group benefits from the ERP system"
                    />

                    <div className="space-y-6">
                        {/* School Management */}
                        <StakeholderCard
                            title="School Management & Administrators"
                            icon={School}
                            color="blue"
                            benefits={[
                                "Complete visibility into all school operations through comprehensive dashboards",
                                "Reduced administrative overhead by 88% through automation of manual tasks",
                                "Real-time financial tracking and budget management with detailed analytics",
                                "Instant access to student performance data, attendance trends, and staff metrics",
                                "Simplified compliance and reporting with automated document generation",
                                "Enhanced decision-making capabilities through predictive analytics and insights"
                            ]}
                        />

                        {/* Teachers */}
                        <StakeholderCard
                            title="Teachers & Faculty"
                            icon={GraduationCap}
                            color="emerald"
                            benefits={[
                                "97% reported increased satisfaction due to reduced administrative burden",
                                "Automated attendance tracking, grade entry, and report card generation",
                                "Easy assignment creation, submission tracking, and evaluation workflows",
                                "Direct communication channels with students and parents",
                                "Access to student performance history and learning analytics",
                                "Digital lesson planning and resource sharing capabilities"
                            ]}
                        />

                        {/* Students */}
                        <StakeholderCard
                            title="Students"
                            icon={UserCheck}
                            color="purple"
                            benefits={[
                                "24/7 access to grades, assignments, schedules, and learning materials",
                                "Real-time notifications for upcoming assignments, exams, and events",
                                "Personalized learning dashboards tracking academic progress",
                                "Easy submission of assignments and instant feedback",
                                "Access to digital library and learning resources",
                                "Transparent fee management and payment history"
                            ]}
                        />

                        {/* Parents */}
                        <StakeholderCard
                            title="Parents & Guardians"
                            icon={Users}
                            color="orange"
                            benefits={[
                                "Real-time visibility into child's attendance and academic performance",
                                "Direct communication with teachers and school administration",
                                "Instant notifications about school events, announcements, and emergencies",
                                "Transparent fee structure with online payment options",
                                "Access to report cards, progress reports, and behavioral assessments",
                                "Involvement in school activities through event calendars and volunteer management"
                            ]}
                        />
                    </div>
                </section>

                {/* Real-World Use Cases */}
                <section className="mb-20">
                    <SectionHeader
                        icon={Award}
                        title="Real-World Use Cases"
                        subtitle="Practical applications driving measurable impact"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <UseCaseCard
                            title="Streamlined Admission Process"
                            scenario="A large urban school with 3000+ students reduced their admission cycle from 6 weeks to 10 days by digitizing applications, automated document verification, and online interview scheduling."
                            impact={[
                                "83% reduction in processing time",
                                "100% digital, paperless workflow",
                                "Real-time application status for parents"
                            ]}
                            icon={UserCheck}
                        />

                        <UseCaseCard
                            title="Automated Fee Collection"
                            scenario="A multi-campus institution eliminated manual fee tracking by implementing automated billing, online payment gateways, and instant receipt generation with SMS notifications."
                            impact={[
                                "99% on-time fee collection rate",
                                "Zero manual reconciliation errors",
                                "40 hours saved per month in accounting"
                            ]}
                            icon={DollarSign}
                        />

                        <UseCaseCard
                            title="Intelligent Timetable Management"
                            scenario="A secondary school automated their complex timetable creation process, considering teacher availability, room capacity, subject requirements, and student electives."
                            impact={[
                                "Timetable generation in 2 hours vs 2 weeks",
                                "Zero scheduling conflicts",
                                "Instant updates for changes communicated to all stakeholders"
                            ]}
                            icon={Calendar}
                        />

                        <UseCaseCard
                            title="Data-Driven Performance Monitoring"
                            scenario="A progressive school implemented real-time academic analytics to identify at-risk students early, enabling timely interventions and personalized support programs."
                            impact={[
                                "35% improvement in student retention",
                                "Early identification of learning gaps",
                                "Measurable improvement in overall performance"
                            ]}
                            icon={TrendingUp}
                        />
                    </div>
                </section>

                {/* Data Insights & Decision Making */}
                <section className="mb-20">
                    <SectionHeader
                        icon={Database}
                        title="Data Insights & Decision Making"
                        subtitle="How analytics empower leadership and improve outcomes"
                    />

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                        <p className="text-base text-gray-700 leading-relaxed mb-8">
                            In today's educational landscape, data is more than just numbers—it's the foundation
                            for strategic decision-making. Our ERP system transforms raw data into actionable
                            insights that drive meaningful change.
                        </p>

                        <div className="space-y-6">
                            <InsightCard
                                title="Predictive Analytics for Student Success"
                                description="Machine learning algorithms analyze attendance patterns, assignment submissions, test scores, and behavioral data to predict students at risk of underperformance. Early intervention programs can be deployed before grades decline."
                                metrics={["92% accuracy in risk prediction", "40% reduction in student dropouts"]}
                            />

                            <InsightCard
                                title="Resource Optimization"
                                description="Detailed analytics on classroom utilization, teacher workload distribution, and equipment usage help administrators optimize resource allocation, reduce waste, and improve operational efficiency."
                                metrics={["30% better space utilization", "25% reduction in operational costs"]}
                            />

                            <InsightCard
                                title="Performance Benchmarking"
                                description="Compare performance across classes, grades, subjects, and even with peer institutions. Identify best practices, replicate success, and address areas of concern with data-backed strategies."
                                metrics={["360° performance visibility", "Continuous improvement cycles"]}
                            />

                            <InsightCard
                                title="Financial Intelligence"
                                description="Real-time financial dashboards provide visibility into revenue streams, expense categories, budget adherence, and cash flow projections. Make informed decisions about investments, staffing, and infrastructure."
                                metrics={["15% improvement in budget accuracy", "Real-time financial health monitoring"]}
                            />
                        </div>
                    </div>
                </section>

                {/* ROI & Performance Metrics */}
                <section className="mb-20">
                    <SectionHeader
                        icon={TrendingUp}
                        title="Return on Investment"
                        subtitle="Measurable improvements across key performance indicators"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <ROIMetric
                            value="88%"
                            label="Reduction in Manual Tasks"
                            trend="down"
                            icon={TrendingDown}
                            color="emerald"
                        />
                        <ROIMetric
                            value="97%"
                            label="Teacher Satisfaction Increase"
                            trend="up"
                            icon={TrendingUp}
                            color="blue"
                        />
                        <ROIMetric
                            value="45%"
                            label="Faster Report Completion"
                            trend="up"
                            icon={TrendingUp}
                            color="purple"
                        />
                        <ROIMetric
                            value="23%"
                            label="Faster Admin Execution"
                            trend="up"
                            icon={TrendingUp}
                            color="orange"
                        />
                    </div>

                    <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Average 3-Year ROI Analysis</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Year 1</div>
                                <div className="text-3xl font-bold text-emerald-600 mb-2">145%</div>
                                <div className="text-sm text-gray-600">Initial efficiency gains offset implementation costs</div>
                            </div>
                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Year 2</div>
                                <div className="text-3xl font-bold text-emerald-600 mb-2">287%</div>
                                <div className="text-sm text-gray-600">Compounding benefits from full system adoption</div>
                            </div>
                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Year 3</div>
                                <div className="text-3xl font-bold text-emerald-600 mb-2">412%</div>
                                <div className="text-sm text-gray-600">Sustained productivity improvements and cost savings</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-12">
                    <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-6 md:p-10 text-white">
                        <div className="max-w-4xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                The Future of Educational Administration
                            </h2>
                            <p className="text-base md:text-lg text-blue-50 leading-relaxed mb-8">
                                The impact of our School ERP system extends far beyond mere digitization—it represents
                                a fundamental shift in how educational institutions operate. By automating routine tasks,
                                providing real-time insights, and fostering seamless communication, we empower schools
                                to focus on what truly matters: delivering exceptional education.
                            </p>
                            <p className="text-base md:text-lg text-blue-50 leading-relaxed mb-10">
                                The data speaks for itself: improved efficiency, enhanced satisfaction, better outcomes,
                                and sustainable growth. As we continue to innovate and evolve, our commitment remains
                                unwavering—to provide schools with the tools they need to thrive in an increasingly
                                digital world.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    Schedule a Demo
                                    <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
                                </Link>
                                <Link
                                    to="/"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-700/50 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-200 border border-blue-400/30"
                                >
                                    Explore Features
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

// ========== Component Helpers ==========

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
    <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg border border-blue-100">
                <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        <p className="text-base text-gray-600 max-w-3xl">{subtitle}</p>
    </div>
);

const MetricCard = ({ number, label, icon: Icon, color }) => {
    const colorClasses = {
        blue: 'bg-blue-50 text-blue-600 border-blue-100',
        emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        purple: 'bg-purple-50 text-purple-600 border-purple-100',
        orange: 'bg-orange-50 text-orange-600 border-orange-100'
    };

    return (
        <div className={`${colorClasses[color]} rounded-xl p-5 border text-center`}>
            <Icon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">{number}</div>
            <div className="text-sm font-medium opacity-80">{label}</div>
        </div>
    );
};

const ProblemCard = ({ title, description, icon: Icon }) => (
    <div className="bg-red-50 rounded-xl p-5 border border-red-100">
        <div className="flex items-start gap-4">
            <div className="p-2 bg-red-100 rounded-lg flex-shrink-0">
                <Icon className="w-6 h-6 text-red-600" />
            </div>
            <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
            </div>
        </div>
    </div>
);

const SolutionItem = ({ title, description, icon: Icon }) => (
    <div className="flex items-start gap-4">
        <div className="p-3 bg-white rounded-lg shadow-sm border border-blue-100 flex-shrink-0">
            <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
        </div>
    </div>
);

const StakeholderCard = ({ title, icon: Icon, color, benefits }) => {
    const colorClasses = {
        blue: 'from-blue-50 to-blue-100/50 border-blue-200',
        emerald: 'from-emerald-50 to-emerald-100/50 border-emerald-200',
        purple: 'from-purple-50 to-purple-100/50 border-purple-200',
        orange: 'from-orange-50 to-orange-100/50 border-orange-200'
    };

    const iconColors = {
        blue: 'bg-blue-100 text-blue-600',
        emerald: 'bg-emerald-100 text-emerald-600',
        purple: 'bg-purple-100 text-purple-600',
        orange: 'bg-orange-100 text-orange-600'
    };

    return (
        <div className={`bg-gradient-to-br ${colorClasses[color]} rounded-2xl p-6 border`}>
            <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 ${iconColors[color]} rounded-xl`}>
                    <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            </div>
            <ul className="space-y-3">
                {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 leading-relaxed">{benefit}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const UseCaseCard = ({ title, scenario, impact, icon: Icon }) => (
    <div className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg">
                <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">{scenario}</p>
        <div className="space-y-2">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Impact:</div>
            {impact.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                </div>
            ))}
        </div>
    </div>
);

const InsightCard = ({ title, description, metrics }) => (
    <div className="border-l-4 border-blue-500 bg-slate-50 rounded-r-xl p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-3">
            {metrics.map((metric, idx) => (
                <span key={idx} className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                    {metric}
                </span>
            ))}
        </div>
    </div>
);

const ROIMetric = ({ value, label, trend, icon: Icon, color }) => {
    const colorClasses = {
        blue: 'from-blue-500 to-blue-600',
        emerald: 'from-emerald-500 to-emerald-600',
        purple: 'from-purple-500 to-purple-600',
        orange: 'from-orange-500 to-orange-600'
    };

    return (
        <div className="bg-white rounded-xl p-5 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
            <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${colorClasses[color]} rounded-full mb-4`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
            <div className="text-sm font-medium text-gray-600">{label}</div>
        </div>
    );
};

export default ImpactReport;
