<script>
  import { Newspaper } from '@lucide/svelte';
  import { reveal } from './reveal.js';
  import SectionHeading from './SectionHeading.svelte';

  const L = 'text-primary hover:text-primary/70 underline underline-offset-2';
  const a = (href, text) =>
    `<a href="${href}" target="_blank" rel="noopener noreferrer" class="${L}">${text}</a>`;

  // Authored static content — every string below is written by the site owner,
  // so it is rendered verbatim rather than escaped.
  const newsItems = [
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

<section id="news" class="py-14 md:py-16 border-t border-border scroll-mt-20">
  <div class="max-w-3xl mx-auto px-6">
    <SectionHeading icon={Newspaper} title="News" />

    <ul class="space-y-4">
      {#each newsItems as item, i (i)}
        <li use:reveal={{ delay: i * 60 }} class="flex gap-4 items-start">
          <Newspaper size={16} class="text-primary shrink-0 mt-1" />
          <div>
            <span class="text-xs font-mono-data font-bold text-foreground">{item.date}</span>
            <p class="text-body text-foreground/80 leading-relaxed mt-0.5">{@html item.html}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>
