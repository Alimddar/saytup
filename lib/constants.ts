import { getProjectImageSet } from './portfolioImages';

export const SITE_CONFIG = {
  name: 'Saytup.digital',
  tagline: 'Bakıda Veb İnkişaf Studiyası',
  description: 'Saytup.digital kiçik bizneslərin gözəl, sürətli və effektiv veb tətbiqlər işə salmasına kömək edən Bakıda veb inkişaf studiyasıdır.',
  email: 'contact@saytup.digital',
  phone: '+994 51 665 81 43',
  address: 'Bakı, Azərbaycan',
  workingHours: 'B.e–Cümə, 10:00–19:00 (Bakı vaxtı)',
  url: 'https://saytup.digital',
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
}

const traveliaImages = getProjectImageSet('travelia');
const seomentorImages = getProjectImageSet('seomentor');
const viraDesignImages = getProjectImageSet('vira-design');
const velourImages = getProjectImageSet('velour');

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'travelia',
    title: 'Travelia',
    client: 'BDA (Baku Design Academy)',
    category: 'Veb Tətbiq',
    description: 'Azərbaycanda səyahət planlama, otel seçimi və marşrut qurma təcrübəsini bir platformada birləşdirən turizm yönümlü rəqəmsal həll.',
    fullDescription: 'Travelia, Azərbaycanda turizm təcrübəsini daha rahat, planlı və ilhamverici hala gətirmək məqsədilə hazırlanmış rəqəmsal məhsuldur. Platforma istifadəçiyə səyahətini əvvəlcədən planlamaq, maraq dairəsinə uyğun istiqamətləri kəşf etmək, uyğun otelləri tapmaq və bütün səfər axınını bir yerdən idarə etmək imkanı yaradır. Layihənin əsas məqsədi parçalanmış məlumat mənbələrini birləşdirərək turistə daha aydın qərarvermə prosesi və daha güclü səfər təcrübəsi təqdim etmək idi. Bu yanaşma həm yerli turizmin rəqəmsal görünürlüğünü gücləndirir, həm də gələcəkdə otel, tur və partnyor inteqrasiyaları üçün genişlənə bilən məhsul bazası yaradır.',
    tags: ['Next.js', 'Trip Planning', 'Hotel Discovery', 'UX/UI'],
    gradient: 'from-sky-500 to-cyan-600',
    image: traveliaImages.image,
    images: traveliaImages.images,
  },
  {
    id: '2',
    slug: 'seomentor',
    title: 'SEOmentor',
    client: 'Cursor AI Hackathon',
    category: 'AI Platforması',
    description: 'Claude AI ilə işləyən, vebsaytın SEO vəziyyətini analiz edib rəqibləri, açar söz boşluqlarını və gün-gün icra planını çıxaran ağıllı platforma.',
    fullDescription: 'SEOmentor, istənilən vebsaytı analiz edərək onun SEO sağlamlığını ölçən, əsas problemləri aşkarlayan və istifadəçiyə real icra planı təqdim edən AI-powered platformadır. Məhsulun əsas ideyası texniki audit, kontent boşluqları, rəqib analizi və açar söz imkanlarını bir dashboard içində toplamaq idi. Platforma istifadəçiyə sadəcə problem siyahısı vermir, eyni zamanda 7-30 günlük addım-addım yol xəritəsi, hər gün üçün konkret task-lar, KPI-lar və dərin icra checklist-ləri təqdim edir. Beləliklə, SEOmentor həm marketinq komandaları, həm də agentliklər üçün analizdən icraya keçidi xeyli sürətləndirən praktik məhsula çevrilir.',
    tags: ['React 19', 'FastAPI', 'Claude AI', 'TypeScript', 'Python 3.11', 'SQLite'],
    gradient: 'from-indigo-500 to-sky-600',
    image: seomentorImages.image,
    images: seomentorImages.images,
  },
  {
    id: '3',
    slug: 'vira-design',
    title: 'Vira Design',
    client: 'Nümunə Layihə',
    category: 'Gözəllik Salonu Saytı',
    description: 'Gözəllik salonu üçün hazırlanmış, xidmətləri, ustaları və rezervasiya axınını premium təqdim edən React əsaslı nümunə vebsayt konsepti.',
    fullDescription: 'Vira Design, gözəllik salonları üçün necə daha premium, etibarlı və konversiyaya yaxın rəqəmsal təqdimat qurmaq mümkün olduğunu göstərən nümunə layihədir. React ilə hazırlanmış bu konsept sayt xidmət kateqoriyalarını, komanda təqdimatını, vizual iş nümunələrini və rezervasiya yönümlü CTA bloklarını vahid axın içində birləşdirir. Məqsəd sadəcə estetik görünən salon saytı hazırlamaq yox, istifadəçiyə xidmət seçimini asanlaşdıran, salonun peşəkarlığını gücləndirən və müraciəti daha rahat nöqtəyə aparan struktur qurmaq idi. Layihə real müştəri üçün deyil, portfolioda beauty və wellness sahəsi üçün necə fərqli, zərif və satış yönümlü sayt həlli təqdim etdiyimizi göstərmək üçün hazırlanmış konsept nümunəsidir.',
    tags: ['React', 'Beauty Website', 'Booking Flow', 'UI Concept'],
    gradient: 'from-rose-400 to-orange-400',
    image: viraDesignImages.image,
    images: viraDesignImages.images,
  },
  {
    id: '4',
    slug: 'velour',
    title: 'Velour',
    client: 'Nümunə Layihə',
    category: 'Fine-Dining Restoran Saytı',
    description: 'İstanbul Karaköydə yerləşən niche fine-dining restoran üçün hazırlanmış, ambiyansı və kulinariya hekayəsini editorial üslubda təqdim edən portfolio vebsayt konsepti.',
    fullDescription: 'Velour, İstanbulun Karaköy bölgəsində cəmi 28 qonaqlıq fine-dining təcrübəsi təqdim edən niche restoran üçün hazırlanmış tamhəcmli portfolio vebsaytıdır. Sayt ilk saniyədən etibarən ziyarətçiyə məkanın ambiyansını, hekayəsini və yeməklərin emosional dəyərini hiss etdirmək məqsədi ilə qurulub. Şef Miran Doğunun Anadolu köklərini Avropa mətbəx məktəbi ilə birləşdirən “Yeni Anadolu Mətbəxi” konsepti vizual sistemdən copy tonuna qədər hər detalda hiss olunur. 9 səhifədən ibarət informasiya memarlığı — ana səhifə, hekayə, menyu, təcrübə, journal, rezervasiya, əlaqə və mətbuat bölmələri — bir-birindən fərqlənən editorial ritmlə qurulsa da, vahid və ardıcıl dizayn sistemi altında birləşdirilib. Rəng palitrası, tipoqrafiya sistemi, animasiya dili və mətn tonu sıfırdan müəyyənləşdirilib ki, sayt şablon yox, məhz bu restoran üçün hazırlanmış yadda qalan rəqəmsal təcrübə kimi hiss edilsin. Mock foto URL-ləri, 12 kurslu tasting menyu məzmunu, istehsalçı hekayələri, mətbuat sitatları və component CSS tərifləri daxil olmaqla bütün kontent hazır və işlək vəziyyətdə təqdim olunub.',
    tags: ['Editorial Design', 'Restaurant Website', 'Fine Dining', 'Reservation UX'],
    gradient: 'from-stone-700 to-amber-700',
    image: velourImages.image,
    images: velourImages.images,
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

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: 'Siz hansı texnologiyalardan istifadə edirsiniz?',
    answer:
      'Frontend tərəfdə Next.js, React.js və TypeScript istifadə edirik — sürətli, SEO-dostu və miqyaslana bilən interfeyslər üçün. Backend tərəfdə isə Django, Express, Node.js və PostgreSQL ilə işləyirik. Hər layihənin tələbinə uyğun ən optimal texnologiya seçimi aparılır.',
  },
  {
    id: 2,
    question: 'Bir vebsayt layihəsi nə qədər vaxt alır?',
    answer:
      'Müddət seçdiyiniz paketə və layihənin həcminə görə dəyişir. Ortalama bir sayt 5–7 gün ərzində hazırlanıb tam təhvil verilir. Daha böyük və ya xüsusi funksionallıq tələb edən layihələr üçün müddət əvvəlcədən razılaşdırılır.',
  },
  {
    id: 3,
    question: 'Layihənin qiyməti necə müəyyən edilir?',
    answer:
      'Qiymət sizin seçdiyiniz paket və ya sizin üçün hazırladığımız xüsusi paket əsasında müəyyən edilir. Siz nə istədiyinizi bizə bildirirsiniz — biz sizə uyğun hazır paket təklif edir, əgər ehtiyaclarınız standart paketlərə sığmırsa, xüsusi qiymət təklifi hazırlayırıq.',
  },
  {
    id: 4,
    question: 'Layihə başladıqdan sonra tələblər dəyişə bilərmi?',
    answer:
      'Bəli, dəyişikliklər mümkündür. Kiçik dəyişikliklər əlavə xərc tələb etmir. Əsaslı dəyişikliklər üçün yeni qiymət razılaşdırılır. Bütün prosesdə şəffaf ünsiyyəti özəl tutururq.',
  },
  {
    id: 5,
    question: 'Buraxılışdan sonra texniki dəstək varmı?',
    answer:
      'Bəli, seçdiyiniz paketə görə texniki dəstək müddəti dəyişir: Small paketdə 1 ay, Medium paketdə 2 ay, Premium paketdə isə 3 ay texniki dəstək daxildir. Bu müddət bitdikdən sonra dəstəyin davam etdirilməsi üçün əlavə ödəniş tələb olunur.',
  },
  {
    id: 6,
    question: 'Domain adı və hosting məsələsini siz həll edirsinizmi?',
    answer:
      'Bəli, domain qeydiyyatı və hosting seçimində tam yardım göstəririk. Sizin üçün ən uyğun hosting planını tövsiyə edir, qurulumu həyata keçiririk. İstəsəniz, bu xidmətləri bizdən davamlı olaraq ala bilərsiniz.',
  },
  {
    id: 7,
    question: 'Mövcud saytımı yenidən qurmaq mümkündürmü?',
    answer:
      'Əlbəttə. Köhnəlmiş saytların tam yenidən dizaynı və hazırlanması xidmətlərini göstəririk. Əvvəlki saytınızdakı kontent, SEO dəyərləri və digər vacib elementləri qoruyaraq müasir platforma köçürürük.',
  },
  {
    id: 8,
    question: 'Siz yalnız Bakı şirkətləri ilə işləyirsinizmi?',
    answer:
      'Xeyr, biz Azərbaycan daxilindəki bütün şəhərlərdən, həmçinin xarici ölkələrdən müştərilərlə uzaqdan işləyirik. Video zəng, e-poçt və WhatsApp vasitəsilə rahat ünsiyyət qururuq.',
  },
  {
    id: 9,
    question: 'Saytımın mobil cihazlarda düzgün görünməsini necə təmin edirsiniz?',
    answer:
      'Biz hər layihəni "mobil-first" yanaşması ilə hazırlayırıq. Bu o deməkdir ki, dizayn ilk növbədə mobil ekranlar üçün optimallaşdırılır, sonra böyük ekranlara uyğunlaşdırılır. Bütün cihazlarda sınaqdan keçirilir.',
  },
  {
    id: 10,
    question: 'SEO xidməti ayrıca ödənişlidirmi?',
    answer:
      'Bütün hazırladığımız saytlara əsas SEO optimallaşdırması daxildir: sürətli yüklənmə, semantik HTML, meta etiketlər, Open Graph. Davamlı SEO kampaniyası və açar söz strategiyası isə ayrıca xidmət kimi təklif olunur.',
  },
  {
    id: 11,
    question: 'Ödəniş şərtləri necədir?',
    answer:
      'Adətən ödəniş iki hissəyə bölünür: layihə başlanmazdan əvvəl 50%, buraxılışda isə qalan 50%. Böyük layihələr üçün aylıq hissə-hissə ödəniş planı da razılaşdırıla bilər.',
  },
  {
    id: 12,
    question: 'Layihə prosesinin hansı mərhələlərindən ibarətdir?',
    answer:
      'Prosesimiz 4 mərhələdən ibarətdir: Kəşf (biznesinizi tanıyırıq), Dizayn (sxemlər və vizual hazırlanır), İnkişaf (kod yazılır, sınaqlar keçirilir) və Buraxılış & Dəstək (sayt yayımlanır, bizdən dəstək davam edir).',
  },
  {
    id: 14,
    question: 'E-ticarət saytı hazırlatmaq istəyirəm, nə etməliyəm?',
    answer:
      'E-ticarət saytı üçün əvvəlcə bizimlə pulsuz konsultasiya zəngi keçirin. Məhsullarınızın sayını, ödəniş üsullarını, inteqrasiya tələblərini müzakirə edəcəyik. E-ticarət həllərinizdə məhsul kataloqu, filtr, axtarış, səbət, checkout və Azərbaycan ödəniş sistemləri ilə inteqrasiya daxildir. Sonra sizə uyğun paket təklif edirik.',
  },
  {
    id: 15,
    question: 'SEO nədir və niyə vacibdir?',
    answer:
      'SEO (Axtarış Mühərriyi Optimallaşdırması) saytınızın Google kimi axtarış mühərriklərində daha yuxarıda görünməsinə kömək edir. Düzgün SEO ilə potensial müştərilər sizi "sayt hazırlamaq Bakı" kimi sorğularla tapa bilər. Saytup.digital bütün layihələrə əsas texniki SEO daxil edir: sürətli yüklənmə, semantik HTML, meta etiketlər, mobil uyğunluq — bunların hamısı Google sıralamalarına birbaşa təsir edir.',
  },
  {
    id: 16,
    question: 'Saytı özüm idarə edə bilərəm?',
    answer:
      'Bəli, istəyirsinizsə saytınıza idarəetmə paneli (CMS) qura bilərik. Bu panel vasitəsilə məzmun, şəkillər, qiymətlər və digər elementləri texniki biliyə ehtiyac duymadan özünüz yeniləyə bilərsiniz. Hansı məzmunların tez-tez dəyişdiyini bizimlə paylaşsanız, ən uyğun həlli tövsiyə edərik.',
  },
  {
    id: 17,
    question: 'Hosting və domen nədir?',
    answer:
      'Domen saytınızın internet ünvanıdır (məsələn, saytınız.az). Hosting isə saytınızın fayllarının saxlandığı serverdır. Saytup.digital bütün paketlərinə 1 il .az domen qeydiyyatı və 1 il hosting daxildir. Biz sizin üçün bu prosesi tam idarə edirik — siz yalnız layihənizə fokuslanırsınız.',
  },
  {
    id: 18,
    question: 'Sayt hazırlandıqdan sonra dəstək verirsizmi?',
    answer:
      'Bəli, hər paketə texniki dəstək müddəti daxildir (1–3 ay). Bu müddətdə saytdakı xətaların düzəldilməsi, kiçik yeniləmələr və texniki sualların cavablandırılması üzrə dəstək veririk. Dəstək müddəti bitdikdən sonra aylıq texniki dəstək paketi əldə etmək mümkündür.',
  },
  {
    id: 19,
    question: 'WordPress yoxsa xüsusi kod — hansı daha yaxşıdır?',
    answer:
      'Hər ikisinin öz üstünlükləri var. WordPress qurulumu tez, idarəetməsi asandır, lakin yavaş ola bilər və mütəmadi yeniləmə tələb edir. Xüsusi kod (Next.js/React) daha sürətli, daha təhlükəsiz, tam fərdiləşdirilə bilən, SEO üçün daha əlverişlidir — lakin daha çox texniki iş tələb edir. Saytup.digital əsasən xüsusi kod ilə işləyir, çünki bu, uzunmüddətli performans və miqyaslanma baxımından daha güclüdür.',
  },
  {
    id: 20,
    question: 'Saytımın Google-da görünməsi üçün nə etməliyəm?',
    answer:
      'Google-da görünmək üçün bir neçə addım lazımdır: texniki SEO optimallaşdırması (saytınız bizim tərəfimizdən hazırlardı), Google Search Console-a qeydiyyat, Google Business Profile yaradılması, keyfiyyətli kontent əlavəsi. Saytup.digital bütün əsas texniki SEO addımlarını layihənizə daxil edir. Əlavə SEO kampaniyası istəsəniz, ayrıca paketi tövsiyə edirik.',
  },
  {
    id: 21,
    question: 'Rəqiblərdən nə ilə fərqlənirsiniz?',
    answer:
      'Saytup.digital-ı fərqləndirən üç əsas amil var: birincisi, sadəcə dizayn deyil, biznes nəticəsinə fokuslanırıq — hər qərar konversiya və etibar üzərinde qurulur. İkincisi, müasir texnologiya (Next.js, TypeScript) istifadə edirik — bu, saytların daha sürətli, daha təhlükəsiz və SEO üçün daha əlverişli olmasını təmin edir. Üçüncüsü, şəffaf qiymət siyasəti — gizli xərclər yoxdur, hər şey əvvəlcədən razılaşdırılır.',
  },
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
