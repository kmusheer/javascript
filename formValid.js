function submitForm(e){
    var form = document.getElementById('formName');
        var txt= "";
        var i;
        for (i = 0; i < form.length; i++) {
            txt = txt + form.elements[i].value + "<br><br>";
        }
        document.getElementById('val').innerHTML = txt;
        e.preventDefault();
    }        


    function showPwd() {
        let pass = document.getElementById('pwd');
        if (pass.type === 'password') {
            pass.type = 'text';
        } else {
            pass.type = 'password';
        }
    }