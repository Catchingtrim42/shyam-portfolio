 // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const target = document.querySelector(a.getAttribute('href'));
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
          // close mobile nav if open
          if(window.innerWidth < 1000){
            document.getElementById('navList').style.display = 'none';
          }
        }
      });
    });

    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    navToggle.addEventListener('click', ()=>{
      if(getComputedStyle(navList).display === 'none'){
        navList.style.display = 'flex';
        navList.style.flexDirection = 'column';
        navList.style.position = 'absolute';
        navList.style.right = '24px';
        navList.style.top = '66px';
        navList.style.background = 'rgba(255,255,255,0.95)';
        navList.style.padding = '12px 18px';
        navList.style.borderRadius = '12px';
        navList.style.boxShadow = '0 12px 30px rgba(6,20,30,0.08)';
      } else {
        navList.style.display = 'none';
      }
    });

    // Hide nav on larger screens if style left over
    window.addEventListener('resize', ()=>{
      if(window.innerWidth > 1000){
        navList.style.display = 'flex';
        navList.style.position = 'static';
        navList.style.background = 'transparent';
        navList.style.padding = '0';
        navList.style.boxShadow = 'none';
        navList.style.flexDirection = 'row';
      } else {
        navList.style.display = 'none';
      }
    });

    // initial responsive nav state
    if(window.innerWidth < 1000) navList.style.display = 'none';
