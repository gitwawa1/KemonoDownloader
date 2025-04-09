// Language translations
const translations = {
    en: {
      // Header
      appTitle: "Kemono Downloader",
      appDescription: "A cross-platform Python app built with PyQt6 to download content from Kemono.su",
      githubRepo: "GitHub Repository",
  
      // Overview
      overviewTitle: "Overview",
      overviewDescription:
        'Kemono Downloader is a versatile Python-based desktop application built with PyQt6, designed to download content from <a href="https://kemono.su" target="_blank">Kemono.su</a>. This tool enables users to archive individual posts or entire creator profiles from services like Patreon, Fanbox, and more, supporting a wide range of file types with customizable settings and advanced features.',
  
      // Important Notices
      importantNoticesTitle: "Important Notices",
      disclaimerTitle: "Disclaimer",
      disclaimerText1:
        "KemonoDownloader is a tool designed for personal and educational use only, to assist users in downloading content from Kemono.su. The maintainers of this project <strong>do not condone or support the unauthorized distribution of copyrighted material</strong>. Users are solely responsible for ensuring they have the legal right to access and download content from Kemono.su, and for complying with all applicable laws, as well as the terms of service of the original platforms from which the content originates (e.g., Patreon, Pixiv Fanbox, Gumroad).",
      disclaimerText2:
        "<strong>Misuse of this tool to infringe on creators' rights, violate copyright laws, or breach terms of service is strictly prohibited.</strong> The maintainers are not liable for any misuse of KemonoDownloader or any consequences arising from its use, including but not limited to legal action, financial loss, or damage to third parties.",
  
      ethicalUseTitle: "Ethical Use Guidelines",
      ethicalUseText1:
        "KemonoDownloader interacts with content from Kemono.su, which may include material originally posted on paywalled platforms like Patreon, Pixiv Fanbox, and Gumroad. Many creators on these platforms rely on paid subscriptions for their livelihood. Downloading and redistributing their content without permission can harm their ability to continue creating.",
      ethicalUseText2: "We strongly encourage users to:",
      ethicalUseList1: "Use KemonoDownloader responsibly and only for content you have the legal right to access.",
      ethicalUseList2:
        "Support creators directly by subscribing to their official channels on platforms like Patreon, Pixiv Fanbox, or Gumroad.",
      ethicalUseList3: "Avoid redistributing downloaded content, as this may violate copyright laws and harm creators.",
  
      risksTitle: "Risks and Limitations",
      risksLegalTitle: "Legal Risks",
      risksLegalText:
        "Downloading content from Kemono.su may violate copyright laws or the terms of service of the original platforms. Users assume all legal risks associated with using this tool.",
      risksDependencyTitle: "Dependency on Kemono.su",
      risksDependencyText:
        "KemonoDownloader relies on Kemono.su, which has a history of inconsistent updates and downtime. If Kemono.su becomes unavailable, this tool will lose its functionality.",
      risksRateLimitsTitle: "Rate Limits and Errors",
      risksRateLimitsText:
        "Kemono.su may impose rate limits or other restrictions that affect download performance. The maintainers cannot guarantee uninterrupted access to Kemono.su's content.",
  
      communityTitle: "Community Standards",
      communityText1:
        'We are committed to fostering a welcoming and respectful community around KemonoDownloader. Please read our <a href="CODE_OF_CONDUCT.md">Code of Conduct</a> to understand the standards we expect from all contributors and users. Key points include:',
      communityList1: "Respecting the intellectual property rights of creators.",
      communityList2:
        "Refraining from using KemonoDownloader to engage in illegal activities, such as unauthorized distribution of copyrighted material.",
      communityList3:
        'Reporting any violations of the Code of Conduct to the maintainers via github, sourceforge or by opening a private issue labeled "Code of Conduct Violation."',
  
      // Features
      featuresTitle: "Features",
      featurePostDownloading: "Post Downloading",
      featurePostDownloadingDesc: "Easily download files from specific Kemono.su posts using their URLs.",
      featureCreatorArchiving: "Creator Archiving",
      featureCreatorArchivingDesc: "Bulk download all posts and files from a creator's profile with a single click.",
      featureFileTypeSupport: "File Type Support",
      featureFileTypeSupportDesc: "Handle images (JPG, PNG, GIF), videos (MP4), archives (ZIP, 7Z), PDFs, and more.",
      featureConcurrentDownloads: "Concurrent Downloads",
      featureConcurrentDownloadsDesc: "Adjust the number of simultaneous downloads (1-10) for optimal performance.",
      featureFileDeduplication: "File Deduplication",
      featureFileDeduplicationDesc: "Prevent redundant downloads using URL hashes.",
      featureImagePreviews: "Image Previews",
      featureImagePreviewsDesc: "Preview images before downloading to verify content.",
      featureDetailedLogging: "Detailed Logging",
      featureDetailedLoggingDesc: "Track progress and troubleshoot issues with an in-app console.",
      featureCrossPlatformUI: "Cross-Platform UI",
      featureCrossPlatformUIDesc:
        "Built with PyQt6 for a modern, intuitive interface compatible with multiple operating systems.",
      featureMediaPlayback: "Media Playback",
      featureMediaPlaybackDesc: "Preview videos and GIFs with built-in playback controls.",
      featureMultilingualSupport: "Multilingual Support",
      featureMultilingualSupportDesc: "Switch between English, Japanese, and Korean languages dynamically.",
      featureAutomaticUpdates: "Automatic Updates",
      featureAutomaticUpdatesDesc: "Check for new versions on startup with optional notifications.",
      featureCustomizableSettings: "Customizable Settings",
      featureCustomizableSettingsDesc:
        "Tailor save directories, folder names, notifications, and themes to your preference.",
  
      // Installation
      installationTitle: "Installation",
      installationDescription:
        'Kemono Downloader is now packaged using <a href="https://briefcase.readthedocs.io/" target="_blank">Briefcase</a>, making it easier to run or distribute as a native application across platforms. You can either build from source or use pre-compiled binaries where available.',
      buildingWithBriefcase: "Building with Briefcase (All Platforms)",
      preCompiledBinaries: "Pre-Compiled Binaries",
  
      // Installation steps
      installStep1: "Ensure you have <strong>Python 3.9+</strong> installed on your system (Windows, macOS, Linux).",
      installStep2: "Clone this repository:",
      installStep3: "Install Briefcase and dependencies:",
      installStep4: "Initialize the Briefcase project (if not already set up):",
      installStep5: "Build the application:",
      installStep6: "Run the application:",
      installNote: "Note",
      installNoteText: "An internet connection is required to fetch content from Kemono.su.",
  
      // Pre-compiled binaries
      installWindows:
        '<strong>Windows</strong>: Download the latest <code>.exe</code> (portable) or <code>.msi</code> (installer) tagged with [<strong>W</strong>] for windows, from the <a href="https://github.com/VoxDroid/KemonoDownloader/releases" target="_blank">Releases page</a>. Run the msi installer or use the portable version for no-setup runs.',
      installMacOS:
        '<strong>macOS</strong>: Download the latest universal <code>.dmg</code> (x86_64 and Apple Silicon) tagged with [<strong>M</strong>] for MacOS, from the <a href="https://github.com/VoxDroid/KemonoDownloader/releases" target="_blank">Releases page</a>. Open the DMG, drag the app to Applications, and launch it.',
      installLinux:
        '<strong>Linux</strong>: Download the latest <code>.rpm</code> (for Fedora/Red Hat), <code>.deb</code> (for Debian/Ubuntu), or <code>.pkg.tar.zst</code> (for Arch/Pacman) tagged with [<strong>L</strong>] for Linux, from the <a href="https://github.com/VoxDroid/KemonoDownloader/releases" target="_blank">Releases page</a>. Run the installer and launch the app.',
  
      // Usage
      usageTitle: "Usage",
      usageDescription:
        'Upon launching, you\'ll see an introductory screen with a "Launch" button. Click it to enter the main interface, featuring four tabs: <strong>Post Downloader</strong>, <strong>Creator Downloader</strong>, <strong>Settings</strong>, and <strong>Help</strong>. The in-app Help tab contains a comprehensive user manual.',
      gettingStarted: "Getting Started",
      postDownloaderTab: "Post Downloader Tab",
      creatorDownloaderTab: "Creator Downloader Tab",
      settingsTab: "Settings Tab",
      helpTab: "Help Tab",
  
      // Screenshots
      screenshotsTitle: "Screenshots",
      postDownloaderTabCaption: "Post Downloader Tab",
      creatorDownloaderTabCaption: "Creator Downloader Tab",
      settingsTabCaption: "Settings Tab",
  
      // Releases
      releasesTitle: "Releases",
      downloadLatestRelease: "Download Latest Release",
  
      // Support & Contributing
      supportTitle: "Support",
      contributingTitle: "Contributing",
  
      // License & Dependencies
      licenseTitle: "License",
      dependenciesTitle: "Dependencies",
  
      // SourceForge
      downloadFromSourceForge: "Download from SourceForge",
  
      // Footer
      developedBy: "Developed by",
      supportOnKofi: "Support on Ko-fi",
  
      // Language Selector
      languageSelector: "Language",
  
      // Usage steps
      usageStep1:
        "The application creates default directories (`Downloads`, `Cache`, `Other Files`) in the specified save location.",
      usageStep2: "Ensure an active internet connection to access Kemono.su content.",
      usageStep3: "Explore the Help tab for detailed instructions and troubleshooting tips.",
      postDownloaderStep1:
        'Enter a post URL (e.g., `https://kemono.su/patreon/user/123456789/post/123456789`) in the "Enter post URL" field.',
      postDownloaderStep2: 'Click "Add to Queue" to add it to the list.',
      postDownloaderStep3:
        "Click the eye icon to view files, filter by type (e.g., JPG, ZIP), and select files to download.",
      postDownloaderStep4: 'Click "Download" to start, and monitor progress with the progress bars and console.',
      creatorDownloaderStep1:
        'Enter a creator URL (e.g., `https://kemono.su/patreon/user/123456789`) in the "Enter creator URL" field.',
      creatorDownloaderStep2: 'Click "Add to Queue" to add it to the list.',
      creatorDownloaderStep3:
        "Click the eye icon to fetch posts, configure options (Main File, Attachments, Content Images), and select posts.",
      creatorDownloaderStep4: 'Click "Download" to begin, and track progress via the interface.',
      settingsStep1: "Set the folder name and save directory for downloads.",
      settingsStep2: "Adjust simultaneous downloads (1-10) using the slider or spinbox.",
      settingsStep3: 'Click "Apply Changes" to save.',
      helpTabDesc: "Navigate to the Help tab to read detailed guides, examples, and support information.",
  
      // Releases
      releasesWindows: "Windows: Pre-compiled `.exe` available in the Releases section.",
      releasesMacOS: "macOS: Pre-compiled universal `.dmg` (x86_64 and Apple Silicon) available in the Releases section.",
      releasesLinux:
        "Linux: Pre-compiled `.rpm` (for Fedora/Red Hat), `.deb` (for Debian/Ubuntu), or `.pkg.tar.tsz` (for Arch/Pacman) available in the Releases page.",
      releasesDesc:
        "Check release notes for details on new features, bug fixes, and version updates. The Briefcase-built Python source remains the primary method, supporting all platforms with proper setup.",
  
      // Support
      supportDesc:
        "For ways to get help, report issues, or support the project's development, please see the Support page.",
      supportInApp: "In-App Help: The Help tab contains a comprehensive user manual.",
      supportGitHub: "GitHub Discussions: Engage with the community on the Discussions tab.",
      supportBugs: "Report Bugs: Open an issue on the Issues page.",
      supportDevelopment: "Support Development: Buy me a coffee on Ko-fi.",
  
      // Contributing
      contributingDesc:
        "Kemono Downloader is open-source, and contributions are encouraged! Please read our Contributing Guidelines for details on how to get involved, submit pull requests, and suggest features. All contributors are expected to adhere to our Code of Conduct.",
      contributingStep1: "Fork the repository on GitHub.",
      contributingStep2: "Create a branch for your feature or fix.",
      contributingStep3: "Submit a pull request with a clear description of your changes.",
      contributingStep4: "Adhere to coding standards and test your changes thoroughly.",
  
      // License & Dependencies
      licenseDesc:
        "This project is licensed under the MIT License. Use, modify, and distribute it freely per the license terms.",
      dependenciesDesc: "To build from source, install the following Python packages:",
      dependencyPyQt6: "PyQt6 (for the GUI)",
      dependencyRequests: "requests (for HTTP requests)",
      dependencyBS4: "beautifulsoup4 (for HTML parsing)",
      dependencyQtAwesome: "qtawesome (for icons)",
      dependencyBriefcase: "briefcase (for packaging the app)",
      dependenciesNote:
        "Create a `requirements.txt` file with these dependencies and run `pip install -r requirements.txt`.",
  
      english: "English",
      japanese: "Japanese",
      korean: "Korean",
    },
    ja: {
      // Header
      appTitle: "ケモノダウンローダー",
      appDescription:
        "Kemono.suからコンテンツをダウンロードするためのPyQt6で構築されたクロスプラットフォームPythonアプリ",
      githubRepo: "GitHubリポジトリ",
  
      // Overview
      overviewTitle: "概要",
      overviewDescription:
        'ケモノダウンローダーは、<a href="https://kemono.su" target="_blank">Kemono.su</a>からコンテンツをダウンロードするために設計された、PyQt6で構築された多目的なPythonベースのデスクトップアプリケーションです。このツールを使用すると、ユーザーはPatreon、Fanboxなどのサービスから個々の投稿やクリエイターのプロフィール全体をアーカイブできます。カスタマイズ可能な設定と高度な機能を備えた幅広いファイルタイプをサポートしています。',
  
      // Important Notices
      importantNoticesTitle: "重要なお知らせ",
      disclaimerTitle: "免責事項",
      disclaimerText1:
        "ケモノダウンローダーは、Kemono.suからコンテンツをダウンロードするユーザーを支援するための個人的および教育的使用のみを目的としたツールです。このプロジェクトのメンテナーは、<strong>著作権で保護されたマテリアルの不正な配布を容認または支持しません</strong>。ユーザーは、Kemono.suからコンテンツにアクセスおよびダウンロードする法的権利を確保し、適用されるすべての法律、およびコンテンツの元のプラットフォーム（Patreon、Pixiv Fanbox、Gumroadなど）のサービス利用規約を遵守する責任があります。",
      disclaimerText2:
        "<strong>このツールを使用してクリエイターの権利を侵害したり、著作権法に違反したり、サービス利用規約に違反したりすることは固く禁じられています。</strong>メンテナーは、ケモノダウンローダーの誤用や、法的措置、経済的損失、第三者への損害を含むがこれらに限定されない、その使用から生じる結果について責任を負いません。",
  
      ethicalUseTitle: "倫理的使用ガイドライン",
      ethicalUseText1:
        "ケモノダウンローダーは、Kemono.suのコンテンツと対話します。これには、PatreonやPixiv Fanbox、Gumroadなどの有料プラットフォームに元々投稿されたマテリアルが含まれる場合があります。これらのプラットフォームの多くのクリエイターは、生計を立てるために有料サブスクリプションに依存しています。許可なくコンテンツをダウンロードして再配布すると、クリエイターが創作を続ける能力を損なう可能性があります。",
      ethicalUseText2: "ユーザーに強く推奨します：",
      ethicalUseList1:
        "ケモノダウンローダーを責任を持って使用し、アクセスする法的権利があるコンテンツにのみ使用してください。",
      ethicalUseList2:
        "Patreon、Pixiv Fanbox、Gumroadなどのプラットフォームで公式チャンネルに登録して、クリエイターを直接サポートしてください。",
      ethicalUseList3:
        "ダウンロードしたコンテンツの再配布を避けてください。著作権法に違反し、クリエイターに害を与える可能性があります。",
  
      risksTitle: "リスクと制限",
      risksLegalTitle: "法的リスク",
      risksLegalText:
        "Kemono.suからコンテンツをダウンロードすると、著作権法や元のプラットフォームのサービス利用規約に違反する可能性があります。ユーザーはこのツールを使用することに関連するすべての法的リスクを負います。",
      risksDependencyTitle: "Kemono.suへの依存",
      risksDependencyText:
        "ケモノダウンローダーはKemono.suに依存しており、Kemono.suは一貫性のない更新とダウンタイムの履歴があります。Kemono.suが利用できなくなった場合、このツールは機能を失います。",
      risksRateLimitsTitle: "レート制限とエラー",
      risksRateLimitsText:
        "Kemono.suはダウンロードパフォーマンスに影響を与えるレート制限やその他の制限を課す場合があります。メンテナーはKemono.suのコンテンツへの中断のないアクセスを保証できません。",
  
      communityTitle: "コミュニティ基準",
      communityText1:
        '私たちはケモノダウンローダーを中心に、歓迎的で敬意を持ったコミュニティを育成することに取り組んでいます。すべての貢献者とユーザーに期待する基準を理解するために、<a href="CODE_OF_CONDUCT.md">行動規範</a>をお読みください。主なポイントは次のとおりです：',
      communityList1: "クリエイターの知的財産権を尊重すること。",
      communityList2:
        "ケモノダウンローダーを使用して、著作権で保護されたマテリアルの不正な配布などの違法行為に従事することを控えること。",
      communityList3:
        "行動規範の違反をgithub、sourceforgeを通じて、または「行動規範違反」というラベルの付いたプライベートな問題を開くことでメンテナーに報告すること。",
  
      // Features
      featuresTitle: "機能",
      featurePostDownloading: "投稿ダウンロード",
      featurePostDownloadingDesc: "URLを使用して特定のKemono.su投稿からファイルを簡単にダウンロードできます。",
      featureCreatorArchiving: "クリエイターアーカイブ",
      featureCreatorArchivingDesc: "クリエイターのプロフィールからすべての投稿とファイルを一度にダウンロードできます。",
      featureFileTypeSupport: "ファイルタイプサポート",
      featureFileTypeSupportDesc: "画像（JPG、PNG、GIF）、動画（MP4）、アーカイブ（ZIP、7Z）、PDFなどを処理します。",
      featureConcurrentDownloads: "同時ダウンロード",
      featureConcurrentDownloadsDesc: "最適なパフォーマンスのために同時ダウンロード数（1〜10）を調整します。",
      featureFileDeduplication: "ファイル重複排除",
      featureFileDeduplicationDesc: "URLハッシュを使用して冗長なダウンロードを防止します。",
      featureImagePreviews: "画像プレビュー",
      featureImagePreviewsDesc: "ダウンロード前に画像をプレビューしてコンテンツを確認します。",
      featureDetailedLogging: "詳細なログ記録",
      featureDetailedLoggingDesc: "アプリ内コンソールで進捗状況を追跡し、問題をトラブルシューティングします。",
      featureCrossPlatformUI: "クロスプラットフォームUI",
      featureCrossPlatformUIDesc:
        "PyQt6で構築された、複数のオペレーティングシステムと互換性のあるモダンで直感的なインターフェース。",
      featureMediaPlayback: "メディア再生",
      featureMediaPlaybackDesc: "内蔵の再生コントロールで動画やGIFをプレビューします。",
      featureMultilingualSupport: "多言語サポート",
      featureMultilingualSupportDesc: "英語、日本語、韓国語の言語を動的に切り替えます。",
      featureAutomaticUpdates: "自動更新",
      featureAutomaticUpdatesDesc: "起動時に新しいバー���ョンをチェックし、オプションの通知を提供します。",
      featureCustomizableSettings: "カスタマイズ可能な設定",
      featureCustomizableSettingsDesc: "保存ディレクトリ、フォルダ名、通知、テーマを好みに合わせて調整します。",
  
      // Installation
      installationTitle: "インストール",
      installationDescription:
        'ケモノダウンローダーは現在、<a href="https://briefcase.readthedocs.io/" target="_blank">Briefcase</a>を使用してパッケージ化されており、プラットフォーム間でネイティブアプリケーションとして実行または配布することが容易になっています。ソースからビルドするか、利用可能な場合は事前コンパイルされたバイナリを使用できます。',
      buildingWithBriefcase: "Briefcaseでのビルド（すべてのプラットフォーム）",
      preCompiledBinaries: "事前コンパイルされたバイナリ",
  
      // Installation steps
      installStep1:
        "<strong>Python 3.9+</strong>がシステム（Windows、macOS、Linux）にインストールされていることを確認してください。",
      installStep2: "このリポジトリをクローンします：",
      installStep3: "Briefcaseと依存関係をインストールします：",
      installStep4: "Briefcaseプロジェクトを初期化します（まだ設定されていない場合）：",
      installStep5: "アプリケーションをビルドします：",
      installStep6: "アプリケーションを実行します：",
      installNote: "注意",
      installNoteText: "Kemono.suからコンテンツを取得するにはインターネット接続が必要です。",
  
      // Pre-compiled binaries
      installWindows:
        '<strong>Windows</strong>：<a href="https://github.com/VoxDroid/KemonoDownloader/releases" target="_blank">リリースページ</a>から、Windowsの場合は[<strong>W</strong>]とタグ付けされた最新の<code>.exe</code>（ポータブル）または<code>.msi</code>（インストーラー）をダウンロードします。msiインストーラーを実行するか、セットアップ不要のポータブル版を使用します。',
      installMacOS:
        '<strong>macOS</strong>：<a href="https://github.com/VoxDroid/KemonoDownloader/releases" target="_blank">リリースページ</a>から、MacOSの場合は[<strong>M</strong>]とタグ付けされた最新のユニバーサル<code>.dmg</code>（x86_64およびApple Silicon）をダウンロードします。DMGを開き、アプリをApplicationsにドラッグして起動します。',
      installLinux:
        '<strong>Linux</strong>：<a href="https://github.com/VoxDroid/KemonoDownloader/releases" target="_blank">リリースページ</a>から、Linuxの場合は[<strong>L</strong>]とタグ付けされた最新の<code>.rpm</code>（Fedora/Red Hat用）、<code>.deb</code>（Debian/Ubuntu用）、または<code>.pkg.tar.zst</code>（Arch/Pacman用）をダウンロードします。インストーラーを実行してアプリを起動します。',
  
      // Usage
      usageTitle: "使用方法",
      usageDescription:
        "起動すると、「起動」ボタンのある紹介画面が表示されます。クリックすると、<strong>投稿ダウンローダー</strong>、<strong>クリエイターダウンローダー</strong>、<strong>設定</strong>、<strong>ヘルプ</strong>の4つのタブを備えたメインインターフェースに入ります。アプリ内のヘルプタブには包括的なユーザーマニュアルが含まれています。",
      gettingStarted: "はじめに",
      postDownloaderTab: "投稿ダウンローダータブ",
      creatorDownloaderTab: "クリエイターダウンローダータブ",
      settingsTab: "設定タブ",
      helpTab: "ヘルプタブ",
  
      // Screenshots
      screenshotsTitle: "スクリーンショット",
      postDownloaderTabCaption: "投稿ダウンローダータブ",
      creatorDownloaderTabCaption: "クリエイターダウンローダータブ",
      settingsTabCaption: "設定タブ",
  
      // Releases
      releasesTitle: "リリース",
      downloadLatestRelease: "最新リリースをダウンロード",
  
      // Support & Contributing
      supportTitle: "サポート",
      contributingTitle: "貢献",
  
      // License & Dependencies
      licenseTitle: "ライセンス",
      dependenciesTitle: "依存関係",
  
      // SourceForge
      downloadFromSourceForge: "SourceForgeからダウンロード",
  
      // Footer
      developedBy: "開発者：",
      supportOnKofi: "Ko-fiでサポート",
  
      // Language Selector
      languageSelector: "言語",
  
      // Usage steps
      usageStep1:
        "アプリケーションは指定された保存場所にデフォルトのディレクトリ（`Downloads`、`Cache`、`Other Files`）を作成します。",
      usageStep2: "Kemono.suのコンテンツにアクセスするには、アクティブなインターネット接続が必要です。",
      usageStep3: "詳細な説明やトラブルシューティングのヒントについては、ヘルプタブを参照してください。",
      postDownloaderStep1:
        "「投稿URLを入力」フィールドに投稿URL（例：`https://kemono.su/patreon/user/123456789/post/123456789`）を入力します。",
      postDownloaderStep2: "「キューに追加」をクリックしてリストに追加します。",
      postDownloaderStep3:
        "目のアイコンをクリックしてファイルを表示し、タイプ（JPG、ZIPなど）でフィルタリングし、ダウンロードするファイルを選択します。",
      postDownloaderStep4: "「ダウンロード」をクリックして開始し、プログレスバーとコンソールで進行状況を監視します。",
      creatorDownloaderStep1:
        "「クリエイターURLを入力」フィールドにクリエイターURL（例：`https://kemono.su/patreon/user/123456789`）を入力します。",
      creatorDownloaderStep2: "「キューに追加」をクリックしてリストに追加します。",
      creatorDownloaderStep3:
        "目のアイコンをクリックして投稿を取得し、オプション（メインファイル、添付ファイル、コンテンツ画像）を設定し、投稿を選択します。",
      creatorDownloaderStep4: "「ダウンロード」をクリックして開始し、インターフェースで進行状況を追跡します。",
      settingsStep1: "ダウンロードのフォルダ名と保存ディレクトリを設定します。",
      settingsStep2: "スライダーまたはスピンボックスを使用して同時ダウンロード数（1〜10）を調整します。",
      settingsStep3: "「変更を適用」をクリックして保存します。",
      helpTabDesc: "ヘルプタブに移動して、詳細なガイド、例、およびサポート情報を読みます。",
  
      // Releases
      releasesWindows: "Windows：リリースセクションで事前コンパイルされた`.exe`が利用可能です。",
      releasesMacOS:
        "macOS：リリースセクションで事前コンパイルされたユニバーサル`.dmg`（x86_64およびApple Silicon）が利用可能です。",
      releasesLinux:
        "Linux：リリースページで事前コンパイルされた`.rpm`（Fedora/Red Hat用）、`.deb`（Debian/Ubuntu用）、または`.pkg.tar.tsz`（Arch/Pacman用）が利用可能です。",
      releasesDesc:
        "新機能、バグ修正、バージョン更新の詳細についてはリリースノートを確認してください。Briefcaseでビルドされたソースは、適切な設定ですべてのプラットフォームをサポートする主要な方法です。",
  
      // Support
      supportDesc:
        "ヘルプの入手方法、問題の報告、またはプロジェクトの開発をサポートする方法については、サポートページを参照してください。",
      supportInApp: "アプリ内ヘルプ：ヘルプタブには包括的なユーザーマニュアルが含まれています。",
      supportGitHub: "GitHub Discussions：ディスカッションタブでコミュニティと交流します。",
      supportBugs: "バグの報告：問題ページで問題を開きます。",
      supportDevelopment: "開発のサポート：Ko-fiでコーヒーを買ってください。",
  
      // Contributing
      contributingDesc:
        "ケモノダウンローダーはオープンソースであり、貢献を奨励しています！参加方法、プルリクエストの提出方法、機能の提案方法の詳細については、貢献ガイドラインをお読みください。すべての貢献者は行動規範に従うことが期待されています。",
      contributingStep1: "GitHubでリポジトリをフォークします。",
      contributingStep2: "機能または修正のためのブランチを作成します。",
      contributingStep3: "変更の明確な説明を含むプルリクエストを提出します。",
      contributingStep4: "コーディング標準に従い、変更を徹底的にテストします。",
  
      // License & Dependencies
      licenseDesc:
        "このプロジェクトはMITライセンスの下でライセンスされています。ライセンス条項に従って自由に使用、変更、配布してください。",
      dependenciesDesc: "ソースからビルドするには、次のPythonパッケージをインストールしてください：",
      dependencyPyQt6: "PyQt6（GUIのため）",
      dependencyRequests: "requests（HTTPリクエストのため）",
      dependencyBS4: "beautifulsoup4（HTML解析のため）",
      dependencyQtAwesome: "qtawesome（アイコンのため）",
      dependencyBriefcase: "briefcase（アプリのパッケージングのため）",
      dependenciesNote:
        "これらの依存関係を含む`requirements.txt`ファイルを作成し、`pip install -r requirements.txt`を実行します。",
  
      english: "英語",
      japanese: "日本語",
      korean: "韓国語",
    },
    ko: {
      // Header
      appTitle: "케모노 다운로더",
      appDescription: "Kemono.su에서 콘텐츠를 다운로드하기 위해 PyQt6로 구축된 크로스 플랫폼 Python 앱",
      githubRepo: "GitHub 저장소",
  
      // Overview
      overviewTitle: "개요",
      overviewDescription:
        '케모노 다운로더는 <a href="https://kemono.su" target="_blank">Kemono.su</a>에서 콘텐츠를 다운로드하도록 설계된 PyQt6로 구축된 다목적 Python 기반 데스크톱 애플리케이션입니다. 이 도구를 사용하면 사용자가 Patreon, Fanbox 등과 같은 서비스에서 개별 게시물이나 전체 크리에이터 프로필을 보관할 수 있으며, 사용자 정의 가능한 설정과 고급 기능으로 다양한 파일 유형을 지원합니다.',
  
      // Important Notices
      importantNoticesTitle: "중요 공지사항",
      disclaimerTitle: "면책 조항",
      disclaimerText1:
        "케모노 다운로더는 Kemono.su에서 콘텐츠를 다운로드하는 사용자를 지원하기 위한 개인 및 교육용으로만 설계된 도구입니다. 이 프로젝트의 관리자는 <strong>저작권이 있는 자료의 무단 배포를 용인하거나 지원하지 않습니다</strong>. 사용자는 Kemono.su에서 콘텐츠에 접근하고 다운로드할 법적 권리를 확보하고, 모든 관련 법률 및 콘텐츠가 발생한 원본 플랫폼(예: Patreon, Pixiv Fanbox, Gumroad)의 서비스 약관을 준수할 책임이 있습니다.",
      disclaimerText2:
        "<strong>이 도구를 크리에이터의 권리를 침해하거나, 저작권법을 위반하거나, 서비스 약관을 위반하는 데 오용하는 것은 엄격히 금지됩니다.</strong> 관리자는 케모노 다운로더의 오용이나 법적 조치, 재정적 손실, 제3자에 대한 손해를 포함하되 이에 국한되지 않는 사용으로 인한 결과에 대해 책임을 지지 않습니다.",
  
      ethicalUseTitle: "윤리적 사용 지침",
      ethicalUseText1:
        "케모노 다운로더는 Kemono.su의 콘텐츠와 상호 작용하며, 여기에는 Patreon, Pixiv Fanbox, Gumroad와 같은 유료 플랫폼에 원래 게시된 자료가 포함될 수 있습니다. 이러한 플랫폼의 많은 크리에이터들은 생계를 위해 유료 구독에 의존합니다. 허가 없이 콘텐츠를 다운로드하고 재배포하면 크리에이터가 계속 창작할 수 있는 능력을 해칠 수 있습니다.",
      ethicalUseText2: "사용자에게 강력히 권장합니다:",
      ethicalUseList1: "케모노 다운로더를 책임감 있게 사용하고 접근할 법적 권리가 있는 콘텐츠에만 사용하세요.",
      ethicalUseList2:
        "Patreon, Pixiv Fanbox, Gumroad와 같은 플랫폼에서 공식 채널을 구독하여 크리에이터를 직접 지원하세요.",
      ethicalUseList3: "다운로드한 콘텐츠를 재배포하지 마세요. 저작권법을 위반하고 크리에이터에게 해를 끼칠 수 있습니다.",
  
      risksTitle: "위험 및 제한 사항",
      risksLegalTitle: "법적 위험",
      risksLegalText:
        "Kemono.su에서 콘텐츠를 다운로드하면 저작권법이나 원본 플랫폼의 서비스 약관을 위반할 수 있습니다. 사용자는 이 도구 사용과 관련된 모든 법적 위험을 감수합니다.",
      risksDependencyTitle: "Kemono.su에 대한 의존성",
      risksDependencyText:
        "케모노 다운로더는 Kemono.su에 의존하며, Kemono.su는 일관성 없는 업데이트와 다운타임 이력이 있습니다. Kemono.su를 사용할 수 없게 되면 이 도구는 기능을 잃게 됩니다.",
      risksRateLimitsTitle: "속도 제한 및 오류",
      risksRateLimitsText:
        "Kemono.su는 다운로드 성능에 영향을 미치는 속도 제한이나 기타 제한을 부과할 수 있습니다. 관리자는 Kemono.su 콘텐츠에 대한 중단 없는 접근을 보장할 수 없습니다.",
  
      communityTitle: "커뮤니티 표준",
      communityText1:
        '우리는 케모노 다운로더를 중심으로 환영하고 존중하는 커뮤니티를 조성하기 위해 노력하고 있습니다. 모든 기여자와 사용자에게 기대하는 표준을 이해하기 위해 <a href="CODE_OF_CONDUCT.md">행동 강령</a>을 읽어보세요. 주요 내용은 다음과 같습니다:',
      communityList1: "크리에이터의 지적 재산권을 존중하세요.",
      communityList2: "케모노 다운로더를 사용하여 저작권이 있는 자료의 무단 배포와 같은 불법 활동에 참여하지 마세요.",
      communityList3:
        '행동 강령 위반 사항을 github, sourceforge를 통해 또는 "행동 강령 위반"이라는 라벨이 붙은 비공개 이슈를 열어 관리자에게 보고하세요.',
  
      // Features
      featuresTitle: "기능",
      featurePostDownloading: "게시물 다운로드",
      featurePostDownloadingDesc: "URL을 사용하여 특정 Kemono.su 게시물에서 파일을 쉽게 다운로드할 수 있습니다.",
      featureCreatorArchiving: "크리에이터 아카이빙",
      featureCreatorArchivingDesc: "한 번의 클릭으로 크리에이터 프로필에서 모든 게시물과 파일을 일괄 다운로드합니다.",
      featureFileTypeSupport: "파일 유형 지원",
      featureFileTypeSupportDesc: "이미지(JPG, PNG, GIF), 비디오(MP4), 아카이브(ZIP, 7Z), PDF 등을 처리합니다.",
      featureConcurrentDownloads: "동시 다운로드",
      featureConcurrentDownloadsDesc: "최적의 성능을 위해 동시 다운로드 수(1-10)를 조정합니다.",
      featureFileDeduplication: "파일 중복 제거",
      featureFileDeduplicationDesc: "URL 해시를 사용하여 중복 다운로드��� 방지합니다.",
      featureImagePreviews: "이미지 미리보기",
      featureImagePreviewsDesc: "다운로드 전에 이미지를 미리 보고 콘텐츠를 확인합니다.",
      featureDetailedLogging: "상세 로깅",
      featureDetailedLoggingDesc: "앱 내 콘솔로 진행 상황을 추적하고 문제를 해결합니다.",
      featureCrossPlatformUI: "크로스 플랫폼 UI",
      featureCrossPlatformUIDesc:
        "여러 운영 체제와 호환되는 현대적이고 직관적인 인터페이스를 위해 PyQt6로 구축되었습니다.",
      featureMediaPlayback: "미디어 재생",
      featureMediaPlaybackDesc: "내장된 재생 컨트롤로 비디오와 GIF를 미리 봅니다.",
      featureMultilingualSupport: "다국어 지원",
      featureMultilingualSupportDesc: "영어, 일본어, 한국어 언어를 동적으로 전환합니다.",
      featureAutomaticUpdates: "자동 업데이트",
      featureAutomaticUpdatesDesc: "시작 시 새 버전을 확인하고 선택적 알림을 제공합니다.",
      featureCustomizableSettings: "사용자 정의 설정",
      featureCustomizableSettingsDesc: "저장 디렉토리, 폴더 이름, 알림 및 테마를 원하는 대로 조정합니다.",
  
      // Installation
      installationTitle: "설치",
      installationDescription:
        '케모노 다운로더는 이제 <a href="https://briefcase.readthedocs.io/" target="_blank">Briefcase</a>를 사용하여 패키징되어 플랫폼 간에 네이티브 애플리케이션으로 실행하거나 배포하기가 더 쉬워졌습니다. 소스에서 빌드하거나 사용 가능한 경우 미리 컴파일된 바이너리를 사용할 수 있습니다.',
      buildingWithBriefcase: "Briefcase로 빌드하기 (모든 플랫폼)",
      preCompiledBinaries: "미리 컴파일된 바이너리",
  
      // Installation steps
      installStep1: "시스템(Windows, macOS, Linux)에 <strong>Python 3.9+</strong>가 설치되어 있는지 확인하세요.",
      installStep2: "이 저장소를 복제합니다:",
      installStep3: "Briefcase와 의존성을 설치합니다:",
      installStep4: "Briefcase 프로젝트를 초기화합니다(아직 설정되지 않은 경우):",
      installStep5: "애플리케이션을 빌드합니다:",
      installStep6: "애플리케이션을 실행합니다:",
      installNote: "참고",
      installNoteText: "Kemono.su에서 콘텐츠를 가져오려면 인터넷 연결이 필요합니다.",
  
      // Pre-compiled binaries
      installWindows:
        '<strong>Windows</strong>: <a href="https://github.com/VoxDroid/KemonoDownloader/releases" target="_blank">릴리스 페이지</a>에서 Windows용으로 [<strong>W</strong>]로 태그된 최신 <code>.exe</code>(포터블) 또는 <code>.msi</code>(설치 프로그램)를 다운로드하세요. msi 설치 프로그램을 실행하거나 설치가 필요 없는 포터블 버전을 사용하세요.',
      installMacOS:
        '<strong>macOS</strong>: <a href="https://github.com/VoxDroid/KemonoDownloader/releases" target="_blank">릴리스 페이지</a>에서 MacOS용으로 [<strong>M</strong>]으로 태그된 최신 유니버설 <code>.dmg</code>(x86_64 및 Apple Silicon)를 다운로드하세요. DMG를 열고 앱을 Applications로 드래그한 다음 실행하세요.',
      installLinux:
        '<strong>Linux</strong>: <a href="https://github.com/VoxDroid/KemonoDownloader/releases" target="_blank">릴리스 페이지</a>에서 Linux용으로 [<strong>L</strong>]로 태그된 최신 <code>.rpm</code>(Fedora/Red Hat용), <code>.deb</code>(Debian/Ubuntu용) 또는 <code>.pkg.tar.zst</code>(Arch/Pacman용)를 다운로드하세요. 설치 프로그램을 실행하고 앱을 실행하세요.',
  
      // Usage
      usageTitle: "사용법",
      usageDescription:
        '실행 시 "시작" 버튼이 있는 소개 화면이 표시됩니다. 클릭하면 <strong>게시물 다운로더</strong>, <strong>크리에이터 다운로더</strong>, <strong>설정</strong>, <strong>도움말</strong>의 네 가지 탭이 있는 메인 인터페이스로 들어갑니다. 앱 내 도움말 탭에는 포괄적인 사용자 매뉴얼이 포함되어 있습니다.',
      gettingStarted: "시작하기",
      postDownloaderTab: "게시물 다운로더 탭",
      creatorDownloaderTab: "크리에이터 다운로더 탭",
      settingsTab: "설정 탭",
      helpTab: "도움말 탭",
  
      // Screenshots
      screenshotsTitle: "스크린샷",
      postDownloaderTabCaption: "게시물 다운로더 탭",
      creatorDownloaderTabCaption: "크리에이터 다운로더 탭",
      settingsTabCaption: "설정 탭",
  
      // Releases
      releasesTitle: "릴리스",
      downloadLatestRelease: "최신 릴리스 다운로드",
  
      // Support & Contributing
      supportTitle: "지원",
      contributingTitle: "기여",
  
      // License & Dependencies
      licenseTitle: "라이선스",
      dependenciesTitle: "의존성",
  
      // SourceForge
      downloadFromSourceForge: "SourceForge에서 다운로드",
  
      // Footer
      developedBy: "개발자:",
      supportOnKofi: "Ko-fi에서 지원",
  
      // Language Selector
      languageSelector: "언어",
  
      // Usage steps
      usageStep1: "애플리케이션은 지정된 저장 위치에 기본 디렉토리(`Downloads`, `Cache`, `Other Files`)를 생성합니다.",
      usageStep2: "Kemono.su 콘텐츠에 접근하려면 활성 인터넷 연결이 필요합니다.",
      usageStep3: "자세한 지침과 문제 해결 팁은 도움말 탭을 참조하세요.",
      postDownloaderStep1:
        '"게시물 URL 입력" 필드에 게시물 URL(예: `https://kemono.su/patreon/user/123456789/post/123456789`)을 입력합니다.',
      postDownloaderStep2: '"대기열에 추가"를 클릭하여 목록에 추가합니다.',
      postDownloaderStep3:
        "눈 아이콘을 클릭하여 파일을 보고, 유형(예: JPG, ZIP)으로 필터링하고, 다운로드할 파일을 선택합니다.",
      postDownloaderStep4: '"다운로드"를 클릭하여 시작하고, 진행 표시줄과 콘솔로 진행 상황을 모니터링합니다.',
      creatorDownloaderStep1:
        '"크리에이터 URL 입력" 필드에 크리에이터 URL(예: `https://kemono.su/patreon/user/123456789`)을 입력합니다.',
      creatorDownloaderStep2: '"대기열에 추가"를 클릭하여 목록에 추가합니다.',
      creatorDownloaderStep3:
        "눈 아이콘을 클릭하여 게시물을 가져오고, 옵션(메인 파일, 첨부 파일, 콘텐츠 이미지)을 구성하고, 게시물을 선택합니다.",
      creatorDownloaderStep4: '"다운로드"를 클릭하여 시작하고, 인터페이스를 통해 진행 상황을 추적합니다.',
      settingsStep1: "다운로드를 위한 폴더 이름과 저장 디렉토리를 설정합니다.",
      settingsStep2: "슬라이더 또는 스핀박스를 사용하여 동시 다운로드 수(1-10)를 조정합니다.",
      settingsStep3: '"변경 사항 적용"을 클릭하여 저장합니다.',
      helpTabDesc: "도움말 탭으로 이동하여 자세한 가이드, 예제 및 지원 정보를 읽습니다.",
  
      // Releases
      releasesWindows: "Windows: 릴리스 섹션에서 사전 컴파일된 `.exe`를 사용할 수 있습니다.",
      releasesMacOS:
        "macOS: 릴리스 섹션에서 사전 컴파일된 유니버설 `.dmg`(x86_64 및 Apple Silicon)를 사용할 수 있습니다.",
      releasesLinux:
        "Linux: 릴리스 페이지에서 사전 컴파일된 `.rpm`(Fedora/Red Hat용), `.deb`(Debian/Ubuntu용) 또는 `.pkg.tar.tsz`(Arch/Pacman용)를 사용할 수 있습니다.",
      releasesDesc:
        "새로운 기능, 버그 수정 및 버전 업데이트에 대한 자세한 내용은 릴리스 노트를 확인하세요. Briefcase로 빌드된 Python 소스는 적절한 설정으로 모든 플랫폼을 지원하는 주요 방법입니다.",
  
      // Support
      supportDesc: "도움을 받는 방법, 문제 보고 또는 프로젝트 개발 지원에 대한 자세한 내용은 지원 페이지를 참조하세요.",
      supportInApp: "앱 내 도움말: 도움말 탭에는 포괄적인 사용자 매뉴얼이 포함되어 있습니다.",
      supportGitHub: "GitHub 토론: 토론 탭에서 커뮤니티와 교류하세요.",
      supportBugs: "버그 신고: 이슈 페이지에서 이슈를 열어주세요.",
      supportDevelopment: "개발 지원: Ko-fi에서 커피를 사주세요.",
  
      // Contributing
      contributingDesc:
        "케모노 다운로더는 오픈 소스이며, 기여를 권장합니다! 참여 방법, 풀 리퀘스트 제출 및 기능 제안에 대한 자세한 내용은 기여 가이드라인을 읽어보세요. 모든 기여자는 행동 강령을 준수해야 합니다.",
      contributingStep1: "GitHub에서 저장소를 포크합니다.",
      contributingStep2: "기능 또는 수정을 위한 브랜치를 만듭니다.",
      contributingStep3: "변경 사항에 대한 명확한 설명과 함께 풀 리퀘스트를 제출합니다.",
      contributingStep4: "코딩 표준을 준수하고 변경 사항을 철저히 테스트합니다.",
  
      // License & Dependencies
      licenseDesc:
        "이 프로젝트는 MIT 라이선스에 따라 라이선스가 부여됩니다. 라이선스 조건에 따라 자유롭게 사용, 수정 및 배포하세요.",
      dependenciesDesc: "소스에서 빌드하려면 다음 Python 패키지를 설치하세요:",
      dependencyPyQt6: "PyQt6(GUI용)",
      dependencyRequests: "requests(HTTP 요청용)",
      dependencyBS4: "beautifulsoup4(HTML 파싱용)",
      dependencyQtAwesome: "qtawesome(아이콘용)",
      dependencyBriefcase: "briefcase(앱 패키징용)",
      dependenciesNote:
        "이러한 종속성이 포함된 `requirements.txt` 파일을 만들고 `pip install -r requirements.txt`를 실행하세요.",
  
      english: "英語",
      japanese: "日本語",
      korean: "한국어",
    },
  }
  
  // Initialize language
  let currentLanguage = localStorage.getItem("language") || "en"
  
  // Function to set the language
  function setLanguage(lang) {
    if (!translations[lang]) {
      console.error(`Language ${lang} not supported`)
      return
    }
  
    currentLanguage = lang
    localStorage.setItem("language", lang)
  
    // Update all translatable elements
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n")
      if (translations[lang][key]) {
        if (element.tagName === "INPUT" && element.type === "placeholder") {
          element.placeholder = translations[lang][key]
        } else if (element.tagName === "IMG") {
          element.alt = translations[lang][key]
        } else {
          element.innerHTML = translations[lang][key]
        }
      }
    })
  
    // Update language selector display
    document.getElementById("current-language").textContent = translations[lang].languageSelector
  
    // Update document title
    document.title = translations[lang].appTitle
  
    // Add active class to current language in dropdown
    document.querySelectorAll(".language-dropdown-item").forEach((item) => {
      if (item.getAttribute("onclick").includes(lang)) {
        item.classList.add("active")
      } else {
        item.classList.remove("active")
      }
    })
  }
  
  // Initialize language on page load
  document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLanguage)
  })
  
  // Export for use in other scripts
  window.i18n = {
    setLanguage,
    getCurrentLanguage: () => currentLanguage,
    getTranslation: (key) => {
      return translations[currentLanguage][key] || key
    },
  }
  