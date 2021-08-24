const btn = document.getElementById("submit"),
    container = document.querySelector('.container');
btn.addEventListener('click', function(){
    btn.style.color = 'red';
    console.log('버튼이 클릭되었습니다');
});

container.addEventListener('mouseenter', function(){
    container.style.color = 'green';
    console.log('마우스가 들어옴')
})

container.addEventListener('mouseleave', function(){
    container.style.color = 'green';
    console.log('마우스가 나감')
})

window.addEventListener('keydown', function(event){
    console.log(event.key);
    console.log(event.keyCode);
})