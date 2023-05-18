$(document).ready(function() {
    $("#filmForm").submit(function(event) {

        event.preventDefault()

        var film = $("#film").val()
        
        var result = ""
        
        var url = "https://www.omdbapi.com/?i=tt3896198&apikey=c892e730"

        $.ajax({
            method: 'GET',
            url: url + "&t=" + film,
            success: function(data) {
                console.log(data);
              
                result =`

            <div class="card mb-3" style="width:100%;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${data.Poster}" class="img-fluid rounded-start">
                </div>
                <div class="col-md-8">
                <div class="card-body"> <br><br>
                    <h4 class="card-title">${data.Title}</h4>
                    <p class="card-text">Tür: <b>${data.Genre}</b> </p>
                    <p class="card-text"><h7>Yayınlanma Tarihi:</h7> <b>${data.Released}</b></p>
                    <p class="card-text"><h7>Yaş Sınırı:</h7> <b>${data.Rated}</b></p>
                    <p class="card-text"><h7>IMDB Puanı:</h7> <b>${data.imdbRating}</b></p>
                    <p class="card-text"><h7>Yönetmen:</h7> <b>${data.Director}</b></p>
                    <p class="card-text"><h7>Yazar:</h7> <b>${data.Writer}</b></p>
                    <p class="card-text"><h7>Oyuncular:</h7> <b>${data.Actors}</b></p>
                </div>
                </div>
            </div>
            </div>`
                              
            $("#result").html(result)
            }
        })
    })
})
