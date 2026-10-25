<script>
  import { BookOpen } from '@lucide/svelte';
  import { reveal } from './reveal.js';

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

<section id="teaching" class="py-20 px-6 bg-muted/30">
  <div class="max-w-3xl mx-auto">
    <div use:reveal>
      <h2 class="font-serif text-2xl md:text-3xl font-bold text-foreground mb-10 flex items-center gap-3">
        <BookOpen class="text-primary" size={28} />
        Teaching
      </h2>
    </div>

    <div class="mb-10">
      <h3 class="font-serif text-lg font-semibold text-foreground mb-4">Teaching Interests</h3>
      <p class="text-muted-foreground leading-relaxed">
        Sociology of Technology and Work; Science, Technology, and Society (STS); Innovation Policy; Digital
        Governance; and Chinese Society.
      </p>
    </div>

    <div class="mb-8">
      <h3 class="font-serif text-lg font-semibold text-foreground mb-6">Guest Lecturer</h3>
      <ul class="space-y-4 text-muted-foreground">
        {#each guestLectures as item, i (i)}
          <li class="pl-5 border-l-2 border-primary/20">
            <span class="font-serif font-semibold text-foreground">{item.course}</span>
            <span class="text-sm text-muted-foreground ml-1">({item.school})</span>
            <br />
            <span class="text-sm italic text-muted-foreground/80">Lecture: "{item.lecture}"</span>
          </li>
        {/each}
      </ul>
    </div>

    <div class="mb-8">
      <h3 class="font-serif text-lg font-semibold text-foreground mb-6">Teaching Assistant</h3>
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
      <h3 class="font-serif text-lg font-semibold text-foreground mb-6">Tutorial Instructor</h3>
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
