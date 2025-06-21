function showTab(tabID){
    var allContents = document.querySelectorAll('.tab-content');
    allContents.forEach(a => a.style.display = 'none');

    var allTabButtons = document.querySelectorAll('.tab-button');
    allTabButtons.forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    var targetContents = document.getElementById(tabID);
    targetContents.style.display = 'block';



}