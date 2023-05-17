function formControl()
    {
      var ad = document.forms["form-icerik"]["ad"].value;
      var soyad = document.forms["form-icerik"]["soyad"].value;
      var mail = document.forms["form-icerik"]["eposta"].value;
      var telefon = document.forms["form-icerik"]["telefon"].value;
      var adres = document.forms["form-icerik"]["adres"].value;
      var checkValue = document.forms["form-icerik"]["check"].checked;
      var mesaj = document.forms["form-icerik"]["mesaj"].value;

      if(ad == "")
      {
        alert("Ad kısmı boş bırakılmamalıdır!")
        return false;
      }
      if(soyad == "")
      {
        alert("Soyad kısmı boş bırakılmamalıdır!")
        return false;
      }
      if(mail == "")
      {
        alert("E-posta kısmı boş bırakılmamalıdır!")
        return false;
      }
      if(telefon == "")
      {
        alert("Telefon kısmı boş bırakılmamalıdır!")
        return false;
      }
      if(adres == "")
      {
        alert("Adres kısmı boş bırakılmamalıdır!")
        return false;
      }
      if(mesaj == "")
      {
        alert("Mesaj kısmı boş bırakılmamalıdır!")
        return false;
      }
      
      var mailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!mailRegex.test(mail))
      {
        alert("E-posta adresiniz geçersiz biçimde!")
        return false;
      }

      var telefonRegex = /^(5)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/;
      if(!telefonRegex.test(telefon))
      {
        alert("Telefon numaranız geçersiz biçimde!")
        return false;
      }

      if(!checkValue)
      {
        alert("Bilgilerimi onaylıyorum kutucuğunu işaretleyiniz!")
        return false;
      }
    }