export const SITE_CONFIG = {
  name: 'Saytup.az',
  tagline: 'Bakıda Veb İnkişaf Studiyası',
  description: 'Saytup.az kiçik bizneslərin gözəl, sürətli və effektiv veb tətbiqlər işə salmasına kömək edən Bakıda veb inkişaf studiyasıdır.',
  email: 'hello@saytup.az',
  phone: '+994 50 123 45 67',
  address: 'Bakı, Azərbaycan',
  workingHours: 'B.e–Cümə, 10:00–19:00 (Bakı vaxtı)',
  url: 'https://saytup.az',
};

export const NAV_LINKS = [
  { label: 'Ana Səhifə', href: '/' },
  { label: 'Xidmətlər', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Paketlər', href: '/plans' },
  { label: 'Haqqımızda', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Əlaqə', href: '/contact' },
];

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'web-apps',
    icon: 'Globe',
    title: 'Fərdi Veb Tətbiqlər',
    description: 'React və Next.js ilə tam stack veb tətbiqlər. Mürəkkəb idarəetmə panellərindən müştəri portallarına qədər biznesinizlə böyüyən həllər hazırlayırıq.',
    deliverables: ['React / Next.js frontend', 'REST və ya GraphQL API', 'Verilənlər bazası dizaynı', 'Admin panel'],
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    title: 'E-Ticarət Həlləri',
    description: 'Ziyarətçiləri müştəriyə çevirən onlayn mağazalar. Ödəniş sistemlərini inteqrasiya edir, məhsul kataloqlarını idarə edir və satışı maksimuma çatdırırıq.',
    deliverables: ['Məhsul kataloqu və axtarış', 'Təhlükəsiz ödəniş inteqrasiyası', 'Sifariş idarəetmə sistemi', 'Stok izləmə'],
  },
  {
    id: 'responsive-sites',
    icon: 'Smartphone',
    title: 'Responsiv Vebsaytlar',
    description: 'Hər cihazda mükəmməl görünən mobil-first saytlar. Sürətli yüklənən, SEO-ya uyğun, brendinizi peşəkarcasına təmsil edən.',
    deliverables: ['Mobil-first dizayn', 'Çarpaz brauzer uyğunluğu', 'Səhifə sürəti optimallaşdırması', 'CMS inteqrasiyası'],
  },
  {
    id: 'maintenance',
    icon: 'Wrench',
    title: 'Sayt Texniki Dəstəyi',
    description: 'Saytınızı işlək vəziyyətdə saxlayın. Yeniləmələr, ehtiyat nüsxələr, təhlükəsizlik yamalarını biz həll edirik ki, siz biznesinizə fokuslanasınız.',
    deliverables: ['Müntəzəm yeniləmə və yamalar', 'Performans monitorinqi', 'Kontent yeniləmələri', '24 saat dəstək cavabı'],
  },
  {
    id: 'ui-ux',
    icon: 'Palette',
    title: 'UI/UX Dizayn',
    description: 'İstifadəçilərin sevdiyi gözəl, intuitiv interfeyslər. İstifadəçi tədqiqatı aparır, sxemlər yaradır və piksel-mükəmməl dizaynlar təqdim edirik.',
    deliverables: ['İstifadəçi tədqiqatı və personajlar', 'Sxemlər və prototiplər', 'Dizayn sistemi yaradılması', 'İstifadə qabiliyyəti testləri'],
  },
  {
    id: 'seo',
    icon: 'TrendingUp',
    title: 'SEO və Performans',
    description: 'Google-da tapılın və rəqiblərinizdən sürətli yüklənin. Saytınızı axtarış motorları üçün optimallaşdırırıq.',
    deliverables: ['Texniki SEO auditi', 'Core Web Vitals optimallaşdırması', 'Açar söz strategiyası', 'Aylıq hesabat'],
  },
];

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tags: string[];
  gradient: string;
  image: string;
  url?: string;
  challenge: string;
  solution: string;
  result: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'bakushop-ecommerce',
    title: 'BakuShop E-Ticarət Platforması',
    category: 'E-Commerce',
    description: 'Bakı əsaslı pərakəndə satış şəbəkəsi üçün 500+ məhsullu tam funksiyalı onlayn mağaza.',
    fullDescription: 'BakuShop fiziki mağazasını onlayna çıxarmaq üçün müasir e-ticarət platformasına ehtiyac duyurdu. Azərbaycan bazarına uyğunlaşdırılmış məhsul idarəetməsi, təhlükəsiz ödəniş emalı və rahat alış-veriş təcrübəsi ilə tam həll hazırladıq.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    gradient: 'from-blue-500 to-indigo-600',
    image: 'https://picsum.photos/seed/bakushop/800/500',
    challenge: 'Müştərinin mövcud rəqəmsal infrastrukturu yox idi; Azərbaycan dilini dəstəkləyən və yerli ödəniş prosessorları ilə işləyən platforma lazım idi.',
    solution: 'Çoxdilli dəstəklə Next.js e-ticarət platforması qurduk, yerli ödəniş şlüzlərini Stripe ilə birlikdə inteqrasiya etdik və komandanın özü idarə edə biləcəyi sadə admin panel hazırladıq.',
    result: '6 həftədə buraxıldı. Mağaza ilk ayda 120+ sifariş topladı və müştərinin mağaxana iş yükünü 30% azaltdı.',
  },
  {
    id: '2',
    slug: 'azeritech-corporate',
    title: 'AzeriTech Korporativ Saytı',
    category: 'Korporativ',
    description: 'Azərbaycanda aparıcı texnologiya şirkəti üçün premium korporativ vebsayt.',
    fullDescription: 'AzeriTech bazar liderliyi mövqeyinə uyğun — peşəkar, cilalı və yüksək performanslı bir sayt istəyirdi. Xidmət nümayişi, komanda profilləri və xəbər bölməsi olan hərtərəfli korporativ təmsil qurdurq.',
    tags: ['Next.js', 'Framer Motion', 'Sanity CMS', 'TypeScript'],
    gradient: 'from-slate-600 to-slate-800',
    image: 'https://picsum.photos/seed/azeritech/800/500',
    challenge: 'Şirkətin köhnəlmiş saytı bazar mövqeyini əks etdirmirdi; SEO və performans göstəriciləri çox aşağı idi.',
    solution: 'Kontent idarəetməsi üçün Sanity CMS, premium animasiyalar üçün Framer Motion və SEO üçün strukturlaşdırılmış data tətbiqini ehtiva edən tam yenidən dizayn.',
    result: 'Lighthouse balı 42-dən 96-ya çıxdı. Üzvi trafik 3 ayda 180% artdı. Komanda indi developer müdaxiləsi olmadan kontent yeniləyə bilir.',
  },
  {
    id: '3',
    slug: 'foodrun-delivery-app',
    title: 'FoodRun Çatdırılma Tətbiqi',
    category: 'Veb Tətbiq',
    description: 'Bakı restoranları üçün real vaxt yemək sifariş və çatdırılma idarəetmə tətbiqi.',
    fullDescription: 'FoodRun real vaxt sifariş izləmə, restoran idarəetməsi və çatdırılma koordinasiyasını bir platformada birləşdirən veb əsaslı sistem istəyirdi.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    gradient: 'from-orange-400 to-red-500',
    image: 'https://picsum.photos/seed/foodrun/800/500',
    challenge: 'Həm müştərilər həm də restoran işçiləri üçün UX-ni sadə saxlayaraq çoxsaylı restoranlar üzrə paralel sifarişləri idarə edəcək real vaxt sistem qurmaq.',
    solution: 'Real vaxt yeniləmələr üçün Socket.io ilə React frontend, sifariş emalı üçün Node.js backend və restoran ilə koordinatorlar üçün ayrı idarəetmə panelləri hazırladıq.',
    result: 'İlk ayda 15 restoran qoşuldu. Platforma 99,8% uptime ilə gündəlik 200+ sifariş emal edir.',
  },
  {
    id: '4',
    slug: 'prolaw-firm-website',
    title: 'ProLaw Hüquq Xidmətləri',
    category: 'Korporativ',
    description: 'Bakının tanınmış hüquq firması üçün onlayn görüş rezervasiyası ilə peşəkar vebsayt.',
    fullDescription: 'ProLaw onlayn mövcudluğunu müasirləşdirmək və telefon sorğularını azaltmaq üçün onlayn görüş sistemi əlavə etmək istəyirdi. Dizayn etimad, ekspertlik və peşəkarlıq çatdırmalı idi.',
    tags: ['Next.js', 'Calendly API', 'Tailwind CSS', 'TypeScript'],
    gradient: 'from-gray-700 to-gray-900',
    image: 'https://picsum.photos/seed/prolaw/800/500',
    challenge: 'Hüquq firması saytları çox vaxt köhnəlmiş və anonim görünür. Müştəri hüquq sektoruna xas ağırlığı qoruyaraq fərqlənmək istəyirdi.',
    solution: 'Rezervasiya üçün Calendly inteqrasiyası, SEO üçün hüquqi məqalə bölməsi ilə qaranlıq temalı premium dizayn hazırladıq.',
    result: 'Onlayn görüş rezervasiyaları yeni müştəri sorğularının 60%-ni təşkil edir; resepsionist daha dəyərli işlərə vaxt ayıra bilir.',
  },
  {
    id: '5',
    slug: 'fitclub-membership-portal',
    title: 'FitClub Üzvlük Portalı',
    category: 'Veb Tətbiq',
    description: 'Bakıda 3 filial üzrə fitness şəbəkəsi üçün idman zalı idarəetmə və üzv portalı.',
    fullDescription: 'FitClub üç idman zalı filialı üzrə üzvlük idarəetməsini, dərs rezervasiyasını və məşqçi cədvəlini rəqəmsallaşdırmaq istəyirdi. Portal həm işçilər həm də üzvlər üçün nəzərdə tutulub.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth'],
    gradient: 'from-green-500 to-emerald-600',
    image: 'https://picsum.photos/seed/fitclub/800/500',
    challenge: 'Çox filial üzrə üzvlük, dərs rezervasiyası və məşqçi cədvəlini birləşik sistemdə idarə etmək — zalın gündəlik işçiləri üçün sadə saxlayaraq.',
    solution: 'Rol əsaslı giriş nəzarəti, real vaxt dərs rezervasiyası, avtomatik üzvlük yenilənmə xatırlatmaları və qabaq masa işçiləri üçün sadə idarəetmə paneli olan çox lokasiyalı tətbiq.',
    result: 'Üzvlük inzibati vaxtı 40% azaldı. Üzvlər onlayn rezervasiya edə bildikdən sonra dərs davamiyyəti 25% artdı. Avtomatik xatırlatmalar sayəsində buraxma sıfıra endi.',
  },
  {
    id: '6',
    slug: 'caspian-tours-booking',
    title: 'Xəzər Turları Rezervasiya Platforması',
    category: 'E-Commerce',
    description: 'Azərbaycan turları təklif edən Bakı əsaslı turizm agentliyi üçün onlayn rezervasiya platforması.',
    fullDescription: 'Xəzər Turları yalnız telefon üzərindən rezervasiyanı onlayn platformaya keçirmək, tur paketlərini nümayiş etdirmək və rezervasiyaları avtomatlaşdırmaq istəyirdi.',
    tags: ['Next.js', 'Stripe', 'Sanity CMS', 'Resend'],
    gradient: 'from-teal-400 to-cyan-600',
    image: 'https://picsum.photos/seed/caspiantours/800/500',
    challenge: 'Turizm agentliyi onlayn platforması olan rəqiblərə müştəri itirirdi. Sürətli həll lazım idi, mürəkkəb inteqrasiyalar üçün büdcə yox idi.',
    solution: 'Sanity CMS ilə idarə olunan dinamik tur paketləri, Stripe ilə ödənişlər və Resend ilə avtomatik təsdiq e-poçtları olan sadələşdirilmiş rezervasiya platforması.',
    result: 'Onlayn rezervasiyalar buraxılışdan 2 ay sonra ümumi gəlirin 65%-ni təşkil etdi. Komanda həftəlik 10+ saatı manual rezervasiya inzibatçılığından azad etdi.',
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Kamran Həsənov',
    role: 'CEO',
    company: 'BakuShop',
    quote: 'Saytup e-ticarət platformamızı rekord müddətdə hazırladı. Keyfiyyət əla idi, davamlı dəstək isə çox dəyərli oldu. Onlayn satışlarımız ilk ayda gözləntiləri aşdı.',
    rating: 5,
    initials: 'KH',
  },
  {
    id: '2',
    name: 'Leyla Məmmədova',
    role: 'Marketinq Direktoru',
    company: 'AzeriTech',
    quote: 'Saytup ilə işləmək öz daxili komandana sahib olmaq kimi hiss etdirdi. Brendimizi dərindən anladılar və həqiqətən qürur duyduğumuz sayt qurdular. SEO nəticələri özü danışır.',
    rating: 5,
    initials: 'LM',
  },
  {
    id: '3',
    name: 'Tural Əliyev',
    role: 'Təsisçi',
    company: 'FoodRun',
    quote: 'Qurdukları real vaxt sifariş sistemi sağlamdır. Buraxılışdan bəri ciddi problem olmadı. Saytup işini bilir və bütün prosesdə aydın ünsiyyət qurar.',
    rating: 5,
    initials: 'TA',
  },
  {
    id: '4',
    name: 'Nigar Quliyeva',
    role: 'İdarəedici Tərəfdaş',
    company: 'ProLaw',
    quote: 'Hüquq firması saytının qeyri-peşəkar görünmədən necə müasir ola biləcəyinə şübhə ilə yanaşırdım. Saytup məni yanıltdı. Cavab vaxtı və detallara diqqət əla səviyyədədir.',
    rating: 5,
    initials: 'NQ',
  },
];

export interface ProcessStep {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'discovery',
    number: '01',
    icon: 'Search',
    title: 'Analiz',
    description: 'Biznesinizin məqsədlərini, hədəf auditoriyasını və rəqabət mühitini dərindən araşdırırıq. Dəqiq analiz, uğurlu layihənin təməlidir.',
  },
  {
    id: 'design',
    number: '02',
    icon: 'Pencil',
    title: 'Dizayn',
    description: 'İstifadəçi təcrübəsini ön planda tutaraq peşəkar sxemlər və vizual konsepsiyalar hazırlayırıq. Hər detal təsdiqlənir, sonra kod yazılır.',
  },
  {
    id: 'develop',
    number: '03',
    icon: 'Code',
    title: 'İnkişaf',
    description: 'Müasir texnologiyalar əsasında sürətli, təhlükəsiz və genişlənə bilən kod yazırıq. Proses boyunca mütəmadi hesabat təqdim edirik.',
  },
  {
    id: 'launch',
    number: '04',
    icon: 'Rocket',
    title: 'Buraxılış və Dəstək',
    description: 'Texniki yerləşdirməni tam öhdəmizə götürürük. Buraxılışdan sonra 1 il ərzində dəstək xidməti göstəririk — saytınız həmişə işlək qalır.',
  },
];

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { id: 'projects', value: 15, suffix: '+', label: 'Tamamlanan Layihə' },
  { id: 'satisfaction', value: 98, suffix: '%', label: 'Müştəri Məmnuniyyəti' },
  { id: 'experience', value: 3, suffix: '+', label: 'İllik Təcrübə' },
  { id: 'response', value: 24, suffix: 'h', label: 'Cavab Vaxtı' },
];

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: '#', icon: 'Linkedin' },
  { label: 'Instagram', href: '#', icon: 'Instagram' },
  { label: 'GitHub', href: '#', icon: 'Github' },
  { label: 'Behance', href: '#', icon: 'ExternalLink' },
];

export const FOOTER_LINKS = {
  services: [
    { label: 'Veb Tətbiqlər', href: '/services' },
    { label: 'E-Ticarət', href: '/services' },
    { label: 'Responsiv Saytlar', href: '/services' },
    { label: 'Texniki Dəstək', href: '/services' },
    { label: 'UI/UX Dizayn', href: '/services' },
    { label: 'SEO və Performans', href: '/services' },
  ],
  company: [
    { label: 'Haqqımızda', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Paketlər', href: '/plans' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Əlaqə', href: '/contact' },
  ],
};
