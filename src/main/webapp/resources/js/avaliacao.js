var starsSelected = 0;
var code;
var avaliarCodProgramacao;
var loaded = false;
var options1 = [];
var options2 = [];
var options3 = [];
var options4 = [];
var options5 = [];

function exibirModalPesquisa() {
	if (document.getElementById('flagExibeModalAvaliacao').checked) {
		document.getElementById('avaliacaoMsg').value = "";
		document.getElementById('avaliacaoMsg').placeholder = 'Digite seu comentário';
		charCountMsg();
		setStars(0, 'numEstrelas');
		$('#divModalAvaliar').modal('show');
//		setTimeout(() => {
//		$('#divModalAvaliar').modal('show');
//	 					$("#divModalAvaliar").show();
//		}, 1000);
	}
}

function recusarPesquisa(){
	$("#btnRecusarPesquisa").click();
	$('#divModalAvaliar').modal('hide');
}

function exibirModalAvaliacaoEnviada(){
	fecharModalAvaliacao();
	$('#divModalAvaliacaoEnviada').modal('show');
	setTimeout(() => {
		$('#divModalAvaliacaoEnviada').modal('hide');
	}, 3000);
}

function fecharModalAvaliacao(){
	$('#divModalAvaliar').modal('hide');
}

function fecharModalAvaliacaoEnviada(){
	$('#divModalAvaliacaoEnviada').modal('hide');
}

function charCountMsg(){
	document.getElementById('avaliacaoMsg').maxLength = 500;
	$("#avaliacaoMsg").on("input", function() {
		  var currentLength = $("#avaliacaoMsg").val().length;
		  var stCount = currentLength+"/500";
		  $("#avaliacaoCount").text(stCount);	 
		});	
}

function setStars(rating, id){
	var rate = parseInt(rating);
	var rated = paintStars(rate);
	var numEstrelas = document.getElementById(id);
	numEstrelas.value = rating;
	if (starsSelected < 1){
		disableEnviar();
	} else {
		enableEnviar();
	}
}
	
function paintStars(rate){	
	if (rate == 1 && starsSelected == 1) {
		clearAvaliacaoAvaliarStar();
		starsSelected = 0;
		
		$("#starAvaliacaoAvaliar1").addClass("avaliarUnchecked");
		$("#starAvaliacaoAvaliar2").addClass("avaliarUnchecked");
		$("#starAvaliacaoAvaliar3").addClass("avaliarUnchecked");
		$("#starAvaliacaoAvaliar4").addClass("avaliarUnchecked");
		$("#starAvaliacaoAvaliar5").addClass("avaliarUnchecked");	
		
		return starsSelected;
	}
	
	clearAvaliacaoAvaliarStar();
	starsSelected = rate;
	
	if (rate > 0){
		$("#starAvaliacaoAvaliar1").addClass("avaliarChecked");
	}else {
		$("#starAvaliacaoAvaliar1").addClass("avaliarUnchecked");
		$("#starAvaliacaoAvaliar2").addClass("avaliarUnchecked");
		$("#starAvaliacaoAvaliar3").addClass("avaliarUnchecked");
		$("#starAvaliacaoAvaliar4").addClass("avaliarUnchecked");
		$("#starAvaliacaoAvaliar5").addClass("avaliarUnchecked");
		
		return starsSelected;
	}

	if (rate > 1){
		$("#starAvaliacaoAvaliar2").addClass("avaliarChecked");
	} else {
		$("#starAvaliacaoAvaliar2").addClass("avaliarUnchecked");
		$("#starAvaliacaoAvaliar3").addClass("avaliarUnchecked");
		$("#starAvaliacaoAvaliar4").addClass("avaliarUnchecked");
		$("#starAvaliacaoAvaliar5").addClass("avaliarUnchecked");
		
		return starsSelected;
	}

	if (rate > 2){
		$("#starAvaliacaoAvaliar3").addClass("avaliarChecked");
	}else {
		$("#starAvaliacaoAvaliar3").addClass("avaliarUnchecked");
		$("#starAvaliacaoAvaliar4").addClass("avaliarUnchecked");
		$("#starAvaliacaoAvaliar5").addClass("avaliarUnchecked");
		
		return starsSelected;
	}
	
	if (rate > 3){
		$("#starAvaliacaoAvaliar4").addClass("avaliarChecked");
	}else {
		$("#starAvaliacaoAvaliar4").addClass("avaliarUnchecked");
		$("#starAvaliacaoAvaliar5").addClass("avaliarUnchecked");
		
		return starsSelected;
	}

	if (rate > 4){
		$("#starAvaliacaoAvaliar5").addClass("avaliarChecked");
	}else {
		$("#starAvaliacaoAvaliar5").addClass("avaliarUnchecked");
		
		return starsSelected;
	}
	
	return starsSelected;
}

function clearAvaliacaoAvaliarStar(){
	starsSelected = 0;
	
	$("#starAvaliacaoAvaliar1").removeClass("avaliarChecked");
	$("#starAvaliacaoAvaliar2").removeClass("avaliarChecked");
	$("#starAvaliacaoAvaliar3").removeClass("avaliarChecked");
	$("#starAvaliacaoAvaliar4").removeClass("avaliarChecked");
	$("#starAvaliacaoAvaliar5").removeClass("avaliarChecked");
	
	$("#starAvaliacaoAvaliar1").removeClass("avaliarUnchecked");
	$("#starAvaliacaoAvaliar2").removeClass("avaliarUnchecked");
	$("#starAvaliacaoAvaliar3").removeClass("avaliarUnchecked");
	$("#starAvaliacaoAvaliar4").removeClass("avaliarUnchecked");
	$("#starAvaliacaoAvaliar5").removeClass("avaliarUnchecked");
}

function disableEnviar(){
	$("#btnEnviarPesquisa").prop('disabled', true);
}

function enableEnviar(){
	$("#btnEnviarPesquisa").prop('disabled', false);
}