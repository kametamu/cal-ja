function cal() {

    //変数
    //基本ダメージ
    var v1_1 = Number(document.getElementById("v1_1").value); // 最大ダメージ
    var v1_2 = Number(document.getElementById("v1_2").value); // 戦場
    var v1_3 = $('input[name="v1_3"]').is(':checked') ? parseFloat($('input[name="v1_3"]').val()) : 1; //物理攻撃補正

    var v1;//最大ダメージ
    v1 = (v1_1)*v1_3*(1+v1_2/100 * v1_3);
    document.getElementById("v1").value = parseFloat(v1).toFixed(2);


    var v2_1 = $('input[name="v2_1"]').is(':checked') ? parseFloat($('input[name="v2_1"]').val()) : 0; //ネイル
    var v2_2 = $('input[name="v2_2"]').is(':checked') ? parseFloat($('input[name="v2_2"]').val()) : 0; //精霊
    var v2_3 = Number(document.getElementById("v2_3").value); // アルカナ
    // var v2_4 = Number(document.getElementById("v2_4").value); // クリティカル確率
    var v2; // クリティカル確率
    v2 = 30 + v2_1 + v2_2 + v2_3;
    document.getElementById("v2").value = parseFloat(v2).toFixed(2);

    var v3_1 = $('input[name="v3_1"]').is(':checked') ? parseFloat($('input[name="v3_1"]').val()) : 0; //イボナ
    var v3_2 = $('input[name="v3_2"]').is(':checked') ? parseFloat($('input[name="v3_2"]').val()) : 0; //精霊
    var v3_3 = Number(document.getElementById("v3_3").value); // アルバン
    var v3_4 = Number(document.getElementById("v3_4").value); // ロマン農場
    var v3_5 = Number(document.getElementById("v3_5").value); // 人形カバン
    var v3_6 = Number(document.getElementById("v3_6").value); // 2次タイトル
    var v3  // 追加クリダメージ(基本)
    v3 = 250 + v3_1 + v3_2 + v3_3 + v3_4 + v3_5 + v3_6;
    document.getElementById("v3").value = parseFloat(v3).toFixed(2);

    var v4_1 = $('input[name="v4_1"]').is(':checked') ? parseFloat($('input[name="v4_1"]').val()) : 0; //ラベン
    var v4_3 = Number(document.getElementById("v4_3").value); // ロマン農場
    var v4_2 = Number(document.getElementById("v4_2").value); // トーテム
    var v4  // 追加クリダメージ(基本)
    v4 =v4_1 + v4_2 + v4_3;
    document.getElementById("v4").value = parseFloat(v4).toFixed(2);
    var v5 = Number(document.getElementById("v5").value);  // 赤改造強化 追加クリティカル
    var v6 = Number(document.getElementById("v6").value); // 青改造追加ダメージ
    var v7 = Number(document.getElementById("v7").value); // 青改造ボーナスダメージ


    //計算式

    var res1; //青改造 ノンクリ
    res1 = (v1+v6*v1_3*(1+v1_2/100 * v1_3))  * (1 + v4 / 100 + v7 / 100);
    document.getElementById("res1").value = Math.floor(res1);
    

    var res2; //青改造 クリティカル
    res2 = res1 * (v3 / 100);
    document.getElementById("res2").value = Math.floor(res2);

    var res3; //青改造 クリティカル換算
    res3 = res1 + (res2 - res1) * (v2 / 100)
    document.getElementById("res3").value = Math.floor(res3);

    var res4; //赤改造 ノンクリ
    res4 = (v1) * (1 + v4 / 100)
    document.getElementById("res4").value = Math.floor(res4);

    var res5; //赤改造クリティカル
    res5 = res4 * (v3 / 100 + v5 / 100)
    document.getElementById("res5").value = Math.floor(res5);


    var res6; //赤改造 クリティカル換算
    res6 = res4 + (res5 - res4) * (v2 / 100)
    document.getElementById("res6").value = Math.floor(res6);

    var res7; //換算ダメージ 比
    if (res3 < res6) {
        res7 = "赤改造が優勢!"
    } else if (res3 == res6) {
        res7 = "同じ結果"
    } else {
        res7 = "青改造が優勢!"
    }
    document.getElementById("res7").value = res7;
}


//リセット
    function reset() {
        document.getElementById("v1").value = "";
        document.getElementById("v1_1").value = "";
        document.getElementById("v1_2").value = "";
        document.getElementById("v2").value = "";
        document.getElementById("v2_3").value = "";
        document.getElementById("v3").value = "";
        document.getElementById("v3_4").value = "";
        document.getElementById("v3_5").value = "";
        document.getElementById("v3_6").value = "";
        document.getElementById("v4").value = "";
        document.getElementById("v4_2").value = "";
        document.getElementById("v4_3").value = "";
        document.getElementById("v5").value = "";
        document.getElementById("v6").value = "";
        document.getElementById("v7").value = "";
        document.getElementById("res1").value = "";
        document.getElementById("res2").value = "";
        document.getElementById("res3").value = "";
        document.getElementById("res4").value = "";
        document.getElementById("res5").value = "";
        document.getElementById("res6").value = "";
        document.getElementById("res7").value = "";
       $("input:checkbox").prop("checked", false);



    }
