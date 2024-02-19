$('#login').on('click', function(){
    $('.black-bg').addClass('showModal');
});

$('#close').on('click', function(){
    $('.black-bg').removeClass('showModal');
});

$('#send').on('click', function(e){
    var 아이디 = document.getElementById('email').value;
    var 비밀번호 = document.getElementById('password').value;

    if (아이디 == ''){
        e.preventDefault();
        alert('아이디를 입력해주세요.');
    } else if (비밀번호 == ''){
        e.preventDefault();
        alert('비밀번호를 입력해주세요.');
    } else if(비밀번호.length < 6){
        e.preventDefault();
        alert('비밀번호를 6자 이상 입력해주세요');
    } else if (/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(아이디) == false ){
        e.preventDefault();
        alert('아이디가 이메일형식아님');
    } else if ( /[A-Z]/.test(비밀번호) == false ){
        e.preventDefault();
        alert('비밀번호에 대문자없는데요')
    }
});