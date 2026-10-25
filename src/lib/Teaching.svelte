<script>
  import { BookOpen } from '@lucide/svelte';
  import { reveal } from './reveal.js';
  import SectionHeading from './SectionHeading.svelte';

  const guestLectures = [
    { course: 'Contemporary Chinese Society', school: 'Harvard University, 2026', lecture: 'How to build a platform in China?' },
    { course: 'Theorizing Digital Capitalism', school: 'Harvard University, 2025', lecture: 'Three principles of studying platforms elsewhere' },
    { course: 'Understanding Society, Economy, and Governance in the Digital Era', school: 'HKUST, 2025', lecture: 'Speed, time, and infrastructure in the digital era' },
    { course: 'Technology and Society', school: 'Northeastern University, 2025', lecture: 'The platform economy and future of work' },
    { course: 'Urban Development and Sustainable Cities', school: 'PG, City University of Hong Kong, 2024', lecture: 'The platform economy and automation' },
    { course: 'Traditions of Inquiry in Social Sciences', school: 'City University of Hong Kong, 2024', lecture: 'Sociological thoughts on science and technology' },
    { course: 'Introduction to Sociology', school: 'Georgia Institute of Technology, 2022–2023', lecture: 'Testing the promise of the gig economy" & "Technology and future of work' }
  ];

  const teachingAssistant = [
    { course: 'Introduction to Sociology', school: 'Georgia Institute of Technology, 2022–2023' },
    { course: 'Science, Technology, Medicine and Race', school: 'Georgia Institute of Technology, 2021' }
  ];

  const tutorialInstructor = [
    { course: 'Technology, Power and Culture in the Global Age', school: 'The University of Hong Kong, 2018' }
  ];
</script>

<section id="teaching" class="py-14 md:py-16 bg-muted/30 scroll-mt-20">
  <div class="max-w-3xl mx-auto px-6">
    <SectionHeading icon={BookOpen} title="Teaching" />

    <div class="mb-6">
      <h3 class="font-serif text-lg font-semibold text-foreground mb-4">Teaching Interests</h3>
      <p class="text-muted-foreground leading-relaxed">
        Sociology of Technology and Work; Science, Technology, and Society (STS); Innovation Policy; Digital
        Governance; and Chinese Society.
      </p>
    </div>

    <div class="mb-6">
      <h3 class="font-serif text-lg font-semibold text-foreground mb-4">Guest Lecturer</h3>
      <ul class="space-y-3 text-muted-foreground">
        {#each guestLectures as item, i (i)}
          <li class="pl-5 border-l-2 border-primary/20">
            <span class="font-serif font-semibold text-foreground">{item.course}</span>
            <span class="text-sm text-muted-foreground ml-1">({item.school})</span>
            <br />
            <span class="text-sm italic text-muted-foreground">Lecture: "{item.lecture}"</span>
          </li>
        {/each}
      </ul>
    </div>

    <div class="mb-6">
      <h3 class="font-serif text-lg font-semibold text-foreground mb-4">Teaching Assistant</h3>
      <ul class="space-y-3 text-muted-foreground">
        {#each teachingAssistant as item, i (i)}
          <li class="pl-5 border-l-2 border-primary/20">
            <span class="font-serif font-semibold text-foreground">{item.course}</span>
            <span class="text-sm ml-1">({item.school})</span>
          </li>
        {/each}
      </ul>
    </div>

    <div>
      <h3 class="font-serif text-lg font-semibold text-foreground mb-4">Tutorial Instructor</h3>
      <ul class="space-y-3 text-muted-foreground">
        {#each tutorialInstructor as item, i (i)}
          <li class="pl-5 border-l-2 border-primary/20">
            <span class="font-serif font-semibold text-foreground">{item.course}</span>
            <span class="text-sm ml-1">({item.school})</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
