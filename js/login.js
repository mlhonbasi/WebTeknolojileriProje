function loginCheck()
    {  
        var mail = document.forms["login-form"]["email"].value;
        var password = document.forms["login-form"]["passw"].value;
        
        if(mail == "")
        {
            alert("E-posta kısmı boş bırakılamaz!")
            return false;
        }
        if(password =="")
        {
            alert("Şifre kısmı boş bırakılamaz!")
            return false;
        }
        
        var mailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!mailRegex.test(mail))
        {
            alert("E-posta adresiniz geçersiz biçimde!")
            return false;
        }
    }