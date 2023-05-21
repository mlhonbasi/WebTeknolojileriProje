<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>G221210350</title>

    <!--CSS, Bootstrap & Ajax JQuery-->
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
</head>
<body>
  <!--Navbar menusu-->
<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">Anasayfa</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="ozgecmis.html">Özgeçmiş</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="sehir.html">Şehrim</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="miras.html">Miras</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="ilgialani.html">İlgi Alanlarım</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="iletisim.html">İletişim</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login.html">Giriş Yap</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  <!--Navbar menu bitisi-->

  <!--PHP giris kontrol-->
    <div class="container">
    <?php
        $eposta = "g221210350@sakarya.edu.tr";
        $sifre = "g221210350";
        if(($_POST["email"] == $eposta) && ($_POST["passw"] == $sifre))
        {
            echo "<h1>Hoş Geldiniz. Giriş Başarılı.</h1>";
        }      
        else
        {
            echo "<h1>Giriş bilgileri hatalı. Tekrar deneyiniz...<h1>";
            header("Refresh: 2; url=login.html");
        }
    ?>
    </div>
  <!--PHP-->   
  
    <!--Bootstrap src & Javascript src-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>
    
</body>
</html>