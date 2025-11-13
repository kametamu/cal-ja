function cal() {

    //変数
    //基本ダメージ
    var v1 = $("#v1 option:selected").attr('value'); // ランク別ドールカ追加獲得量 
    var v2 = $("#v2 option:selected").attr('value'); // チェーンエルグ
    var v3 = Number(document.getElementById("v3").value); // ドールカ細工レベル
    

    var v4 = $('input[name="v4"]').is(':checked') ? parseFloat($('input[name="v4"]').val()) : 0; // ダークメイジリンク効果

    var v5 = $('input[name="v5"]').is(':checked') ? parseFloat($('input[name="v5"]').val()) : 0; // マスタータイトル
    var v6 = $('input[name="v6"]').is(':checked') ? parseFloat($('input[name="v6"]').val()) : 1; // 二次タイトル
    var v7 = $('input[name="v7"]').is(':checked') ? parseFloat($('input[name="v7"]').val()) : 0; // エアレンセット効果




    //計算式


    var res1; //ドールカ計算
    res1 = v1*(1+1*v2+0.02*v3+v4+v5*v6)+(1*v1+0.25)*v7+0.25;
    document.getElementById("res1").value = Math.round(res1*100)/100;
    // var res2; //ランチャーダメージ倍率
    // res2 = (100 * (1 + 0.2 * v7) * (1 + (v3 / 100) * (1 + 0.2 * v7))) * (1 * v1 + 0.04 * v10) * (2 + 0.025 * v12) * ((1000 + 400 + (400 + v14d) * v8) / 1400) * (1 + (0.2 + 0.03 * v13) * v8) * (1 + v6 / 100) * v9 * (1 + v4 / 100)
    // document.getElementById("res2").value = Math.floor(res2);

}

//リセット
function reset() {
    document.getElementById("v3").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";
    $("input:checkbox").prop("checked", false);

}