$(document).ready(function(){

    $("#bt-cadastro").click(function(){

        $("#nome").removeClass("is-invalid");
        $("#cidade").removeClass("is-invalid");
        $("[name=sexo]").removeClass("is-invalid");
        $("#cpf").removeClass("is-invalid");

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

        var cpf_regex = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/gm;
        var cpf = $("#cpf").val();

        if(cpf_regex.test(cpf) == false)
        {
            $("#cpf").addClass("is-invalid");
        }

        var email_regex = /^[a-z0-9.\-_+]+@[a-z0-9.]+/gmi
        var email = $("#email").val();

        if (email_regex.test(email) == false)
        {
            $("#email").addClass("is-invalid");
        }

    }); // fim do bt

});