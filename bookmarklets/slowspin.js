const doc=document.documentElement;function spin(){const n=performance.now()/100;doc.style.transform=`rotate(${n}deg)`,requestAnimationFrame(spin)}requestAnimationFrame(spin);
