<script>
  import { ScrollText } from '@lucide/svelte';
  import { reveal } from './reveal.js';
  import SectionHeading from './SectionHeading.svelte';

  // Every entry links to the publisher record, so a reader can verify or cite
  // without downloading the PDF. Author order is as published.
  const publications = [
    {
      year: 2026,
      title:
        'Drive to grow: Spatial frictions and struggles in a Chinese Ride-hailing platform\u2019s scale-making',
      authors: '<strong>Xing, J. L.</strong>, &amp; Zhang, J.',
      venue: 'Global Media and China, 20594364261456948',
      url: 'https://journals.sagepub.com/doi/10.1177/20594364261456948'
    },
    {
      year: 2026,
      title: 'Rethinking AI from the mobile end: An assemblage-centered lens',
      authors: '<strong>Xing, J. L.</strong>',
      venue: 'Mobile Media &amp; Communication, 20501579261458249',
      url: 'https://journals.sagepub.com/doi/10.1177/20501579261458249'
    },
    {
      year: 2026,
      title:
        'Patchwork surveillance and accountability labor: China\u2019s Health Code Systems during COVID-19',
      authors: '<strong>Xing, J. L.</strong>, &amp; Zheng, E. L.',
      venue: 'Big Data &amp; Society, 13(1)',
      url: 'https://journals.sagepub.com/doi/10.1177/20539517261419359'
    },
    {
      year: 2026,
      title:
        'Mythology of wealth in the platform economy: The case of the ride-hailing platform Didi in China',
      authors: '<strong>Xing, J. L.</strong>, Zhang, J., &amp; Santos, G.',
      venue: 'Science, Technology, &amp; Human Values',
      url: 'https://journals.sagepub.com/doi/abs/10.1177/01622439251398910'
    },
    {
      year: 2025,
      title:
        'Towards a processual approach to the infrastructuralization of digital platforms: The case of WeChat',
      authors: 'Zhang, J., &amp; <strong>Xing, J. L.</strong>',
      venue: 'Chinese Journal of Communication, 0(0), 1\u201318',
      url: 'https://www.tandfonline.com/doi/full/10.1080/17544750.2025.2517254'
    },
    {
      year: 2025,
      title:
        'A processual approach to skill changes in digital automation: The case of the platform economy in the service sector',
      authors: '<strong>Xing, J. L.</strong>, &amp; Sharif, N.',
      venue: 'Research Policy, 54(4): 105190',
      url: 'https://www.sciencedirect.com/science/article/pii/S0048733325000198'
    },
    {
      year: 2022,
      title:
        'Driving as communities: Chinese taxi drivers\u2019 technology, job, and mobility choices under the pressure of e-hailing',
      authors: '<strong>Xing, J. L.</strong>',
      venue: 'Mobilities, 17(5): 676\u2013694',
      url: 'https://www.tandfonline.com/doi/abs/10.1080/17450101.2022.2114844'
    },
    {
      year: 2020,
      title: 'From creative destruction to creative appropriation: A comprehensive framework',
      authors: '<strong>Xing, J. L.</strong>, &amp; Sharif, N.',
      venue: 'Research Policy, 49(7): 104060',
      url: 'https://www.sciencedirect.com/science/article/abs/pii/S0048733320301384'
    }
  ];

  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);
  const byYear = (year) => publications.filter((p) => p.year === year);
</script>

<section id="publications" class="py-14 md:py-16 border-t border-border scroll-mt-20">
  <div class="max-w-3xl mx-auto px-6">
    <SectionHeading icon={ScrollText} title="Publications" />

    <div class="space-y-7">
      {#each years as year (year)}
        <div use:reveal>
          <h3 class="text-lg font-serif-display font-semibold text-primary mb-3">{year}</h3>
          <ul class="space-y-3.5">
            {#each byYear(year) as pub (pub.title)}
              <li>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block text-body font-medium text-foreground leading-snug hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  {pub.title}
                </a>
                <p class="text-body-sm text-muted-foreground mt-1">{@html pub.authors}</p>
                <p class="text-body-sm text-muted-foreground italic">{@html pub.venue}</p>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>
