import { Injectable, signal } from '@angular/core';
import { PersonalInfo, Project, Experience, SkillCategory, Education } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  readonly personalInfo = signal<PersonalInfo>({
    name: 'Deepak Panchal',
    role: 'Senior Mobile App Developer',
    tagline: 'Crafting high-performance, architecture-driven mobile applications with Flutter, Dart & Kotlin',
    bio: 'Mobile App Developer with 2.5+ years of production experience building scalable, performance-focused mobile applications across Android and iOS. Specialized in Clean Architecture, BLoC/Cubit, GetX, Riverpod, REST APIs, Firebase, and native platform integrations. Experienced in mission-critical inventory, payment tracking, billing solutions, and real-time enterprise platforms.',
    experienceYears: '2.5+',
    location: 'Ahmedabad, Gujarat',
    hometown: 'Revdar, Rajasthan',
    phone: '+91 7727945437',
    email: 'dp245289@gmail.com',
    linkedin: 'https://www.linkedin.com/in/deepak-panchal-dev',
    github: 'https://github.com/deepakpanchal',
    avatarUrl: '/assets/profile.png',
    resumePdfUrl: '/assets/deepak-panchal-resume.pdf',
    metrics: [
      {
        value: '2.5+',
        label: 'Years Production Experience',
        description: 'Hands-on commercial mobile engineering at TechAbbot'
      },
      {
        value: '6+',
        label: 'Flagship Mobile Systems',
        description: 'Shipped fintech, billing, logistics, and media apps'
      },
      {
        value: '99.8%',
        label: 'Crash-Free Sessions',
        description: 'Optimized rendering, state isolation, and exception handling'
      },
      {
        value: '100%',
        label: 'Clean Architecture',
        description: 'BLoC, Riverpod, MVVM, and native Kotlin modules'
      }
    ]
  });

  readonly projects = signal<Project[]>([
    {
      id: 'hisab-pro',
      title: 'Hisab Pro',
      subtitle: 'Smart Ledger & Payment Tracking Mobile Platform',
      category: 'Fintech & Billing',
      platform: 'Flutter / iOS & Android',
      featured: true,
      tags: ['Flutter', 'Dart', 'BLoC / Cubit', 'GetX', 'OTP Auth', 'Secure Storage', 'ScreenUtil'],
      architecture: 'Clean Architecture with BLoC State Management & Offline-First Storage',
      description: 'A comprehensive, high-security mobile financial ledger and payment reconciliation app designed for merchants and small businesses to track receivables, customer credit balances, and transaction history with instant OTP authentication.',
      keyFeatures: [
        'Real-time cashflow dashboard with receivable calculation and balance summaries',
        'Customer ledger management with instant debt and credit settlement records',
        'Mobile number OTP authentication and high-security session management',
        'Transaction feed with date filters, search, and instant receipt generation',
        'Multi-language localization and adaptive dark/light interface theming'
      ],
      challenges: 'Handling precise decimal arithmetic for financial accounts across diverse customer ledgers without rounding drift, and delivering instant offline search across thousands of transaction entries.',
      solution: 'Architected immutable transaction models using BLoC state management and local indexed caches, ensuring 60fps rendering even with extensive transaction histories.',
      myContribution: 'Architected complete Flutter frontend, integrated state machines with BLoC, built custom UI with ScreenUtil for pixel-perfect iOS/Android consistency, and implemented OTP login flow.',
      thumbnail: '/assets/projects/hisabpro-dashboard.png',
      screenshots: [
        { url: '/assets/projects/hisabpro-dashboard.png', caption: 'Real-time Financial Ledger & Receivables Dashboard' },
        { url: '/assets/projects/hisabpro-customers.png', caption: 'Customer Directory & Outstanding Balances' },
        { url: '/assets/projects/hisabpro-transactions.png', caption: 'Transaction Stream & Payment Settlement Records' },
        { url: '/assets/projects/hisabpro-add-customer.png', caption: 'Customer Onboarding & Contact Picker' },
        { url: '/assets/projects/hisabpro-payment.png', caption: 'Instant Payment Settlement Entry' },
        { url: '/assets/projects/hisabpro-otp.png', caption: 'Mobile OTP Verification Screen' },
        { url: '/assets/projects/hisabpro-settings.png', caption: 'Account & Business Settings' }
      ],
      stats: [
        { label: 'Platform', value: 'iOS & Android' },
        { label: 'State Machine', value: 'BLoC + GetX' },
        { label: 'Security', value: 'OTP & Encrypted Cache' }
      ]
    },
    {
      id: 'invoice-maker',
      title: 'InvoiceMaker',
      subtitle: 'Enterprise Invoicing & GST Billing Solution',
      category: 'Fintech & Billing',
      platform: 'Flutter / Android & iOS',
      featured: true,
      tags: ['Flutter', 'Dart', 'flutter_bloc', 'GetStorage', 'PDF Engine', 'Thermal Print', 'GST Ready'],
      architecture: 'Modular MVVM Architecture with flutter_bloc and Vector PDF Rendering',
      description: 'A complete commercial billing and invoice generation mobile suite empowering businesses to draft professional, GST-compliant invoices in under 60 seconds, manage inventory catalogs, and print/share invoices seamlessly.',
      keyFeatures: [
        'Dynamic invoice generation with customizable professional template selector',
        'On-device vector PDF compilation and sharing via WhatsApp, Email, and Cloud',
        'Item & inventory catalog with unit pricing, tax rates, and batch descriptions',
        'Client directory with GSTIN verification, contact history, and balance tracking',
        'Business performance analytics with revenue breakdown (Paid, Pending, Draft)'
      ],
      challenges: 'Generating complex multi-page PDF documents reliably on mobile devices with differing font metrics, high-resolution logos, and thermal printer formatting.',
      solution: 'Created an isolated background PDF rendering pipeline using Flutter compute isolates, preventing UI stutter during intensive document synthesis.',
      myContribution: 'Engineered the PDF rendering engine, client & item management flows, reactive business analytics screen, and local persistence layer using GetStorage.',
      thumbnail: '/assets/projects/invoicemaker-dashboard.png',
      screenshots: [
        { url: '/assets/projects/invoicemaker-dashboard.png', caption: 'Business Overview & Revenue Analytics' },
        { url: '/assets/projects/invoicemaker-pdf.png', caption: 'Automated Vector PDF Invoice Preview (INV-2026-001)' },
        { url: '/assets/projects/invoicemaker-create.png', caption: 'Smart Invoice Builder with Template Engine' },
        { url: '/assets/projects/invoicemaker-list.png', caption: 'Searchable Filterable Invoices Ledger' },
        { url: '/assets/projects/invoicemaker-items.png', caption: 'Inventory & Service Catalog Manager' },
        { url: '/assets/projects/invoicemaker-client.png', caption: 'Client Directory & GST Detail Management' },
        { url: '/assets/projects/invoicemaker-analytics.png', caption: 'Invoice Status & Financial Performance Metrics' },
        { url: '/assets/projects/invoicemaker-profile.png', caption: 'Business Profile & Tax Configuration' }
      ],
      stats: [
        { label: 'Generation Speed', value: '< 60 Seconds' },
        { label: 'Export Formats', value: 'Vector PDF & Thermal' },
        { label: 'Data Mode', value: 'Offline-First' }
      ]
    },
    {
      id: 'warehouse-logistics',
      title: 'Warehouse Picking & Dispatch Suite',
      subtitle: 'Enterprise Supply Chain & Barcode Mobile System',
      category: 'Enterprise & Logistics',
      platform: 'Android / Rugged Industrial Devices & Tablets',
      featured: true,
      tags: ['Flutter', 'Kotlin', 'Barcode SDK', 'Zebra / Honeywell', 'BLoC', 'WebSockets', 'SQLite'],
      architecture: 'Clean Architecture with Native Kotlin Hardware Bridge & Offline SQLite',
      description: 'Mission-critical enterprise mobile logistics system developed at TechAbbot to streamline warehouse order picking, barcode verification, order staging, vehicle load assignment, and automated dispatch printing.',
      keyFeatures: [
        'High-speed barcode scanning integration with Zebra and Honeywell rugged hardware',
        'Warehouse picking route optimization reducing picker travel distance by 35%',
        'Order staging categorization ensuring systematically organized dispatch palettes',
        'Mobile loading verification with route and vehicle driver assignment',
        'Offline-first synchronization with production line backends via WebSockets & REST'
      ],
      challenges: 'Hardware latency with industrial laser scanners and handling spotty warehouse Wi-Fi connectivity without data loss or duplicate scans.',
      solution: 'Built custom Kotlin platform channels for zero-latency laser scanner interrupts and an offline-first transaction queue with conflict-free sync.',
      myContribution: 'Implemented scanner driver integration, picking workflow state machines in BLoC, route assignment UI, and offline database synchronization.',
      thumbnail: '/assets/projects/invoicemaker-items.png',
      screenshots: [
        { url: '/assets/projects/invoicemaker-items.png', caption: 'Item Identification & Batch Catalog Tracking' },
        { url: '/assets/projects/invoicemaker-list.png', caption: 'Order Dispatch Queue & Verification Status' }
      ],
      stats: [
        { label: 'Hardware', value: 'Industrial Barcode / POS' },
        { label: 'Latency', value: 'Sub-50ms Scan Time' },
        { label: 'Network', value: 'Offline-First Sync' }
      ]
    },
    {
      id: 'ecommerce-platform',
      title: 'Universal B2C Commerce Platform',
      subtitle: 'Omnichannel Shopping & Checkout Mobile Solution',
      category: 'E-Commerce',
      platform: 'Flutter / iOS & Android',
      featured: false,
      tags: ['Flutter', 'Riverpod', 'Stripe', 'Razorpay', 'Firebase FCM', 'Dark Mode'],
      architecture: 'Clean Architecture with Riverpod & Repository Pattern',
      description: 'A modular, high-conversion mobile shopping application featuring interactive product browsing, real-time inventory updates, persistent cart management, role-based dark mode, and multi-gateway checkout with Stripe and Razorpay.',
      keyFeatures: [
        'Dynamic product discovery with categorized catalogs, filters, and local favorites',
        'Seamless multi-gateway payment processing supporting Stripe and Razorpay',
        'Real-time push notifications for order status, tracking, and promotional flash deals',
        'Role-based dynamic theming with instant dark/light mode switching',
        'Secure checkout with cached shipping addresses and card tokenization'
      ],
      challenges: 'Ensuring zero dropped orders during payment handshakes across varied payment gateways and native 3D Secure verification flows.',
      solution: 'Implemented idempotent payment webhooks and resilient local state rollbacks using Riverpod state notifiers.',
      myContribution: 'Designed and built the checkout funnel, integrated payment SDKs, implemented push notifications via Firebase, and built responsive cart components.',
      thumbnail: '/assets/projects/invoicemaker-create.png',
      screenshots: [
        { url: '/assets/projects/invoicemaker-create.png', caption: 'Dynamic Product Configuration & Checkout Builder' },
        { url: '/assets/projects/invoicemaker-analytics.png', caption: 'Order History & Status Tracking' }
      ],
      stats: [
        { label: 'Payments', value: 'Stripe & Razorpay' },
        { label: 'Notifications', value: 'Firebase FCM' },
        { label: 'UX', value: 'Adaptive Dark Theming' }
      ]
    },
    {
      id: 'soundwave-player',
      title: 'SoundWave Music Engine',
      subtitle: 'High-Fidelity Audio & Local Library Player',
      category: 'Media & Utility',
      platform: 'Flutter / Android & iOS',
      featured: false,
      tags: ['Flutter', 'Dart', 'on_audio_query', 'Audio Service', 'GetX', 'Equalizer'],
      architecture: 'Event-driven Audio Architecture with Android Native Service integration',
      description: 'A hardware-accelerated local audio player scanning on-device media with rich metadata extraction, custom playlist management, audio equalizer controls, and persistent notification playback controls.',
      keyFeatures: [
        'Hardware-accelerated audio queries parsing thousands of local tracks in seconds',
        'Background playback service with lock screen and notification media controls',
        'Custom 5-band equalizer with bass boost and virtualizer presets',
        'Smart dynamic playlist creation, favorite tracks, and artist sorting'
      ],
      challenges: 'Background process termination by battery-saver algorithms on Android devices.',
      solution: 'Configured robust foreground services with media session callbacks to maintain uninterrupted playback.',
      myContribution: 'Built media library querying engine, background audio service connector, and interactive waveform playback UI.',
      thumbnail: '/assets/projects/hisabpro-transactions.png',
      screenshots: [
        { url: '/assets/projects/hisabpro-transactions.png', caption: 'Media Library Stream & Playback Manager' }
      ],
      stats: [
        { label: 'Playback', value: 'Background Foreground Service' },
        { label: 'Media Query', value: 'Sub-second Local Index' },
        { label: 'Engine', value: '5-Band Audio Equalizer' }
      ]
    },
    {
      id: 'streampulse-video',
      title: 'StreamPulse Online Video Player',
      subtitle: 'Adaptive Streaming & Community Engagement App',
      category: 'Media & Utility',
      platform: 'Flutter / Android & iOS',
      featured: false,
      tags: ['Flutter', 'Firebase Auth', 'FCM', 'HLS Streaming', 'Video Player', 'ExoPlayer'],
      architecture: 'BLoC Pattern with Firebase Backend Services',
      description: 'Modern video streaming mobile application incorporating authenticated user watchlists, HLS adaptive bitrate streaming, push notifications for new releases, and interactive video playback controls.',
      keyFeatures: [
        'Adaptive bitrate video playback for seamless streaming on varying connections',
        'User authentication and profile management via Firebase Authentication',
        'Interactive playback speed, resolution switching, and full-screen gesture controls',
        'Automated engagement notifications powered by Firebase Cloud Messaging'
      ],
      challenges: 'Buffering jitter on slow mobile networks and preserving playback state across orientation changes.',
      solution: 'Configured ExoPlayer buffer pre-caching and state preservation across full-screen transitions.',
      myContribution: 'Implemented Firebase Authentication, Cloud Messaging triggers, and customized the video player overlay with gesture controls.',
      thumbnail: '/assets/projects/hisabpro-dashboard.png',
      screenshots: [
        { url: '/assets/projects/hisabpro-dashboard.png', caption: 'Streaming Content Feed & Watchlist' }
      ],
      stats: [
        { label: 'Streaming', value: 'HLS / ExoPlayer' },
        { label: 'Auth', value: 'Firebase Authentication' },
        { label: 'Engagement', value: 'Cloud Messaging (FCM)' }
      ]
    }
  ]);

  readonly experience = signal<Experience[]>([
    {
      role: 'Flutter / Android Developer',
      company: 'TechAbbot',
      location: 'Ahmedabad, Gujarat, India',
      period: 'Jan 2024 - Present',
      duration: '2 Years 9 Months',
      current: true,
      summary: 'Engineering cross-platform mobile applications using Flutter, Dart, and Kotlin for enterprise business, inventory management, e-commerce, and real-time use cases.',
      responsibilities: [
        'Develop and maintain high-performance cross-platform mobile applications using Flutter, Dart, and Kotlin.',
        'Implement robust application architecture and state management using BLoC/Cubit, GetX, and Riverpod.',
        'Integrate applications with RESTful APIs, Firebase services (Auth, Firestore, Crashlytics, FCM), and Supabase.',
        'Develop mission-critical features including laser barcode scanning, real-time WebSockets, thermal printing, and offline data sync.',
        'Integrate secure international and domestic payment solutions including Stripe and Razorpay.',
        'Contribute to native Android development using Kotlin for platform-specific capabilities and performance tuning.',
        'Deploy and manage release pipelines for Google Play Store and Apple App Store.',
        'Apply prompt engineering and AI-driven development practices to accelerate feature velocity and maintain high code quality.'
      ],
      techStack: [
        'Flutter', 'Dart', 'Kotlin', 'BLoC / Cubit', 'GetX', 'Riverpod',
        'Firebase', 'Supabase', 'REST APIs', 'Stripe', 'Razorpay',
        'Barcode SDKs', 'CI/CD', 'App Store Connect', 'Play Console'
      ],
      keyOutcomes: [
        'Maintained 99.8% crash-free sessions across production deployments',
        'Reduced warehouse order picking latency by 35% through barcode workflow optimizations',
        'Engineered reusable component libraries accelerating new app delivery timelines'
      ]
    }
  ]);

  readonly skills = signal<SkillCategory[]>([
    {
      category: 'Mobile & Core SDKs',
      subtitle: 'Primary mobile development toolset and native languages',
      icon: 'mobile',
      skills: [
        { name: 'Flutter', level: 95, badge: 'Core', experienceYears: '2.5+ yrs', featured: true },
        { name: 'Dart', level: 95, badge: 'Core', experienceYears: '2.5+ yrs', featured: true },
        { name: 'Kotlin', level: 85, badge: 'Native', experienceYears: '2+ yrs', featured: true },
        { name: 'Android SDK', level: 88, badge: 'Native', experienceYears: '2+ yrs', featured: true },
        { name: 'Android Jetpack', level: 82, badge: 'Native', experienceYears: '1.5+ yrs' },
        { name: 'Java', level: 80, badge: 'Native', experienceYears: '2+ yrs' },
        { name: 'Expo / React Native', level: 75, badge: 'Ecosystem', experienceYears: '1+ yr' },
        { name: 'JavaScript / TS', level: 80, badge: 'Web/API', experienceYears: '2+ yrs' }
      ]
    },
    {
      category: 'Architecture & State Management',
      subtitle: 'Predictable, maintainable, and scalable design patterns',
      icon: 'layers',
      skills: [
        { name: 'BLoC / Cubit', level: 94, badge: 'Primary', experienceYears: '2.5+ yrs', featured: true },
        { name: 'Clean Architecture', level: 92, badge: 'Pattern', experienceYears: '2.5+ yrs', featured: true },
        { name: 'MVVM Architecture', level: 90, badge: 'Pattern', experienceYears: '2.5+ yrs', featured: true },
        { name: 'GetX Pattern', level: 88, badge: 'State', experienceYears: '2+ yrs' },
        { name: 'Riverpod', level: 85, badge: 'State', experienceYears: '1.5+ yrs' },
        { name: 'Provider', level: 85, badge: 'State', experienceYears: '2+ yrs' },
        { name: 'Reusable UI Component Systems', level: 92, badge: 'Design', experienceYears: '2.5+ yrs' }
      ]
    },
    {
      category: 'Backend, Cloud & Real-Time',
      subtitle: 'Data synchronization, cloud services, and protocols',
      icon: 'cloud',
      skills: [
        { name: 'RESTful APIs', level: 95, badge: 'Networking', experienceYears: '2.5+ yrs', featured: true },
        { name: 'Firebase Auth & Firestore', level: 90, badge: 'Cloud', experienceYears: '2+ yrs', featured: true },
        { name: 'Firebase Cloud Messaging (FCM)', level: 88, badge: 'Engagement', experienceYears: '2+ yrs' },
        { name: 'Firebase Crashlytics', level: 88, badge: 'Monitoring', experienceYears: '2+ yrs' },
        { name: 'Supabase', level: 82, badge: 'Postgres BaaS', experienceYears: '1.5+ yrs' },
        { name: 'WebSockets & Real-Time Sync', level: 84, badge: 'Sockets', experienceYears: '1.5+ yrs' },
        { name: 'GraphQL Integration', level: 78, badge: 'API', experienceYears: '1+ yr' },
        { name: 'Offline SQLite & Local Caching', level: 90, badge: 'Data', experienceYears: '2+ yrs' }
      ]
    },
    {
      category: 'Hardware, Payments & Integrations',
      subtitle: 'Specialized business and logistics hardware connections',
      icon: 'zap',
      skills: [
        { name: 'Barcode & QR Scanning', level: 92, badge: 'Hardware', experienceYears: '2+ yrs', featured: true },
        { name: 'Thermal Billing Printers', level: 86, badge: 'Hardware', experienceYears: '1.5+ yrs' },
        { name: 'Stripe Payment Gateway', level: 88, badge: 'Fintech', experienceYears: '2+ yrs', featured: true },
        { name: 'Razorpay Integration', level: 90, badge: 'Fintech', experienceYears: '2+ yrs' },
        { name: 'PDF Generation Engine', level: 92, badge: 'Documents', experienceYears: '2+ yrs' }
      ]
    },
    {
      category: 'DevOps, Stores & AI Tools',
      subtitle: 'Release pipelines, store deployments, and AI acceleration',
      icon: 'cpu',
      skills: [
        { name: 'Google Play Console', level: 90, badge: 'Store Release', experienceYears: '2+ yrs', featured: true },
        { name: 'Apple App Store Connect', level: 88, badge: 'Store Release', experienceYears: '2+ yrs', featured: true },
        { name: 'Git & GitHub Version Control', level: 92, badge: 'DevOps', experienceYears: '3+ yrs' },
        { name: 'CI/CD Pipelines for Mobile', level: 82, badge: 'Automation', experienceYears: '1.5+ yrs' },
        { name: 'Prompt Engineering & AI Tools', level: 90, badge: 'AI Velocity', experienceYears: '1.5+ yrs', featured: true },
        { name: 'Postman & API Testing', level: 88, badge: 'Quality', experienceYears: '2.5+ yrs' },
        { name: 'FlutterFlow', level: 80, badge: 'Rapid Prototyping', experienceYears: '1+ yr' }
      ]
    }
  ]);

  readonly education = signal<Education[]>([
    {
      degree: 'Master of Computer Application (MCA)',
      institution: 'Government MCA College (GTU)',
      period: '2022 - 2024',
      location: 'Maninagar, Ahmedabad, Gujarat',
      gradeOrSpecialization: 'Advanced Computer Applications & Software Engineering'
    },
    {
      degree: 'Bachelor of Science in Mathematics (B.Sc)',
      institution: 'Seth Mangal Chand Choudhary Govt. College (MLSU)',
      period: '2018 - 2021',
      location: 'Abu Road, Rajasthan',
      gradeOrSpecialization: 'Mathematical Modeling & Analytical Problem Solving'
    }
  ]);

  getProjectById(id: string): Project | undefined {
    return this.projects().find(p => p.id === id);
  }
}
