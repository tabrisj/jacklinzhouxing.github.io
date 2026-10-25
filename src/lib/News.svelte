<script>
  import { Newspaper } from '@lucide/svelte';
  import { reveal } from './reveal.js';

  const L = 'text-primary hover:text-primary/70 underline underline-offset-2';
  const a = (href, text) =>
    `<a href="${href}" target="_blank" rel="noopener noreferrer" class="${L}">${text}</a>`;

  // Authored static content — every string below is written by the site owner,
  // so it is rendered verbatim rather than escaped.
  const newsItems = [
    {
      date: 'August 12, 2026',
      html: `Interviewed by Will Langley in <em>The Financial Times</em> article: ${a(
        'https://as.ft.com/r/ba98c720-9c73-4482-a101-8d7329b55809',
        'China&rsquo;s great jobs squeeze'
      )}.`
    },
    {
      date: 'June 28, 2026',
      html: `Interviewed by Will Langley in <em>The Financial Times</em> article: ${a(
        'https://www.ft.com/content/b1445598-e5e3-4530-9e82-e0155c44106b?accessToken=zwAAAZ9jkqcQkdOxRFWY5eNFMNOeguAVXEQQaw.MEUCIQCJaMZjWnuNimCe_VkdsLoMZd0fcQJc8GsM-gEqL-7KqAIgBNIrFb1f9aW9I5trHPhZgo4dkJF2KaYfTuQ7K7iiY8k&segmentId=e95a9ae7-622c-6235-5f87-51e412b47e97&shareId=897ddab0-608c-4d81-8312-c08dfcb78854&shareType=enterprise&syn-25a6b1a6=1',
        'Chinese tech hub&rsquo;s shift into robotaxis leaves drivers by the wayside'
      )}.`
    },
    {
      date: 'June 7, 2026',
      html: `Interviewed by Rachel Cheung in <em>The Wire China</em> article: ${a(
        'https://www.thewirechina.com/2026/06/07/balancing-ai-pains-and-gains/',
        'Balancing AI Pains and Gains'
      )}.`
    },
    {
      date: 'May 8, 2026',
      html: 'Chaired the <em>Digital Statecraft and Political Economy in China</em> conference at University of California, Berkeley.'
    },
    {
      date: 'May 1, 2026',
      html: 'Presented at the Fairbank Center for Chinese Studies/Asia Society Center on U.S.-China Policy Symposium, Harvard University.'
    },
    {
      date: 'April 29, 2026',
      html: `Presented &ldquo;Ride or die: Deadline infrastructure and overwork in platform economies&rdquo; at the ${a(
        'https://indl-na.sciencesconf.org/',
        'International Network of Digital Labor- North America Symposium on Labor and Artificial Intelligence'
      )}, Yale University.`
    },
    {
      date: 'April 3, 2026',
      html: 'Co-authored paper &ldquo;Mediated Platform Governance: The Transformative Role of Labor Mediators in the Platform Economy&rdquo; was honored as a <strong>Best Paper</strong> for the 86th Annual Meeting of the Academy of Management (AOM).'
    },
    {
      date: 'March 20, 2026',
      html: `Organized the panel &ldquo;Theorizing STS from China and beyond: Disciplinary development, epistemic exploration, and sociopolitical positioning&rdquo; at the upcoming ${a(
        'https://www.4sonline.org/meeting.php',
        'Society for Social Studies of Science Annual Conference 2026'
      )}. Abstract deadline: April 30, 2026. See the ${a(
        'https://docs.google.com/document/d/1pipYgSPOuNoQflyb-iwbPTNPMRLnit3n/edit?usp=sharing&ouid=100719509504817851767&rtpof=true&sd=true',
        'CFP'
      )}.`
    },
    {
      date: 'March 19, 2026',
      html: `Interviewed by Kinling Lo in the <em>Rest of World</em> article: ${a(
        'https://restofworld.org/2026/china-ai-anxiety-openclaw-jobs-redundancy/',
        '&lsquo;It feels like Squid Game&rsquo;: China&rsquo;s workers scramble to keep up in the AI race'
      )}.`
    },
    {
      date: 'March 13, 2026',
      html: `Organized the ${a(
        'https://fairbank.fas.harvard.edu/events/technology-and-society-in-through-global-china-new-reflections-new-visions/',
        '&lsquo;Technology and Society in/through Global China&rsquo; Workshop'
      )} at Harvard University.`
    },
    {
      date: 'March 4, 2026',
      html: 'Gave a guest lecture titled &ldquo;How to build a platform in China?&rdquo; for the course &ldquo;Contemporary Chinese Society&rdquo; at Harvard University.'
    },
    {
      date: 'January 23, 2026',
      html: 'Gave an invited talk &ldquo;Riding with the State: Didi and the Precarious Symbiosis between State and Platforms in China&rdquo; at the 2026 Southeastern Conference for Association for Asian Studies (AAS).'
    },
    {
      date: 'November 13, 2025',
      html: 'Gave a guest lecture titled &ldquo;Three principles of studying platforms elsewhere&rdquo; for the course &ldquo;Theorizing digital capitalism&rdquo; at Harvard University.'
    },
    {
      date: 'October 1, 2025',
      html: 'Gave a guest lecture titled &ldquo;The platform economy and future of work&rdquo; for the course &ldquo;Technology and Society&rdquo; at Northeastern University.'
    }
  ];
</script>

<section id="news" class="py-20 border-t border-border">
  <div class="max-w-3xl mx-auto px-6">
    <div use:reveal>
      <h2 class="text-2xl md:text-3xl font-serif-display font-semibold text-foreground mb-2">News</h2>
      <div class="w-12 h-px bg-primary/40 mb-10"></div>
    </div>

    <ul class="space-y-6">
      {#each newsItems as item, i (item.date)}
        <li use:reveal={{ delay: i * 60 }} class="flex gap-4 items-start">
          <Newspaper size={16} class="text-primary shrink-0 mt-1" />
          <div>
            <span class="text-xs font-mono-data font-bold text-foreground">{item.date}</span>
            <p class="text-[15px] text-foreground/80 leading-relaxed mt-0.5">{@html item.html}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>
