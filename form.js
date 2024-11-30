$(document).ready(function(){

    $("#bt-cadastro").click(function(){

        $("#nome").removeClass("is-invalid");
        $("#cidade").removeClass("is-invalid");
        $("[name=sexo]").removeClass("is-invalid");

        var nome = $("#nome").val();
        if (nome.trim() == "")
        {
            $("#nome").addClass("is-invalid");
        }

        if ($("#cidade").val() == "0")
        {
            $("#cidade").addClass("is-invalid");
        }

        if ($("[name=sexo]:checked").length == 0)
        {
            $("[name=sexo]").addClass("is-invalid");
        }

    }); // fim do bt

});