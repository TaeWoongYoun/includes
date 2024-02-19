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
        alert('아이디를 입력해주세요.');
        e.preventDefault();
    } else if (비밀번호 == ''){
        alert('비밀번호를 입력해주세요.');
        e.preventDefault();
    } else if(document.getElementById('password').value.length < 6){
        alert('비밀번호를 6자 이상 입력해주세요');
        e.preventDefault();
    }

    if(/\S+@\S+.\S+/.test(아이디)){
        alert('이메일 형식이 아닙니다.')
        e.preventDefault();
    }else if(/[A-Z]/.test(비밀번호 == false)){
        alert('비밀번호에 대문자를 추가해주세요.')
        e.preventDefault();
    }
});