
            function ac()
            {
                document.getElementById("t").value="";

            }
            function show(input)
            {

                document.getElementById("t").value+=input;
            }
            function cal()
            {

                var output=eval(document.getElementById("t").value);
                document.getElementById("t").value=output;
            }
       
