// estrutura de dados
        // vetores -> array

        var cidade = ["Curitiba", "Colombo", "Pinhais"];

        // retorna a cidade da posição
        cidade[1];

        //adiciona item no final
        cidade.push("Araucaria");

        console.log(cidade);

        // loops -> laço de repetição
        var ini = 1;
        var fim = 10;

        while (ini <= fim)
        {
            console.log(ini);
            ini = ini + 1; 
        }

        // invertido
        var ini = 10;
        var fim = 1;

        while (ini >= fim)
        {
            console.log(ini);
            ini = ini - 1; 
        }


        function listar()
        {
            var ini = 0;
            var fim = cidade.length - 1;

            var res = "<ul>";

            while(ini <= fim)
            {
                res = res + "<li>"+ cidade[ini] +"</li>";
                ini = ini + 1;
            }

            res = res + "</ul>";
            
            resultado.innerHTML = res;
        }

        function add()
        {
            var texto = nome.value;

            if (cidade.includes(texto) == false)
            {
                cidade.push(texto);
                listar();
            }
        }

        function ordenar()
        {
            cidade.sort();
            listar();
        }