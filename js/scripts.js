function isMobile() {
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)));
}

if (isMobile()) {
    $("#start").prop("disabled", false);

} else {
    $("#start").prop("disabled", true);
    swal("Lo sentimos :(", "Solo puede acceder a la aplicación desde un celular o tablet", "error");
}

document.getElementById("foto1").onchange = function (e) {
    let reader = new FileReader();

    reader.onload = function () {
        let preview = document.getElementById('preview1'),
            image = document.createElement('img');

            image.id = 'imgfinal01';

        image.src = reader.result;

        preview.innerHTML = '';
        preview.append(image);
    };

    reader.readAsDataURL(e.target.files[0]);

    let reader2 = new FileReader();

    reader2.onload = function () {
        let preview2 = document.getElementById('prec1'),
            image11 = document.createElement('img');

        image11.src = reader2.result;

        preview2.innerHTML = '';
        preview2.append(image11);
    }
    reader2.readAsDataURL(e.target.files[0]);


}


document.getElementById("foto2").onchange = function (e) {
    let reader3 = new FileReader();

    reader3.onload = function () {
        let preview = document.getElementById('preview2'),
            image = document.createElement('img');

            image.id = 'imgfinal02';

        image.src = reader3.result;

        preview.innerHTML = '';
        preview.append(image);
    };

    reader3.readAsDataURL(e.target.files[0]);

    let reader4 = new FileReader();

    reader4.onload = function () {
        let preview2 = document.getElementById('prec2'),
            image22 = document.createElement('img');

        image22.src = reader4.result;

        preview2.innerHTML = '';
        preview2.append(image22);
    };

    reader4.readAsDataURL(e.target.files[0]);
}

document.getElementById("foto3").onchange = function (e) {
    let reader5 = new FileReader();

    reader5.onload = function () {

        let preview = document.getElementById('preview3'),
            image = document.createElement('img');

            image.id = 'imgfinal03';
            
        image.src = reader5.result;

        preview.innerHTML = '';
        preview.append(image);

    };

    reader5.readAsDataURL(e.target.files[0]);

    let reader6 = new FileReader();

    reader6.onload = function () {
        let preview2 = document.getElementById('prec3'),
            image33 = document.createElement('img');

        image33.src = reader6.result;

        preview2.innerHTML = '';
        preview2.append(image33);

    };

    reader6.readAsDataURL(e.target.files[0]);
}


function reducir(pId, pImg) {
    var MAX_WIDTH = 600;
    var MAX_HEIGHT = 600;

    var loImageWidth = pImg.naturalWidth;
    var loImageHeight = pImg.naturalHeight;

    if (loImageWidth > loImageHeight) {
        if (loImageWidth > MAX_WIDTH) {
            loImageHeight *= MAX_WIDTH / loImageWidth;
            loImageWidth = MAX_WIDTH;
        }
    } else if (loImageHeight > MAX_HEIGHT) {
        loImageWidth *= MAX_HEIGHT / loImageHeight;
        loImageHeight = MAX_HEIGHT;
    } else {
        loImageWidth = MAX_WIDTH;
        loImageHeight = MAX_HEIGHT;
    }

    var loCanvas = document.createElement('canvas');
    loCanvas.width = loImageWidth;
    loCanvas.height = loImageHeight;
    var ctx = loCanvas.getContext("2d");
    ctx.drawImage(pImg, 0, 0, loImageWidth, loImageHeight);

    document.getElementById(pId).value = loCanvas.toDataURL('image/jpeg', 0.7);
}

var datos = '';
$(document).ready(function () {
    var sign = $('#txt').SignaturePad({
        allowToSign: true,
        img64: 'img/touchme.jpg',
        border: '1px solid #c7c8c9',
        width: '90%',
        height: '200px',
        callback: function (data, action) {
            datos = data;

        }
    });

    var sign = $('#txt2').SignaturePad({
        allowToSign: true,
        img64: 'img/touchme.jpg',
        border: '1px solid #c7c8c9',
        width: '90%',
        height: '200px',
        callback: function (data, action) {
            console.log(data);
        }
    });

});

function atras1() {
    document.getElementById('infoPrincipal').style.display = 'block';
    document.getElementById('paso1').style.display = 'none';
    document.getElementById('avance1').style.display = 'none';
    document.getElementById('avance2').style.display = 'none';
    document.getElementById('avance3').style.display = 'none';
    document.getElementById('avance4').style.display = 'none';
}

function atras2() {
    document.getElementById('paso1').style.display = 'block';
    document.getElementById('paso2').style.display = 'none';
    document.getElementById('avance2').style.display = 'block';
    document.getElementById('avance2').style.background = '#666666';
}

function atras3() {
    document.getElementById('paso2').style.display = 'block';
    document.getElementById('paso3').style.display = 'none';
    document.getElementById('avance3').style.display = 'block';
    document.getElementById('avance3').style.background = '#666666';
}

function atras4() {
    document.getElementById('paso3').style.display = 'block';
    document.getElementById('paso4').style.display = 'none';
    document.getElementById('avance4').style.display = 'block';
    document.getElementById('avance4').style.background = '#666666';
}

function atras5() {
    document.getElementById('paso4').style.display = 'block';
    document.getElementById('paso5').style.display = 'none';
    document.getElementById('avance1').style.display = 'block';
    document.getElementById('avance1').style.background = '#1f97ae';
    document.getElementById('avance2').style.display = 'block';
    document.getElementById('avance2').style.background = '#1f97ae';
    document.getElementById('avance3').style.display = 'block';
    document.getElementById('avance3').style.background = '#1f97ae';
    document.getElementById('avance4').style.display = 'block';
    document.getElementById('avance4').style.background = '#1f97ae';
}

function ocultar() {
    document.getElementById('avance2').style.display = 'block';
    document.getElementById('avance2').style.background = '#1f97ae';
    document.getElementById('infoPrincipal').style.display = 'none';
    document.getElementById('paso1').style.display = 'none';
    document.getElementById('paso2').style.display = 'block';
}

function ocultarPaso2() {
    document.getElementById('avance3').style.display = 'block';
    document.getElementById('avance3').style.background = '#1f97ae';
    document.getElementById('infoPrincipal').style.display = 'none';
    document.getElementById('paso1').style.display = 'none';
    document.getElementById('paso2').style.display = 'none';
    document.getElementById('paso3').style.display = 'block';
}

function ocultarPaso3() {
    document.getElementById('avance4').style.display = 'block';
    document.getElementById('avance4').style.background = '#1f97ae';
    document.getElementById('avance3').style.display = 'block';
    document.getElementById('infoPrincipal').style.display = 'none';
    document.getElementById('paso1').style.display = 'none';
    document.getElementById('paso2').style.display = 'none';
    document.getElementById('paso3').style.display = 'none';
    document.getElementById('paso4').style.display = 'block';
}

function mostrar() {
    document.getElementById('avance1').style.display = 'block';
    document.getElementById('avance1').style.background = '#1f97ae';
    document.getElementById('avance2').style.display = 'block';
    document.getElementById('avance3').style.display = 'block';
    document.getElementById('avance4').style.display = 'block';
    document.getElementById('paso1').style.display = 'block';
    document.getElementById('paso2').style.display = 'none';
    document.getElementById('infoPrincipal').style.display = 'none';
}

function finalizar() {
    document.getElementById('paso5').style.display = 'block';
    document.getElementById('paso4').style.display = 'none';
    document.getElementById('paso1').style.display = 'none';
    document.getElementById('paso2').style.display = 'none';
    document.getElementById('paso3').style.display = 'none';
    document.getElementById('avance4').style.background = '#666666';
    document.getElementById('avance3').style.background = '#666666';
    document.getElementById('avance2').style.background = '#666666';
    document.getElementById('avance3').style.background = '#666666';
    document.getElementById('avance4').style.display = 'none';
    document.getElementById('avance3').style.display = 'none';
    document.getElementById('avance2').style.display = 'none';
    document.getElementById('avance1').style.display = 'none';
    document.getElementById('infoPrincipal').style.display = 'none';

    document.getElementById("prec4").innerHTML = '<img src="' + datos + '" />';
}

function D3_GetQuerystring(key, default_) {
    if (default_ == null) default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.location.href);
    if (qs == null)
        return default_;
    else
        return qs[1];
}

function VaciarControles() {
    document.getElementById('paso5').style.display = 'none';
    document.getElementById('paso4').style.display = 'none';
    document.getElementById('paso3').style.display = 'none';
    document.getElementById('paso2').style.display = 'none';
    document.getElementById('paso1').style.display = 'none';
    document.getElementById('foto1').innerHTML = '';
    document.getElementById('foto2').innerHTML = '';
    document.getElementById('foto3').innerHTML = '';
    document.getElementById('preview1').innerHTML = '';
    document.getElementById('preview2').innerHTML = '';
    document.getElementById('preview3').innerHTML = '';
    document.getElementById('prec1').innerHTML = '';
    document.getElementById('prec2').innerHTML = '';
    document.getElementById('prec3').innerHTML = '';
    document.getElementById('prec4').innerHTML = '';
    document.getElementById('txt2').innerHTML = '';
    document.getElementById('EnviandoDatos').style.display = 'none';
}

function enviarFinal() {
    try {
        var loLicencia = D3_GetQuerystring('Licencia', '');
        if (loLicencia == '') {
            loLicencia = D3_GetQuerystring('LICENCIA', '');
        }

        var loIdLead = D3_GetQuerystring('IdLead', '');
        if (loIdLead == '') {
            loIdLead = D3_GetQuerystring('IDLEAD', '');
        }
        var loObjData = {}
        loObjData.Imagen01 = document.getElementById("hdnFoto1").value;
        loObjData.Imagen02 = document.getElementById("hdnFoto2").value;
        loObjData.Imagen03 = document.getElementById("hdnFoto3").value;

        loObjData.txtToken = loLicencia + "|";
        loObjData.txtAction = "addLeadImages";

        loObjData.txtJSON_Data =
            '[{"id_lead":"' + loIdLead + '"' +
            ',"id_lead_db":0,"lead_firma01" :"' + datos.toString() + '"' +
            ',"lead_imagen01": "' + loObjData.Imagen01.toString() + '"' +
            ',"lead_imagen02": "' + loObjData.Imagen02.toString() + '"' +
            ',"lead_imagen03": "' + loObjData.Imagen03.toString() + '",}]';

        var loFormData = new FormData($('#form')[0]);
        debugger;
        loFormData.append("txtToken", loObjData.txtToken);
        loFormData.append("txtAction", loObjData.txtAction);
        loFormData.append("txtJSON_Data", loObjData.txtJSON_Data);

        try {
            $.ajax({
                type: "POST",
                enctype: 'multipart/form-data',
                contentType: false,
                url: "http://localhost:0000/servidor.aspx",
                data: loFormData,
                dataType: 'json',
                timeout: 0,
                processData: false,
                crossDomain: true,
                cache: false,
                success: function (data) {
                    if (data[0].Result.toString() == 'OK') {                     
                        swal("Gracias por tu tiempo!", "Los datos fueron enviados correctamente", "success");
                        VaciarControles();
                    } else {
                        VaciarControles();
                        swal(data[0].Result.toString(), data[0].ResultMessage.toString(), "error");
                    }
                },
                error: function (e) {
                    VaciarControles();
                    swal("Error", "Algo sucedio. Comuniquese con el telemarketer", "error");

                }
            });
        } catch (loex) {
            alert(loex);
        }
    } catch (loex) {
        alert(loex);
    }
}

function confirmar() {

    reducir('hdnFoto1', document.getElementById("imgfinal01"));
    reducir('hdnFoto2', document.getElementById("imgfinal02"));
    reducir('hdnFoto3', document.getElementById("imgfinal03"));
    
    var loFoto1 = document.getElementById("hdnFoto1").value;
    var loFoto2 = document.getElementById("hdnFoto2").value;
    var loFoto3 = document.getElementById("hdnFoto3").value;

    if (loFoto1.indexOf('base64') != -1 && loFoto2.indexOf('base64') != -1 && loFoto3.indexOf('base64') != -1 && datos.toString().indexOf('base64') != -1) {
        swal({
            title: '¿Desea confirmar el envío de los datos?',
            icon: 'info',
            buttons: {
                cancel: true,
                confirm: true,
            },

        }).then(resultado => {

            if (resultado) {
                document.getElementById('EnviandoDatos').style.display = 'block';
                document.getElementById('paso5').style.display = 'none';
                enviarFinal();
            } else {
                swal("Cancelado", "Puede revisar los datos nuevamente y luego enviarlos", "error");
            }
        });
    } else {
        swal("Datos Faltantes", "Verificar que esten capturadas las tres fotos y la firma", "error");
    }
    
}