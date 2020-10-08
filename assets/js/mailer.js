function sendMail(){
    updateMailResponse("Sending Mail ...");    
    var visitor = document.getElementById("inputName4").value;
    var visitorAddress = document.getElementById("inputAddress").value;
    var visitorEmail = document.getElementById("inputEmail4").value;
    var visitorMsg = document.getElementById("exampleFormControlTextarea1").value;
    var subject = `MAIL FROM WEBSITE (${visitorEmail})`;
    var body = `<p>
                    <strong>Sender: </strong>${visitor} <br>
                    <strong>Email: </strong>${visitorEmail} <br>
                    <strong>Address: </strong>${visitorAddress} <br><br>
                    <strong>Message: </strong> <br>
                    ${visitorMsg}
                </p>`;

    data = new FormData();
    data.append("recipient", "pelogisticsng@gmail.com");
    data.append("body", body);
    data.append("subject", subject);
    var url = "https://mailer.pelogistics.ng/sendmail";
    //var api_key = "xxx-yyy";

    $.ajax({
		url: url,
		method: "POST",
		data: data,
		processData: false,
		contentType: false,
		crossDomain: true,
		/*beforeSend: function(client) {
            client.setRequestHeader('Authorization', "Basic " + api_key);
		},*/
		success: function(response) {
            //console.log(response);
            if(response["success"] === true){
                updateMailResponse("Mail Delivered 😎");
                console.log("Mail Sent! 😎");
                hideQuoteModal();
            }else{
                updateMailResponse("An error Occured 😢");
                console.log("Mail Failed! 😢"); 
                hideQuoteModal(); 
            }
            
		},
		error: function(response) {
            updateMailResponse("An error Occured 😢");
            hideQuoteModal();
			console.log("Mail Failed! 😢");  
		}
    });
}

function hideQuoteModal(){
    setTimeout(function(){
        $('#quote-modal').modal('hide');
        updateMailResponse("SEND MESSAGE");
    },2000);    
}

function updateMailResponse(msg){
    document.getElementById('mail-msg').innerHTML = msg;
}


function showQuoteModal(){    
    
    $('#quote-modal').modal('show');    

}