import type { Locale } from '../i18n';
import type { Item, QA } from '../i18n/types';

export type PairKey =
  | 'chinese-english' | 'chinese-french'
  | 'japanese-english' | 'japanese-french'
  | 'korean-english' | 'korean-french';

export const PAIRS: PairKey[] = ['chinese-french', 'chinese-english', 'japanese-french', 'japanese-english', 'korean-french', 'korean-english'];

export interface FamilyUI {
  sectionTitle: string;
  pairLabel: Partial<Record<PairKey, string>>;
  pairCard: Partial<Record<PairKey, string>>;
  whyTitle: string;
  why: Item[];
  setupTitle: string;
  setupSteps: string[];
  faqTitle: string;
  othersTitle: string;
}

export interface FamilyPage {
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  momentsTitle: string;
  moments: Item[];
  faq: QA[];
}

export const FAMILY_UI: Partial<Record<Locale, FamilyUI>> = {
  en: {
    sectionTitle: 'Families and couples',
    pairLabel: { 'chinese-english': 'Chinese and English', 'japanese-english': 'Japanese and English', 'korean-english': 'Korean and English' },
    pairCard: { 'chinese-english': 'Talk with your Chinese in-laws.', 'japanese-english': 'Talk with your Japanese family.', 'korean-english': 'Talk with your Korean in-laws.' },
    whyTitle: 'Made for long family conversations',
    why: [
      { t: 'One phone, one mic each', d: 'In side-by-side mode, each person has their own mic and language. Put the phone on the table and talk, without passing it back and forth.' },
      { t: 'Take your time', d: 'Hold the mic as long as you need: pauses to think don\'t cut you off. Let go when you are done and the translation is read aloud.' },
      { t: 'Private by design', d: 'Family conversations stay on your phone. No account, no server, and the history can be turned off or deleted at any time.' },
    ],
    setupTitle: 'Set it up in five minutes',
    setupSteps: [
      'Install Sideby on one phone.',
      'On Wi-Fi, download both languages and the recommended speech model.',
      'Install the offline voices for both languages. Sideby shows you how.',
      'Open side-by-side mode, set one language on each side, and start talking.',
    ],
    faqTitle: 'Questions',
    othersTitle: 'Other language pairs',
  },
  fr: {
    sectionTitle: 'Familles et couples',
    pairLabel: { 'chinese-french': 'Chinois et français', 'japanese-french': 'Japonais et français', 'korean-french': 'Coréen et français' },
    pairCard: { 'chinese-french': 'Parler avec votre belle-famille chinoise.', 'japanese-french': 'Parler avec votre famille japonaise.', 'korean-french': 'Parler avec votre belle-famille coréenne.' },
    whyTitle: 'Pensé pour les longues conversations en famille',
    why: [
      { t: 'Un téléphone, un micro chacun', d: 'En mode côte à côte, chacun a son micro et sa langue. Posez le téléphone sur la table et parlez, sans vous le passer.' },
      { t: 'Prenez votre temps', d: 'Maintenez le micro aussi longtemps qu\'il faut : les pauses pour réfléchir ne coupent pas la phrase. Relâchez quand vous avez fini, la traduction est lue à voix haute.' },
      { t: 'Privé par conception', d: 'Les conversations de famille restent sur votre téléphone. Pas de compte, pas de serveur, et l\'historique peut être désactivé ou effacé à tout moment.' },
    ],
    setupTitle: 'Prêt en cinq minutes',
    setupSteps: [
      'Installez Sideby sur un seul téléphone.',
      'En Wi-Fi, téléchargez les deux langues et le modèle vocal recommandé.',
      'Installez les voix hors ligne des deux langues. Sideby vous guide.',
      'Ouvrez le mode côte à côte, choisissez une langue de chaque côté, et parlez.',
    ],
    faqTitle: 'Questions',
    othersTitle: 'Autres langues',
  },
  zh: {
    sectionTitle: '家庭和情侣',
    pairLabel: { 'chinese-french': '中文和法语', 'chinese-english': '中文和英语' },
    pairCard: { 'chinese-french': '和法国家人、伴侣聊天。', 'chinese-english': '和说英语的家人、伴侣聊天。' },
    whyTitle: '为家人之间的长对话而设计',
    why: [
      { t: '一部手机，每人一个麦克风', d: '在并排模式下，每人有自己的麦克风和语言。把手机放在桌上就能聊，不用传来传去。' },
      { t: '慢慢说', d: '按住麦克风想说多久都行，中间停顿思考也不会被打断。说完松开，译文就会朗读出来。' },
      { t: '隐私有保障', d: '家里的对话只留在你的手机上。无需账号，没有服务器，历史记录也可以随时关闭或删除。' },
    ],
    setupTitle: '五分钟准备好',
    setupSteps: [
      '在一部手机上安装 Sideby。',
      '连 Wi-Fi 下载两种语言和推荐的语音模型。',
      '安装两种语言的离线语音，Sideby 会告诉你怎么做。',
      '打开并排模式，两边各选一种语言，就可以开始聊了。',
    ],
    faqTitle: '常见问题',
    othersTitle: '其他语言组合',
  },
  ja: {
    sectionTitle: '家族とカップル',
    pairLabel: { 'japanese-french': '日本語とフランス語', 'japanese-english': '日本語と英語' },
    pairCard: { 'japanese-french': 'フランス人の家族やパートナーと話す。', 'japanese-english': '英語を話す家族やパートナーと話す。' },
    whyTitle: '家族の長い会話のために',
    why: [
      { t: 'スマホ1台、マイクはひとりずつ', d: '横並びモードでは、それぞれが自分のマイクと言語を持ちます。スマホをテーブルに置けば、受け渡しせずに話せます。' },
      { t: 'ゆっくり話せる', d: 'マイクは好きなだけ押したままで大丈夫。考えるための間があっても途切れません。話し終えて離すと、訳文が読み上げられます。' },
      { t: 'プライバシーを守る設計', d: '家族の会話はスマホの中にとどまります。アカウントもサーバーもなく、履歴はいつでもオフにしたり削除したりできます。' },
    ],
    setupTitle: '5分で準備完了',
    setupSteps: [
      'スマホ1台に Sideby をインストールします。',
      'Wi-Fi で両方の言語とおすすめの音声モデルをダウンロードします。',
      '両方の言語のオフライン音声をインストールします。手順は Sideby が案内します。',
      '横並びモードを開き、左右に言語を設定したら話しはじめましょう。',
    ],
    faqTitle: 'よくある質問',
    othersTitle: 'ほかの言語の組み合わせ',
  },
  ko: {
    sectionTitle: '가족과 커플',
    pairLabel: { 'korean-french': '한국어와 프랑스어', 'korean-english': '한국어와 영어' },
    pairCard: { 'korean-french': '프랑스인 가족, 배우자와 대화하기.', 'korean-english': '영어를 쓰는 가족, 배우자와 대화하기.' },
    whyTitle: '가족 간의 긴 대화를 위해',
    why: [
      { t: '휴대폰 한 대, 마이크는 각자', d: '나란히 모드에서는 각자 자기 마이크와 언어를 씁니다. 휴대폰을 테이블에 두면 주고받을 필요 없이 대화할 수 있습니다.' },
      { t: '천천히 말해도 돼요', d: '마이크는 필요한 만큼 누르고 있으면 됩니다. 생각하느라 멈춰도 끊기지 않습니다. 다 말하고 손을 떼면 번역을 읽어 줍니다.' },
      { t: '개인정보를 지키는 설계', d: '가족의 대화는 휴대폰에만 남습니다. 계정도 서버도 없고, 기록은 언제든 끄거나 삭제할 수 있습니다.' },
    ],
    setupTitle: '5분이면 준비 끝',
    setupSteps: [
      '휴대폰 한 대에 Sideby를 설치하세요.',
      'Wi-Fi로 두 언어와 추천 음성 모델을 다운로드하세요.',
      '두 언어의 오프라인 음성을 설치하세요. 방법은 Sideby가 안내합니다.',
      '나란히 모드를 열고 양쪽에 언어를 하나씩 정한 뒤 대화를 시작하세요.',
    ],
    faqTitle: '자주 묻는 질문',
    othersTitle: '다른 언어 조합',
  },
};

// Shared answers, reused across pairs
const qualityEn = { q: 'Is it good enough for real family conversations?', a: 'Sideby translates everyday sentences well. For the best results, speak one clear sentence at a time and let the other person answer with their own mic.' };
const qualityFr = { q: 'C\'est assez bon pour de vraies conversations de famille ?', a: 'Sideby traduit bien les phrases du quotidien. Pour le meilleur résultat, dites une phrase claire à la fois et laissez l\'autre répondre avec son propre micro.' };
const qualityZh = { q: '翻译质量够日常家庭交流吗？', a: '日常对话翻译得很好。效果最好的方式是：每次清楚地说一句，然后让对方用自己的麦克风回答。' };
const seniorsZh = { q: '长辈不会用手机怎么办？', a: '只需要一部手机。把手机放在桌上，长辈只要按住自己那边的麦克风说话就行，界面也可以显示中文。' };
const qualityJa = { q: '家族の会話に十分な精度ですか？', a: '日常の文はしっかり翻訳できます。一文ずつはっきり話し、相手には自分のマイクで答えてもらうのがいちばんです。' };
const seniorsJa = { q: 'スマホに不慣れな親でも使えますか？', a: 'スマホは1台だけで大丈夫です。テーブルに置いて、自分の側のマイクを押して話すだけ。画面は日本語で表示できます。' };
const qualityKo = { q: '가족 대화에 충분할 만큼 정확한가요?', a: '일상 문장은 잘 번역합니다. 한 문장씩 또렷하게 말하고, 상대는 자기 마이크로 대답하게 하는 것이 가장 좋습니다.' };
const seniorsKo = { q: '휴대폰이 익숙하지 않은 부모님도 쓸 수 있나요?', a: '휴대폰은 한 대면 됩니다. 테이블에 두고 자기 쪽 마이크를 누르고 말하기만 하면 되고, 화면은 한국어로 볼 수 있습니다.' };

export const FAMILY: Record<PairKey, Partial<Record<Locale, FamilyPage>>> = {
  'chinese-english': {
    en: {
      metaTitle: 'Chinese English Translator for Families and Couples | Sideby',
      metaDesc: 'Talk with your Chinese in-laws or partner face to face. Sideby translates Mandarin and English out loud, offline, on one phone.',
      h1: 'Talk with your Chinese family, in your own words',
      intro: 'Family dinners, visits to the grandparents, a first meeting with the in-laws: the important conversations happen at the table. Sideby translates Mandarin and English out loud, one sentence at a time, so everyone can speak their own language.',
      momentsTitle: 'Moments where it helps',
      moments: [
        { t: 'Meeting the in-laws', d: 'Introduce yourself, ask about their life and answer their questions, without a relative translating every sentence.' },
        { t: 'Grandparents and grandchildren', d: 'Children who grow up with English can still talk with grandparents who speak only Mandarin.' },
        { t: 'Visits to China', d: 'Once set up, Sideby works offline with no VPN. Download everything before you fly.' },
      ],
      faq: [qualityEn, { q: 'Which Chinese does it use?', a: 'Mandarin, written in simplified characters. The app is also available in Chinese, so your family can use it on their own.' }],
    },
    zh: {
      metaTitle: '中英翻译：和说英语的家人、伴侣面对面聊天 | Sideby',
      metaDesc: '和说英语的伴侣、亲家面对面交流。Sideby 在一部手机上离线翻译中文和英语，并朗读出来。',
      h1: '和说英语的家人，用自己的语言聊天',
      intro: '家庭聚餐、看望老人、第一次见亲家：重要的对话都发生在饭桌上。Sideby 一句一句地把中文和英语互译并朗读出来，每个人都能说自己的语言。',
      momentsTitle: '这些时候用得上',
      moments: [
        { t: '第一次见亲家', d: '自我介绍、聊聊生活、回答对方的问题，不用家里人一句句帮忙翻译。' },
        { t: '祖辈和孙辈', d: '在国外长大、说英语的孩子，也能和只说中文的爷爷奶奶、外公外婆聊天。' },
        { t: '出国探亲', d: '下载好之后可以离线使用，没有网络也能翻译。' },
      ],
      faq: [qualityZh, seniorsZh],
    },
  },
  'chinese-french': {
    fr: {
      metaTitle: 'Traducteur chinois français pour couples et familles | Sideby',
      metaDesc: 'Parlez avec votre belle-famille chinoise ou votre conjoint face à face. Sideby traduit le mandarin et le français à voix haute, hors ligne, sur un seul téléphone.',
      h1: 'Parler avec votre famille chinoise, avec vos propres mots',
      intro: 'Repas de famille, visite aux grands-parents, première rencontre avec la belle-famille : les conversations importantes ont lieu à table. Sideby traduit le mandarin et le français à voix haute, phrase par phrase, pour que chacun parle sa langue.',
      momentsTitle: 'Les moments où il aide',
      moments: [
        { t: 'Rencontrer la belle-famille', d: 'Vous présenter, prendre des nouvelles, répondre à leurs questions, sans qu\'un proche traduise chaque phrase.' },
        { t: 'Grands-parents et petits-enfants', d: 'Des enfants qui grandissent en français peuvent parler avec des grands-parents qui ne parlent que mandarin.' },
        { t: 'Séjours en Chine', d: 'Une fois installé, Sideby marche hors ligne, sans VPN. Téléchargez tout avant de partir.' },
      ],
      faq: [qualityFr, { q: 'Quel chinois Sideby utilise-t-il ?', a: 'Le mandarin, en caractères simplifiés. L\'application existe aussi en chinois, votre famille peut donc l\'utiliser elle-même.' }],
    },
    zh: {
      metaTitle: '中法翻译：和法国家人、伴侣面对面聊天 | Sideby',
      metaDesc: '和法国伴侣、亲家面对面交流。Sideby 在一部手机上离线翻译中文和法语，并朗读出来。',
      h1: '和法国家人，用自己的语言聊天',
      intro: '家庭聚餐、看望老人、第一次见亲家：重要的对话都发生在饭桌上。Sideby 一句一句地把中文和法语互译并朗读出来，每个人都能说自己的语言。',
      momentsTitle: '这些时候用得上',
      moments: [
        { t: '第一次见亲家', d: '自我介绍、聊聊生活、回答对方的问题，不用家里人一句句帮忙翻译。' },
        { t: '祖辈和孙辈', d: '在法国长大、说法语的孩子，也能和只说中文的爷爷奶奶、外公外婆聊天。' },
        { t: '带家人回国探亲', d: '在国外提前下载好，到了中国也能离线使用，不需要 VPN。' },
      ],
      faq: [qualityZh, seniorsZh],
    },
  },
  'japanese-english': {
    en: {
      metaTitle: 'Japanese English Translator for Families and Couples | Sideby',
      metaDesc: 'Talk with your Japanese partner\'s family face to face. Sideby translates Japanese and English out loud, offline, on one phone.',
      h1: 'Talk with your Japanese family, in your own words',
      intro: 'New Year with the in-laws, a weekend at the grandparents\', dinner with your partner\'s parents: Sideby translates Japanese and English out loud, one sentence at a time, so everyone can speak their own language.',
      momentsTitle: 'Moments where it helps',
      moments: [
        { t: 'Meeting the in-laws', d: 'Introduce yourself, thank them and answer their questions, without your partner translating every sentence.' },
        { t: 'Grandparents and grandchildren', d: 'Children growing up with English can still talk with grandparents who speak only Japanese.' },
        { t: 'Trips to Japan', d: 'Sideby works offline in the countryside and in the metro, where the signal often drops.' },
      ],
      faq: [qualityEn, { q: 'Can my Japanese family use it on their own?', a: 'Yes. The app is available in Japanese, and all it needs is one phone placed between you.' }],
    },
    ja: {
      metaTitle: '日英翻訳：英語を話す家族やパートナーと会話 | Sideby',
      metaDesc: '英語を話すパートナーや義理の家族と、顔を合わせて話そう。Sideby はスマホ1台で日本語と英語をオフラインで翻訳し、読み上げます。',
      h1: '英語を話す家族と、自分の言葉で話す',
      intro: 'お正月の帰省、祖父母の家での週末、パートナーの両親との食事。Sideby は日本語と英語を一文ずつ翻訳して読み上げるので、みんなが自分の言葉で話せます。',
      momentsTitle: '役に立つ場面',
      moments: [
        { t: '義理の家族との顔合わせ', d: '自己紹介をして、近況をたずね、質問に答える。パートナーに毎回通訳してもらう必要はありません。' },
        { t: '祖父母と孫', d: '英語で育った子どもも、日本語しか話さない祖父母と話せます。' },
        { t: '海外の家族を訪ねるとき', d: '準備しておけばオフラインで動くので、電波がない場所でも使えます。' },
      ],
      faq: [qualityJa, seniorsJa],
    },
  },
  'japanese-french': {
    fr: {
      metaTitle: 'Traducteur japonais français pour couples et familles | Sideby',
      metaDesc: 'Parlez avec la famille japonaise de votre conjoint face à face. Sideby traduit le japonais et le français à voix haute, hors ligne, sur un seul téléphone.',
      h1: 'Parler avec votre famille japonaise, avec vos propres mots',
      intro: 'Nouvel An chez la belle-famille, week-end chez les grands-parents, dîner avec les parents de votre conjoint : Sideby traduit le japonais et le français à voix haute, phrase par phrase, pour que chacun parle sa langue.',
      momentsTitle: 'Les moments où il aide',
      moments: [
        { t: 'Rencontrer la belle-famille', d: 'Vous présenter, remercier, répondre à leurs questions, sans que votre conjoint traduise chaque phrase.' },
        { t: 'Grands-parents et petits-enfants', d: 'Des enfants qui grandissent en français peuvent parler avec des grands-parents qui ne parlent que japonais.' },
        { t: 'Séjours au Japon', d: 'Sideby marche hors ligne à la campagne et dans le métro, là où le réseau coupe souvent.' },
      ],
      faq: [qualityFr, { q: 'Ma famille japonaise peut-elle l\'utiliser seule ?', a: 'Oui. L\'application est disponible en japonais, et un seul téléphone posé entre vous suffit.' }],
    },
    ja: {
      metaTitle: '日仏翻訳：フランス人の家族やパートナーと会話 | Sideby',
      metaDesc: 'フランス人のパートナーや義理の家族と、顔を合わせて話そう。Sideby はスマホ1台で日本語とフランス語をオフラインで翻訳し、読み上げます。',
      h1: 'フランス人の家族と、自分の言葉で話す',
      intro: 'クリスマスの食卓、祖父母の家での週末、パートナーの両親との食事。Sideby は日本語とフランス語を一文ずつ翻訳して読み上げるので、みんなが自分の言葉で話せます。',
      momentsTitle: '役に立つ場面',
      moments: [
        { t: '義理の家族との顔合わせ', d: '自己紹介をして、近況をたずね、質問に答える。パートナーに毎回通訳してもらう必要はありません。' },
        { t: '祖父母と孫', d: 'フランス語で育った子どもも、日本語しか話さない祖父母と話せます。' },
        { t: 'フランスの家族を訪ねるとき', d: '準備しておけばオフラインで動くので、田舎や電波のない場所でも使えます。' },
      ],
      faq: [qualityJa, seniorsJa],
    },
  },
  'korean-english': {
    en: {
      metaTitle: 'Korean English Translator for Families and Couples | Sideby',
      metaDesc: 'Talk with your Korean in-laws or partner face to face. Sideby translates Korean and English out loud, offline, on one phone.',
      h1: 'Talk with your Korean family, in your own words',
      intro: 'Chuseok with the in-laws, a visit to the grandparents, dinner with your partner\'s parents: Sideby translates Korean and English out loud, one sentence at a time, so everyone can speak their own language.',
      momentsTitle: 'Moments where it helps',
      moments: [
        { t: 'Meeting the in-laws', d: 'Introduce yourself, ask about their life and answer their questions, without your partner translating every sentence.' },
        { t: 'Grandparents and grandchildren', d: 'Children growing up with English can still talk with grandparents who speak only Korean.' },
        { t: 'Trips to Korea', d: 'Sideby keeps working when your data runs out, from Seoul to the countryside.' },
      ],
      faq: [qualityEn, { q: 'Can my Korean family use it on their own?', a: 'Yes. The app is available in Korean, and all it needs is one phone placed between you.' }],
    },
    ko: {
      metaTitle: '한영 번역: 영어를 쓰는 가족, 배우자와 대화 | Sideby',
      metaDesc: '영어를 쓰는 배우자, 그 가족과 마주 보고 대화하세요. Sideby는 휴대폰 한 대로 한국어와 영어를 오프라인 번역해 읽어 줍니다.',
      h1: '영어를 쓰는 가족과, 내 말로 대화하기',
      intro: '명절 가족 모임, 조부모님 댁 방문, 배우자 부모님과의 식사. Sideby는 한국어와 영어를 한 문장씩 번역해 읽어 주므로 모두가 자기 언어로 말할 수 있습니다.',
      momentsTitle: '이럴 때 도움이 됩니다',
      moments: [
        { t: '배우자 가족과의 첫 만남', d: '자기소개를 하고 안부를 묻고 질문에 답하세요. 가족이 매번 통역할 필요가 없습니다.' },
        { t: '조부모와 손주', d: '영어로 자란 아이도 한국어만 하는 할머니, 할아버지와 이야기할 수 있습니다.' },
        { t: '해외 가족을 방문할 때', d: '미리 준비해 두면 오프라인으로 작동해 신호가 없는 곳에서도 쓸 수 있습니다.' },
      ],
      faq: [qualityKo, seniorsKo],
    },
  },
  'korean-french': {
    fr: {
      metaTitle: 'Traducteur coréen français pour couples et familles | Sideby',
      metaDesc: 'Parlez avec votre belle-famille coréenne ou votre conjoint face à face. Sideby traduit le coréen et le français à voix haute, hors ligne, sur un seul téléphone.',
      h1: 'Parler avec votre famille coréenne, avec vos propres mots',
      intro: 'Chuseok chez la belle-famille, visite aux grands-parents, dîner avec les parents de votre conjoint : Sideby traduit le coréen et le français à voix haute, phrase par phrase, pour que chacun parle sa langue.',
      momentsTitle: 'Les moments où il aide',
      moments: [
        { t: 'Rencontrer la belle-famille', d: 'Vous présenter, prendre des nouvelles, répondre à leurs questions, sans que votre conjoint traduise chaque phrase.' },
        { t: 'Grands-parents et petits-enfants', d: 'Des enfants qui grandissent en français peuvent parler avec des grands-parents qui ne parlent que coréen.' },
        { t: 'Séjours en Corée', d: 'Sideby continue de marcher quand la data est épuisée, de Séoul à la campagne.' },
      ],
      faq: [qualityFr, { q: 'Ma famille coréenne peut-elle l\'utiliser seule ?', a: 'Oui. L\'application est disponible en coréen, et un seul téléphone posé entre vous suffit.' }],
    },
    ko: {
      metaTitle: '한국어 프랑스어 번역: 프랑스인 가족, 배우자와 대화 | Sideby',
      metaDesc: '프랑스인 배우자, 그 가족과 마주 보고 대화하세요. Sideby는 휴대폰 한 대로 한국어와 프랑스어를 오프라인 번역해 읽어 줍니다.',
      h1: '프랑스인 가족과, 내 말로 대화하기',
      intro: '크리스마스 가족 식사, 조부모님 댁 방문, 배우자 부모님과의 저녁. Sideby는 한국어와 프랑스어를 한 문장씩 번역해 읽어 주므로 모두가 자기 언어로 말할 수 있습니다.',
      momentsTitle: '이럴 때 도움이 됩니다',
      moments: [
        { t: '배우자 가족과의 첫 만남', d: '자기소개를 하고 안부를 묻고 질문에 답하세요. 가족이 매번 통역할 필요가 없습니다.' },
        { t: '조부모와 손주', d: '프랑스어로 자란 아이도 한국어만 하는 할머니, 할아버지와 이야기할 수 있습니다.' },
        { t: '프랑스 가족을 방문할 때', d: '미리 준비해 두면 오프라인으로 작동해 시골이나 신호가 없는 곳에서도 쓸 수 있습니다.' },
      ],
      faq: [qualityKo, seniorsKo],
    },
  },
};

export const familyExists = (k: PairKey, l: Locale) => Boolean(FAMILY[k][l]);
export const familyPath = (l: Locale, k: PairKey) => (l === 'en' ? `/family/${k}/` : `/${l}/family/${k}/`);
