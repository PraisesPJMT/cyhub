const News = [
	{
		source: {
			id: null,
			name: 'Gizmodo.com',
		},
		author: 'Maxwell Zeff',
		title:
			'Microsoft’s Shoddy Security Exposed US Official Emails in Chinese Hack',
		description:
			'The Department of Homeland Security issued a damning review of Microsoft’s cybersecurity practices on Tuesday, blaming the cloud provider for exposing the emails of high-ranking government officials. The review found Chinese-state affiliated hackers capitaliz…',
		url: 'https://gizmodo.com/microsoft-shoddy-security-exposed-emails-chinese-hack-1851384073',
		urlToImage:
			'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/6685b7b5bdcdbe2b0591f4542ce1fe74.jpg',
		publishedAt: '2024-04-03T14:40:00Z',
		content:
			'The Department of Homeland Security issued a damning review of Microsofts cybersecurity practices on Tuesday, blaming the cloud provider for exposing the emails of high-ranking government officials. … [+2420 chars]',
	},
	{
		source: {
			id: 'bbc-news',
			name: 'BBC News',
		},
		author: 'https://www.facebook.com/bbcnews',
		title: "UK to accuse China of major hack as Beijing warns against 'smears'",
		description:
			'The attacks on the Electoral Commission were revealed last year, with MPs also thought to be targeted.',
		url: 'https://www.bbc.co.uk/news/live/uk-politics-68654299',
		urlToImage:
			'https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png',
		publishedAt: '2024-03-25T11:14:29Z',
		content:
			"Last August, the UKs elections watchdog revealed that an attack on voters' data had taken place in August 2021, which it had only discovered in October 2022.\r\nThe Electoral Commission said at that ti… [+904 chars]",
	},
	{
		source: {
			id: null,
			name: 'Slashdot.org',
		},
		author: 'BeauHD',
		title: 'US, UK Announce Sanctions Over China-Linked Election Hacks',
		description:
			'Earlier today, the U.S. and U.K. accused hackers linked to the Chinese state of being behind "malicious" cyber campaigns targeting political figures. The U.K. government also blamed China for a 2021 cyberattack that compromised the personal information of mil…',
		url: 'https://yro.slashdot.org/story/24/03/25/2125211/us-uk-announce-sanctions-over-china-linked-election-hacks',
		urlToImage: 'https://a.fsdn.com/sd/topics/government_64.png',
		publishedAt: '2024-03-26T00:45:00Z',
		content:
			'Officials said those sanctioned are responsible for a hack that may have gained access to information on tens of millions of U.K. voters held by the Electoral Commission, as well as for cyberespionag… [+1929 chars]',
	},
	{
		source: {
			id: null,
			name: 'ReadWrite',
		},
		author: 'Graeme Hanna',
		title: 'Apex Legends: Hackers deploy cheats disrupting tournament',
		description:
			'Hackers have targeted the esports final of online shooter game Apex Legends, causing significant disruption to the closing stages of… Continue reading Apex Legends: Hackers deploy cheats disrupting tournament\nThe post Apex Legends: Hackers deploy cheats disru…',
		url: 'https://readwrite.com/apex-legends-hackers-deploy-cheats-disrupting-tournament/',
		urlToImage: 'https://readwrite.com/wp-content/uploads/2024/03/apex.jpg',
		publishedAt: '2024-03-18T17:32:19Z',
		content:
			'Hackers have targeted the esports final of online shooter game Apex Legends, causing significant disruption to the closing stages of the North American tournament.\r\nThe competition was thrown into di… [+2300 chars]',
	},
	{
		source: {
			id: 'the-next-web',
			name: 'The Next Web',
		},
		author: 'Siôn Geschwindt',
		title: 'Dutch cybersecurity startup bags €36M amid spike in online attacks',
		description:
			'Dutch startup Eye Security has raised €36mn as it looks to defend European businesses from cyber criminals.  Founded in 2020 by a group of Dutch intelligence and security experts, the Hague-based outfit provides cyber protection, incident response, and cyber …',
		url: 'https://thenextweb.com/news/dutch-cybersecurity-startup-eye-36m',
		urlToImage:
			'https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2024%2F03%2Fcybersecurity-hacker-startup-eye.jpg&signature=f0f19b70b3e743b278387c2dcae04019',
		publishedAt: '2024-03-11T15:28:12Z',
		content:
			'Dutch startup Eye Security has raised 36mn as it looks to defend European businesses from cyber criminals. \r\nFounded in 2020 by a group of Dutch intelligence and security experts, the Hague-based out… [+2527 chars]',
	},
	{
		source: {
			id: null,
			name: 'Hackaday',
		},
		author: 'Kristina Panos',
		title:
			'Hackaday Podcast Episode 265: Behind the Epic SSH Hack, 1980s Cyber Butler, The Story of Season 7',
		description:
			'This week, Editor-in-Chief Elliot Williams and Kristina Panos convened once again to give the lowdown on this week’s best hacks. First up in the news — it’s giga-sunset time for …read more',
		url: 'https://hackaday.com/2024/04/05/hackaday-podcast-episode-265-behind-the-epic-ssh-hack-1980s-cyber-butler-the-story-of-season-7/',
		urlToImage:
			'https://hackaday.com/wp-content/uploads/2016/05/microphone.jpg',
		publishedAt: '2024-04-05T16:00:20Z',
		content:
			'This week, Editor-in-Chief Elliot Williams and Kristina Panos convened once again to give the lowdown on this week’s best hacks. First up in the news — it’s giga-sunset time for Gigaset IoT devices, … [+1020 chars]',
	},
	{
		source: {
			id: null,
			name: 'Hackaday',
		},
		author: 'Jonathan Bennett',
		title: 'This Week in Security: XZ, ATT, and Letters of Marque',
		description:
			'The xz backdoor is naturally still the top story of the week. If you need a refresher, see our previous coverage. As expected, some very talented reverse engineers have gone to work on the code, an…',
		url: 'https://hackaday.com/2024/04/05/this-week-in-security-xz-att-and-letters-of-marque/',
		urlToImage: 'https://hackaday.com/wp-content/uploads/2016/01/darkarts.jpg',
		publishedAt: '2024-04-05T14:00:35Z',
		content:
			'The xz backdoor is naturally still the top story of the week. If you need a refresher, see our previouscoverage. As expected, some very talented reverse engineers have gone to work on the code, and w… [+8033 chars]',
	},
	{
		source: {
			id: 'time',
			name: 'Time',
		},
		author: 'T.C.A Achintya / Made by History',
		title: 'What Libraries Risk When They Go Digital',
		description:
			'Digitization has democratized and widened library access, but the cyberattack on the British Library shows that it is not without risks.',
		url: 'https://time.com/6692315/digital-age-threatens-libraries/',
		urlToImage:
			'https://api.time.com/wp-content/uploads/2024/02/library.jpg?quality=85',
		publishedAt: '2024-03-26T13:00:00Z',
		content:
			'Over the past few years, libraries and archives across the world have worked to digitize their resources. The United States, United Kingdom, and India, for instance, have all invested in expanding di… [+6687 chars]',
	},
	{
		source: {
			id: 'fox-news',
			name: 'Fox News',
		},
		author: 'Kurt Knutsson, CyberGuy Report',
		title:
			'Hackers use pirated software to hijack Mac, Android and Windows devices',
		description:
			'Hackers use pirated software to target macOS, Android and Windows devices in search of stealing cryptocurrency, according to Kurt "CyberGuy" Knutsson.',
		url: 'https://www.foxnews.com/tech/hackers-use-pirated-software-to-hijack-mac-android-windows-devices',
		urlToImage:
			'https://static.foxnews.com/foxnews.com/content/uploads/2024/03/1-How-hackers-are-using-pirated-software-to-hijack-your-Mac.jpg',
		publishedAt: '2024-03-09T14:00:00Z',
		content:
			'Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nPlease enter a valid email address.\r\nBy entering your e… [+9839 chars]',
	},
	{
		source: {
			id: 'ign',
			name: 'IGN',
		},
		author: 'Ryan McCaffrey',
		title: 'The Finals: Season 2 First Look',
		description:
			'Season 2 of The Finals seems to be doing a great job of adding new options across the board, whether it’s tools for each of the classes to use on the battlefield, a unique new map, or a brand new mode.',
		url: 'https://www.ign.com/articles/the-finals-season-2-first-look',
		urlToImage:
			'https://assets-prd.ignimgs.com/2024/03/12/thefinalsseason2-blogroll-1710284141072.jpg?width=1280',
		publishedAt: '2024-03-13T16:00:00Z',
		content:
			'The first major content update for The Finals is imminent with the forthcoming Season 2. This competitive shooter impressed us in our review with how the destructible environments and tools combined … [+6544 chars]',
	},
	{
		source: {
			id: 'cnn',
			name: 'CNN',
		},
		author: 'Sean Lyngaas',
		title:
			'Top US cybersecurity agency hacked and forced to take some systems offline',
		description:
			'A federal agency in charge of cybersecurity discovered it was hacked last month and was forced to take two key computer systems offline, an agency spokesperson and US officials familiar with the incident told CNN.',
		url: 'https://www.cnn.com/2024/03/08/politics/top-us-cybersecurity-agency-cisa-hacked/index.html',
		urlToImage:
			'https://media.cnn.com/api/v1/images/stellar/prod/ap21102523072151.jpg?c=16x9&q=w_800,c_fill',
		publishedAt: '2024-03-09T02:24:51Z',
		content:
			'A federal agency in charge of cybersecurity discovered it was hacked last month and was forced to take two key computer systems offline, an agency spokesperson and US officials familiar with the inci… [+1984 chars]',
	},
	{
		source: {
			id: null,
			name: 'Lawfaremedia.org',
		},
		author: null,
		title: 'On Microsoft, the U.S. Government Must Embrace the Stick',
		description:
			'The latest edition of the Seriously Risky Business cybersecurity newsletter, now on Lawfare.',
		url: 'https://www.lawfaremedia.org/article/on-microsoft-the-u.s.-government-must-embrace-the-stick-ransomware-disruption',
		urlToImage:
			'https://lawfare-assets-new.azureedge.net/assets/images/default-source/article-images/srb-3.22.jpg?sfvrsn=e9e50ae5_5',
		publishedAt: '2024-03-23T17:43:22Z',
		content:
			'Editors Note: This newsletter is part of a collaboration between Lawfare and Risky Business. You can find the full version of the Seriously Risky Business newsletter and previous editions on news.ris… [+13823 chars]',
	},
	{
		source: {
			id: null,
			name: '9to5Mac',
		},
		author: 'Arin Waichulis',
		title:
			'Security Bite: Hackers breach CISA, forcing the agency to take some systems offline',
		description:
			'The Cybersecurity and Infrastructure Security Agency (CISA) says two systems were hacked in February through vulnerabilities in Ivanti products. In response, the agency had to shut down both systems, which reportedly had critical ties to U.S. infrastructure.\n…',
		url: 'https://9to5mac.com/2024/03/10/security-bite-hackers-breach-cisa-forcing-the-agency-to-take-some-systems-offline/',
		urlToImage:
			'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/maxresdefault.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1',
		publishedAt: '2024-03-10T11:30:00Z',
		content:
			'The Cybersecurity and Infrastructure Security Agency (CISA) says two systems were hacked in February through vulnerabilities in Ivanti products. In response, the agency had to shut down both systems,… [+3051 chars]',
	},
	{
		source: {
			id: null,
			name: 'Rock Paper Shotgun',
		},
		author: "Alice O'Connor",
		title:
			'Screenshot Saturday Mondays: Please put grappling hooks in more Soulslikes',
		description:
			"Every weekend, indie devs show off current work on Twitter's #screenshotsaturday tag. And every Monday, I bring you a selection of these snaps and clips. This week, my eye has been caught by the feature every single video game on this green Earth should have …",
		url: 'https://www.rockpapershotgun.com/screenshot-saturday-mondays-please-put-grappling-hooks-in-more-soulslikes',
		urlToImage:
			'https://assetsio.gnwcdn.com/cyber-strike-hub-b.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
		publishedAt: '2024-03-25T13:59:09Z',
		content:
			"Every weekend, indie devs show off current work on Twitter's #screenshotsaturday tag. And every Monday, I bring you a selection of these snaps and clips. This week, my eye has been caught by the feat… [+2729 chars]",
	},
	{
		source: {
			id: null,
			name: 'Windows Central',
		},
		author: 'sendicott47@outlook.com (Sean Endicott)',
		title:
			'"Microsoft’s security culture was inadequate and requires an overhaul" says Cyber Safety Review Board following a "cascade of security failures"',
		description:
			'A Chinese-sponsored hacking group gained access to several U.S. government employee email accounts, and it was preventable, according to the U.S. Cyber Safety Review Board. A scathing report from the board breaks down where Microsoft failed in securing accoun…',
		url: 'https://www.windowscentral.com/microsoft/microsofts-security-culture-was-inadequate-and-requires-an-overhaul-says-cyber-safety-review-board-following-a-cascade-of-security-failures',
		urlToImage:
			'https://cdn.mos.cms.futurecdn.net/oni8s6b9pj4LnuxSJWykDD-1200-80.jpg',
		publishedAt: '2024-04-09T18:47:53Z',
		content:
			'What you need to know\r\n<ul><li>A report by the U.S. Cyber Safety Review Board states that Microsoft could have prevented the Chinese state-sponsored hacking group Storm-0558 from accessing the email … [+4999 chars]',
	},
	{
		source: {
			id: null,
			name: 'Windows Central',
		},
		author: 'Michaelrhoglund@gmail.com (Michael Hoglund)',
		title: "The Finals Season 2 unveiled; it's time to hack your way back in",
		description:
			"The Finals Season 2 has been announced and it's full of new content for players to get their hands on. Come check out the glitchy-awesomeness of what's in store for players on March 14!",
		url: 'https://www.windowscentral.com/gaming/the-finals-season-2-unveiled-its-time-to-hack-your-way-back-in',
		urlToImage:
			'https://cdn.mos.cms.futurecdn.net/8NjznKgSoHT8AeBApvcZHf-1200-80.jpeg',
		publishedAt: '2024-03-11T16:00:03Z',
		content:
			'What we need to know\r\n<ul><li>The Finals Season 2 is launching on March 14. CNS, an in-game group, has hacked the arena.</li><li>All classes are getting new gadgets to play with, whereas Medium playe… [+7189 chars]',
	},
	{
		source: {
			id: null,
			name: 'Windows Central',
		},
		author: 'olivia.powell@futurenet.com (Olivia Powell)',
		title: 'The best free VPNs in 2024',
		description:
			'Protect yourself online without spending a penny with the best free VPNs in 2024',
		url: 'https://www.windowscentral.com/software-apps/the-best-free-vpns-in-year',
		urlToImage:
			'https://cdn.mos.cms.futurecdn.net/H5rfcwdRnTNgKdjJAqL3qD-1200-80.jpg',
		publishedAt: '2024-03-29T00:00:16Z',
		content:
			'When you’re looking for a VPN, you’re going to come across a lot of claims that using a VPN encrypts your internet connections, shields you from potential cyber threats, and unblocks geo-locked conte… [+27456 chars]',
	},
	{
		source: {
			id: null,
			name: 'Schneier.com',
		},
		author: 'Bruce Schneier',
		title: 'US Cyber Safety Review Board on the 2023 Microsoft Exchange Hack',
		description:
			'US Cyber Safety Review Board released a report on the summer 2023 hack of Microsoft Exchange by China. It was a serious attack that\nFrom the executive summary:\nThe Board finds that this intrusion was preventable and should never have occurred. The Board also …',
		url: 'https://www.schneier.com/blog/archives/2024/04/us-cyber-safety-review-board-on-the-2023-microsoft-exchange-hack.html',
		urlToImage: null,
		publishedAt: '2024-04-09T14:00:59Z',
		content:
			'US Cyber Safety Review Board released a report on the summer 2023 hack of Microsoft Exchange by China. It was a serious attack by the Chinese government that accessed the emails of senior U.S. govern… [+2633 chars]',
	},
	{
		source: {
			id: null,
			name: 'Theregister.com',
		},
		author: 'Jessica Lyons',
		title:
			"US government excoriates Microsoft for 'avoidable errors' but keeps paying for its products",
		description:
			'In what other sphere does a bad supplier not feel pain for its foulups?\nAnalysis You might think that when a government supplier fails in one of its key duties it would find itself shunned or at least feel financial pain.…',
		url: 'https://www.theregister.com/2024/04/05/microsoft_government_contracts/',
		urlToImage:
			'https://regmedia.co.uk/2023/11/21/leonardo_ai_uncle_sam_spying.jpg',
		publishedAt: '2024-04-05T14:30:10Z',
		content:
			'Analysis You might think that when a government supplier fails in one of its key duties it would find itself shunned or at least feel financial pain.\r\nBut when that supplier is Microsoft, and the fai… [+5584 chars]',
	},
	{
		source: {
			id: null,
			name: 'Theregister.com',
		},
		author: 'Jessica Lyons',
		title:
			"White House and lawmakers increase pressure on UnitedHealth to ease providers' pain",
		description:
			"US senator calls cyber attack 'inexcusable,' calls for mandatory security rules\nThe Biden administration and US lawmakers are turning up the pressure on UnitedHealth group to ease medical providers' pain after the ransomware attack on Change Healthcare, by ex…",
		url: 'https://www.theregister.com/2024/03/12/white_house_pressures_unitedhealth/',
		urlToImage:
			'https://regmedia.co.uk/2016/03/09/shutterstock_emergency_docs.jpg',
		publishedAt: '2024-03-12T00:02:09Z',
		content:
			"The Biden administration and US lawmakers are turning up the pressure on UnitedHealth group to ease medical providers' pain after the ransomware attack on Change Healthcare, by expediting payments to… [+4658 chars]",
	},
	{
		source: {
			id: null,
			name: 'Theregister.com',
		},
		author: 'Brandon Vigliarolo',
		title:
			'Microsoft confirms memory leak in March Windows Server security update',
		description:
			"ALSO: Viasat hack wiper malware is back, users are the number one cause of data loss, and critical vulns\nInfosec in brief If your Windows domain controllers have been crashing since a security update was installed earlier this month, there's no longer any nee…",
		url: 'https://www.theregister.com/2024/03/25/microsoft_confirms_memory_leak_in/',
		urlToImage: 'https://regmedia.co.uk/2017/04/11/security_shutterstock.jpg',
		publishedAt: '2024-03-25T01:15:21Z',
		content:
			"Infosec in brief If your Windows domain controllers have been crashing since a security update was installed earlier this month, there's no longer any need to speculate why: Microsoft has admitted it… [+5062 chars]",
	},
	{
		source: {
			id: null,
			name: 'Quartz India',
		},
		author: 'Britney Nguyen',
		title:
			"Microsoft's 'corporate culture' deprioritized security before China's 'preventable' hack, DHS says",
		description:
			'Microsoft could have prevented Chinese state actors from hacking U.S. government emails last year, a new federal government report found, in an incident it called a “cascade of security failures.”Read more...',
		url: 'https://qz.com/microsoft-china-hack-dhs-report-security-1851383631',
		urlToImage:
			'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/3adb3cf86f478d0f4ca249a6fa64cafa.jpg',
		publishedAt: '2024-04-03T12:16:00Z',
		content:
			'Microsoft could have prevented Chinese state actors from hacking U.S. government emails last year, a new federal government report found, in an incident it called a cascade of security failures.\r\nThe… [+878 chars]',
	},
	{
		source: {
			id: null,
			name: 'Yahoo Entertainment',
		},
		author: 'Ryan Gallagher and Leslie Patton',
		title:
			'Clorox Audit Flagged Systemic Flaws in Cybersecurity at Manufacturing Plants',
		description:
			'(Bloomberg) -- A few years before a 2023 cyberattack disrupted manufacturing at one of the largest US producers of disinfectants ahead of flu season, an...',
		url: 'https://finance.yahoo.com/news/clorox-audit-flagged-systemic-flaws-120956697.html',
		urlToImage:
			'https://s.yimg.com/ny/api/res/1.2/2_ldyiWK.0NPXWjnv8YHsA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_technology_68/d772d1e6af0d17321af92b30b8918462',
		publishedAt: '2024-03-26T12:09:56Z',
		content:
			'(Bloomberg) -- A few years before a 2023 cyberattack disrupted manufacturing at one of the largest US producers of disinfectants ahead of flu season, an audit warned of systemic cybersecurity flaws w… [+15291 chars]',
	},
	{
		source: {
			id: 'al-jazeera-english',
			name: 'Al Jazeera English',
		},
		author: 'Al Jazeera',
		title:
			'US, UK sanction alleged China-based hackers for targeting voters, critics',
		description:
			'The sanctions identify a company and individuals accused of working with the Chinese government to launch cyberattacks.',
		url: 'https://www.aljazeera.com/news/2024/3/25/us-uk-sanction-alleged-china-based-hackers-for-targeting-voters-critics',
		urlToImage:
			'https://www.aljazeera.com/wp-content/uploads/2024/03/AP24085515682660-1-1711392016.jpg?resize=1920%2C1440',
		publishedAt: '2024-03-25T20:11:35Z',
		content:
			'The United States and the United Kingdom have announced sanctions against a Chinese company and two individuals after an alleged cyber-espionage operation targeted millions of people, including legis… [+3570 chars]',
	},
	{
		source: {
			id: null,
			name: 'PCWorld',
		},
		author: 'Brad Chacos',
		title: '5 easy tasks that supercharge your digital security',
		description:
			'Protecting your personal data isn’t just smart these days—it’s a necessity. As the world grows more and more connected, your private info becomes more and more valuable. Whether it’s using leaked info from website breaches to hack into your other accounts or …',
		url: 'https://www.pcworld.com/article/394001/5-simple-tasks-supercharge-digital-security.html',
		urlToImage:
			'https://www.pcworld.com/wp-content/uploads/2024/03/cybersecurity_padlock_on_keyboard_and_circuit_background_by_gocmen_gettyimages-1182849319_2400x1600-100859329-orig-2.jpg?quality=50&strip=all&w=1024',
		publishedAt: '2024-03-29T20:26:43Z',
		content:
			"Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nProtecting your pers… [+7689 chars]",
	},
	{
		source: {
			id: null,
			name: 'MacStories',
		},
		author: 'MacStories Team',
		title:
			'Struggling to Afford Cybersecurity Insurance? Here’s Why. [Sponsor]',
		description:
			'When MGM Resorts suffered a $100 million hack in September, CEO Bill Hornbuckle wasn’t too worried about the lost revenue, because cyber insurance would cover the tab. “I can only imagine what next year’s bill will be,” he joked. Weeks later, on a call with a…',
		url: 'https://www.macstories.net/sponsored/struggling-to-afford-cybersecurity-insurance-heres-why-sponsor/',
		urlToImage: 'https://cdn.macstories.net/image4-1706477415677.png',
		publishedAt: '2024-03-25T12:39:46Z',
		content:
			'When MGM Resorts suffered a $100 million hack in September, CEO Bill Hornbuckle wasn’t too worried about the lost revenue, because cyber insurance would cover the tab. “I can only imagine what next y… [+1735 chars]',
	},
	{
		source: {
			id: 'business-insider',
			name: 'Business Insider',
		},
		author: 'yzhan@insider.com (Yuheng Zhan)',
		title:
			"North Korean hackers are laundering millions worth of crypto through a sanctioned 'mixer'",
		description:
			'North Korea-backed hackers are using a mixer sanctioned by the US to launder funds stolen in a hack last November, Elliptic said.',
		url: 'https://markets.businessinsider.com/news/currencies/crypto-currency-bitcoin-ether-north-korean-hackers-launder-millions-yesterday-2024-3',
		urlToImage:
			'https://i.insider.com/65f35636857f90b71522bb9b?width=1200&format=jpeg',
		publishedAt: '2024-03-15T13:57:01Z',
		content:
			'North Korean-linked cyber hackers have laundered $13 million worth of ether this week through sanctioned crypto mixer Tornado Cash, data from blockchain analytics company Elliptic shows. \r\nNorth Kore… [+1607 chars]',
	},
	{
		source: {
			id: null,
			name: 'The New Republic',
		},
		author: 'Ellie Quinlan Houghtaling',
		title:
			'The Insanely Racist Conspiracy Theory on Baltimore Key Bridge Collapse',
		description:
			'At about 1:40 a.m. EST on Tuesday, a 1,000-foot cargo ship careened past large concrete obstacles ahead of Baltimore’s Francis Scott Key Bridge, colliding with one of its structural pillars and toppling it into the Patapsco River. Mere hours later, conservati…',
		url: 'https://newrepublic.com/post/180134/fox-news-racist-conspiracy-theory-baltimore-key-bridge-collapse',
		urlToImage:
			'https://images.newrepublic.com/03c2cf1159e1b1ff40aace4a21dd19b9332898bc.jpeg?w=1200&h=630&crop=faces&fit=crop&fm=jpg',
		publishedAt: '2024-03-26T15:37:32Z',
		content:
			'But in a bizarre rant on his social media platform last week, the GOP presidential pick admitted that he actually has half a billion dollars in cash, which he decided would be better used to fund his… [+986 chars]',
	},
	{
		source: {
			id: null,
			name: 'The Indian Express',
		},
		author: 'Express News Service',
		title: 'Gujarat confidential: Poll ‘Hack’',
		description:
			'Vande Kamalam, the new office, was inaugurated recently by state party president C. R. Paatil.',
		url: 'https://indianexpress.com/article/cities/ahmedabad/gujarat-confidential-poll-hack-9227494/',
		urlToImage: 'https://images.indianexpress.com/2024/03/GC_49d221.jpg',
		publishedAt: '2024-03-22T03:05:40Z',
		content:
			'Amid the ongoing factional war in Vadodara BJP ahead of the Lok Sabha polls, more embarrassment was in store as the units official Facebook page Thursday appeared to have a timeline full of adult vid… [+719 chars]',
	},
	{
		source: {
			id: 'techradar',
			name: 'TechRadar',
		},
		author: 'benedict.collins@futurenet.com (Benedict Collins)',
		title: 'China blamed for UK voter data hack',
		description:
			"China's access to the Electoral Commission may have been part of a wider plan for electoral interference.",
		url: 'https://www.techradar.com/pro/china-blamed-for-uk-voter-data-hack',
		urlToImage:
			'https://cdn.mos.cms.futurecdn.net/n2u3qWhkEbqXRzD4MJnbgU-1200-80.jpg',
		publishedAt: '2024-03-25T14:41:26Z',
		content:
			'The UK government is set to accuse China of stealing UK voter data in an attack that took place in August 2021.\r\nThe Electoral Commission (EC) suffered a breach after “hostile actors” stole copies of… [+1897 chars]',
	},
	{
		source: {
			id: 'techradar',
			name: 'TechRadar',
		},
		author: 'Haris Pylarinos',
		title: 'Why cyber recruitment needs a rapid overhaul',
		description:
			"Revolutionize cyber recruitment: prioritize practical skills over degrees to bridge industry's talent gap.",
		url: 'https://www.techradar.com/pro/why-cyber-recruitment-needs-a-rapid-overhaul',
		urlToImage:
			'https://cdn.mos.cms.futurecdn.net/S2k99RTyJJhGbDwQRHUsyg-1200-80.jpg',
		publishedAt: '2024-03-18T15:07:05Z',
		content:
			"Few industries face a skills gap quite as severe as cybersecurity. Currently, there's a crippling shortage of over 4 million cybersecurity experts, and cyberattacks are hitting record numbers. For ex… [+4930 chars]",
	},
	{
		source: {
			id: 'techradar',
			name: 'TechRadar',
		},
		author: 'Apu Pavithran',
		title: 'Hackers can now hijack your face. Here’s how to fight back',
		description:
			'How to stop bad actors from spoofing biometric safeguards and hijacking your face.',
		url: 'https://www.techradar.com/pro/hackers-can-now-hijack-your-face-heres-how-to-fight-back',
		urlToImage:
			'https://cdn.mos.cms.futurecdn.net/XUFsAjnAaCahJpBvL5yLYh-1200-80.jpg',
		publishedAt: '2024-04-02T06:46:51Z',
		content:
			'The future of mobile malware is here. For the first time, cybercriminals are infiltrating iOS and Android devices and stealing user face scans. Then, armed with the power of deepfakes and AI, they’re… [+5671 chars]',
	},
	{
		source: {
			id: 'techradar',
			name: 'TechRadar',
		},
		author: 'benedict.collins@futurenet.com (Benedict Collins)',
		title:
			'US Department of Defense claims to have flushed out 50,000 vulnerabilities with bug bounty program',
		description:
			'The bug bounty incentive enhances National Security, and rewards ethical hackers for their work',
		url: 'https://www.techradar.com/pro/us-department-of-defense-claims-to-have-flushed-out-50000-vulnerabilities-with-bug-bounty-program',
		urlToImage:
			'https://cdn.mos.cms.futurecdn.net/qAaWe6UH6JVe5Gc9Y8y5Zd-1200-80.jpg',
		publishedAt: '2024-03-19T14:55:20Z',
		content:
			'The US Department of Defense (DoD) passed the significant milestone of logging more than 50,000 vulnerabilities through its vulnerability disclosure program (VDP).\r\nThe VDP was launched in November 2… [+2028 chars]',
	},
	{
		source: {
			id: null,
			name: 'Forbes',
		},
		author:
			'James Farrell, Forbes Staff, \n James Farrell, Forbes Staff\n https://www.forbes.com/sites/jamesfarrell/',
		title:
			'Department Of Health Investigating UnitedHealth After ‘Unprecedented’ Cyber Attack',
		description:
			'The Department of Health and Human Services will probe what some have called the most significant cyber attack on the U.S. health system.',
		url: 'https://www.forbes.com/sites/jamesfarrell/2024/03/13/department-of-health-investigating-unitedhealth-after-unprecedented-cyber-attack/',
		urlToImage:
			'https://imageio.forbes.com/specials-images/imageserve/65f214527d7482b941166baa/0x0.jpg?format=jpg&crop=3918,2203,x0,y198,safe&height=900&width=1600&fit=bounds',
		publishedAt: '2024-03-13T21:02:59Z',
		content:
			"UnitedHealth Group and its subsidiary Change Healthcare will be investigated by a federal agency over last month's cyber attacks that may have breached patient datathe latest fallout from what the de… [+5029 chars]",
	},
	{
		source: {
			id: null,
			name: 'Forbes',
		},
		author:
			'Geoffrey Mattson, Forbes Councils Member, \n Geoffrey Mattson, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/geoffreymattson/',
		title: 'Key Cyber Learnings Every Company Should Consider This Year',
		description:
			"It's about more than what's been done but what can be improved, innovated and introduced to keep businesses secure in a rapidly evolving digital landscape.",
		url: 'https://www.forbes.com/sites/forbestechcouncil/2024/03/12/key-cyber-learnings-every-company-should-consider-this-year/',
		urlToImage:
			'https://imageio.forbes.com/specials-images/imageserve/65ef690cfb0ee867e93a4881/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
		publishedAt: '2024-03-12T12:15:00Z',
		content:
			"Geoffrey Mattson is the CEO of Xage Security.\r\ngetty\r\nAs we kick off 2024, every organization must pause and assess its cybersecurity posture. It's about more than what's been done but what can be im… [+3800 chars]",
	},
	{
		source: {
			id: null,
			name: 'Forbes',
		},
		author:
			'Webroot Contributor, Brand Contributor, \n Webroot Contributor, Brand Contributor\n https://www.forbes.com/sites/webroot/people/webrootcontributor/',
		title: '7 Cyber Safety Tips To Outsmart Scammers',
		description:
			'Cybercrime isn’t just a futuristic Hollywood plotline, it’s a real threat that targets everyone—from wide-eyed kids to seasoned adults and wise grandparents.',
		url: 'https://www.forbes.com/sites/webroot/2024/03/25/7-cyber-safety-tips-to-outsmart-scammers/',
		urlToImage:
			'https://imageio.forbes.com/specials-images/imageserve/65ea0ea426a7cb96ff0f5cde/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
		publishedAt: '2024-03-25T15:48:40Z',
		content:
			'By Nicole Beaudoin, Marketing Manager\r\nWelcome to the wild west of the digital world where cyber scammers lurk around every pixelated corner. Cybercrime isnt just a futuristic Hollywood plotline, its… [+6338 chars]',
	},
	{
		source: {
			id: null,
			name: 'Forbes',
		},
		author:
			'Dor Eisner, Forbes Councils Member, \n Dor Eisner, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/doreisner/',
		title:
			'Managed Service Providers (MSPs) Have Been Left Out Of The Cyber Insurance Game',
		description:
			'By bolstering proactive risk management and incident response with financial safeguards, small businesses can navigate the ever-changing digital frontier with confidence.',
		url: 'https://www.forbes.com/sites/forbestechcouncil/2024/03/29/managed-service-providers-msps-have-been-left-out-of-the-cyber-insurance-game/',
		urlToImage:
			'https://imageio.forbes.com/specials-images/imageserve/6605a0d49cd27f1f8c25dad5/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
		publishedAt: '2024-03-29T11:30:00Z',
		content:
			'Dor Eisner is the CEO &amp; Co-Founder of Guardz, the company creating a safer digital world for SMEs.\r\ngetty\r\nSmall and medium-sized businesses (SMBs) often lack the resources to fully secure their … [+6390 chars]',
	},
	{
		source: {
			id: null,
			name: 'Forbes',
		},
		author:
			'Skip Sanzeri, Forbes Councils Member, \n Skip Sanzeri, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/skipsanzeri/',
		title: 'Why You Should Care About Cryptographic Agility',
		description:
			'By embracing cryptographic agility, we can build a more secure digital future—one where our data remains protected against even the most determined cybercriminals.',
		url: 'https://www.forbes.com/sites/forbestechcouncil/2024/04/04/why-you-should-care-about-cryptographic-agility/',
		urlToImage:
			'https://imageio.forbes.com/specials-images/imageserve/65384922298eaf24a251b620/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
		publishedAt: '2024-04-04T10:30:00Z',
		content:
			'Skip Sanzeri is the founder, board chair and COO of QuSecure, a top post-quantum cybersecurity company.\r\ngetty\r\ngetty\r\nThere is not a person in the Western world who will not be affected by breaches … [+6314 chars]',
	},
	{
		source: {
			id: null,
			name: 'Forbes',
		},
		author:
			'Thomas Brewster, Forbes Staff, \n Thomas Brewster, Forbes Staff\n https://www.forbes.com/sites/thomasbrewster/',
		title:
			'She Fled Iran And Became An Israeli Spy. Now She’s Raised $30 Million For A Cyber Startup.',
		description:
			'Sanaz Yashar spent 15 years in Israel’s vaunted Unit 8200 intelligence division after immigrating from Iran. Now she’s got billionaires backing her to be cyber’s next big thing.',
		url: 'https://www.forbes.com/sites/thomasbrewster/2024/03/27/she-fled-iran-and-became-an-israeli-spy-now-shes-raised-30-million-for-a-cyber-startup/',
		urlToImage:
			'https://imageio.forbes.com/specials-images/imageserve/66044398e0fa95e3e4b3e4d8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
		publishedAt: '2024-03-28T10:30:00Z',
		content:
			'Sanaz Yashar, CEO of Zafran, spent 15 years working for elite cyber intelligence agency Unit 8200, promoted to officer in 2004.\r\nEric Sultan\r\nS\r\nanaz Yashar was studying biology at Tel Aviv Universit… [+7586 chars]',
	},
	{
		source: {
			id: null,
			name: 'Forbes',
		},
		author:
			'Kevin Rozario, Contributor, \n Kevin Rozario, Contributor\n https://www.forbes.com/sites/kevinrozario/',
		title:
			'Four Lessons From Well Health’s CEO On How AI Can Deliver For Healthcare Retailers',
		description:
			'The listed Canadian company has earmarked 2024 as the year for an AI ramp-up in the rapidly growing healthcare sector.',
		url: 'https://www.forbes.com/sites/kevinrozario/2024/03/31/four-lessons-from-well-healths-ceo-on-how-ai-can-deliver-for-healthcare-retailers/',
		urlToImage:
			'https://imageio.forbes.com/specials-images/imageserve/66095e1474477f97c30040ee/0x0.jpg?format=jpg&crop=2377,1336,x0,y0,safe&height=900&width=1600&fit=bounds',
		publishedAt: '2024-03-31T13:14:05Z',
		content:
			'Telehealth is an increasingly used option in the health marketplace.\r\ngetty\r\nArtificial Intelligence (AI) in global healthcare is growing rapidly. From $20.7 billion in 2023 it is forecast to rise to… [+7460 chars]',
	},
	{
		source: {
			id: null,
			name: 'Forbes',
		},
		author:
			'Levon Gasparian, Forbes Councils Member, \n Levon Gasparian, Forbes Councils Member\n https://www.forbes.com/sites/forbesbusinesscouncil/people/levongasparian/',
		title:
			'Cybersecurity Risks For Commercial Fleets: How Companies Can Prepare',
		description:
			"Cybersecurity isn't just important for a business's office computers; it's vital for a business's commercial vehicles as well.",
		url: 'https://www.forbes.com/sites/forbesbusinesscouncil/2024/03/27/cybersecurity-risks-for-commercial-fleets-how-companies-can-prepare/',
		urlToImage:
			'https://imageio.forbes.com/specials-images/imageserve/6602d547d319a487523cb9f5/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
		publishedAt: '2024-03-27T11:45:00Z',
		content:
			"Levon Gasparian is CEO of Infopay, a data technology company, &amp; founder of IDStrong, an identity monitoring &amp; protection service provider.\r\ngetty\r\nA vehicle's cybersecurity might be top of mi… [+5452 chars]",
	},
	{
		source: {
			id: null,
			name: 'Forbes',
		},
		author:
			'Davey Winder, Senior Contributor, \n Davey Winder, Senior Contributor\n https://www.forbes.com/sites/daveywinder/',
		title:
			'Exclusive: Critical Security Flaws In Email Top 4—Apple, Gmail, Outlook & Yahoo',
		description:
			'Exclusive: Security researchers have discovered major security flaws in email services from Apple, Gmail, Outlook, and Yahoo, leaving millions of users vulnerable to attack.',
		url: 'https://www.forbes.com/sites/daveywinder/2024/04/04/critical-security-flaw-in-apple-icloud-google-gmail-microsoft-outlook-yahoo-mail-aol-mail-email/',
		urlToImage:
			'https://imageio.forbes.com/specials-images/imageserve/660d53836f492975932658c5/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
		publishedAt: '2024-04-04T10:00:00Z',
		content:
			'Significant security shortcomings in major email services impact millions\r\nSquareX\r\nSecurity researchers from SquareX have discovered what they describe as critical flaws in the attachment scanning p… [+7657 chars]',
	},
	{
		source: {
			id: null,
			name: 'Longreads.com',
		},
		author: 'Chris Wheatley',
		title: 'Digital Havoc: A Reading List About Hacking',
		description:
			'Behind the 1s and 0s, hackers are still people—and their motivations are more nuanced than you might think.',
		url: 'http://longreads.com/2024/03/12/hacking-reading-list-digital-havoc/',
		urlToImage:
			'https://i0.wp.com/longreads.com/wp-content/uploads/2024/03/Hacking-RL-final.jpg?fit=2400%2C1400&ssl=1',
		publishedAt: '2024-03-12T10:00:00Z',
		content:
			'Its 1983. The original Mario Bros. video game is released. Michael Jacksons Thriller reaches the top of the Billboard album chart. And in the hit film WarGames, a teenage Matthew Broderick breaches t… [+14631 chars]',
	},
	{
		source: {
			id: null,
			name: 'PC Gamer',
		},
		author: 'Andy Edser',
		title:
			"US Gov report slams Microsoft over email hack—'The Board finds that this intrusion was preventable and should never have occurred'",
		description:
			'The Cyber Safety Review Board has released its assessment of last years Microsoft security breach, and it makes for uncomfortable reading.',
		url: 'https://www.pcgamer.com/software/security/us-gov-report-slams-microsoft-over-email-hackthe-board-finds-that-this-intrusion-was-preventable-and-should-never-have-occurred/',
		urlToImage:
			'https://cdn.mos.cms.futurecdn.net/kc77wf7a29YuNrdx6Ugct9-1200-80.jpg',
		publishedAt: '2024-04-04T11:06:21Z',
		content:
			'Last year, Microsoft disclosed that a Chinese hacking group referred to as "Storm-0558" was responsible for a security breach that led to the access of the email accounts of around 25 organisations, … [+3993 chars]',
	},
	{
		source: {
			id: null,
			name: 'Live Science',
		},
		author: 'Nicholas Fearn',
		title:
			"'White hat hackers' carjacked a Tesla using cheap, legal hardware — exposing major security flaws in the vehicle",
		description:
			"Security researchers used a $169 Flipper Zero device and a Wi-Fi development board to obtain a driver's credentials, break into a Tesla Model 3 and drive away.",
		url: 'https://www.livescience.com/technology/electric-vehicles/white-hat-hackers-carjacked-a-tesla-using-cheap-legal-hardware-exposing-major-security-flaws-in-the-vehicle',
		urlToImage:
			'https://cdn.mos.cms.futurecdn.net/QguUx3roCvUfEgKkL83HkN-1200-80.jpg',
		publishedAt: '2024-03-23T12:00:11Z',
		content:
			'Digital keys have become a common and convenient way of unlocking electric vehicles (EVs) — but security researchers have demonstrated how criminals can take advantage of this.\r\nCybersecurity researc… [+4851 chars]',
	},
	{
		source: {
			id: null,
			name: 'CoinDesk',
		},
		author: 'Daniel Kuhn',
		title: 'The Munchables Hack Is Way Worse Than It Seems',
		description:
			'Apparently orchestrated from North Korea, the $63 million hack adds grist to the argument that crypto exploits pose a plausible national security risk.',
		url: 'https://www.coindesk.com/consensus-magazine/2024/03/27/the-munchables-hack-is-way-worse-than-it-seems/',
		urlToImage:
			'https://www.coindesk.com/resizer/aqsU3RElmzhtPqE8ClYJdjK8xas=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/75MMOXLMHRBN7NJAF4Y43QW6CQ.png',
		publishedAt: '2024-03-27T17:47:07Z',
		content:
			'On Tuesday, March 26, Ethereum-based NFT-based GameFi project Munchables reported a hack that drained over 17,400 ETH (roughly $63 million) from its coffers. Within five hours of investigation, it be… [+6294 chars]',
	},
	{
		source: {
			id: null,
			name: 'TechSpot',
		},
		author: 'Rob Thubron',
		title:
			'Government review criticizes Microsoft for security lapses in "preventable" Exchange Online hack',
		description:
			"The Exchange Online hack that took place last May is believed to have been linked to a China-affiliated threat actor known as Storm-0558 stealing an Azure signing key in late 2021 from an engineer's compromised laptop that came into Microsoft's possession aft…",
		url: 'https://www.techspot.com/news/102500-government-review-criticizes-microsoft-security-lapses-preventable-exchange.html',
		urlToImage:
			'https://www.techspot.com/images2/news/bigimage/2021/03/2021-03-13-image.jpg',
		publishedAt: '2024-04-04T11:59:00Z',
		content:
			'What just happened? A government review of the attack on Microsoft\'s Exchange Online hosted email service by a China-linked group has blasted the Redmond company for allowing a "cascade of security f… [+3059 chars]',
	},
	{
		source: {
			id: 'cbc-news',
			name: 'CBC News',
		},
		author: null,
		title:
			'Patients affected by southwestern Ontario hospital cyber attack to be notified next week',
		description:
			'Hundreds of thousands of letters will be in the mail next week, notifying patients who had their information stolen by cyber criminals in a ransomware attack that hit five southwestern Ontario hospitals last October.',
		url: 'https://www.cbc.ca/news/canada/windsor/mail-hospital-notified-affected-patients-1.7162269',
		urlToImage:
			'https://i.cbc.ca/1.6047043.1712160805!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/community-mailboxes.jpg',
		publishedAt: '2024-04-03T16:29:50Z',
		content:
			'Hundreds of thousands of letters will be in the mail next week, notifying patients who had their information stolen by cyber criminals in a ransomware attack which hit five southwestern Ontario hospi… [+2783 chars]',
	},
	{
		source: {
			id: 'nbc-news',
			name: 'NBC News',
		},
		author: 'The Associated Press',
		title:
			'Scathing federal report rips Microsoft for shoddy security, insincerity in response to Chinese hack',
		description:
			'A Biden administration-appointed review board issued a report Tuesday saying “a cascade of errors” by Microsoft let state-backed Chinese cyber operators break into email accounts of senior U.S. officials including Commerce Secretary Gina Raimondo.',
		url: 'https://www.nbcnews.com/tech/security/scathing-federal-report-rips-microsoft-shoddy-security-insincerity-res-rcna146177',
		urlToImage:
			'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-03/240308-microsoft-ch-1548-945e78.jpg',
		publishedAt: '2024-04-03T13:14:22Z',
		content:
			'In a scathing indictment of Microsoft corporate security and transparency, a Biden administration-appointed review board issued a report Tuesday saying a cascade of errors by the tech giant let state… [+3969 chars]',
	},
	{
		source: {
			id: null,
			name: 'Infosecurity Magazine',
		},
		author: 'Kevin  Poireault',
		title: "UK Blames China for 2021 Hack Targeting Millions of Voters' Data",
		description:
			'The UK’s NCSC assesses that China-backed APT31 was “almost certainly” responsible for hacking the email accounts of UK parliamentarians',
		url: 'https://www.infosecurity-magazine.com/news/uk-blames-china-for-2021-electoral/',
		urlToImage:
			'https://assets.infosecurity-magazine.com/webpage/og/ff7953a7-6266-45d7-9658-5aea557363b4.jpg',
		publishedAt: '2024-03-25T15:50:00Z',
		content:
			'The UK government has called out China state-affiliated threat actors for carrying out hacking campaigns against UK institutions and political figures in 2021.\r\nThe House of Commons was briefed on Ma… [+7396 chars]',
	},
	{
		source: {
			id: null,
			name: 'Infosecurity Magazine',
		},
		author: 'Kevin  Poireault',
		title: 'Chinese Hackers Target ASEAN Entities in Espionage Campaign',
		description:
			'Palo Alto Networks’ Unit 42 observed two Chinese-affiliated APT groups recently conducting cyber espionage campaigns targeting ASEAN organizations',
		url: 'https://www.infosecurity-magazine.com/news/chinese-apt-asean-entities/',
		urlToImage:
			'https://assets.infosecurity-magazine.com/webpage/og/73cde04e-0a51-40aa-b5ac-bc6bc327180a.jpg',
		publishedAt: '2024-03-27T11:00:00Z',
		content:
			'Two Chinese advanced persistent threat (APT) groups have been conducting cyber espionage campaigns targeting entities in countries affiliated with the Association of Southeast Asian Nations (ASEAN) o… [+2427 chars]',
	},
	{
		source: {
			id: null,
			name: 'Infosecurity Magazine',
		},
		author: 'Kevin  Poireault',
		title:
			'Over 50,000 Vulnerabilities Discovered in DoD Systems Through Bug Bounty Program',
		description:
			'Seven years into its ethical hacking program, the Pentagon received its 50,000th vulnerability report on March 15',
		url: 'https://www.infosecurity-magazine.com/news/50000-vulnerabilities-discovered/',
		urlToImage:
			'https://assets.infosecurity-magazine.com/webpage/og/1fcfb05f-ab56-47ff-bc6f-56134ae46cf2.jpg',
		publishedAt: '2024-03-18T15:00:00Z',
		content:
			'Over 50,000 vulnerabilities have been submitted to the US Department of Defense (DoD) through its vulnerability disclosure program (VDP).\r\nThe DoD Cyber Crime Center (DC3) reported on March 15, 2024,… [+1888 chars]',
	},
	{
		source: {
			id: null,
			name: 'Infosecurity Magazine',
		},
		author: 'Alessandro  Mascellino',
		title: 'AT&T Confirms 73 Million Customer Data Breach Linked to Dark Web',
		description:
			'The telecommunications giant said that the published dataset comprises information from 2019 or earlier',
		url: 'https://www.infosecurity-magazine.com/news/atandt-confirms-73m-customer-data/',
		urlToImage:
			'https://assets.infosecurity-magazine.com/webpage/og/0524b724-79b0-48d6-920b-3e8385f593cc.jpeg',
		publishedAt: '2024-04-02T16:30:00Z',
		content:
			'AT&amp;T has acknowledged the authenticity of a dataset containing the details of 73 million current and former customers after a hacker advertised it on a dark web marketplace around March 17.Writin… [+2489 chars]',
	},
	{
		source: {
			id: null,
			name: 'Infosecurity Magazine',
		},
		author: 'Kevin  Poireault',
		title:
			'French Employment Agency Data Breach Could Affect 43 Million People',
		description:
			'France’s employment agency suffered a massive breach, exposing the data of users who registered over the past 20 years',
		url: 'https://www.infosecurity-magazine.com/news/french-employment-agency-data/',
		urlToImage:
			'https://assets.infosecurity-magazine.com/webpage/og/08a1048b-77f2-495e-902b-5072b29dbed4.jpg',
		publishedAt: '2024-03-14T15:00:00Z',
		content:
			'France’s Employment Agency has suffered a data breach that could affect users who registered over the past 20 years, representing 43 million potential users’ data exposed.\r\nFrance Travail, the French… [+4754 chars]',
	},
	{
		source: {
			id: null,
			name: 'A16z.com',
		},
		author: 'dharris',
		title: 'America Needs More Techno-Optimism',
		description:
			'In this fireside chat from the American Dynamism Summit, a16z Cofounder and General Partner Marc Andreessen sits down with economist, podcaster, and polymath Tyler Cowen to discuss the state of innovation in America, from recent AI advances to growing support…',
		url: 'http://a16z.com/america-needs-more-techno-optimism/',
		urlToImage:
			'https://a16z.com/wp-content/uploads/2024/03/AD-Summit-24-Hub-Marc-Tyler.png',
		publishedAt: '2024-03-13T14:10:44Z',
		content:
			'In this fireside chat from the American Dynamism Summit, a16z Cofounder and General Partner Marc Andreessen sits down with economist, podcaster, and polymath Tyler Cowen to discuss the state of innov… [+35900 chars]',
	},
	{
		source: {
			id: 'rt',
			name: 'RT',
		},
		author: 'RT',
		title: 'China reacts to UK cyber sanctions',
		description:
			'Beijing has denounced “disinformation” by the US and the “Five Eyes” countries about alleged Chinese hacker attacks Read Full Article at RT.com',
		url: 'https://www.rt.com/news/594954-china-reacts-uk-sanctions-hacking/',
		urlToImage:
			'https://mf.b37mrtl.ru/files/2024.03/article/6602f9772030271b0b1e5acd.jpg',
		publishedAt: '2024-03-26T18:14:54Z',
		content:
			'British claims about the alleged hacking of the UK Electoral Commission are false and groundless, the Chinese government said on Tuesday, responding to the announcement of sanctions against two of it… [+2078 chars]',
	},
	{
		source: {
			id: null,
			name: 'PR Daily',
		},
		author: 'Sean Devlin',
		title:
			'The Scoop: Microsoft had ‘cascade of errors’ that led to hack, government says',
		description:
			'Plus: Yahoo acquires Artifact AI news tool; Iowa-LSU game shatters sports betting record. A series of major mistakes was dubbed “a cascade of errors” which led to a Chinese hack of Microsoft, according to a U.S. government review. CNN reports that the infiltr…',
		url: 'https://www.prdaily.com/the-scoop-microsoft-yahoo-artifact-college-basketball/',
		urlToImage:
			'https://s39940.pcdn.co/wp-content/uploads/2024/04/iStock-917844370.jpg',
		publishedAt: '2024-04-03T15:18:46Z',
		content:
			'A series of major mistakes was dubbed a cascade of errors which led to a Chinese hack of Microsoft, according to a U.S. government review. CNN reports that the infiltration included a breach of the t… [+5761 chars]',
	},
	{
		source: {
			id: null,
			name: '[Removed]',
		},
		author: null,
		title: '[Removed]',
		description: '[Removed]',
		url: 'https://removed.com',
		urlToImage: null,
		publishedAt: '1970-01-01T00:00:00Z',
		content: '[Removed]',
	},
	{
		source: {
			id: null,
			name: '[Removed]',
		},
		author: null,
		title: '[Removed]',
		description: '[Removed]',
		url: 'https://removed.com',
		urlToImage: null,
		publishedAt: '1970-01-01T00:00:00Z',
		content: '[Removed]',
	},
	{
		source: {
			id: null,
			name: '[Removed]',
		},
		author: null,
		title: '[Removed]',
		description: '[Removed]',
		url: 'https://removed.com',
		urlToImage: null,
		publishedAt: '1970-01-01T00:00:00Z',
		content: '[Removed]',
	},
	{
		source: {
			id: null,
			name: 'AOL',
		},
		author: 'Reuters',
		title:
			'SEC ramps up hack probe with focus on tech, telecom companies, Bloomberg News says',
		description:
			'The hack of information technology company SolarWinds, one of the broadest and most sophisticated cyber attacks in the United States, was identified in...',
		url: 'https://www.aol.com/news/sec-ramps-hack-probe-focus-212200832.html',
		urlToImage:
			'https://media.zenfs.com/en/aol_reuters_29/f995f39a056d4e7a41babe1cf504ee75',
		publishedAt: '2024-03-26T21:22:00Z',
		content:
			'(Reuters) - The U.S. Securities and Exchange Commission is asking technology and telecom companies how they handled the SolarWinds cyber attack in 2020, Bloomberg News reported on Tuesday, citing peo… [+1061 chars]',
	},
	{
		source: {
			id: 'cnn',
			name: 'CNN',
		},
		author: 'Krystal Hur',
		title:
			'Dow drops 500 points, continuing Wall Street’s rough streak ahead of jobs report',
		description:
			'Stocks tumbled on Thursday, reversing earlier gains mid-afternoon ahead of the latest jobs report due Friday.',
		url: 'https://www.cnn.com/2024/04/04/investing/premarket-stocks-trading-oil-fed/index.html',
		urlToImage:
			'https://media.cnn.com/api/v1/images/stellar/prod/ap24083442614115.jpg?c=16x9&q=w_800,c_fill',
		publishedAt: '2024-04-04T20:06:28Z',
		content:
			'A version of this story first appeared in CNN Business Before the Bell newsletter. Not a subscriber? You can sign up right here. You can listen to an audio version of the newsletter by clicking the s… [+7076 chars]',
	},
	{
		source: {
			id: null,
			name: 'UPI.com',
		},
		author: 'Paul Godfrey',
		title:
			'Britain blames China for cyberattacks on election commission, politicians',
		description:
			'British Deputy Prime Minister Oliver Dowden will tell MPs on Monday that entities linked to the Chinese government were behind the alleged accessing of the...',
		url: 'https://www.upi.com/Top_News/World-News/2024/03/25/government-china-behind-election-commission-cyberattack/9581711365817/',
		urlToImage:
			'https://media.zenfs.com/en/united_press_international_articles_356/3d89991874c9d020bdb7eeeb0134002e',
		publishedAt: '2024-03-25T20:57:51Z',
		content:
			'March 25 (UPI) -- British Deputy Prime Minister Oliver Dowden told MPs on Monday that entities linked to the Chinese government were behind the alleged accessing of the personal details of 40 million… [+4353 chars]',
	},
	{
		source: {
			id: 'abc-news-au',
			name: 'ABC News (AU)',
		},
		author: 'ABC News',
		title:
			'China accused of orchestrating cyber-espionage campaign affecting millions',
		description:
			'US and British officials have filed charges, imposed sanctions, and called out Beijing over a sweeping cyber-espionage campaign that allegedly hit millions of people and Foreign Minister Penny Wong has described as "malicious" and "unacceptable".',
		url: 'https://www.abc.net.au/news/2024-03-26/chinese-cyber-hacking-accusations-from-us-uk-beijing-denies/103631980',
		urlToImage:
			'https://live-production.wcms.abc-cdn.net.au/a816934584fe94661f1df8c844852a8f?impolicy=wcms_watermark_news&cropH=2813&cropW=5000&xPos=0&yPos=0&width=862&height=485&imformat=generic',
		publishedAt: '2024-03-25T20:28:34Z',
		content:
			'<ul><li>In short: The US and UK say China is behind a worldwide cyber-espionage campaign that has affected millions of people.</li><li>Foreign Minister Penny Wong says Australia was not affected by t… [+5115 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'Pentagon established the Office of the Assistant Secretary of Defense for Cyber Policy',
		description:
			'The US government announced establishing the Office of the Assistant Secretary of Defense for Cyber Policy. The US Defense Department announced establishing the Office of the Assistant Secretary of Defense for Cyber Policy (ASD(CP)) as directed in the Nationa…',
		url: 'https://securityaffairs.com/161276/cyber-warfare-2/pentagon-established-office-assistant-secretary-defense-cyber-policy.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2012/07/Pentagon.jpg',
		publishedAt: '2024-04-01T11:25:02Z',
		content:
			'Pentagon established the Office of the Assistant Secretary of Defense for Cyber Policy\r\n | Info stealer attacks target macOS users\r\n | Security Affairs newsletter Round 465 by Pierluigi Paganini INTE… [+56966 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'Ukraine cyber police arrested crooks selling 100 million compromised accounts',
		description:
			'Ukraine cyber police, along with the national police, arrested three hackers attempting to sell 100 million compromised emails and Instagram accounts. The Ukraine cyber police and the national police have arrested three individuals who are suspected to have h…',
		url: 'https://securityaffairs.com/160748/cyber-crime/ukraine-cyber-police-account-hacking.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2024/03/ukraine-cyber-police.png',
		publishedAt: '2024-03-19T21:25:53Z',
		content:
			"Ukraine cyber police arrested crooks selling 100 million compromised accounts\r\n | New AcidPour wiper targets Linux x86 devices. Is it a Russia's weapon?\r\n | Players hacked during the matches of Apex … [+54241 chars]",
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title: 'First-ever South Korean national detained for espionage in Russia',
		description:
			'Russian authorities have detained a South Korean national on cyber espionage charges, it is the first time for a Korean citizen. Russian authorities have arrested a South Korean citizen on charges of cyber espionage, marking the first instance involving a Kor…',
		url: 'https://securityaffairs.com/160396/breaking-news/russia-arrested-south-korean-national.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2016/12/Consular-Department-of-the-Embassy-of-the-Russian-Federation.jpg',
		publishedAt: '2024-03-12T08:50:15Z',
		content:
			'First-ever South Korean national detained for espionage in Russia\r\n | Insurance scams via QR codes: how to recognise and defend yourself\r\n | Massive cyberattacks hit French government agencies\r\n | Bi… [+52259 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'Acer Philippines disclosed a data breach after a third-party vendor hack',
		description:
			'Acer Philippines disclosed a data breach after employee data was leaked by a threat actor on a hacking forum. Acer Philippines confirmed that employee data was compromised in an attack targeting a third-party service provider. Acer Inc. is a Taiwanese multina…',
		url: 'https://securityaffairs.com/160432/data-breach/acer-philippines-data-breach.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2024/03/image-18.png',
		publishedAt: '2024-03-13T11:54:15Z',
		content:
			'Acer Philippines disclosed a data breach after a third-party vendor hack\r\n | Stanford University announced that 27,000 individuals were impacted in the 2023 ransomware attack\r\n | Microsoft Patch Tues… [+52622 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title: 'Pwn2Own Vancouver 2024 Day 1 – team Synacktiv hacked a Tesla',
		description:
			'Participants earned $732,500 on the first day of the Pwn2Own Vancouver 2024 hacking competition, a team demonstrated a Tesla hack. Participants earned $732,000 on the first day of the Pwn2Own Vancouver 2024 hacking competition for demonstrating 19 unique zero…',
		url: 'https://securityaffairs.com/160870/hacking/pwn2own-vancouver-2024-day-1.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2024/03/pwn2own-vancouver-2024-tesla-hack.jpeg',
		publishedAt: '2024-03-21T18:36:25Z',
		content:
			'Pwn2Own Vancouver 2024 Day 1 - team Synacktiv hacked a Tesla\r\n | New Loop DoS attack may target 300,000 vulnerable hosts\r\n | Critical flaw in Atlassian Bamboo Data Center and Server must be fixed imm… [+54634 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'Russia’s Foreign Intelligence Service (SVR) alleges US is plotting to interfere in presidential election',
		description:
			'Russia’s Foreign Intelligence Service (SVR) claims that the US intelligence plans to interfere with its presidential election. Russia’s Foreign Intelligence Service (SVR) alleges that the US is plotting to interfere in its upcoming presidential election sched…',
		url: 'https://securityaffairs.com/160405/intelligence/russia-svr-warns-interference-presidential-elections.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2013/01/Kremlin.jpg',
		publishedAt: '2024-03-12T14:51:53Z',
		content:
			"Russia's Foreign Intelligence Service (SVR) alleges US is plotting to interfere in presidential election\r\n | First-ever South Korean national detained for espionage in Russia\r\n | Insurance scams via … [+52368 chars]",
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'Google agreed to erase billions of browser records to settle a class action lawsuit',
		description:
			'Google is going to delete data records related to the ‘Incognito Mode’ browsing activity to settle a class action lawsuit. Google has agreed to delete billions of data records related to users’ browsing activities in ‘Incognito Mode’ to settle a class action …',
		url: 'https://securityaffairs.com/161384/laws-and-regulations/google-delete-incognito-mode-browsing-activity.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2021/08/google-logo.png',
		publishedAt: '2024-04-02T11:18:29Z',
		content:
			'Google agreed to erase billions of browser records to settle a class action lawsuit\r\n | PandaBuy data breach allegedly impacted over 1.3 million customers\r\n | OWASP discloses a data breach\r\n | New Vu… [+57248 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'XSS flaw in WordPress WP-Members Plugin can lead to script injection',
		description:
			'A cross-site scripting vulnerability (XXS) in the WordPress WP-Members Membership plugin can lead to malicious script injection. Researchers from Defiant’s Wordfence research team disclosed a cross-site scripting vulnerability (XXS) in the WordPress WP-Member…',
		url: 'https://securityaffairs.com/161407/hacking/wordpress-wp-members-plugin-xss.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2024/04/image-2.png',
		publishedAt: '2024-04-02T18:59:56Z',
		content:
			'XSS flaw in WordPress WP-Members Plugin can lead to script injection\r\n | Binarly released the free online scanner to detect the CVE-2024-3094 Backdoor\r\n | Google agreed to erase billions of browser r… [+57403 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title: 'Ivanti fixed for 4 new issues in Connect Secure and Policy Secure',
		description:
			'Ivanti addressed four flaws impacting Connect Secure and Policy Secure Gateways that could lead to code execution and denial-of-service (DoS) condition. Ivanti has released security updates to address four security flaws impacting Connect Secure and Policy Se…',
		url: 'https://securityaffairs.com/161465/security/ivanti-code-execution-dos-flaws.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2023/07/Ivanti-logo.png',
		publishedAt: '2024-04-04T08:10:19Z',
		content:
			'Ivanti fixed for 4 new issues in Connect Secure and Policy Secure\r\n | Jackson County, Missouri, discloses a ransomware attack\r\n | Google addressed another Chrome zero-day exploited at Pwn2Own in Marc… [+57851 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'Over 92,000 Internet-facing D-Link NAS devices can be easily hacked',
		description:
			'A researcher disclosed an arbitrary command injection and hardcoded backdoor issue in multiple end-of-life D-Link NAS models. A researcher who goes online with the moniker ‘Netsecfish’ disclosed a new arbitrary command injection and hardcoded backdoor flaw, t…',
		url: 'https://securityaffairs.com/161549/hacking/d-link-nas-flaw.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2024/04/D-Link.png',
		publishedAt: '2024-04-07T08:21:04Z',
		content:
			'Over 92,000 Internet-facing D-Link NAS devices can be easily hacked\r\n | More than 16,000 Ivanti VPN gateways still vulnerable to RCE CVE-2024-21894\r\n | Cisco warns of XSS flaw in end-of-life small bu… [+58351 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title: 'Over 91,000 LG smart TVs running webOS are vulnerable to hacking',
		description:
			'Researchers found multiple vulnerabilities in LG webOS running on smart TVs that could allow attackers to gain root access to the devices. Bitdefender researchers discovered multiple vulnerabilities in LG webOS running on smart TVs that could be exploited to …',
		url: 'https://securityaffairs.com/161651/hacking/lg-smart-tvs-vulnerable.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2024/04/LG-smart-TV.png',
		publishedAt: '2024-04-09T18:28:39Z',
		content:
			'Over 91,000 LG smart TVs running webOS are vulnerable to hacking\r\n | ScrubCrypt used to drop VenomRAT along with many malicious plugins\r\n | Google announces V8 Sandbox to protect Chrome users\r\n | Chi… [+58920 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title: 'OWASP discloses a data breach',
		description:
			'The OWASP Foundation disclosed a data breach that impacted some members due to a misconfiguration of an old Wiki web server. The OWASP Foundation has disclosed a data breach that impacted some of its members. The OWASP (Open Web Application Security Project) …',
		url: 'https://securityaffairs.com/161371/data-breach/owasp-data-breach.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2023/08/image-8.png',
		publishedAt: '2024-04-01T21:41:46Z',
		content:
			'OWASP discloses a data breach\r\n | New Vultur malware version includes enhanced remote control and evasion capabilities\r\n | Pentagon established the Office of the Assistant Secretary of Defense for Cy… [+57089 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'Google addressed another Chrome zero-day exploited at Pwn2Own in March',
		description:
			'Google fixed another Chrome zero-day vulnerability exploited during the Pwn2Own hacking competition in March. Google has addressed another zero-day vulnerability in the Chrome browser, tracked as CVE-2024-3159, that was exploited during the Pwn2Own hacking co…',
		url: 'https://securityaffairs.com/161445/uncategorized/google-chrome-zero-day-pwn2own.html',
		urlToImage: null,
		publishedAt: '2024-04-03T21:13:58Z',
		content:
			'Google addressed another Chrome zero-day exploited at Pwn2Own in March\r\n | The New Version of JsOutProx is Attacking Financial Institutions in APAC and MENA via Gitlab Abuse\r\n | Google fixed two acti… [+57721 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'Security Affairs newsletter Round 466 by Pierluigi Paganini – INTERNATIONAL EDITION',
		description:
			'A new round of the weekly SecurityAffairs newsletter arrived! Every week the best security articles from Security Affairs are free for you in your email box. Enjoy a new round of the weekly SecurityAffairs newsletter, including the international press. More t…',
		url: 'https://securityaffairs.com/161558/breaking-news/security-affairs-newsletter-round-466-by-pierluigi-paganini-international-edition.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2015/03/newsletter.png',
		publishedAt: '2024-04-07T22:43:05Z',
		content:
			'Security Affairs newsletter Round 466 by Pierluigi Paganini INTERNATIONAL EDITION\r\n | Over 92,000 Internet-facing D-Link NAS devices can be easily hacked\r\n | More than 16,000 Ivanti VPN gateways stil… [+58437 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title: 'Cisco warns of XSS flaw in end-of-life small business routers',
		description:
			'Cisco warns customers of Small Business RV016, RV042, RV042G, RV082, RV320, and RV325 Routers Cross-Site scripting flaw. Cisco warns of a Small Business RV016, RV042, RV042G, RV082, RV320, and RV325 routers Cross-Site scripting (XSS) flaw. The medium severity…',
		url: 'https://securityaffairs.com/161540/security/cisco-eof-routers-xss.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2014/07/cisco-building.jpg',
		publishedAt: '2024-04-06T08:22:10Z',
		content:
			'Cisco warns of XSS flaw in end-of-life small business routers\r\n | Magento flaw exploited to deploy persistent backdoor hidden in XML\r\n | Cyberattack disrupted services at Omni Hotels &amp; Resorts\r\n … [+58199 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title: 'Google fixed two actively exploited Pixel vulnerabilities',
		description:
			'Google addressed several vulnerabilities in Android and Pixel devices, including two actively exploited flaws. Google addressed 28 vulnerabilities in Android and 25 flaws in Pixel devices. Two issues fixed by the IT giant, tracked as CVE-2024-29745 and CVE-20…',
		url: 'https://securityaffairs.com/161428/security/google-fixed-actively-exploited-pixel-flaws.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2022/02/Android-security.png',
		publishedAt: '2024-04-03T13:16:05Z',
		content:
			'Google fixed two actively exploited Pixel vulnerabilities\r\n | Highly sensitive files mysteriously disappeared from EUROPOL headquarters\r\n | XSS flaw in WordPress WP-Members Plugin can lead to script … [+57543 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'Google addressed another Chrome zero-day exploited at Pwn2Own in March',
		description:
			'Google fixed another Chrome zero-day vulnerability exploited during the Pwn2Own hacking competition in March. Google has addressed another zero-day vulnerability in the Chrome browser, tracked as CVE-2024-3159, that was exploited during the Pwn2Own hacking co…',
		url: 'https://securityaffairs.com/161445/hacking/google-chrome-zero-day-pwn2own.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2016/03/google-chrome-bounty-program.jpg',
		publishedAt: '2024-04-03T21:13:58Z',
		content:
			'Google addressed another Chrome zero-day exploited at Pwn2Own in March\r\n | The New Version of JsOutProx is Attacking Financial Institutions in APAC and MENA via Gitlab Abuse\r\n | Google fixed two acti… [+57721 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'Binarly released the free online scanner to detect the CVE-2024-3094 Backdoor',
		description:
			'Researchers from the firmware security firm Binarly released a free online scanner to detect the CVE-2024-3094 Backdoor Last week, Microsoft engineer Andres Freund discovered a backdoor issue in the latest versions of the “xz” tools and libraries. The vulnera…',
		url: 'https://securityaffairs.com/161396/security/cve-2024-3094-backdoor-scanner.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2024/04/CVE-2024-3094-Backdoor-scanner.png',
		publishedAt: '2024-04-02T17:42:03Z',
		content:
			'Binarly released the free online scanner to detect the CVE-2024-3094 Backdoor\r\n | Google agreed to erase billions of browser records to settle a class action lawsuit\r\n | PandaBuy data breach allegedl… [+57330 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'The New Version of JsOutProx is Attacking Financial Institutions in APAC and MENA via Gitlab Abuse',
		description:
			'Resecurity researchers warn that a new Version of JsOutProx is targeting financial institutions in APAC and MENA via Gitlab abuse. Resecurity has detected a new version of JSOutProx, which is targeting financial services and organizations in the APAC and MENA…',
		url: 'https://securityaffairs.com/161438/malware/new-jsoutprox-attacking-financial-institutions-apac-mena.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2024/04/signal-2024-04-03-170646.jpeg',
		publishedAt: '2024-04-03T16:47:27Z',
		content:
			'The New Version of JsOutProx is Attacking Financial Institutions in APAC and MENA via Gitlab Abuse\r\n | Google fixed two actively exploited Pixel vulnerabilities\r\n | Highly sensitive files mysteriousl… [+57646 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'More than 16,000 Ivanti VPN gateways still vulnerable to RCE CVE-2024-21894',
		description:
			'Experts warn of roughly 16,500 Ivanti Connect Secure and Poly Secure gateways still vulnerable to a remote code execution (RCE) flaw. Shadowserver researchers reported that roughly 16,500 Ivanti Connect Secure and Poly Secure gateways are vulnerable to the re…',
		url: 'https://securityaffairs.com/161544/security/ivanti-16500-vulnerable-istances.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2023/07/Ivanti-logo.png',
		publishedAt: '2024-04-06T16:54:53Z',
		content:
			'More than 16,000 Ivanti VPN gateways still vulnerable to RCE CVE-2024-21894\r\n | Cisco warns of XSS flaw in end-of-life small business routers\r\n | Magento flaw exploited to deploy persistent backdoor … [+58279 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'Greylock McKinnon Associates data breach exposed DOJ data of 341650 people',
		description:
			'Greylock McKinnon Associates, a service provider for the Department of Justice, suffered a data breach that exposed data of 341650 people. Greylock McKinnon Associates (GMA) provides expert economic analysis and litigation support to a diverse group of domest…',
		url: 'https://securityaffairs.com/161592/data-breach/greylock-mckinnon-associates-data-breach.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2012/04/data-breach.jpg',
		publishedAt: '2024-04-08T20:54:03Z',
		content:
			'Greylock McKinnon Associates data breach exposed DOJ data of 341650 people\r\n | Crowdfense is offering a larger 30M USD exploit acquisition program\r\n | U.S. Department of Health warns of attacks again… [+58657 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title: 'ScrubCrypt used to drop VenomRAT along with many malicious plugins',
		description:
			'Researchers discovered a sophisticated multi-stage attack that leverages ScrubCrypt to drop VenomRAT along with many malicious plugins. Fortinet researchers observed a threat actor sending out a phishing email containing malicious Scalable Vector Graphics (SV…',
		url: 'https://securityaffairs.com/161639/cyber-crime/scrubcrypt-venomrat-plugins.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2024/04/phishing-campaign.png',
		publishedAt: '2024-04-09T16:40:47Z',
		content:
			'ScrubCrypt used to drop VenomRAT along with many malicious plugins\r\n | Google announces V8 Sandbox to protect Chrome users\r\n | China is using generative AI to carry out influence operations\r\n | Greyl… [+58851 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'Highly sensitive files mysteriously disappeared from EUROPOL headquarters',
		description:
			'Serious security breach hits EU police agency A batch of highly sensitive files containing the personal information of top Europol executives mysteriously disappeared last summer The website Politico reported that the Europol has suffered a serious security b…',
		url: 'https://securityaffairs.com/161416/data-breach/europol-highly-sensitive-files-disappeared.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2016/11/europol-terrorism-data-leak.jpg',
		publishedAt: '2024-04-03T07:09:16Z',
		content:
			'Highly sensitive files mysteriously disappeared from EUROPOL headquarters\r\n | XSS flaw in WordPress WP-Members Plugin can lead to script injection\r\n | Binarly released the free online scanner to dete… [+57481 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'Crowdfense is offering a larger 30M USD exploit acquisition program',
		description:
			'Zero-day broker firm Crowdfense announced a 30 million USD offer as part of its Exploit Acquisition Program. Crowdfense is a world-leading research hub and acquisition platform focused on high-quality zero-day exploits and advanced vulnerability research. In …',
		url: 'https://securityaffairs.com/161584/hacking/crowdfense-30m-exploit-acquisition-program.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2024/04/image-5.png',
		publishedAt: '2024-04-08T18:20:12Z',
		content:
			'Crowdfense is offering a larger 30M USD exploit acquisition program\r\n | U.S. Department of Health warns of attacks against IT help desks\r\n | Security Affairs newsletter Round 466 by Pierluigi Paganin… [+58578 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title: 'Expert found a backdoor in XZ tools used many Linux distributions',
		description:
			'Red Hat warns of a backdoor in XZ Utils data compression tools and libraries in Fedora development and experimental versions. Red Hat urges users to immediately stop using systems running Fedora development and experimental versions because of a backdoor in t…',
		url: 'https://securityaffairs.com/161224/malware/backdoor-xz-tools-linux-distros.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2015/11/Linux-ransomware-encoder1.jpg',
		publishedAt: '2024-03-30T19:50:31Z',
		content:
			'Expert found a backdoor in XZ tools used many Linux distributions\r\n | German BSI warns of 17,000 unpatched Microsoft Exchange servers\r\n | Cisco warns of password-spraying attacks targeting Secure Fir… [+56620 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title: 'Finnish police linked APT31 to the 2021 parliament attack',
		description:
			'The Finnish Police attributed the attack against the parliament that occurred in March 2021 to the China-linked group APT31. The Finnish Police attributed the March 2021 attack on the parliament to the China-linked group APT31. The Finnish authorities investi…',
		url: 'https://securityaffairs.com/161102/apt/finnish-police-linked-apt31-to-the-2021-parliament-attack.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2014/07/Chinese-hackers-espionage.jpg',
		publishedAt: '2024-03-27T06:35:19Z',
		content:
			'Finnish police linked APT31 to the 2021 parliament attack\r\n | TheMoon bot infected 40,000 devices in January and February\r\n | UK, New Zealand against China-linked cyber operations\r\n | US Treasury Dep… [+55950 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title: 'Google addressed 2 Chrome zero-days demonstrated at Pwn2Own 2024',
		description:
			'Google addressed two zero-day vulnerabilities in the Chrome web browser that have been demonstrated during the Pwn2Own Vancouver 2024. Google addressed several vulnerabilities in the Chrome web browser this week, including two zero-day vulnerabilities, tracke…',
		url: 'https://securityaffairs.com/161151/security/google-chrome-zero-days-pwn2own-2024.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2016/03/google-chrome-bounty-program.jpg',
		publishedAt: '2024-03-28T00:38:06Z',
		content:
			'Google addressed 2 Chrome zero-days demonstrated at Pwn2Own 2024\r\n | CISA adds Microsoft SharePoint bug disclosed at Pwn2Own to its Known Exploited Vulnerabilities catalog\r\n | The DDR Advantage: Real… [+56172 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title: 'Info stealer attacks target macOS users',
		description:
			'Experts warn of info stealer malware, including Atomic Stealer, targeting Apple macOS users via malicious ads and rogue websites. Jamf Threat Labs researchers analyzed info stealer malware attacks targeting macOS users via malicious ads and rogue websites. On…',
		url: 'https://securityaffairs.com/161287/malware/info-stealer-malware-macos.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2024/03/image-28.png',
		publishedAt: '2024-04-01T09:01:06Z',
		content:
			'Info stealer attacks target macOS users\r\n | Security Affairs newsletter Round 465 by Pierluigi Paganini INTERNATIONAL EDITION\r\n | DinodasRAT Linux variant targets users worldwide\r\n | AT&amp;T confirm… [+56875 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'Cisco warns of password-spraying attacks targeting Secure Firewall devices',
		description:
			'Cisco warns customers of password-spraying attacks that have been targeting Remote Access VPN (RAVPN) services of Cisco Secure Firewall devices. Cisco is warning customers of password-spraying attacks that have been targeting Remote Access VPN (RAVPN) service…',
		url: 'https://securityaffairs.com/161205/hacking/cisco-warns-password-spraying-attacks.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2014/07/cisco-building.jpg',
		publishedAt: '2024-03-29T12:34:50Z',
		content:
			'Cisco warns of password-spraying attacks targeting Secure Firewall devices\r\n | American fast-fashion firm Hot Topic hit by credential stuffing attacks\r\n | Cisco addressed high-severity flaws in IOS a… [+56482 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title: 'DinodasRAT Linux variant targets users worldwide',
		description:
			'A Linux variant of the DinodasRAT backdoor used in attacks against users in China, Taiwan, Turkey, and Uzbekistan, researchers from Kaspersky warn. Researchers from Kaspersky uncovered a Linux version of a multi-platform backdoor DinodasRAT that was employed …',
		url: 'https://securityaffairs.com/161255/malware/linux-variant-dinodasrat-backdoor.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2024/03/image-27.png',
		publishedAt: '2024-03-31T14:52:25Z',
		content:
			'DinodasRAT Linux variant targets users worldwide\r\n | AT&amp;T confirmed that a data breach impacted 73 million customers\r\n | Expert found a backdoor in XZ tools used many Linux distributions\r\n | Germ… [+56745 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'Security Affairs newsletter Round 465 by Pierluigi Paganini – INTERNATIONAL EDITION',
		description:
			'A new round of the weekly SecurityAffairs newsletter arrived! Every week the best security articles from Security Affairs are free for you in your email box. Enjoy a new round of the weekly SecurityAffairs newsletter, including the international press. Expert…',
		url: 'https://securityaffairs.com/161269/breaking-news/security-affairs-newsletter-round-465-by-pierluigi-paganini-international-edition.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2015/03/newsletter.png',
		publishedAt: '2024-03-31T17:24:52Z',
		content:
			'Security Affairs newsletter Round 465 by Pierluigi Paganini INTERNATIONAL EDITION\r\n | DinodasRAT Linux variant targets users worldwide\r\n | AT&amp;T confirmed that a data breach impacted 73 million cu… [+56831 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'CISA adds Microsoft SharePoint bug disclosed at Pwn2Own to its Known Exploited Vulnerabilities catalog',
		description:
			'U.S. Cybersecurity and Infrastructure Security Agency (CISA) adds a Microsoft SharePoint vulnerability disclosed at the 2023 Pwn2Own to its Known Exploited Vulnerabilities catalog. The U.S. Cybersecurity and Infrastructure Security Agency (CISA) added the CVE…',
		url: 'https://securityaffairs.com/161134/security/cisa-microsoft-sharepoint-known-exploited-vulnerabilities-catalog.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2020/07/CISA.jpeg',
		publishedAt: '2024-03-27T15:11:58Z',
		content:
			'CISA adds Microsoft SharePoint bug disclosed at Pwn2Own to its Known Exploited Vulnerabilities catalog\r\n | The DDR Advantage: Real-Time Data Defense\r\n | Finnish police linked APT31 to the 2021 parlia… [+56103 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'American fast-fashion firm Hot Topic hit by credential stuffing attacks',
		description:
			'Hot Topic suffered credential stuffing attacks that exposed customers’ personal information and partial payment data. Hot Topic, Inc. is an American fast-fashion company specializing in counterculture-related clothing and accessories, as well as licensed musi…',
		url: 'https://securityaffairs.com/161192/data-breach/hot-topic-suffered-credential-stuffing-attacks.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2022/01/credential-stuffing-attacks.jpg',
		publishedAt: '2024-03-29T08:48:45Z',
		content:
			'American fast-fashion firm Hot Topic hit by credential stuffing attacks\r\n | Cisco addressed high-severity flaws in IOS and IOS XE software\r\n | Google: China dominates government exploitation of zero-… [+56403 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'INC Ransom stole 3TB of data from the National Health Service (NHS) of Scotland',
		description:
			'The INC Ransom extortion group hacked the National Health Service (NHS) of Scotland and is threatening to leak three terabytes of alleged stolen data. The INC Ransom extortion gang added the National Health Service (NHS) of Scotland to the list of victims on …',
		url: 'https://securityaffairs.com/161143/data-breach/inc-ransom-hacked-national-health-service-of-scotland.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2024/03/National-Health-Service-NHS-of-Scotland.png',
		publishedAt: '2024-03-27T20:33:02Z',
		content:
			'CISA adds Microsoft SharePoint bug disclosed at Pwn2Own to its Known Exploited Vulnerabilities catalog\r\n | The DDR Advantage: Real-Time Data Defense\r\n | Finnish police linked APT31 to the 2021 parlia… [+56103 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title: 'Cisco addressed high-severity flaws in IOS and IOS XE software',
		description:
			'Cisco addressed multiple vulnerabilities in IOS and IOS XE software that can be exploited to trigger a denial-of-service (DoS) condition. Cisco this week released patches to address multiple IOS and IOS XE software vulnerabilities. An unauthenticated attacker…',
		url: 'https://securityaffairs.com/161181/security/cisco-ios-and-ios-xe-software-flaws.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2014/07/cisco-building.jpg',
		publishedAt: '2024-03-28T18:49:51Z',
		content:
			'Cisco addressed high-severity flaws in IOS and IOS XE software\r\n | Google: China dominates government exploitation of zero-day vulnerabilities in 2023\r\n | Google addressed 2 Chrome zero-days demonstr… [+56327 chars]',
	},
	{
		source: {
			id: null,
			name: 'Securityaffairs.com',
		},
		author: 'Pierluigi Paganini',
		title:
			'Critical Fortinet’s FortiClient EMS flaw actively exploited in the wild',
		description:
			'Researchers released a PoC exploit for a critical flaw in Fortinet’s FortiClient Enterprise Management Server (EMS) software, which is actively exploited. Security researchers at Horizon3 have released a proof-of-concept (PoC) exploit for a critical vulnerabi…',
		url: 'https://securityaffairs.com/160885/hacking/fortinet-forticlient-ems-critical-flaw.html',
		urlToImage:
			'https://securityaffairs.com/wp-content/uploads/2019/11/fortinet-logo.jpg',
		publishedAt: '2024-03-21T21:42:57Z',
		content:
			'German police seized the darknet marketplace Nemesis Market\r\n | Unsaflok flaws allow to open millions of doors using Dormakaba Saflok electronic locks\r\n | Pwn2Own Vancouver 2024: participants earned … [+54945 chars]',
	},
];

export default News;
