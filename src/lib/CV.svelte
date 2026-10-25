<script>
  import { Download, Briefcase, GraduationCap, Award } from '@lucide/svelte';
  import { reveal } from './reveal.js';

  const CV_URL = '/Xing_CV.pdf';

  const employment = [
    'Assistant Professor, Division of Public Policy, Hong Kong University of Science and Technology',
    'An Wang Postdoctoral Fellow, Fairbank Center for Chinese Studies, Harvard University'
  ];

  const education = [
    'PhD, Sociology, Georgia Institute of Technology, 2025 (Graduate Certificate in Public Policy)',
    'MPhil, Science & Technology Studies, The University of Hong Kong, 2019',
    'MA, Social Science, Hong Kong University of Science and Technology, 2017',
    'BBA (Acc & Fin), The University of Hong Kong, 2016'
  ];

  const service = [
    'Book Review Editor, East Asian Science, Technology and Society: An International Journal (2026\u20132028)'
  ];

  const awards = [
    '(Co-I) HK RGC General Research Fund (Ref.: 11600724): An Ethnographic, Processual Study of Platformized Lives: WeChat in China as a Case Study',
    'Kranzberg / Lesson Smith Fellowship, Georgia Institute of Technology',
    'Ivan Allen College Travel and Fieldwork Grant, Georgia Institute of Technology'
  ];
</script>

<section id="cv" class="py-20 md:py-24 border-t border-border bg-muted/20 scroll-mt-20">
  <div class="max-w-6xl mx-auto px-6">
    <div use:reveal>
      <h2 class="text-2xl md:text-3xl font-serif-display font-semibold text-foreground mb-2">Curriculum Vitae</h2>
      <div class="w-12 h-px bg-primary/40 mb-8"></div>
    </div>

    <div use:reveal={{ delay: 50 }} class="mb-10">
      <a
        href={CV_URL}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2.5 px-6 py-3 rounded-sm bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-sm"
      >
        <Download size={16} />
        Download Full CV (PDF)
      </a>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div use:reveal={{ delay: 100 }} class="lg:col-span-2 space-y-0">
        <div class="rounded-sm border border-border bg-background p-6 shadow-sm">
          <div class="mb-5">
            <div class="flex items-center gap-2.5 mb-3">
              <Briefcase size={18} class="text-primary shrink-0" />
              <h3 class="font-serif-display font-semibold text-foreground text-base">Employment</h3>
            </div>
            <ul class="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {#each employment as line}
                <li class="flex gap-2">
                  <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0"></span>
                  <span>{line}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="h-px bg-border my-5"></div>

          <div class="mb-5">
            <div class="flex items-center gap-2.5 mb-3">
              <GraduationCap size={18} class="text-primary shrink-0" />
              <h3 class="font-serif-display font-semibold text-foreground text-base">Education</h3>
            </div>
            <ul class="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {#each education as line}
                <li class="flex gap-2">
                  <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0"></span>
                  <span>{line}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="h-px bg-border my-5"></div>

          <div class="mb-5">
            <div class="flex items-center gap-2.5 mb-3">
              <Briefcase size={18} class="text-primary shrink-0" />
              <h3 class="font-serif-display font-semibold text-foreground text-base">Professional Service</h3>
            </div>
            <ul class="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {#each service as line}
                <li class="flex gap-2">
                  <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0"></span>
                  <span>{line}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="h-px bg-border my-5"></div>

          <div>
            <div class="flex items-center gap-2.5 mb-3">
              <Award size={18} class="text-primary shrink-0" />
              <h3 class="font-serif-display font-semibold text-foreground text-base">Selected Awards</h3>
            </div>
            <ul class="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {#each awards as line}
                <li class="flex gap-2">
                  <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0"></span>
                  <span>{line}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>

      <div
        use:reveal={{ delay: 150 }}
        class="lg:col-span-3 rounded-sm border border-border shadow-sm overflow-hidden bg-background"
      >
        <iframe src={CV_URL} title="Curriculum Vitae" class="w-full border-0" style="height: 900px"></iframe>
        <noscript>
          <p class="p-6 text-sm text-muted-foreground">
            PDF viewer unavailable. <a href={CV_URL} class="text-primary underline">Download the CV directly</a>.
          </p>
        </noscript>
      </div>
    </div>
  </div>
</section>
