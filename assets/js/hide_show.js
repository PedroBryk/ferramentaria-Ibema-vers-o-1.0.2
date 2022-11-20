$(document).ready(function() {

    $('.formulario-uso').hide();

    $('.concluido').hide();

})

$('.adicionar_uso-img').on("click",troca)

function troca(){

$('.adicionar_uso-img').hide();

$('.formulario-uso').show();

}

$('.botao-adicionar').on("click",troca2)

function troca2(){

$('.formulario-uso').hide();

$('.concluido').show();

}

$('.botao-concluido').on("click",troca3)

function troca3(){

$('.concluido').hide();

$('.adicionar_uso-img').show();

}

$('.botao-cancelar').on("click",troca4)

function troca4(){

    $('.formulario-uso').hide();

    $('.adicionar_uso-img').show();

}