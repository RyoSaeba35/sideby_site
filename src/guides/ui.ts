import type { Locale } from '../i18n';

export type Dest = 'japan' | 'china' | 'korea' | 'france' | 'italy' | 'spain' | 'germany';
export type DestLang = 'ja' | 'zh' | 'ko' | 'fr' | 'it' | 'es' | 'de';

export interface GuideUI {
  guidesTitle: string;
  destName: Partial<Record<Dest, string>>;
  guideCard: Partial<Record<Dest, string>>;
  /** name of the destination's language, as used inside a sentence */
  langName: Partial<Record<DestLang, string>>;
  phrasesTitle: string;
  phrasesNote: string;
  setupTitle: string;
  /** {lang} is replaced by langName */
  setupSteps: string[];
  faqTitle: string;
  othersTitle: string;
  /** the 5 phrases, in this language */
  phrases: string[];
}

export const GUIDE_UI: Record<Locale, GuideUI> = {
  en: {
    guidesTitle: 'Travel guides',
    destName: { japan: 'Japan', china: 'China', korea: 'South Korea' },
    guideCard: { japan: 'Metro, mountains and small restaurants, with no signal.', china: 'Translate Mandarin without a VPN or roaming.', korea: 'Markets, taxis and menus written in Hangul.' },
    langName: { ja: 'Japanese', zh: 'Chinese', ko: 'Korean' },
    phrasesTitle: 'Phrases you will use',
    phrasesNote: 'Sideby\'s phrasebook (Pro) has 50+ phrases like these, ready to show in large text.',
    setupTitle: 'Get ready before you fly',
    setupSteps: [
      'Install Sideby from Google Play.',
      'On Wi-Fi, download {lang} and the recommended speech model.',
      'Install your phone\'s offline {lang} voice. Sideby shows you how.',
      'Turn on airplane mode and try a sentence. If it works, you are ready.',
    ],
    faqTitle: 'Questions',
    othersTitle: 'Other travel guides',
    phrases: ['Excuse me', 'Where is the station?', 'I\'m allergic to nuts.', 'How much is it?', 'The bill, please.'],
  },
  fr: {
    guidesTitle: 'Guides de voyage',
    destName: { japan: 'Japon', china: 'Chine', korea: 'Corée du Sud' },
    guideCard: { japan: 'Métro, montagne et petits restaurants, sans réseau.', china: 'Traduire le mandarin sans VPN ni itinérance.', korea: 'Marchés, taxis et menus écrits en hangeul.' },
    langName: { ja: 'le japonais', zh: 'le chinois', ko: 'le coréen' },
    phrasesTitle: 'Les phrases qui servent',
    phrasesNote: 'Le guide de phrases de Sideby (Pro) en contient plus de 50 comme celles-ci, prêtes à montrer en grand.',
    setupTitle: 'À préparer avant de partir',
    setupSteps: [
      'Installez Sideby depuis Google Play.',
      'En Wi-Fi, téléchargez {lang} et le modèle vocal recommandé.',
      'Installez la voix hors ligne pour {lang} sur votre téléphone. Sideby vous guide.',
      'Passez en mode avion et essayez une phrase. Si ça marche, vous êtes prêt.',
    ],
    faqTitle: 'Questions',
    othersTitle: 'Autres guides de voyage',
    phrases: ['Excusez-moi', 'Où est la gare ?', 'Je suis allergique aux fruits à coque.', 'C\'est combien ?', 'L\'addition, s\'il vous plaît.'],
  },
  de: {
    guidesTitle: 'Reiseführer',
    destName: { japan: 'Japan', china: 'China', korea: 'Südkorea' },
    guideCard: { japan: 'U-Bahn, Berge und kleine Restaurants, ohne Netz.', china: 'Mandarin übersetzen ohne VPN und Roaming.', korea: 'Märkte, Taxis und Speisekarten auf Hangeul.' },
    langName: { ja: 'Japanisch', zh: 'Chinesisch', ko: 'Koreanisch' },
    phrasesTitle: 'Sätze, die Sie brauchen werden',
    phrasesNote: 'Der Sprachführer von Sideby (Pro) enthält über 50 solcher Sätze, bereit zum Zeigen in großer Schrift.',
    setupTitle: 'Vor dem Abflug vorbereiten',
    setupSteps: [
      'Installieren Sie Sideby aus Google Play.',
      'Laden Sie im WLAN {lang} und das empfohlene Sprachmodell herunter.',
      'Installieren Sie die Offline-Stimme für {lang} auf Ihrem Handy. Sideby zeigt Ihnen, wie.',
      'Schalten Sie den Flugmodus ein und testen Sie einen Satz. Wenn es klappt, sind Sie bereit.',
    ],
    faqTitle: 'Fragen',
    othersTitle: 'Weitere Reiseführer',
    phrases: ['Entschuldigung', 'Wo ist der Bahnhof?', 'Ich bin allergisch gegen Nüsse.', 'Wie viel kostet das?', 'Die Rechnung, bitte.'],
  },
  es: {
    guidesTitle: 'Guías de viaje',
    destName: { japan: 'Japón', china: 'China', korea: 'Corea del Sur' },
    guideCard: { japan: 'Metro, montaña y pequeños restaurantes, sin cobertura.', china: 'Traduce mandarín sin VPN ni roaming.', korea: 'Mercados, taxis y cartas escritas en hangul.' },
    langName: { ja: 'japonés', zh: 'chino', ko: 'coreano' },
    phrasesTitle: 'Frases que vas a usar',
    phrasesNote: 'Las frases útiles de Sideby (Pro) incluyen más de 50 como estas, listas para mostrar en grande.',
    setupTitle: 'Prepáralo antes de volar',
    setupSteps: [
      'Instala Sideby desde Google Play.',
      'Con wifi, descarga {lang} y el modelo de voz recomendado.',
      'Instala en tu móvil la voz sin conexión de {lang}. Sideby te explica cómo.',
      'Activa el modo avión y prueba una frase. Si funciona, ya estás listo.',
    ],
    faqTitle: 'Preguntas',
    othersTitle: 'Otras guías de viaje',
    phrases: ['Disculpe', '¿Dónde está la estación?', 'Soy alérgico a los frutos secos.', '¿Cuánto cuesta?', 'La cuenta, por favor.'],
  },
  it: {
    guidesTitle: 'Guide di viaggio',
    destName: { japan: 'Giappone', china: 'Cina', korea: 'Corea del Sud' },
    guideCard: { japan: 'Metro, montagna e piccoli ristoranti, senza campo.', china: 'Traduci il mandarino senza VPN né roaming.', korea: 'Mercati, taxi e menu scritti in hangul.' },
    langName: { ja: 'il giapponese', zh: 'il cinese', ko: 'il coreano' },
    phrasesTitle: 'Le frasi che userai',
    phrasesNote: 'Il frasario di Sideby (Pro) ne contiene più di 50 come queste, pronte da mostrare in grande.',
    setupTitle: 'Da preparare prima di partire',
    setupSteps: [
      'Installa Sideby da Google Play.',
      'Con il Wi-Fi, scarica {lang} e il modello vocale consigliato.',
      'Installa sul telefono la voce offline per {lang}. Sideby ti mostra come.',
      'Attiva la modalità aereo e prova una frase. Se funziona, sei pronto.',
    ],
    faqTitle: 'Domande',
    othersTitle: 'Altre guide di viaggio',
    phrases: ['Mi scusi', 'Dov\'è la stazione?', 'Sono allergico alla frutta a guscio.', 'Quanto costa?', 'Il conto, per favore.'],
  },
  nl: {
    guidesTitle: 'Reisgidsen',
    destName: { japan: 'Japan', china: 'China', korea: 'Zuid-Korea' },
    guideCard: { japan: 'Metro, bergen en kleine restaurants, zonder bereik.', china: 'Mandarijn vertalen zonder VPN of roaming.', korea: 'Markten, taxi\'s en menu\'s in het Hangul.' },
    langName: { ja: 'Japans', zh: 'Chinees', ko: 'Koreaans' },
    phrasesTitle: 'Zinnen die je gaat gebruiken',
    phrasesNote: 'Het zinnenboek van Sideby (Pro) heeft er meer dan 50 zoals deze, klaar om groot te tonen.',
    setupTitle: 'Voorbereiden voor vertrek',
    setupSteps: [
      'Installeer Sideby via Google Play.',
      'Download via wifi {lang} en het aanbevolen spraakmodel.',
      'Installeer de offline stem voor {lang} op je telefoon. Sideby laat zien hoe.',
      'Zet vliegtuigmodus aan en probeer een zin. Werkt het, dan ben je klaar.',
    ],
    faqTitle: 'Vragen',
    othersTitle: 'Andere reisgidsen',
    phrases: ['Pardon', 'Waar is het station?', 'Ik ben allergisch voor noten.', 'Hoeveel kost het?', 'De rekening, alstublieft.'],
  },
  pl: {
    guidesTitle: 'Przewodniki podróżne',
    destName: { japan: 'Japonia', china: 'Chiny', korea: 'Korea Południowa' },
    guideCard: { japan: 'Metro, góry i małe restauracje, bez zasięgu.', china: 'Tłumacz mandaryński bez VPN i roamingu.', korea: 'Targi, taksówki i menu pisane hangulem.' },
    langName: { ja: 'japoński', zh: 'chiński', ko: 'koreański' },
    phrasesTitle: 'Zwroty, które się przydadzą',
    phrasesNote: 'Rozmówki Sideby (Pro) zawierają ponad 50 takich zwrotów, gotowych do pokazania dużym tekstem.',
    setupTitle: 'Przygotuj przed wylotem',
    setupSteps: [
      'Zainstaluj Sideby z Google Play.',
      'Przez Wi-Fi pobierz język {lang} i zalecany model mowy.',
      'Zainstaluj w telefonie głos offline (język {lang}). Sideby pokaże, jak to zrobić.',
      'Włącz tryb samolotowy i wypróbuj jedno zdanie. Jeśli działa, możesz ruszać.',
    ],
    faqTitle: 'Pytania',
    othersTitle: 'Inne przewodniki',
    phrases: ['Przepraszam', 'Gdzie jest stacja?', 'Mam alergię na orzechy.', 'Ile to kosztuje?', 'Poproszę rachunek.'],
  },
  pt: {
    guidesTitle: 'Guias de viagem',
    destName: { japan: 'Japão', china: 'China', korea: 'Coreia do Sul' },
    guideCard: { japan: 'Metro, montanhas e pequenos restaurantes, sem rede.', china: 'Traduza mandarim sem VPN nem roaming.', korea: 'Mercados, táxis e menus escritos em hangul.' },
    langName: { ja: 'japonês', zh: 'chinês', ko: 'coreano' },
    phrasesTitle: 'Frases que vai usar',
    phrasesNote: 'O guia de frases do Sideby (Pro) tem mais de 50 como estas, prontas a mostrar em letra grande.',
    setupTitle: 'Prepare antes de partir',
    setupSteps: [
      'Instale o Sideby a partir do Google Play.',
      'Por Wi-Fi, descarregue {lang} e o modelo de voz recomendado.',
      'Instale no telemóvel a voz offline de {lang}. O Sideby mostra como.',
      'Ative o modo de avião e experimente uma frase. Se funcionar, está pronto.',
    ],
    faqTitle: 'Perguntas',
    othersTitle: 'Outros guias de viagem',
    phrases: ['Com licença', 'Onde fica a estação?', 'Sou alérgico a frutos secos.', 'Quanto custa?', 'A conta, por favor.'],
  },
  zh: {
    guidesTitle: '旅行指南',
    destName: { japan: '日本', china: '中国', korea: '韩国', france: '法国', italy: '意大利', spain: '西班牙', germany: '德国' },
    guideCard: { japan: '地铁、山区和小餐馆，没有信号也能用。', korea: '市场、出租车和韩文菜单。', france: '面包店、药店和乡村小镇，不用联网。', italy: '家庭餐馆、小镇和海岛，信号不好也能用。', spain: '小酒馆、市场和村庄，用西班牙语交流。', germany: '小酒馆、药店和乡间车站，用德语沟通。' },
    langName: { ja: '日语', zh: '中文', ko: '韩语', fr: '法语', it: '意大利语', es: '西班牙语', de: '德语' },
    phrasesTitle: '用得上的句子',
    phrasesNote: 'Sideby 的常用语（Pro）收录了 50 多句这样的句子，可以大字显示给对方看。',
    setupTitle: '出发前准备好',
    setupSteps: [
      '从 Google Play 安装 Sideby。',
      '连 Wi-Fi 下载{lang}语言包和推荐的语音模型。',
      '在手机上安装{lang}离线语音，Sideby 会告诉你怎么做。',
      '打开飞行模式试一句话。能用就说明准备好了。',
    ],
    faqTitle: '常见问题',
    othersTitle: '其他旅行指南',
    phrases: ['打扰一下', '车站在哪里？', '我对坚果过敏。', '多少钱？', '请买单。'],
  },
  ja: {
    guidesTitle: '旅行ガイド',
    destName: { japan: '日本', china: '中国', korea: '韓国', france: 'フランス', italy: 'イタリア', spain: 'スペイン', germany: 'ドイツ' },
    guideCard: { china: 'VPN もローミングもなしで中国語を翻訳。', korea: '市場、タクシー、ハングルのメニュー。', france: 'パン屋、薬局、地方の町でもネットなしで。', italy: 'トラットリア、小さな町、島でも。', spain: 'バル、市場、小さな村での会話に。', germany: '居酒屋、薬局、地方の駅で。' },
    langName: { ja: '日本語', zh: '中国語', ko: '韓国語', fr: 'フランス語', it: 'イタリア語', es: 'スペイン語', de: 'ドイツ語' },
    phrasesTitle: '使えるフレーズ',
    phrasesNote: 'Sideby のフレーズ集（Pro）には、こうしたフレーズが 50 以上あり、大きな文字で相手に見せられます。',
    setupTitle: '出発前の準備',
    setupSteps: [
      'Google Play から Sideby をインストールします。',
      'Wi-Fi で{lang}とおすすめの音声モデルをダウンロードします。',
      'スマホに{lang}のオフライン音声をインストールします。手順は Sideby が案内します。',
      '機内モードにして一文試してみてください。動けば準備完了です。',
    ],
    faqTitle: 'よくある質問',
    othersTitle: 'ほかの旅行ガイド',
    phrases: ['すみません', '駅はどこですか？', 'ナッツアレルギーがあります。', 'いくらですか？', 'お会計お願いします。'],
  },
  ko: {
    guidesTitle: '여행 가이드',
    destName: { japan: '일본', china: '중국', korea: '한국', france: '프랑스', italy: '이탈리아', spain: '스페인', germany: '독일' },
    guideCard: { japan: '지하철, 산속, 작은 식당에서도 신호 없이.', china: 'VPN도 로밍도 없이 중국어 번역.', france: '빵집, 약국, 시골 마을에서도 인터넷 없이.', italy: '트라토리아, 작은 마을, 섬에서도.', spain: '바르, 시장, 작은 마을에서의 대화.', germany: '선술집, 약국, 시골 역에서.' },
    langName: { ja: '일본어', zh: '중국어', ko: '한국어', fr: '프랑스어', it: '이탈리아어', es: '스페인어', de: '독일어' },
    phrasesTitle: '꼭 쓰게 될 문장',
    phrasesNote: 'Sideby 회화집(Pro)에는 이런 문장이 50개 이상 있어 큰 글씨로 상대에게 보여 줄 수 있습니다.',
    setupTitle: '출발 전에 준비하세요',
    setupSteps: [
      'Google Play에서 Sideby를 설치하세요.',
      'Wi-Fi로 {lang}와 추천 음성 모델을 다운로드하세요.',
      '휴대폰에 {lang} 오프라인 음성을 설치하세요. 방법은 Sideby가 안내합니다.',
      '비행기 모드를 켜고 한 문장을 시험해 보세요. 되면 준비 끝입니다.',
    ],
    faqTitle: '자주 묻는 질문',
    othersTitle: '다른 여행 가이드',
    phrases: ['실례합니다', '역이 어디예요?', '견과류 알레르기가 있어요.', '얼마예요?', '계산해 주세요.'],
  },
};

/** The 5 phrases in each destination language, with romanization */
export const DEST_PHRASES: Partial<Record<Dest, { native: string; roman: string }[]>> = {
  japan: [
    { native: 'すみません', roman: 'sumimasen' },
    { native: '駅はどこですか？', roman: 'eki wa doko desu ka?' },
    { native: 'ナッツアレルギーがあります。', roman: 'nattsu arerugī ga arimasu.' },
    { native: 'いくらですか？', roman: 'ikura desu ka?' },
    { native: 'お会計お願いします。', roman: 'okaikei onegai shimasu.' },
  ],
  china: [
    { native: '打扰一下', roman: 'dǎrǎo yíxià' },
    { native: '车站在哪里？', roman: 'chēzhàn zài nǎlǐ?' },
    { native: '我对坚果过敏。', roman: 'wǒ duì jiānguǒ guòmǐn.' },
    { native: '多少钱？', roman: 'duōshao qián?' },
    { native: '请买单。', roman: 'qǐng mǎidān.' },
  ],
  korea: [
    { native: '실례합니다', roman: 'sillyehamnida' },
    { native: '역이 어디예요?', roman: 'yeogi eodiyeyo?' },
    { native: '견과류 알레르기가 있어요.', roman: 'gyeongwaryu allereugiga isseoyo.' },
    { native: '얼마예요?', roman: 'eolmayeyo?' },
    { native: '계산해 주세요.', roman: 'gyesanhae juseyo.' },
  ],
};
