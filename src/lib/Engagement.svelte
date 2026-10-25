<script>
  import { Globe, Languages } from '@lucide/svelte';
  import { reveal } from './reveal.js';

  const englishMedia = [
    { year: 2026, title: "China's great jobs squeeze", outlet: 'The Financial Times', type: 'Interview', url: 'https://as.ft.com/r/ba98c720-9c73-4482-a101-8d7329b55809' },
    { year: 2026, title: "Chinese tech hub's shift into robotaxis leaves drivers by the wayside", outlet: 'The Financial Times', type: 'Interview', url: 'https://www.ft.com/content/b1445598-e5e3-4530-9e82-e0155c44106b?accessToken=zwAAAZ-3glvckdOxRFWY5eNFMNOeguAVXEQQaw.MEQCIBI0XyKzCAOtzjIA-ytrstYb4f04yuXlqiyrQ6ex8fJ2AiAtNu7vsyDeqSELwrB9NX5OyLj8oe2ZQsGuQVMTA8f7sA&segmentId=e95a9ae7-622c-6235-5f87-51e412b47e97&shareId=897ddab0-608c-4d81-8312-c08dfcb78854&shareType=enterprise&syn-25a6b1a6=1' },
    { year: 2026, title: 'Balancing AI Pains and Gains', outlet: 'The Wire China', type: 'Interview', url: 'https://www.thewirechina.com/2026/06/07/balancing-ai-pains-and-gains/' },
    { year: 2026, title: '\u201cIt feels like Squid Game\u201d: China\u2019s workers scramble to keep up in the AI race', outlet: 'Rest of World', type: 'Interview', url: 'https://restofworld.org/2026/china-ai-anxiety-openclaw-jobs-redundancy/' },
    { year: 2023, title: 'Taxi versus Didi', outlet: 'Konfuzius Institut', url: 'https://issuu.com/konfuziusinstitut/docs/2023-01_ki-magazin' },
    { year: 2022, title: 'Why do some taxi drivers in China turn down e-hailing?', outlet: 'MoLab Inventory of Mobilities and Socioeconomic Changes', url: 'https://www.eth.mpg.de/6106025/why_do_some_taxi_drivers_in_China_turn_down_e-hailing' },
    { year: 2021, title: 'Tracing apps and digital divide (Part 1)', outlet: 'Technology of Things', url: 'https://mmea.hku.hk/tracing-apps-and-digital-divide-1-different-technological-designs/' },
    { year: 2021, title: 'Tracing apps and digital divide (Part 2)', outlet: 'Technology of Things', url: 'https://mmea.hku.hk/tracing-apps-and-digital-divide-2-path-dependency-and-unintended-consequences-in-technology-design/' },
    { year: 2021, title: 'Tracing apps and digital divide (Part 3)', outlet: 'Technology of Things', url: 'https://mmea.hku.hk/tracing-apps-and-digital-divide-3-supplementary-measures-user-involvement-and-the-ethical-responsibility-of-designers/' },
    { year: 2021, title: 'Health QR code: Technological and/or social infrastructure about pandemic control and privacy', outlet: 'Technology of Things', url: 'https://mmea.hku.hk/health-qr-code-technological-and-or-social-infrastructure-about-pandemic-control-and-privacy/' },
    { year: 2021, title: 'Facial recognition: Surveillance with "artificial" intelligence', outlet: 'Technology of Things', url: 'https://mmea.hku.hk/facial-recognition-surveillance-with-artificial-intelligence/' },
    { year: 2020, title: 'The "Caring Class" behind the "Grid Reaction" against Coronavirus', outlet: 'Oxford COMPAS', url: 'https://www.compas.ox.ac.uk/2020/the-caring-class-behind-the-grid-reaction-against-coronavirus/' },
    { year: 2020, title: 'Hive box: Controversies over automation, privatization, and negotiability', outlet: 'Technology of Things', url: 'https://mmea.hku.hk/hive-box-controversies-over-automation-privatization-and-negotiability/' },
    { year: 2020, title: 'Food delivery platform: Service quality, algorithm, infrastructure, and people', outlet: 'Technology of Things', url: 'https://mmea.hku.hk/food-delivery-platforms-service-quality-algorithm-infrastructure-and-people/' }
  ];

  const chineseMedia = [
    { year: 2025, title: '技术创新背后的劳动变迁 (Labor Transformation behind Technological Innovation)', outlet: '信睿周报 (TheThinker Weekly)', url: 'https://mp.weixin.qq.com/s/USg1rESJu4MdVm1OWWQqcw' },
    { year: 2025, title: '平台经济从何处来，往何处去? (Where Does the Platform Economy Come From, and Where Is It Going?)', outlet: '信睿周报 (TheThinker Weekly)', url: 'https://mp.weixin.qq.com/s/t899a93AWaXVBTiSB1Df6g' },
    { year: 2023, title: '严肃谈一下"工作不断贬值"这个问题 (A Serious Discussion on the Devaluation of Work)', outlet: '地球知识局 (Bureau of Knowledge about the Earth)', url: 'https://mp.weixin.qq.com/s/hU7sIdJMjXlH2iQl3u_QEA' }
  ];
</script>

{#snippet mediaList(items)}
  <ul class="space-y-4">
    {#each items as item, i (i)}
      <li use:reveal={{ delay: i * 40 }} class="flex gap-3 items-start">
        <span class="text-xs font-mono text-muted-foreground pt-1 shrink-0 w-10">[{item.year}]</span>
        <p class="text-body leading-relaxed text-foreground/80">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary hover:text-primary/70 transition-colors duration-200 underline decoration-primary/30 underline-offset-2 hover:decoration-primary/60"
          >
            {item.title}
          </a>
          {#if item.type}
            <span class="ml-1.5 text-xs font-medium text-primary/80">({item.type})</span>
          {/if}
          <span class="text-muted-foreground"> — {item.outlet}</span>
        </p>
      </li>
    {/each}
  </ul>
{/snippet}

<section id="engagement" class="py-20 md:py-24 border-t border-border scroll-mt-20">
  <div class="max-w-3xl mx-auto px-6">
    <div use:reveal>
      <h2 class="text-2xl md:text-3xl font-serif-display font-semibold text-foreground mb-2">Engagement</h2>
      <div class="w-12 h-px bg-primary/40 mb-10"></div>
    </div>

    <div use:reveal={{ delay: 50 }} class="mb-12">
      <div class="flex items-center gap-2.5 mb-5">
        <Globe size={18} class="text-primary shrink-0" />
        <h3 class="font-serif-display font-semibold text-foreground text-lg">English Media</h3>
      </div>
      {@render mediaList(englishMedia)}
    </div>

    <div use:reveal={{ delay: 100 }}>
      <div class="flex items-center gap-2.5 mb-5">
        <Languages size={18} class="text-primary shrink-0" />
        <h3 class="font-serif-display font-semibold text-foreground text-lg">Chinese Media</h3>
      </div>
      {@render mediaList(chineseMedia)}
    </div>
  </div>
</section>
