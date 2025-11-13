function cal() {

    //変数
    //基本ステータス
    var v1 = Number(document.getElementById("v1").value); // 魔法攻撃力
    // var v2 = Number(document.getElementById("v2").value); // 最大ダメージエンチャント
    // var v2_1 = Number(document.getElementById("v2_1").value); // 最大ダメージ
    var v2_2 = Number(document.getElementById("v2_2").value); // ビバビ
    var v2_3 = $('input[name="v2_3"]').is(':checked') ? parseFloat($('input[name="v2_3"]').val()) : 0; //魔法攻撃補正

    
    //魔法最大ダメージ
    var v3 = Number(document.getElementById("v3").value); // ライトニングボルト最大ダメージ
    var v4 = $('input[name="v4"]').is(':checked') ? parseFloat($('input[name="v4"]').val()) : 1; //ラチェ状態

    var v7 = Number(document.getElementById("v7").value); // ファイアボール最大ダメージ
    var v8 = Number(document.getElementById("v8").value); // アイススピア最大ダメージ
    //マスタリー
    var v12 = Number(document.getElementById("v12").value); // ボルトマスタリー
    var v14 = Number(document.getElementById("v14").value); // ライトニングマスタリー
    var v15 = Number(document.getElementById("v15").value); // ファイアマスタリー
    var v16 = Number(document.getElementById("v16").value); // アイスマスタリー


    //アイテムタイトル
  
    var v27 = $('input[name="v27"]').is(':checked') ? parseFloat($('input[name="v27"]').val()) : 0; //ローズマリー装備
    var v28 = $('input[name="v28"]').is(':checked') ? parseFloat($('input[name="v28"]').val()) : 0; //ブリアンセット


    var v29_0 = Number(document.getElementById("v29_0").value); //追加ダメージ
    var v29_1 =$('input[name="v29_1"]').is(':checked') ? parseFloat($('input[name="v29_1"]').val()) : 0; //ヤクブン
    var v29_2 = $('input[name="v29_2"]').is(':checked') ? parseFloat($('input[name="v29_2"]').val()) : 0; //狂暴
    var v29_3 =$('input[name="v29_3"]').is(':checked') ? parseFloat($('input[name="v29_3"]').val()) : 0; //ベメム

    
    var v30 = $("#v30 option:selected").attr('value'); //アルカナ追加ダメージ
    var v30_1 = $("#v30 option:selected").attr('value1'); // 属性中魔追加ダメージ
    var v30_2 = $("#v30 option:selected").attr('value2'); // ワンド影響力


    var v31 = Number(document.getElementById("v31").value); //ライトニングワンド影響力

    var v32_0 = Number(document.getElementById("v32_0").value); //追加クリティカルダメージ
    var v32_1 = $('input[name="v32_1"]').is(':checked') ? parseFloat($('input[name="v32_1"]').val()) : 0; //精霊研磨
    var v32_2 = $('input[name="v32_2"]').is(':checked') ? parseFloat($('input[name="v32_2"]').val()) : 0; //イボナ
    var v32_3 = $('input[name="v32_3"]').is(':checked') ? parseFloat($('input[name="v32_3"]').val()) : 0; //クリティカル増加セット


    var v33 = $('input[name="v33"]').is(':checked') ? parseFloat($('input[name="v33"]').val()) : 0; //属性タイトル

    var v34 = $("#v34 option:selected").attr('value'); //エルグ

    var v35_0 =  $("#v35_0 option:selected").attr('value'); //リンクボーナス
    var v35_1 =  $("#v35_1 option:selected").attr('value'); //精霊育成レベル
    var v35_2 =  $("#v35_2 option:selected").attr('value'); //精霊制御レベル
    

    var v29 //追加ダメージ合計
    v29 = v29_0+v29_1+v29_2+v29_3 ; 
    document.getElementById("v29").value = Math.floor(v29);

    var v32 // 追加クリティカル合計
    v32 = v32_0+v32_1+v32_2
    document.getElementById("v32").value = Math.floor(v32);

    var v35; //魔法攻撃補正未適用合計
    v35 = Number(v35_0)+Number(v35_1)+Number(v35_2)
    document.getElementById("v35").value = v35;

    


    //計算式

    var res0; //計算魔攻
    res0 = ((v1-v35)*(1+0.2*v2_3)+v35)*(1+(v2_2/100)*(1+0.2*v2_3));
    document.getElementById("res0").value = Math.floor(res0);

    var res1; //ランジ
    res1 = (res0 * 50 * (1 + 0.15 + 0.005 * v15 + 0.15 * v28)* (1 + (v29_0+v29_3 )/100) + ((res0 * (10.1 + 0.03*v7)) * (1 + 0.15 + 0.005 * v15 + 0.1 * v33 + 0.15 * v28)) * (1 + v29/100 )*(1+ (1*v34 +1*v30_1))) * Number(v30) * v4;
    document.getElementById("res1").value = Math.floor(res1);

    var res1_1; // ランジ クリティカル
    res1_1 = res1 * (2.5 +  v32/ 100)
    document.getElementById("res1_1").value = Math.floor(res1_1);

    var res2; //チェーン
    res2 = ((res0 * 5.55) * (1 + 0.15 + 0.005 * v14 + 0.15 * v28)* (1 + (v29_0+v29_3 )/ 100) + ((res0*(0.4+0.001*v3+0.0003*v31)) * (1+0.28 + 1.5 + 0.3 + 0.01 * v12 + 0.005 * v14 +  0.15 * v28 +0.1*v33))* (1 + v29/ 100)) * Number(v30) ;
    document.getElementById("res2").value = Math.floor(res2);

    var res2_1; //チェーン クリティカル
    res2_1 = res2 * (2.5 +  v32/ 100)
    document.getElementById("res2_1").value = Math.floor(res2_1);


    var res3; //ストーム
    res3 = ((res0 * 8.6) * (1 + 0.15 + 0.005 * v16 + 0.15 * v28+0.15*v27)* (1 + (v29_0+v29_3 )/ 100) + ((res0*(1.3+0.003*v8)) * (1 + 0.15 + 0.005 * v16 + 0.15 * v27 + 0.1 * v33 + 0.15 * v28) * (1 + (v29+v29_1+v29_2+v29_3 )/ 100) *(1+ (1*v34 +1*v30_1)))) * v30 ;
    document.getElementById("res3").value = Math.floor(res3);

    var res3_1//ストーム クリティカル
    res3_1 = res3 * (2.5 +   v32/ 100)
    document.getElementById("res3_1").value = Math.floor(res3_1);

   


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
    $("input:checkbox").prop("checked", false);


}

