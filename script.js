
    // Smooth scroll for nav & buttons
    function scrollToSection(sel){
      document.querySelector(sel).scrollIntoView({behavior:'smooth',block:'start'});
    }

    // Mobile menu toggle (simple) — this demo hides nav on small screens so toggle will show an alert
    document.querySelector('.menu-toggle').addEventListener('click',()=>{
      alert('Mobile menu (demo): use navigation links to jump to sections.');
    });

    // Filter case studies
    const filters = document.querySelectorAll('.filter-btn[data-filter]');
    filters.forEach(btn=>btn.addEventListener('click',()=>{
      filters.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      const cards = document.querySelectorAll('#case-grid .case');
      cards.forEach(c=>{
        if(f==='all' || c.dataset.cat===f) c.style.display='block'; else c.style.display='none';
      });
    }));

    // Simple fake form submit
    function submitForm(e){
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      alert('Thanks '+name+"! We've received your registration (demo).\nConfirmation will be sent to: "+email);
      document.getElementById('regform').reset();
      return false;
    }

    // reveal animations
    const reveals = document.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(ent=>{ if(ent.isIntersecting) ent.target.classList.add('show');});
    }, {threshold:0.15});
    reveals.forEach(r=>obs.observe(r));