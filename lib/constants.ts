export const SITE_CONFIG = {
  name: 'Saytup.az',
  tagline: 'Bakıda Veb İnkişaf Studiyası',
  description: 'Saytup.az kiçik bizneslərin gözəl, sürətli və effektiv veb tətbiqlər işə salmasına kömək edən Bakıda veb inkişaf studiyasıdır.',
  email: 'contact@saytup.digital',
  phone: '+994 51 665 81 43',
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
  highlight: string;
  idealFor: string;
  description: string;
  deliverables: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'corporate-websites',
    icon: 'Building2',
    title: 'Korporativ Vebsaytlar',
    highlight: 'Etibar yaradan təqdimat',
    idealFor: 'Xidmət biznesləri, klinikalar, hüquq büroları və peşəkar təqdimata ehtiyacı olan komandalar üçün.',
    description: 'Brendinizi peşəkar göstərən, xidmətlərinizi aydın izah edən və müraciət toplayan sürətli korporativ saytlar hazırlayırıq.',
    deliverables: [
      'Fərdi səhifə strukturu və kontent axını',
      'Əlaqə forması, WhatsApp və xəritə inteqrasiyası',
      'Mobil uyğun, SEO əsaslı quruluş',
      'Analytics və idarə edilən məzmun blokları',
    ],
  },
  {
    id: 'landing-pages',
    icon: 'Megaphone',
    title: 'Landing Page və Kampaniya Səhifələri',
    highlight: 'Kliki müraciətə çevirən struktur',
    idealFor: 'Reklam kampaniyaları, kurslar, tədbirlər və bir təklif ətrafında satış edən bizneslər üçün.',
    description: 'Google, Meta və sosial media trafikini bir hədəfə yönəldən, CTA mərkəzli satış səhifələri qururuq.',
    deliverables: [
      'Tək təklifə fokuslanan satış strukturu',
      'Lead formaları və güclü CTA blokları',
      'Pixel, Analytics və dönüşüm izləmə',
      'Sürətli yüklənən mobil-first dizayn',
    ],
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    title: 'E-Ticarət Həlləri',
    highlight: '24/7 satış infrastrukturu',
    idealFor: 'Məhsul satan mağazalar, butiklər və onlayn sifariş qəbul etmək istəyən brendlər üçün.',
    description: 'Kataloqdan ödənişə qədər tam alış-veriş axını quran, satışa fokuslanan onlayn mağazalar hazırlayırıq.',
    deliverables: [
      'Məhsul kataloqu, filtr və axtarış',
      'Səbət, checkout və ödəniş inteqrasiyası',
      'Sifariş, stok və kampaniya idarəetməsi',
      'Satış analitikası və əsas SEO optimizasiyası',
    ],
  },
  {
    id: 'booking-panels',
    icon: 'CalendarDays',
    title: 'Rezervasiya və İdarəetmə Panelləri',
    highlight: 'Manual prosesi avtomatlaşdırır',
    idealFor: 'Salonlar, klinikalar, fitness, turizm və müraciət axınını sistemləşdirmək istəyən bizneslər üçün.',
    description: 'Rezervasiya, sifariş və daxili iş axınını sadələşdirən idarəetmə panelləri və onlayn proseslər qururuq.',
    deliverables: [
      'Rezervasiya və ya sifariş axını',
      'Admin panel və status idarəetməsi',
      'Bildiriş və xatırlatma məntiqi',
      'Filial, komanda və xidmət strukturu',
    ],
  },
  {
    id: 'redesign-migration',
    icon: 'RefreshCcw',
    title: 'Sayt Yenilənməsi və Miqrasiya',
    highlight: 'Köhnə saytı müasir sistemə keçirir',
    idealFor: 'Yavaş, köhnəlmiş və nəticə verməyən mövcud saytı olan bizneslər üçün.',
    description: 'Hazır saytınızı daha güclü strukturla yeniləyir, kontent və SEO dəyərini qoruyaraq müasir sistemə daşıyırıq.',
    deliverables: [
      'Yeni UX/UI və səhifə xəritəsi',
      'Kontent, SEO və yönləndirmə qorunması',
      'Kod və performans təmizlənməsi',
      'Yeni CMS və ya idarəetmə axınına keçid',
    ],
  },
  {
    id: 'support-optimization',
    icon: 'Gauge',
    title: 'SEO, Sürət və Texniki Dəstək',
    highlight: 'Buraxılışdan sonra da işlək qalır',
    idealFor: 'Saytı aktiv satış və ya müraciət kanalı kimi istifadə edən bizneslər üçün.',
    description: 'Saytın görünməsi, sürəti və sabit işləməsi üçün texniki optimizasiya və davamlı dəstək veririk.',
    deliverables: [
      'Texniki SEO və Core Web Vitals optimallaşdırması',
      'Aylıq yeniləmə, təhlükəsizlik və monitorinq',
      'Kontent və kampaniya dəstəyi',
      'Problemlərə sürətli cavab və inkişaf planı',
    ],
  },
];

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  fullDescription: string;
  tags: string[];
  gradient: string;
  image: string;
  images: string[];
  url?: string;
  challenge: string;
  solution: string;
  result: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'bda-travel-planner',
    title: 'BDA Travel Planner',
    client: 'BDA (Baku Design Academy)',
    category: 'Veb Tətbiq',
    description: 'Azərbaycanda səyahət planlama, otel seçimi və marşrut qurma təcrübəsini bir platformada birləşdirən turizm yönümlü rəqəmsal həll.',
    fullDescription: 'BDA Travel Planner, Azərbaycanda turizm təcrübəsini daha rahat, planlı və ilhamverici hala gətirmək məqsədilə hazırlanmış rəqəmsal məhsuldur. Platforma istifadəçiyə səyahətini əvvəlcədən planlamaq, maraq dairəsinə uyğun istiqamətləri kəşf etmək, uyğun otelləri tapmaq və bütün səfər axınını bir yerdən idarə etmək imkanı yaradır. Layihənin əsas məqsədi parçalanmış məlumat mənbələrini birləşdirərək turistə daha aydın qərarvermə prosesi və daha güclü səfər təcrübəsi təqdim etmək idi. Bu yanaşma həm yerli turizmin rəqəmsal görünürlüğünü gücləndirir, həm də gələcəkdə otel, tur və partnyor inteqrasiyaları üçün genişlənə bilən məhsul bazası yaradır.',
    tags: ['Next.js', 'Trip Planning', 'Hotel Discovery', 'UX/UI'],
    gradient: 'from-sky-500 to-cyan-600',
    image: 'https://i.ibb.co/9mdNh95k/sekil1.png',
    images: [
      'https://i.ibb.co/9mdNh95k/sekil1.png',
      'https://i.ibb.co/JjbdXkzr/sekil2.png',
      'https://i.ibb.co/DDVKtZCy/sekil3.png',
      'https://i.ibb.co/cKpMTCP8/sekil4.png',
      'https://i.ibb.co/dsrnvty4/sekil5.png',
      'https://i.ibb.co/Rkgnq4nj/sekil6.png',
      'https://i.ibb.co/rfKPWZKB/sekil7.png',
      'https://i.ibb.co/PvKFNt0t/sekil8.png',
    ],
    challenge: 'Azərbaycanda səyahət planlayan istifadəçi çox vaxt otel axtarışı, marşrut qurma, görməli yerləri seçmə və ümumi planlama üçün bir neçə fərqli mənbə arasında parçalanmış təcrübə yaşayır. BDA məqsəd olaraq bu qarışıq prosesi birləşdirən, istifadəçiyə daha rahat qərar verməyə kömək edən və ölkə daxilində turizm təcrübəsini rəqəmsal olaraq gücləndirən vahid platforma istəyirdi.',
    solution: 'Layihə çərçivəsində bölgə əsaslı kəşf axını, otel tapma təcrübəsi, gün-gün səyahət planlama strukturu və istifadəçinin maraq dairəsinə uyğun təklif sistemi üzərində qurulmuş məhsul konsepti hazırladıq. Vizual dil daha çox ilham və rahatlıq hissi verir, informasiya arxitekturası isə turistin planlama zamanı itmək əvəzinə sürətli seçim etməsini asanlaşdırır.',
    result: 'Nəticədə BDA üçün sadəcə təqdimat saytı deyil, gələcəkdə partnyor, otel və tur inteqrasiyaları ilə genişlənə bilən real məhsul bazası formalaşdı. Platforma Azərbaycanın turizm imkanlarını daha aydın göstərən, istifadəçiyə səyahətini bir yerdən planlamaq imkanı verən və ümumi təcrübəni daha premium hiss etdirən rəqəmsal həllə çevrildi.',
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
    title: 'Buraxılış və Davamlılıq',
    description: 'Texniki yerləşdirməni tam öhdəmizə götürürük. Buraxılışdan sonra seçdiyiniz paketə uyğun dəstək xidməti ilə saytınız həmişə işlək və yenilənmiş qalır.',
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
