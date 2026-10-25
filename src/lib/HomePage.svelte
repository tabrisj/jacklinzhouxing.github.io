<script>
  import Navbar from './Navbar.svelte';
  import Home from './Home.svelte';
  import News from './News.svelte';
  import Research from './Research.svelte';
  import Teaching from './Teaching.svelte';
  import Engagement from './Engagement.svelte';
  import CV from './CV.svelte';
  import Contact from './Contact.svelte';
  import Footer from './Footer.svelte';
  import BackToTop from './BackToTop.svelte';
</script>

<div class="min-h-screen bg-background">
  <Navbar />
  <main>
    <Home />
    <News />
    <Research />
    <Teaching />
    <Engagement />
    <CV />
    <Contact />
  </main>
  <Footer />
  <BackToTop />
</div>
