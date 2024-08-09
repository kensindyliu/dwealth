// edited by ken
const bp1 = document.getElementById('bp1');
const bp2 = document.getElementById('bp2');
const bp1Container = document.getElementById('bp1Container');
const bp2Container = document.getElementById('bp2Container');

bp1.addEventListener('click', function() {
    bp2.classList.remove('businessHeaderSelected');
    bp1.classList.add('businessHeaderSelected');
    bp1Container.classList.remove('hidden');
    bp2Container.classList.add('hidden');
});

bp2.addEventListener('click', function() {
    bp1.classList.remove('businessHeaderSelected');
    bp2.classList.add('businessHeaderSelected');
    bp2Container.classList.remove('hidden');
    bp1Container.classList.add('hidden');
});