import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function IconBase({ children, className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function GamepadIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="9" width="18" height="8" rx="4" />
      <path d="M8 13h4" />
      <path d="M10 11v4" />
      <circle cx="16.5" cy="12.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="18.5" cy="14.5" r="0.8" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

function CodeIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M9 8 5 12l4 4" />
      <path d="m15 8 4 4-4 4" />
      <path d="m13 6-2 12" />
    </IconBase>
  );
}

function PhoneIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M10 5.5h4" />
      <path d="M11.5 18.5h1" />
    </IconBase>
  );
}

function MailIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </IconBase>
  );
}

function ExternalLinkIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
    </IconBase>
  );
}

function GithubIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M9 18c-4 1.2-4-2-6-2" />
      <path d="M15 21v-3.5a3.2 3.2 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.8A5.3 5.3 0 0 0 19 4.7 4.9 4.9 0 0 0 18.9 1S17.8.7 15 2.6a13.4 13.4 0 0 0-6 0C6.2.7 5.1 1 5.1 1A4.9 4.9 0 0 0 5 4.7a5.3 5.3 0 0 0-1.3 3.6c0 5.3 3.2 6.5 6.2 6.8a3.2 3.2 0 0 0-.9 2.4V21" />
    </IconBase>
  );
}

function PlayIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="m9 7 8 5-8 5Z" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

function TrophyIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M8 4h8v3a4 4 0 0 1-8 0Z" />
      <path d="M10 14h4" />
      <path d="M12 11v6" />
      <path d="M8 19h8" />
      <path d="M16 5h3a2 2 0 0 1-2 3h-1" />
      <path d="M8 5H5a2 2 0 0 0 2 3h1" />
    </IconBase>
  );
}

function SparklesIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="m12 3 1.4 3.6L17 8l-3.6 1.4L12 13l-1.4-3.6L7 8l3.6-1.4Z" />
      <path d="m18.5 14 .8 2 .7.3-2 .8-.8 2-.8-2-2-.8 2-.8Z" />
      <path d="m5.5 14 .8 2 .7.3-2 .8-.8 2-.8-2-2-.8 2-.8Z" />
    </IconBase>
  );
}

function LayersIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="m12 4 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </IconBase>
  );
}

function MonitorIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </IconBase>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  );
}

function RocketIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M5 19c1.5-3 4-4 6-4" />
      <path d="M15 9 9 15" />
      <path d="M14 4c3 0 6 3 6 6-2.5 1-5.5 1.2-8 .5L8 14l-.5-4C6.8 7.5 7 4.5 8 2c3 0 6 0 6 2Z" />
      <circle cx="15.5" cy="8.5" r="1" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

function WrenchIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M14 6a4 4 0 0 0 4 4l-7 7a2 2 0 1 1-3-3l7-7a4 4 0 0 0-1-5Z" />
      <path d="M5 19 3 21" />
    </IconBase>
  );
}

function TargetIcon({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3" />
      <path d="M22 12h-3" />
      <path d="M12 22v-3" />
      <path d="M2 12h3" />
    </IconBase>
  );
}

function ShieldIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 3 5 6v5c0 4.5 3 7.8 7 10 4-2.2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.7 1.7 3.3-3.7" />
    </IconBase>
  );
}

const theme = {
  surface: "border-white/10 bg-white/[0.045] backdrop-blur-xl",
  surfaceStrong: "border-white/15 bg-white/[0.07] backdrop-blur-xl",
};

const profile = {
  name: "Enes Aba",
  role: "Unity Game Developer",
  tagline:
    "Mobil oyunlarda prototipten store yayınlamaya kadar tüm ürünü taşıyan, sistem tasarımı ve shipping tarafında güçlü geliştirici.",
  shortBio:
    "5-6 yıldır profesyonel olarak Unity ile oyun geliştiriyorum. Bugüne kadar farklı türlerde onlarca oyun ve prototip ürettim. Çalışırken sadece mekaniklere değil; güvenli altyapıya, oyuncu akışına, ölçeklenebilir sisteme, mağaza yayın süreçlerine ve ürünün uzun ömürlü olmasına birlikte odaklanıyorum.",
  longBio:
    "Benim için iyi bir oyun sadece çalışan bir prototype değildir. Hissi doğru veren, teknik olarak güvenilir, içerik eklenebilir, mağazaya çıkmaya hazır ve yayın sonrası da yönetilebilir olan üründür. Bu yüzden projelerde gameplay, meta progression, UI akışı, Firebase / PlayFab gibi servisler, IAP güvenliği, analytics, localization, build pipeline ve store compliance taraflarını birlikte ele alıyorum.",
  craftNote:
    "Özellikle piyasada daha az kişinin gerçekten iyi bildiği Unity LevelPlay + PlayFab BaaS entegrasyonu, güvenli fatura doğrulama, store release hazırlığı ve modüler sistem tasarımı taraflarında güçlü hissediyorum. Ayrıca yapay zeka destekli çalışma düzenim sayesinde bir kişinin bir ayda çıkartacağı prototipi 1-2 haftada ayağa kaldırabildiğim oluyor.",
  email: "enes@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername",
  resume: "#",
  heroStats: [
    { label: "Deneyim", value: "5+ yıl" },
    { label: "Yayınlanan oyun", value: "5" },
    { label: "Shipping", value: "Google Play + App Store" },
  ],
};

const favoriteGenres = [
  "MOBA hissi taşıyan skill / VFX odaklı savaş oyunları",
  "FPS oyunları",
  "Idle arcade",
  "Strategy ve strategy-lite oyunlar",
  "Simulation / Tycoon",
  "Educational Games",
];

const capabilities = [
  "Unity ile tam ürün geliştirme",
  "Gameplay, progression ve economy sistemi kurma",
  "Firebase Auth, Analytics ve servis entegrasyonları",
  "PlayFab BaaS ve oyuncu verisi mimarisi",
  "Unity LevelPlay ile çoklu reklam ağı entegrasyonu",
  "Güvenli IAP ve PlayFab invoice validation",
  "Google Play ve App Store yayın süreçleri",
  "Design pattern ve event-driven mimari",
  "Editor tooling ve içerik pipeline oluşturma",
  "Localization, tutorial ve oyuncu onboarding sistemi",
];

const workStyle = [
  {
    title: "Önce hissi doğrularım",
    text: "Bir oyunda ilk hedefim mekaniklerin kağıt üzerinde değil, elde gerçekten iyi hissetmesidir. Core loop doğru değilse diğer sistemleri gereksiz büyütmem.",
    icon: TargetIcon,
  },
  {
    title: "Sistemi büyümeye uygun kurarım",
    text: "Tek seferlik çalışan yapı yerine; yeni içerik eklenebilir, farklı feature’lara uyarlanabilir ve ekip büyüdüğünde dağılmayacak modüler sistemler kurarım.",
    icon: RocketIcon,
  },
  {
    title: "Shipping tarafını işin parçası görürüm",
    text: "Bir oyunu sadece geliştirmek değil; güvenlik açıklarını kapatmak, store politika tarafını yönetmek, release hazırlamak ve gerçekten yayına almak benim iş tanımımın parçası.",
    icon: ShieldIcon,
  },
];

const highlights = [
  {
    title: "Sistem ve entegrasyon gücü",
    text: "Unity LevelPlay, PlayFab, Firebase, güvenli IAP, localization, leaderboard ve canlı ürün ihtiyaçlarını tek çatı altında kurabilirim.",
    icon: LayersIcon,
  },
  {
    title: "Mobile product mindset",
    text: "Android ve iOS için yalnızca oyun yazmam; mağaza süreçlerini, sürüm hazırlığını, politikaları ve kullanıcı akışını da birlikte düşünürüm.",
    icon: PhoneIcon,
  },
  {
    title: "Hızlı ama sağlam üretim",
    text: "AI destekli akış ve güçlü teknik temel sayesinde hızlı prototip çıkarırken mimariyi da çürütmemeye dikkat ederim.",
    icon: SparklesIcon,
  },
];

const publishedProjects = [
  {
    title: "King of Trivia",
    role: "Lead Game Developer",
    genre: "Trivia / Strategy Layer / Mobile",
    year: "2025",
    coverGradient: "from-cyan-500/25 via-sky-400/10 to-violet-500/20",
    description:
      "Quiz oyun yapısını dünya haritası üzerinde fetih, shop, inventory, talent tree ve leaderboard gibi sistemlerle güçlendiren canlı ürün yaklaşımıyla geliştirilen mobil oyun.",
    systems: [
      "Firebase Auth: Google / Apple / Guest",
      "Firebase Analytics",
      "Unity LevelPlay + multiple ad networks",
      "PlayFab BaaS ve player data",
      "PlayFab invoice validation ile güvenli IAP",
      "UI integration + DOTween animasyonları",
      "21.000 soru için CSV to ScriptableObject editor pipeline",
      "World conquest sistemi",
      "Shop, inventory, talent tree",
      "Leaderboard + oyuncu item gösterimi",
      "Tutorial, localization",
    ],
    links: [
      { label: "Google Play Developer Page", url: "https://play.google.com/store/apps/dev?id=7935061919354606465" },
      { label: "App Store Developer Page", url: "https://apps.apple.com/tr/developer/bittekno-muhendislik-bilisim-sanayi-ve-ticaret-limited/id1775762419" },
    ],
    playable: {
      type: "placeholder",
      title: "Case study / screenshots eklenecek",
      note: "Bu proje için store linkleri hazır. Sonraki adımda gerçek ekran görüntüleri ve case study eklenebilir.",
    },
  },
  {
    title: "Maze Escape",
    role: "Solo Game Developer",
    genre: "Action / Maze / Progression",
    year: "2025",
    coverGradient: "from-emerald-400/20 via-cyan-400/10 to-slate-300/10",
    description:
      "Procedural level üretimi, düşman navigasyonu, loot ve güçlenme sistemleriyle ilerleyen aksiyon odaklı mobil oyun.",
    systems: [
      "Level generate sistemi",
      "AI navigation ile düşman takibi",
      "Loot sistemi",
      "ScriptableObject tabanlı equipment / power-up yapısı",
      "Customize ve güçlenme sistemi",
      "Her level için farklı zorluk ve düşman kombinasyonu",
      "Localization ve tutorial",
    ],
    links: [
      { label: "Google Play Developer Page", url: "https://play.google.com/store/apps/dev?id=7935061919354606465" },
      { label: "App Store Developer Page", url: "https://apps.apple.com/tr/developer/bittekno-muhendislik-bilisim-sanayi-ve-ticaret-limited/id1775762419" },
    ],
    playable: {
      type: "placeholder",
      title: "Store case study alanı",
      note: "Bu projeye gameplay GIF veya kısa oynanış videosu eklemek çok iyi olur.",
    },
  },
  {
    title: "HeyPungi",
    role: "Systems & Mini-Game Developer",
    genre: "Kids Education / Mini-Game Platform",
    year: "2025",
    coverGradient: "from-fuchsia-400/20 via-amber-300/10 to-cyan-300/15",
    description:
      "Yayınlanmış çocuk eğitim platformuna sonradan mini oyunlar ekleyip mevcut sistemleri modüler hale getirerek bakım ve genişletmeyi kolaylaştırdığım proje.",
    systems: [
      "Yeni mini oyunların entegrasyonu",
      "Var olan oyunlarda bug fixing",
      "Modüler mini-game yapı",
      "Shared systems: SoundManager, LevelManager vb.",
      "Tekrar eden sistemleri merkezileştirme",
    ],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.nord.pungi&hl=tr" },
      { label: "App Store", url: "https://apps.apple.com/tr/app/heypungi-kids-bedtime-stories/id6451243637" },
    ],
    playable: {
      type: "placeholder",
      title: "Mini-game breakdown eklenecek",
      note: "Bu projede sonradan eklediğin mini oyunları ayrı breakdown kartları olarak göstermek etkili olur.",
    },
  },
  {
    title: "LexiaPlay",
    role: "Solo Game Developer",
    genre: "Educational / Dyslexia-focused",
    year: "2026",
    coverGradient: "from-violet-400/20 via-cyan-300/12 to-emerald-300/10",
    description:
      "Disleksi çocukları önceliklendiren, Türkçe, matematik ve İngilizce gelişimini hedefleyen; performansa göre dinamik zorluk ayarlayan eğitim oyunu.",
    systems: [
      "60 günlük gelişim sistemi",
      "AI tabanlı dinamik easy / medium / hard ayarı",
      "Performance tracker ve grafiksel takip",
      "Achievement ve rozet sistemi",
      "Maskot ile oyuncu bağı kurma",
      "Reading, writing, ordering, speaking, dictation minigame yapıları",
      "Firebase Auth, Analytics, PlayFab, Localization",
    ],
    links: [],
    playable: {
      type: "placeholder",
      title: "Case study / product page hazırlanacak",
      note: "Bu proje portfolyoda en güçlü anlatı alanlarından biri olabilir; ileride özel sayfa açılması mantıklı.",
    },
  },
  {
    title: "Car Repair Tycoon",
    role: "Solo Game Developer",
    genre: "Idle Tycoon / Simulation",
    year: "2026",
    coverGradient: "from-amber-400/20 via-orange-300/10 to-red-400/15",
    description:
      "Uzun ömürlü progression taşıyan idle tycoon yapıda; farklı bina, işçi ve araç sistemlerini modüler mimari ve yoğun ScriptableObject kullanımıyla kurduğum kapsamlı simülasyon projesi.",
    systems: [
      "Car repair, car wash, gas station, cafe, junkyard, auto gallery loop’ları",
      "Her bina için worker / tool / upgrade yapısı",
      "Yoğun ScriptableObject tabanlı veri mimarisi",
      "Worker interface, tool interface, building interface",
      "Design pattern ağırlıklı sistem tasarımı",
      "Firebase Auth, Analytics, PlayFab, Localization",
    ],
    links: [],
    playable: {
      type: "placeholder",
      title: "Tycoon systems showcase hazırlanacak",
      note: "Bu proje için bina zinciri, worker akışı ve economy progression gösteren görsel bir case study çok güçlü durur.",
    },
  },
];

const technicalUseCases = [
  {
    skill: "Unity LevelPlay + Ad Monetization",
    usage:
      "Birden fazla reklam ağını tek yerde toplayıp ürün yönetimini sadeleştiren ve shipping tarafında güven veren monetization yapıları kurdum.",
    projects: ["King of Trivia"],
  },
  {
    skill: "PlayFab BaaS + Player Data",
    usage:
      "Oyuncu kaydı, veri tutma, leaderboard, hesap akışları ve güvenli canlı veri mimarisi için PlayFab’i ürünün merkezine yerleştirdim.",
    projects: ["King of Trivia", "LexiaPlay", "Car Repair Tycoon"],
  },
  {
    skill: "Firebase Auth + Analytics",
    usage:
      "Google, Apple ve guest login akışlarını; oyun içi analitik takibi ve ürün kararlarını destekleyen event yapılarıyla birleştirdim.",
    projects: ["King of Trivia", "LexiaPlay", "Car Repair Tycoon"],
  },
  {
    skill: "Secure IAP + Invoice Validation",
    usage:
      "Sadece satın alma açmakla kalmayıp, PlayFab üzerinden fatura doğrulaması ekleyerek güvenlik açığını azaltan yapı kurdum.",
    projects: ["King of Trivia"],
  },
  {
    skill: "Editor Tooling / Content Pipeline",
    usage:
      "Büyük içerik havuzlarının ekip içinde hızlı işlenebilmesi için editor window ve veri dönüşüm araçları geliştirdim.",
    projects: ["King of Trivia"],
  },
  {
    skill: "Event-driven & Design Pattern yaklaşımı",
    usage:
      "Büyüyen projelerde tekrar eden kodu azaltmak, modülerliği korumak ve bakım kolaylığı sağlamak için event-driven mimari ve tasarım kalıplarını yoğun kullandım.",
    projects: ["HeyPungi", "Car Repair Tycoon", "Prototip projeler"],
  },
  {
    skill: "AI-assisted adaptive gameplay",
    usage:
      "Oyuncu performansına göre zorluk ayarı, gelişim takibi ve daha kişisel deneyim üreten sistemlerle eğitim tarafında daha akıllı akışlar kurdum.",
    projects: ["LexiaPlay"],
  },
  {
    skill: "Store Shipping & Compliance",
    usage:
      "Google Play ve App Store yayınlamaları, mağaza politika / anket ayarları, release hazırlıkları ve son kullanıcıya giden ürün halini bizzat yönettim.",
    projects: ["King of Trivia", "Maze Escape", "HeyPungi", "Diğer yayınlanan projeler"],
  },
];

const process = [
  "Core loop ve hissi erken doğrularım.",
  "Sistemi yeni içerik ve feature eklenebilir şekilde kurarım.",
  "Veri, güvenlik, mağaza ve shipping tarafını oyunun doğal parçası olarak ele alırım.",
  "Performans, stabilite ve polish’i en sona bırakmam.",
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function isValidUrlLike(value) {
  return typeof value === "string" && value.length > 0;
}

function runSanityChecks() {
  assert(profile.heroStats.length === 3, "heroStats tam olarak 3 öğe içermeli.");
  assert(favoriteGenres.length >= 3, "favoriteGenres yeterli sayıda öğe içermeli.");
  assert(capabilities.length >= 6, "capabilities yeterli sayıda öğe içermeli.");
  assert(workStyle.length === 3, "workStyle tam olarak 3 öğe içermeli.");
  assert(highlights.length === 3, "highlights tam olarak 3 öğe içermeli.");
  assert(publishedProjects.length >= 5, "publishedProjects en az 5 öğe içermeli.");
  assert(technicalUseCases.length >= 6, "technicalUseCases yeterli sayıda öğe içermeli.");
  assert(process.length >= 4, "process en az 4 adım içermeli.");
  assert(isValidUrlLike(profile.github), "https://github.com/Abroyy");
  assert(isValidUrlLike(profile.linkedin), "https://www.linkedin.com/in/enes-aba-944b9a297/");
  assert(profile.email.includes("@"), "enesaba.dev@gmail.com");
  assert(Boolean(profile.longBio), "profile.longBio gerekli.");
  assert(Boolean(profile.craftNote), "profile.craftNote gerekli.");
  assert(Boolean(theme.surface), "surface theme gerekli.");
  assert(Boolean(theme.surfaceStrong), "surfaceStrong theme gerekli.");

  publishedProjects.forEach((project, index) => {
    assert(Boolean(project.title), `publishedProjects[${index}].title gerekli.`);
    assert(Boolean(project.role), `publishedProjects[${index}].role gerekli.`);
    assert(Boolean(project.genre), `publishedProjects[${index}].genre gerekli.`);
    assert(Boolean(project.description), `publishedProjects[${index}].description gerekli.`);
    assert(Boolean(project.coverGradient), `publishedProjects[${index}].coverGradient gerekli.`);
    assert(Array.isArray(project.systems) && project.systems.length >= 3, `publishedProjects[${index}].systems yetersiz.`);
    assert(project.playable && Boolean(project.playable.type), `publishedProjects[${index}].playable.type gerekli.`);
    assert(["placeholder"].includes(project.playable.type), `publishedProjects[${index}].playable.type geçersiz.`);
    if (project.links.length > 0) {
      project.links.forEach((link, linkIndex) => {
        assert(Boolean(link.label), `publishedProjects[${index}].links[${linkIndex}].label gerekli.`);
        assert(isValidUrlLike(link.url), `publishedProjects[${index}].links[${linkIndex}].url gerekli.`);
      });
    }
  });

  technicalUseCases.forEach((item, index) => {
    assert(Boolean(item.skill), `technicalUseCases[${index}].skill gerekli.`);
    assert(Boolean(item.usage), `technicalUseCases[${index}].usage gerekli.`);
    assert(Array.isArray(item.projects) && item.projects.length > 0, `technicalUseCases[${index}].projects boş olamaz.`);
  });
}

runSanityChecks();

function FloatingOrb({ className, colorClass, duration = 16 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${colorClass} ${className}`}
      animate={{ x: [0, 24, -16, 0], y: [0, -18, 22, 0], scale: [1, 1.08, 0.96, 1] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div variants={fadeUp} className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="text-sm text-cyan-200/80">{eyebrow}</div>
        <h2 className="text-3xl font-semibold tracking-tight text-white">{title}</h2>
      </div>
      {description ? <p className="max-w-2xl text-sm leading-6 text-slate-300/80">{description}</p> : null}
    </motion.div>
  );
}

function GlassCard({ className = "", children }) {
  return (
    <Card className={`${theme.surface} rounded-[28px] shadow-[0_20px_80px_rgba(7,10,26,0.45)] ${className}`}>
      {children}
    </Card>
  );
}

function ProjectCover({ project, large = false }) {
  return (
    <div className={`relative overflow-hidden ${large ? "aspect-[4/5]" : "aspect-[16/10]"}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${project.coverGradient}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,20,0)_10%,rgba(4,10,20,0.2)_50%,rgba(4,10,20,0.82)_100%)]" />
      <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-cyan-100 backdrop-blur-xl">
        {project.role}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="text-2xl font-semibold text-white">{project.title}</div>
        <div className="mt-2 text-sm text-slate-200/80">{project.genre}</div>
      </div>
    </div>
  );
}

function PlayablePreview({ project }) {
  return (
    <div className="flex h-full min-h-[360px] flex-col items-center justify-center gap-4 bg-[#050914] p-8 text-center">
      <div className={`h-28 w-28 rounded-[28px] bg-gradient-to-br ${project.coverGradient} shadow-[0_12px_50px_rgba(56,189,248,0.15)]`} />
      <div className="text-2xl font-semibold text-white">{project.playable.title}</div>
      <p className="max-w-xl text-sm leading-7 text-slate-300/78">{project.playable.note}</p>
      {project.links.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {project.links.map((link) => (
            <Button key={link.label} asChild className="rounded-2xl border-0 bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 hover:opacity-95">
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.label}
                <ExternalLinkIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300/75">
          Store veya WebGL linki eklendiğinde bu alan canlı demo vitrinine dönüşecek.
        </div>
      )}
    </div>
  );
}

export default function EnesGameDevPortfolio() {
  const [activeProject, setActiveProject] = useState(0);
  const safeActiveIndex = Math.max(0, Math.min(activeProject, publishedProjects.length - 1));
  const selectedProject = useMemo(() => publishedProjects[safeActiveIndex], [safeActiveIndex]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07111f] text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(139,92,246,0.18),transparent_24%),radial-gradient(circle_at_50%_85%,rgba(245,158,11,0.12),transparent_28%),linear-gradient(180deg,#081120_0%,#0b1630_55%,#08111f_100%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
        <FloatingOrb className="left-[-8%] top-14 h-72 w-72" colorClass="bg-cyan-400/18" duration={20} />
        <FloatingOrb className="right-[4%] top-24 h-80 w-80" colorClass="bg-violet-500/18" duration={18} />
        <FloatingOrb className="bottom-12 left-[28%] h-64 w-64" colorClass="bg-amber-300/14" duration={22} />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#091427]/65 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/15 via-white/5 to-violet-400/10 text-cyan-100">
              <GamepadIcon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-cyan-200/65">Portfolio</div>
              <div className="font-semibold tracking-wide text-white">{profile.name}</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300/80 md:flex">
            <a href="#about" className="transition hover:text-cyan-100">Hakkımda</a>
            <a href="#projects" className="transition hover:text-cyan-100">Projeler</a>
            <a href="#playable" className="transition hover:text-cyan-100">Vitrin</a>
            <a href="#contact" className="transition hover:text-cyan-100">İletişim</a>
          </nav>

          <Button asChild className="rounded-2xl border-0 bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.3)] hover:opacity-95">
            <a href={profile.resume}>CV İndir</a>
          </Button>
        </div>
      </header>

      <main className="relative z-10">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-20 pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pt-24"
        >
          <motion.div variants={fadeUp} className="space-y-8">
            <Badge className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-cyan-100">
              {profile.role}
            </Badge>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Fikri oyuna çeviren,
                <span className="bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-transparent"> sistemi güvenli kuran </span>
                ve store’a taşıyan geliştirici.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300/85 sm:text-lg">
                {profile.shortBio}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl border-0 bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 shadow-[0_12px_34px_rgba(56,189,248,0.28)] hover:opacity-95">
                <a href="#projects">
                  Yayınlanan Projeler
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl border-white/15 bg-white/[0.04] text-slate-100 hover:bg-white/[0.08]">
                <a href="#playable">Teknik Vitrin</a>
              </Button>
            </div>

            <motion.div variants={containerVariants} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {profile.heroStats.map((item) => (
                <motion.div key={item.label} variants={fadeUp} whileHover={{ y: -6, scale: 1.01 }}>
                  <GlassCard className="rounded-3xl bg-gradient-to-br from-white/[0.09] to-white/[0.04]">
                    <CardContent className="p-5">
                      <div className="text-2xl font-semibold text-white">{item.value}</div>
                      <div className="mt-1 text-sm text-slate-300/70">{item.label}</div>
                    </CardContent>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <motion.div animate={{ y: [0, -10, 0], rotate: [0, 0.6, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
              <GlassCard className="overflow-hidden rounded-[30px] border-white/15 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-cyan-300/[0.04]">
                <CardContent className="p-0">
                  <ProjectCover project={publishedProjects[0]} large />
                </CardContent>
              </GlassCard>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section id="about" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }} className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <SectionHeading
            eyebrow="Hakkımda"
            title="Sadece oyun yapan değil, ürünü baştan sona taşıyan geliştirici"
            description="Teknik derinliği, modüler sistem kurmayı ve gerçek shipping tecrübesini birlikte sunan profil."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div variants={fadeUp}>
              <GlassCard className="h-full border-white/15 bg-gradient-to-br from-white/[0.08] via-white/[0.045] to-cyan-400/[0.04]">
                <CardContent className="p-7 lg:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <RocketIcon className="h-5 w-5 text-cyan-100" />
                    <h2 className="text-2xl font-semibold text-white">Ben nasıl çalışırım?</h2>
                  </div>
                  <div className="space-y-4 text-sm leading-7 text-slate-300/82">
                    <p>{profile.longBio}</p>
                    <p>{profile.craftNote}</p>
                  </div>
                </CardContent>
              </GlassCard>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-6">
              <GlassCard>
                <CardContent className="p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <SparklesIcon className="h-5 w-5 text-violet-200" />
                    <h3 className="text-xl font-semibold text-white">Keyif aldığım türler</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {favoriteGenres.map((genre) => (
                      <Badge key={genre} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-slate-100">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </GlassCard>

              <GlassCard>
                <CardContent className="p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <LayersIcon className="h-5 w-5 text-cyan-100" />
                    <h3 className="text-xl font-semibold text-white">Güçlü olduğum alanlar</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {capabilities.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300/82">
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </GlassCard>
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }} className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -8 }}>
                  <GlassCard>
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/14 to-violet-400/10 text-cyan-100">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300/75">{item.text}</p>
                    </CardContent>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }} className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <SectionHeading
            eyebrow="Çalışma disiplini"
            title="Hızlı üretim, modüler sistem, gerçek shipping"
            description="Projelerde karar alırken neye öncelik verdiğimi ve neden bu şekilde üretmeyi tercih ettiğimi anlatan bölüm."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {workStyle.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -8 }}>
                  <GlassCard className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-cyan-100">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300/78">{item.text}</p>
                    </CardContent>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }} className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <SectionHeading
            eyebrow="Teknik harita"
            title="Hangi yetkinliği hangi projede nasıl kullandım?"
            description="Teknolojileri sadece bildiğimi değil, gerçek ürün problemlerinde nerede ve neden kullandığımı gösteren bölüm."
          />

          <div className="grid grid-cols-1 gap-4">
            {technicalUseCases.map((item) => (
              <motion.div key={item.skill} variants={fadeUp} whileHover={{ y: -4 }}>
                <GlassCard>
                  <CardContent className="grid grid-cols-1 gap-4 p-6 lg:grid-cols-[0.28fr_0.44fr_0.28fr] lg:items-center">
                    <div>
                      <div className="text-lg font-semibold text-white">{item.skill}</div>
                    </div>
                    <p className="text-sm leading-7 text-slate-300/78">{item.usage}</p>
                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      {item.projects.map((project) => (
                        <Badge key={project} className="rounded-full border border-white/10 bg-white/[0.06] text-slate-100">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Yayınlanan işler"
            title="Gerçek ürünler, gerçek roller, gerçek sistemler"
            description="Yayınlanan oyunlarımda üstlendiğim roller, kurduğum sistemler ve mağazaya giden ürün sorumluluğu bu bölümde görünür hale geliyor."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {publishedProjects.map((project, index) => (
              <motion.div key={project.title} variants={fadeUp} whileHover={{ y: -10 }} className="h-full">
                <GlassCard className="h-full overflow-hidden">
                  <CardContent className="p-0">
                    <ProjectCover project={project} />
                    <div className="space-y-4 p-6">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                          <p className="mt-1 text-sm text-slate-300/70">{project.role} • {project.genre}</p>
                        </div>
                        <Badge className="rounded-full border border-white/10 bg-white/[0.08] text-slate-100">{project.year}</Badge>
                      </div>

                      <p className="text-sm leading-6 text-slate-300/78">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.systems.slice(0, 6).map((system) => (
                          <Badge key={system} variant="secondary" className="rounded-full border border-white/10 bg-white/[0.06] text-slate-100">
                            {system}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        <Button className="rounded-2xl border-0 bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 hover:opacity-95" onClick={() => setActiveProject(index)}>
                          Teknik Vitrinde Aç
                        </Button>
                        {project.links.slice(0, 1).map((link) => (
                          <Button key={link.label} asChild variant="outline" className="rounded-2xl border-white/15 bg-white/[0.04] text-slate-100 hover:bg-white/[0.08]">
                            <a href={link.url} target="_blank" rel="noreferrer">
                              {link.label}
                              <ExternalLinkIcon className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="playable" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <SectionHeading
            eyebrow="Teknik vitrin"
            title="Seçilen proje için store / case study / demo alanı"
            description="Şimdilik canlı demo yerine güvenli ve profesyonel bir vitrin yapısı kullanılıyor. Sonraki aşamada WebGL, gameplay video veya detaylı case study eklenebilir."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.38fr_0.62fr]">
            <motion.div variants={fadeUp}>
              <GlassCard>
                <CardContent className="p-5">
                  <div className="mb-4 text-sm text-cyan-100/80">Projeler</div>
                  <div className="space-y-3">
                    {publishedProjects.map((project, index) => (
                      <motion.button
                        key={project.title}
                        onClick={() => setActiveProject(index)}
                        whileHover={{ x: 4 }}
                        className={`w-full rounded-2xl border p-4 text-left transition ${safeActiveIndex === index ? "border-cyan-300/25 bg-cyan-300/10" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"}`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="font-medium text-white">{project.title}</div>
                            <div className="mt-1 text-sm text-slate-300/70">{project.role}</div>
                          </div>
                          <PlayIcon className="h-4 w-4 text-cyan-100" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </CardContent>
              </GlassCard>
            </motion.div>

            <motion.div variants={fadeUp}>
              <GlassCard className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <div>
                      <div className="text-lg font-semibold text-white">{selectedProject.title}</div>
                      <div className="text-sm text-slate-300/75">{selectedProject.role}</div>
                    </div>
                    <Badge className="rounded-full border border-white/10 bg-white/[0.08] text-slate-100">CASE STUDY READY</Badge>
                  </div>
                  <motion.div key={selectedProject.title} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }}>
                    <PlayablePreview project={selectedProject} />
                  </motion.div>
                </CardContent>
              </GlassCard>
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <motion.div variants={fadeUp}>
            <GlassCard className="rounded-[32px] border-white/15 bg-gradient-to-br from-white/[0.07] via-white/[0.045] to-violet-400/[0.05]">
              <CardContent className="grid grid-cols-1 gap-6 p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
                <div>
                  <div className="text-sm text-cyan-100/80">Beni farklılaştıran taraf</div>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                    Sadece oyun geliştirmiyorum, ürünü gerçekten yayınlıyorum.
                  </h2>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300/80">
                    <p>Birçok geliştirici prototype çıkartabilir. Benim güçlü olduğum taraf, bunu güvenli ve yönetilebilir hale getirip Google Play ve App Store aşamasına kadar götürebilmek.</p>
                    <p>Bu yüzden portfolyoda yalnızca güzel görünen kartlar değil; sistem, entegrasyon, shipping, store ve teknik karar mantığı birlikte görünmeli.</p>
                    <p>Bu yapı tam olarak o algıyı kuruyor: seni sadece Unity bilen biri gibi değil, üretimi sonuna kadar taşıyan geliştirici gibi konumlandırıyor.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    ["Gerçek shipping tecrübesi", "Google Play ve App Store yayın süreçlerini yönetmiş profil."],
                    ["Nadir teknik kombinasyon", "Unity LevelPlay + PlayFab BaaS + güvenli IAP gibi daha az görülen uzmanlık."],
                    ["Hızlı prototipleme", "AI destekli akışla kısa sürede ayağa kalkan fikirler."],
                    ["Modüler sistem yaklaşımı", "Büyüyen projelerde tekrar kullanılabilir, bakımı kolay yapı."],
                  ].map(([title, desc]) => (
                    <motion.div key={title} whileHover={{ y: -6 }} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                      <div className="font-medium text-white">{title}</div>
                      <div className="mt-2 text-sm leading-6 text-slate-300/72">{desc}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </GlassCard>
          </motion.div>
        </motion.section>

        <motion.section id="contact" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} className="mx-auto max-w-7xl px-6 pb-24 pt-4 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div variants={fadeUp}>
              <GlassCard>
                <CardContent className="p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <MailIcon className="h-5 w-5 text-cyan-100" />
                    <h2 className="text-2xl font-semibold text-white">İletişim</h2>
                  </div>
                  <p className="text-sm leading-6 text-slate-300/75">Yeni proje, iş birliği, freelance geliştirme, teknik danışmanlık veya yayıncı görüşmeleri için iletişime geçebilirsin.</p>
                  <div className="mt-6 space-y-3 text-sm text-slate-100">
                    <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition hover:bg-white/[0.09]">
                      <MailIcon className="h-4 w-4 text-cyan-100" />
                      {profile.email}
                    </a>
                    <a href={profile.github} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition hover:bg-white/[0.09]">
                      <GithubIcon className="h-4 w-4 text-violet-200" />
                      GitHub
                    </a>
                    <a href={profile.linkedin} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition hover:bg-white/[0.09]">
                      <ExternalLinkIcon className="h-4 w-4 text-amber-200" />
                      LinkedIn
                    </a>
                  </div>
                </CardContent>
              </GlassCard>
            </motion.div>

            <motion.div variants={fadeUp}>
              <GlassCard>
                <CardContent className="p-7">
                  <h3 className="text-2xl font-semibold text-white">Mesaj bırak</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300/75">Burayı Formspree, Web3Forms veya kendi backend’in ile bağlayarak kolayca canlıya alabilirsin.</p>
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input placeholder="Ad Soyad" className="h-12 rounded-2xl border-white/10 bg-white/[0.05] text-white placeholder:text-slate-400" />
                    <Input placeholder="E-posta" className="h-12 rounded-2xl border-white/10 bg-white/[0.05] text-white placeholder:text-slate-400" />
                  </div>
                  <Input placeholder="Konu" className="mt-4 h-12 rounded-2xl border-white/10 bg-white/[0.05] text-white placeholder:text-slate-400" />
                  <Textarea placeholder="Mesaj" className="mt-4 min-h-[140px] rounded-2xl border-white/10 bg-white/[0.05] text-white placeholder:text-slate-400" />
                  <Button className="mt-4 rounded-2xl border-0 bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 hover:opacity-95">Gönder</Button>
                </CardContent>
              </GlassCard>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
