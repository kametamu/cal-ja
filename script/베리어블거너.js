function cal() {

    //変数
    //基本ステータス
    var v1 = Number(document.getElementById("v1").value); // 最大攻撃力
    // var v2 = Number(document.getElementById("v2").value); // 最大ダメージエンチャント
    // var v2_1 = Number(document.getElementById("v2_1").value); // 最大ダメージ
    var v2_2 = Number(document.getElementById("v2_2").value); // 戦場バフ
    var v2_3 = $('input[name="v2_3"]').is(':checked') ? parseFloat($('input[name="v2_3"]').val()) : 0; //物攻ポーション

    
    //魔法最大ダメージ
    var v3 = Number(document.getElementById("v3").value); // ブリットストーム細工
    var v4 = $('input[name="v4"]').is(':checked') ? parseFloat($('input[name="v4"]').val()) : 0; //フェイロスシフト
    var v5 = $('input[name="v5"]').is(':checked') ? parseFloat($('input[name="v5"]').val()) : 0; //シューターズアイ
    var v6 = $("#v6 option:selected").attr('value'); //アルカナリンク シューターズアイ
    var v6_1 = $("#v6 option:selected").attr('value1'); //アルカナリンク アルカナダメージ
    var v6_2 = $("#v6 option:selected").attr('value2'); //アルカナリンク ラピッドファイアダメージ

    


    var v7 = Number(document.getElementById("v7").value); // クロスバスター細工
    var v8 = Number(document.getElementById("v8").value); // シューティングラッシュ細工
    var v9 = Number(document.getElementById("v9").value); // ファーアウェイ細工

    //タイトル
    var v12 = $('input[name="v12"]').is(':checked') ? parseFloat($('input[name="v12"]').val()) : 0; //シューティングラッシュマスター
    var v13 = $('input[name="v13"]').is(':checked') ? parseFloat($('input[name="v13"]').val()) : 0; //ブリットストームマスター
    var v14 = $('input[name="v14"]').is(':checked') ? parseFloat($('input[name="v14"]').val()) : 0; //クロスバスターマスター 
    var v15 = $('input[name="v15"]').is(':checked') ? parseFloat($('input[name="v15"]').val()) : 0; //ファーアウェイマスター 



    var v29_0 = Number(document.getElementById("v29_0").value); //追加ダメージ
    var v29_1 =$('input[name="v29_1"]').is(':checked') ? parseFloat($('input[name="v29_1"]').val()) : 0; //弱点分析
    var v29_2 = $('input[name="v29_2"]').is(':checked') ? parseFloat($('input[name="v29_2"]').val()) : 0; //狂暴化
    var v29_3 =$('input[name="v29_3"]').is(':checked') ? parseFloat($('input[name="v29_3"]').val()) : 0; //バトルメロディ

    
    var v30 = $("#v30 option:selected").attr('value'); //アルカナ追加ダメージ
    var v30_1 = $("#v30 option:selected").attr('value1'); // ブリットストーム追加ダメージ
    var v30_2 = $("#v30 option:selected").attr('value2'); // シューティングラッシュ追加ダメージ


    // var v31 = Number(document.getElementById("v31").value); //ライトニングワンド影響力

    var v32_0 = Number(document.getElementById("v32_0").value); //追加クリダメージ
    var v32_1 = $('input[name="v32_1"]').is(':checked') ? parseFloat($('input[name="v32_1"]').val()) : 0; //精霊研磨
    var v32_2 = $('input[name="v32_2"]').is(':checked') ? parseFloat($('input[name="v32_2"]').val()) : 0; //イボナ
    var v32_3 = $('input[name="v32_3"]').is(':checked') ? parseFloat($('input[name="v32_3"]').val()) : 0; //クリ増加セット



    var v34 = $("#v34 option:selected").attr('value'); //エルグ

    // var v35_0 =  $("#v35_0 option:selected").attr('value'); //リンクボーナス
    var v35_1 =  $("#v35_1 option:selected").attr('value'); //精霊育成レベル
    var v35_2 =  $("#v35_2 option:selected").attr('value'); //精霊制御レベル
    

    var v29 //追加ダメージ合計
    v29 = v29_0+v29_1+v29_2+v29_3 ; 
    document.getElementById("v29").value = Math.floor(v29);

    var v32 // 追加クリ合計
    v32 = v32_0+v32_1+v32_2
    document.getElementById("v32").value = Math.floor(v32);

    var v35; //魔攻ポーション未適用合計
    v35 =Number(v35_1)+Number(v35_2)
    document.getElementById("v35").value = v35;

    


    //計算式

    var res0; //計算物攻
    res0 = ((v1-v35)*(1+0.2*v2_3)+v35)*(1+(v2_2/100)*(1+0.2*v2_3));
    document.getElementById("res0").value = Math.floor(res0);

    var res1; //ラピッドファイア
    res1 = (res0*3* (1 + (v29_0+v29_3 )/ 100))+(res0*(6+0.05*v3)* (1 + (v29_0+v29_3 )/ 100));
    document.getElementById("res1").value = Math.floor(res1);

    var res1_1; // ラピッドファイアクリ
    res1_1 = res1 * (2.5 +  v32/ 100)
    document.getElementById("res1_1").value = Math.floor(res1_1);

    var res2; //ヘビィアーティラリー
    res2 = (res0*6* (1 + (v29_0+v29_3 )/ 100))+(res0*(16.25+0.05*v7+0.2*v14)* (1 + (v29_0+v29_3 )/ 100));
    document.getElementById("res2").value = Math.floor(res2);

    var res2_1; //ヘビィアーティラリークリ
    res2_1 = res2 * (2.5 +  v32/ 100)
    document.getElementById("res2_1").value = Math.floor(res2_1);

    var res3; //デバステーションキャノン
    res3 = (res0*12* (1 + (v29_0+v29_3 )/ 100))+(res0*(9.6+0.01*v8+0.12*v12+1*v34+1*v30_2)* (1 + (v29_0+v29_3 )/ 100));
    document.getElementById("res3").value = Math.floor(res3);

    var res3_1//デバステーションキャノンクリ
    res3_1 = res3 * (2.5 +   v32/ 100)
    document.getElementById("res3_1").value = Math.floor(res3_1);

    var res4; //フェイタルスコープ
    res4 = (res0*14* (1 + (v29_0+v29_3 )/ 100))+(res0*(12+0.01*v9+0.15*v15)* (1 + (v29_0+v29_3 )/ 100));
    document.getElementById("res4").value = Math.floor(res4);

    var res4_1//フェイタルスコープクリ
    res4_1 = res4 * (2.5 +   v32/ 100)
    document.getElementById("res4_1").value = Math.floor(res4_1);


   


}

//リセット
function reset() {
    document.getElementById("v1").value = "";
    document.getElementById("v2").value = "";
    document.getElementById("v3").value = "";
    document.getElementById("v7").value = "";
    document.getElementById("v8").value = "";
    document.getElementById("v12").value = "";
    document.getElementById("v14").value = "";
    document.getElementById("v15").value = "";
    document.getElementById("v16").value = "";
    document.getElementById("v29").value = "";
    document.getElementById("v31").value = "";
    document.getElementById("v32").value = "";
    document.getElementById("res1_1").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res2_1").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("res3_1").value = "";
    document.getElementById("res3").value = "";
    document.getElementById("res4_1").value = "";
    document.getElementById("res4").value = "";
    $("input:checkbox").prop("checked", false);


}

