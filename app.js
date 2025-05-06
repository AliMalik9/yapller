const SUPABASE_URL = 'https://hsqhjhkfzlckgjqfztnv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzcWhqaGtmemxja2dqcWZ6dG52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0Mzk4MjIsImV4cCI6MjA2MjAxNTgyMn0.KZgQ_nRXa27BoYhyl8uPWBRDCR9QLB9675sQOAGlpWU';

// Avoid naming conflict with the global `supabase` object
const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const form = document.getElementById('magicLinkForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = form.email.value.trim();
  if (!email) return;

  const { error } = await client.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${window.location.origin}/chat.html`,
    },
  });

  if (error) {
    alert('Error sending magic link: ' + error.message);
  } else {
    alert('Magic link sent! Check your inbox.');
    form.querySelector('button').disabled = true;
  }
});
