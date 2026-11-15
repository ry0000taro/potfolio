// ポートフォリオの内容はすべてこのファイルで管理します。
// 画像を載せたいときは works[].images に "assets/xxx.png" のようにパスを追加してください。
window.PORTFOLIO = {
  name: "ry0000taro",
  role: "Android / Flutter エンジニア志望",
  tagline: "デザイナー・PO・エンジニアをつなぐ、共創の架け橋に。",
  intro:
    "Kotlin(Jetpack Compose)とFlutterでモバイルアプリを開発しています。設計・実装だけでなく、Figmaでの画面デザインやチームのタスク管理にも取り組み、作ったアプリがユーザーの日常の特別な思い出になることを目指しています。",
  about: [
    "2〜3年後の目標は、デザイナー・PO・エンジニアをつなぐ共創の架け橋となるPdMになることです。エンジニアの枠にとらわれず、企画・デザイン・開発・チーム運営のすべてに関わってきました。",
    "ハッカソンではPMやリーダーとして、技術選定・開発基盤の構築・ナレッジ共有の仕組みづくりを担当。「技術の言語化と共有」がチーム全体の成長につながると考えて動いています。",
    "作ったアプリが、ユーザーの日常の中で特別な思い出になる。そんなプロダクトを作ることが私の願いです。"
  ],
  strengths: [
    { t: "モバイル開発", d: "Kotlin / Jetpack Compose、Flutter(Dart)。MVVM・クリーンアーキテクチャでの設計。" },
    { t: "UI/UXデザイン", d: "Figmaで全画面を設計。ゲーム風Neubrutalismなど、世界観のあるUIづくり。" },
    { t: "チームを動かす", d: "PM・リーダーとして、GitHub Issue / Projectでの管理とナレッジ共有の仕組み化。" }
  ],
  awards: [
    { t: "dip賞(企業賞)", d: "システム工学研究会主催「SysHack 2026」にて、遅刻管理アプリ「Awake」で受賞。" },
    { t: "技育博 2026 出展", d: "「Awake」「Gashama」を出展。" },
    { t: "The Hack 2026 出展", d: "「Gashama」を出展。" }
  ],
  works: [
    {
      id: "awake",
      title: "遅刻管理アプリ「Awake」",
      type: "ハッカソン",
      period: "2026年4月〜現在",
      role: "PR・エンジニア・デザイナー・PM",
      blurb: "団体に所属する人が使う遅刻管理アプリ。朝でも目が覚める、オレンジ×ゲーム風Neubrutalismの世界観で設計。SysHack 2026 dip賞。",
      tech: ["Dart", "Flutter", "Firestore", "MVVM", "Clean Architecture"],
      tags: ["Mobile"],
      badge: "dip賞",
      links: [{ label: "GitHub", url: "https://github.com/HYSTpj/AwakeApp" }],
      thumb: "asset/awake/thumb.png",
      images: [],
      sections: [
        {
          h: "担当した役割",
          list: [
            "機能実装:サイクル03・04・06の機能を担当。入力した情報が正確にデータベースへ保存されることを重視し、MVVM+Cleanアーキテクチャのお手本として最初に実装しました。",
            "画面デザイン:Figmaですべての画面をデザイン。「直感的なUI」「朝触りたくなるUI」を軸にしました。",
            "プロジェクトマネージャー:MTG設定、タスク管理、方針決定を担当しました。"
          ]
        },
        {
          h: "デザインのこだわり",
          p: "Android・iOSの両方に対応し、団体の多くの人に使ってもらうためにDartを選びました(初挑戦)。多くの人に使ってもらうにはUIが直感的で使いやすいことが必須だと考えました。また、使用シーンが誰もが億劫になる「朝」であるため、少しでも目が覚めるように、オレンジのテーマカラーとゲーム風Neubrutalismでデザインしました。機能が多く画面遷移も多いため、画面数をより少なくするUI改善を今後も続けていきます。"
        },
        {
          h: "PMとして:技術共有の仕組みづくり",
          p: "当初、メンバー全員が本格的なモバイルアプリ開発は未経験でした。「技術の言語化と共有」こそが成長のカギだと考え、LT会やQiitaなどのオープンな発信にある心理的ハードルを下げる仕組みを作りました。Discord内に個人チャンネルを設け、学んだ記事を自分の言葉でアウトプットする場を用意。さらに、GitHub ActionsやIssue管理、アーキテクチャなど理解が曖昧になりがちな基礎技術について、担当制の「ミニLT会」を開催しました。内輪の親しみやすい雰囲気で共有することで、チーム全体の技術力の底上げにつながりました。"
        },
        {
          h: "実績",
          list: ["2026年度「SysHack」にて dip賞 を受賞", "2026年度「技育博」に出展"]
        }
      ]
    },
    {
      id: "gashama",
      title: "Gashama",
      type: "ハッカソン",
      period: "1ヶ月(The Hack 2026 / 技育博 2026)",
      role: "リーダー・PM・エンジニア(4人チーム)",
      blurb: "ガシャポンの在庫共有と交換を支援する「ガシャ活」アプリ。マップ上でリアルタイムに在庫を確認し、条件マッチした相手とチャットで交換できます。",
      tech: ["TypeScript", "Expo / React Native", "Supabase", "Google Maps Platform"],
      tags: ["Mobile", "Team"],
      links: [
        { label: "作品紹介スライド", url: "https://canva.link/gashama" },
        { label: "ポスター", url: "https://canva.link/gashama-poster" },
        { label: "GitHub", url: "https://github.com/Team-Seishun/Gashama" }
      ],
      thumb: "asset/gashama/thumb.png",
      images: [],
      sections: [
        {
          h: "概要",
          p: "ユーザー同士の投稿で、店舗のリアルタイムな在庫状況を確認できる「ガシャ活」支援アプリです。希望のアイテムが出なかった場合は交換を募集でき、条件がマッチした相手とチャットでスムーズに取引できます。"
        },
        {
          h: "背景とコンセプト",
          p: "「欲しいガチャガチャがどこにあるか分からない」「行ってみたら売り切れていた」「被ったアイテムを誰かと交換したい」。そんな課題を、マップでの在庫共有とユーザー同士のトレード機能で解決します。コンセプトは「“欲しい”を逃さない、“被り”を無駄にしない」。ダブりはハズレじゃない、という考え方です。",
          table: {
            head: ["ステップ", "課題", "Gashamaの解決策"],
            rows: [
              ["回す/探す", "台の場所が分からない。売り切れかもしれない", "マップで設置場所を検索し、店舗ごとの最新レポートや在庫状況を確認"],
              ["集める", "シリーズをそろえるには大金が必要で、ダブりが生まれる", "所持品と欲しいアイテムを登録し、ダブりを交換に活かす"],
              ["交換する", "SNSでの個人間交換は不安・ハードルが高い", "条件マッチングで相手を探し、アプリ内チャットで安心して交渉"]
            ]
          }
        },
        {
          h: "主な機能",
          list: [
            "マップ&在庫状態表示:Google Maps上に店舗ピンを配置し、在庫状況で絞り込み",
            "リアルタイム投稿:カメラ/アルバムから写真を取り込み、店舗・ガチャ・アイテムを指定して在庫報告",
            "トレード投稿&チャット:交換リクエスト(出・求)の一覧、申請・承認・リアルタイムチャット・評価システム",
            "マイページ・履歴管理:プロフィール編集、在庫投稿やトレードの履歴一覧",
            "認証&設定:Supabase Authによるサインイン・サインアップ・パスワード変更"
          ]
        },
        {
          h: "私の担当(PM・クライアントエンジニア)",
          list: [
            "PM:チーム全体の進捗管理、技術選定",
            "開発基盤:GitHub Issues・GitHub Actionsなどの構築",
            "実装:チャット画面、地図画面"
          ]
        },
        {
          h: "技術的なこだわり",
          list: [
            "ユーザーのリアルな課題を解決する機能設計:利用するほど交換のマッチング率が向上する仕組みを取り入れ、複数のアーキテクチャを比較検討して設計しました。",
            "馴染みのある直感的なUIとリッチなUX:YouTube・Instagram・Googleマップ・メルカリなど、日常的に使われるサービスのUIを参考に、随所にアニメーションを実装しました。",
            "挑戦と学びをテーマにした技術選定:チームにFlutter経験者がいたため、あえてReact Nativeに挑戦して比較から学びました。バックエンドは、データ量の多さと複雑なリレーションを考慮してSupabaseを選定しました。"
          ]
        },
        {
          h: "開発プロセス",
          p: "本プロジェクト最大の目的は、企画から設計、パフォーマンス改善までの一連の開発プロセスを「チーム全員で体験すること」でした。",
          list: [
            "要件定義:マインドマップでのブレインストーミングとユーザーストーリー作成で要件を洗練",
            "設計:ER図(10以上のテーブル)・画面遷移図・シーケンス図を開発前に作成し、チームの認識を統一",
            "タスク分割・管理:機能単位で分割し、毎日の進捗報告とGitHub Issueで意図が第三者にも伝わる管理を徹底",
            "ナレッジ共有:参考記事はDiscordで即共有し、個人の学びをチームの成長へ接続"
          ]
        },
        {
          h: "今後の展望",
          list: [
            "ストアへのデプロイに向けた微調整と、プッシュ通知機能の追加",
            "ユーザーストーリーを振り返り、本当にユーザーに寄り添えているかを確かめて改善",
            "安全性の面で、ユーザーが安心して交換できる仕組みづくり"
          ]
        },
        {
          h: "使用技術",
          list: [
            "フロントエンド:Expo SDK 57 / React Native 0.86 / React 19(React Compiler有効)、Expo Router、TypeScript(strict)",
            "バックエンド/DB:Supabase(PostgreSQL, Realtime, Storage, Auth)、pgTAPによるDBテスト",
            "マップ・位置情報:Google Maps Platform、react-native-maps、expo-location",
            "UI/アニメーション:@gorhom/bottom-sheet、@shopify/flash-list、react-native-reanimated ほか",
            "ビルド・品質管理:EAS Build、ESLint、tsc、Jest",
            "設計・管理:Mermaid(ER図・フロー図)、GitHub Issues / Actions、Discord"
          ]
        }
      ]
    },
    {
      id: "gaplay",
      title: "「Gaplay」",
      type: "個人開発",
      period: "2026年3月〜現在",
      role: "個人開発",
      blurb: "インターンでの制作をきっかけに開発を続けているAndroidアプリ。Kotlin・MVVM・クリーンアーキテクチャで構築。",
      tech: ["Kotlin", "MVVM", "Clean Architecture", "Hilt", "Coil"],
      tags: ["Mobile"],
      links: [{ label: "GitHub", url: "https://github.com/ry0000taro/Gaplay" }],
      thumb: "asset/gaplay/thumb.png",
      images: [],
      sections: [
        {
          h: "概要",
          p: "育成型インターン「CA Tech Dojo」での制作物として開発を始めたAndroidアプリです。MVVM+クリーンアーキテクチャ、Hilt(DI)、Coil(画像読み込み)を用いて構築しています。"
        }
      ]
    },
    {
      id: "pop-runner",
      title: "「POP RUNNER」",
      type: "ハッカソン",
      period: "2024年11月〜2025年4月(iCAN 2025)",
      role: "エンジニア・デザイナー・プレゼンター",
      blurb: "ESP32とAndroidアプリを連携させたハードウェア作品。FFTによるBPM検出ロジックと、約100パーツからなる端末UIを担当。",
      tech: ["Kotlin", "C / C++", "Arduino", "ESP32", "Figma"],
      tags: ["ハード", "Mobile"],
      links: [],
      thumb: "asset/pop-runner/thumb.png",
      images: [],
      sections: [
        {
          h: "担当",
          list: [
            "高速フーリエ変換(FFT)によるBPM検出ロジックの実装(Kotlin)",
            "端末UI/UXのデザイン(Figma)",
            "ポスター制作",
            "スピーカー(発表者)"
          ]
        },
        {
          h: "デザインへのこだわり",
          p: "端末のデザインでは、足跡のアイコンから1文字のデザインまで非常に細かい粒度で、約100個のパーツを作り込みました。その結果、レイアウトの修正を細かく重ねることができ、最終的に全員の意見が反映されたポスターとUIを作成できました。"
        }
      ]
    }
  ],
  experience: [
    {
      period: "2026年9月",
      title: "ディップ株式会社 インターンシップ(バイトルアプリ開発)",
      body: "求人情報サイト「バイトル」のKMP(Kotlin Multiplatform)を用いた大規模リニューアルに参加。Android側の仕様検討と実装を担当し、iOSとの仕様すり合わせにも参加しました。",
      points: [
        "応募確認画面で、おすすめ求人の上に「ユーザーがキープした求人」を表示する機能を、仕様検討から実装・レビューまで担当",
        "取得・表示のタイミング、取得失敗時の挙動(成功した側を残す)、プロフィール編集後の再取得など、判断を一つずつ理由を持って決定",
        "KMPのロジック共有層とAndroid層・iOS層の3層構成で開発。AIとの対話で仕様整理と実装範囲の照合を行い、範囲の拡大を防止",
        "学び:仕様はその仕様が有効になる場面と合わせて考える/判断をチームで共有できる形にすることは決定と一体/完成後に両OSを実際に操作して比較する場が必要"
      ],
      links: [
        {
          label: "テックブログ:理由を持って決断してチームで実装し切る(2026/9/18公開)",
          url: "https://developer.dip-net.co.jp/articles/8jicay5cdab"
        }
      ]
    },
    {
      period: "2026年4月(2週間)",
      title: "SysHack 出場(システム工学研究会主催)",
      body: "遅刻管理アプリ「Awake」を作成。企業賞のdip賞を受賞しました。",
      links: []
    },
    {
      period: "2026年3月(5日間)",
      title: "育成型インターン「CA Tech Dojo」(サイバーエージェント)",
      body: "Androidアプリの開発を行いました。",
      links: []
    },
    {
      period: "2025年11月〜現在",
      title: "スターバックスコーヒー アルバイト",
      body: "",
      links: []
    },
    {
      period: "2024年11月〜2025年4月",
      title: "iCAN'25",
      body: "ハードウェアとモバイルアプリを組み合わせた作品「POP RUNNER」を制作しました。",
      links: []
    }
  ],
  skills: [
    {
      group: "言語",
      items: [
        { n: "Kotlin", note: "2年", main: true },
        { n: "Dart", note: "半年", main: true },
        { n: "C++", note: "2年" },
        { n: "C", note: "2年" },
        { n: "Java", note: "3ヶ月" },
        { n: "TypeScript", note: "3ヶ月" }
      ]
    },
    {
      group: "フレームワーク・ライブラリ",
      items: [
        { n: "Jetpack Compose (Kotlin)", main: true },
        { n: "Flutter (Dart)", main: true },
        { n: "MVVM" },
        { n: "クリーンアーキテクチャ" },
        { n: "Coil" },
        { n: "Hilt" }
      ]
    },
    {
      group: "インフラ・DB",
      items: [
        { n: "Firebase" },
        { n: "Room" },
        { n: "SQLite" },
        { n: "Cloud Firestore / Realtime Database" }
      ]
    },
    {
      group: "開発ツール",
      items: [
        { n: "GitHub (Issue / Project管理)", main: true },
        { n: "Figma (UI/UXデザイン・構成図)", main: true },
        { n: "VS Code" },
        { n: "Arduino" },
        { n: "Notion" },
        { n: "Mermaid" }
      ]
    }
  ],
  contact: {
    email: "ry0000taro.dev@gmail.com",
    links: [
      { label: "GitHub", url: "https://github.com/ry0000taro" },
      { label: "X (Twitter)", url: "https://x.com/ry0000taro" },
      { label: "Wantedly", url: "https://www.wantedly.com/id/ry0000taro" },
      { label: "Discord", url: "https://discord.gg/UAtbXGZp" }
    ]
  }
};
