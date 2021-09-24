const idText=document.querySelector('#id');

const passwordText=document.querySelector('#pw');
passwordText.onblur=()=>{
    let password_flag= checkPassword(idText.value,passwordText.value);
    if(password_flag==true){
        alert("사용가능한 비밀번호 입니다.")
    }
}

function checkPassword(id,pw){

    if(!/^[a-zA-Z0-9]{10,15}$/.test(pw)){  
    alert('숫자와 영문자 조합으로 10~15자리를 사용해야 합니다.');  
    return false;    
    }
    var checkNumber = pw.search(/[0-9]/g);
    var checkEnglish = pw.search(/[a-z]/ig);

    if(checkNumber <0 || checkEnglish <0){   
    alert("숫자와 영문자를 혼용하여야 합니다.");
    return false;

    }
    
    if(/(\w)\1\1\1/.test(pw)){   
    alert('444같은 문자를 4번 이상 사용하실 수 없습니다.');    
    return false;   
    }
    
    if(pw.search(id) > -1){   
    alert("비밀번호에 아이디가 포함되었습니다.");  
    return false;   
    } 
    return true;  
    }
