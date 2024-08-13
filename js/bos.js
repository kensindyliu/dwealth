// edited by ken
const bp1 = document.getElementById('bp1');
const bp2 = document.getElementById('bp2');
const bp1Container = document.getElementById('bp1Container');
const bp2Container = document.getElementById('bp2Container');

bp1.addEventListener('click', function() {
    if (window.innerWidth < 860) return;
    bp2.classList.remove('businessHeaderSelected');
    bp1.classList.add('businessHeaderSelected');
    bp1Container.style.display = 'block';
    bp2Container.style.display = 'none';
    
});

bp2.addEventListener('click', function() {
    if (window.innerWidth < 860) return;
    bp1.classList.remove('businessHeaderSelected');
    bp2.classList.add('businessHeaderSelected');
    bp2Container.style.display = "block";
    bp1Container.style.display = 'none';
});