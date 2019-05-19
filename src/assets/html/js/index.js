function checkMobile(tel) {
    var reg = /^1[23456789]{1}[0-9]{9}$/;
    if (!reg.test(tel)) {
        layer.open({
            content: '手機格式不正確'
            ,skin: 'msg'
            ,time: 2 //2秒后自动关闭
        });

        return false;
    }
    return true;
}

/*獲取驗證碼*/
$("#form-yzm").click(function () {
    var mobile = $("#mobile").val();
    yzm(mobile);
})
var off = true;
var i = 60;

function yzm(mobile) {
    var login_name = mobile ? mobile : $("#mobile").val();
    if (off) {
        var telRge = checkMobile(login_name);
        if (!telRge) {
            return false;
        }
        $("#form-yzm").text(i + "s").css("color", "#ccc");
        code();
        /*$.ajax({
            url:url,
            type:"post",
            data:{mobile:mobile},
            success:function(re){
                if(re.code==200){
                    code();
                }else{
                    layer.open({
                        content: re.msg
                        , skin: 'msg'
                        , time: 2 //2秒后自动关闭
                    });
                }
            },
            error:function(){
                layer.open({
                    content: '網絡繁忙，稍後重試'
                    , skin: 'msg'
                    , time: 2 //2秒后自动关闭
                });

            }
        })*/
    }
}

function code() {  //倒计时
    var setin = setInterval(function () {
        if (i > 0) {
            off = false;
            --i;
            $("#form-yzm").text(i + "s");

        } else {
            clearInterval(setin);
            $("#form-yzm").text("重新獲取");
            off = true;
            i = 60;
        }
    }, 1000)
}