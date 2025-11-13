function cal() {
    var v1 = Number(document.getElementById("v1").value); // 魔法攻撃力
    // var v2 = Number(document.getElementById("v2").value); // 最大ダメージエンチャント
    var v3 = Number(document.getElementById("v3").value); // ファイアボルト最大ダメージ
    var v4 = Number(document.getElementById("v4").value); // ライトニングボルト最大ダメージ
    var v5 = Number(document.getElementById("v5").value); // ファイアマスタリー
    var v6 = Number(document.getElementById("v6").value); // ライトニングマスタリー
    var v7 = Number(document.getElementById("v7").value); // ボルトマスタリー
    var v8 = Number(document.getElementById("v8").value); // ボルトコンビネーション

    var v9 = $('input[name="v9"]').is(':checked') ? parseFloat($('input[name="v9"]').val()) : 0; //ヘボナ

    var v10_0 = Number(document.getElementById("v10_0").value); // 追加クリティカル
    var v10_1 = $('input[name="v10_1"]').is(':checked') ? parseFloat($('input[name="v10_1"]').val()) : 0; //精霊研磨
    var v10_2 = $('input[name="v10_2"]').is(':checked') ? parseFloat($('input[name="v10_2"]').val()) : 0; //イボナ

    var v11 = Number(document.getElementById("v11").value); // ファイアボルトコンボカード
    var v12 = Number(document.getElementById("v12").value); //ライトニングボルトコンボカード
    var v13 = Number(document.getElementById("v13").value); // ビバーチェ比率
    var v14_0 =  $("#v14_0 option:selected").attr('value'); //リンクボーナス
    var v14_1 =  $("#v14_1 option:selected").attr('value'); //精霊育成レベル
    var v14_2 =  $("#v14_2 option:selected").attr('value'); //精霊制御レベル

    var v15 = $('input[name="v15"]').is(':checked') ? parseFloat($('input[name="v15"]').val()) : 0; //ボルトコンボタイトル
    var v15_1 = $("#v15_1 option:selected").attr('value'); // アルカナリンク 武器ボーナス
    var v15_2 = $("#v15_2 option:selected").attr('value'); // 2次タイトル

    var v16 = $('input[name="v16"]').is(':checked') ? parseFloat($('input[name="v16"]').val()) : 0; //魔法攻撃補正


    var v17_0 = Number(document.getElementById("v17_0").value); //追加ダメージ
    var v17_1 = $('input[name="v17_1"]').is(':checked') ? parseFloat($('input[name="v17_1"]').val()) : 0; //ヤクブン
    var v17_2 = $('input[name="v17_2"]').is(':checked') ? parseFloat($('input[name="v17_2"]').val()) : 0; //狂暴
    var v17_3 = $('input[name="v17_3"]').is(':checked') ? parseFloat($('input[name="v17_3"]').val()) : 0; //ベメム

    var v18 = $("#v18 option:selected").attr('value'); //チャージ数(6.5倍)
    var v18_1 = $("#v18 option:selected").attr('value2'); //チャージ数(5倍)
    var v18_2 = $("#v18 option:selected").attr('value1'); //チャージ数(1.28倍)
    var v18_3 = $('input[name="v18_3"]').is(':checked') ? parseFloat($('input[name="v18_3"]').val()) : 0; //一度に5チャージ

    var v19 = Number(document.getElementById("v19").value); //ライトニングワンド影響力
    var v20 = Number(document.getElementById("v20").value); //詠唱速度オプション

    var v21 = $("#v21 option:selected").attr('value'); // エレメント
    var v21_1 = $("#v21 option:selected").attr('value2'); // エレメント

    var v21_2 = $("#v21_2 option:selected").attr('value'); // エルグ


    var v22 = $("#v22 option:selected").attr('value'); //ファイアボルト ランク
    var v23 = $("#v23 option:selected").attr('value'); //ライトニングボルト ランク
    var v24 = $("#v24 option:selected").attr('value'); //ボルトマスタリー ランク
    var v25 = $("#v25 option:selected").attr('value'); //ボルトコンボマスタリー ランク
    var v26 = $("#v26 option:selected").attr('value'); //メウェマ ランク
    var v27 = $("#v27 option:selected").attr('value'); //ライトニングマスタリー ランク
    var v28 = $("#v28 option:selected").attr('value'); //ファイアマスタリー ランク

    var v29 = $('input[name="v29"]').is(':checked') ? parseFloat($('input[name="v29"]').val()) : 0; //ブリアン
    var v30 = $('input[name="v30"]').is(':checked') ? parseFloat($('input[name="v30"]').val()) : 0; //クリティカル増加効果
    

    var v30_1 ; //クリティカル増加効果用の変数
    if (v30>0 || 1*v21_1 >0){   
        v30_1 = 1   
    }
    else{
        v30_1 = 0
    }
    document.getElementById("v30_1").value = v30_1;



    var v17; //追加ダメージ
    v17 = v17_0 + v17_1 + v17_2 + v17_3;
    document.getElementById("v17").value = v17;

    var v10; //追加クリティカル
    v10 = v10_0 + v10_1 + v10_2 + 7*v30_1;
    document.getElementById("v10").value = v10;

    var v14; //魔法攻撃補正未適用合計
    v14 = Number(v14_0)+Number(v14_1)+Number(v14_2)
    document.getElementById("v14").value = v14;

    
    var res0; //計算魔攻
    res0 = ((v1-v14)*(1+0.2*v16)+v14)*(1+(v13/100)*(1+0.2*v16));
    document.getElementById("res0").value = Math.floor(res0);


    var res1; //ファイアボルトダメージ

    res1 = (res0 * (Number(v22)+0.002+0.001*v3) ) * v18 * (1 + 0.01 * v26 + 0.01 * v24 + 0.01 * v28 + 0.01 * v7 + 0.005 * v5 + 0.15 * v9 + (v11 / 100) + 0.15 * v29+0.01*v15_2) * (1 + v17 / 100)*(1+Number(v15_1));

    document.getElementById("res1").value = Math.floor(res1);

    var res1_1; //ファイアボルト クリティカル

    res1_1 = res1 * (2.5 + (v10 / 100));

    document.getElementById("res1_1").value = Math.floor(res1_1);

    var res2; //ライトニングボルトダメージ

    res2 = (res0 * (Number(v23)+0.002+0.001*v4+0.0003*v19) ) * (1+Number(v18_2) +0.01 * v26 + 0.01 * v24 + 0.01 * v27 + 0.01 * v7 + 0.005 * v6 + (v12 / 100) + 0.15 * v29+0.01*v15_2) * (1 + v17 / 100)*(1+Number(v15_1));

    document.getElementById("res2").value = Math.floor(res2);
    
    var res2_1; //ライトニングボルト クリティカル

    res2_1 = res2 * (2.5 + (v10 / 100));

    document.getElementById("res2_1").value = Math.floor(res2_1);

    



    var res4; //ボルトコンビネーション5 ダメージ

    res4 = (res1+res2) *0.85* (1 + 0.01 * v25 + 0.01 * v8) * (1 + 0.05 * v15) *(1+ 0.01 * (1*v21+1*v21_2));

    document.getElementById("res4").value = Math.floor(res4);




    var res7; //ボルトコンビネーション クリティカル

    res7 = res4 * (2.5 + (v10 / 100));

    document.getElementById("res7").value = Math.floor(res7);

    var res8; //dps

    if ((v18_3==0) &&(v18 > 3) && (v20 >= 91.2)) {
        res8 = res4 / 0.5182
    } else if ((v18_3==0) && (v18  > 3)) {
        res8 = res4 / (3 * (1 - v20 / 100) + 0.252)
    } else if ((v20 >= 83)) {
        res8 = res4 / 0.5182
    } else {
        res8 = res4 / (1.5 * (1 - v20 / 100) + 0.252)
    }


    document.getElementById("res8").value = Math.floor(res8);

    var res9; //シングルファントム回数

    if ((v18_3==0) && ( v18 > 3) && (v20 >= 91.2)) {
        res9 = 39
    } else if ((v18_3==0) && (v18 > 3)) {
        res9 = 20 / (3 * (1 - v20 / 100) + 0.252)
    } else if ((v20 >= 83)) {
        res9 = 39
    } else {
        res9 = 20 / (1.5 * (1 - v20 / 100) + 0.252)
    }

    document.getElementById("res9").value = Math.floor(res9);

    var res10_0; //ボルトコンボ上昇 換算
    res10_0 = res4
    document.getElementById("res10_0").value = Math.floor(res10);

    var res10; //ボルトコンボ上昇 換算
    res10 =  (res1+res2) *0.85* (1 + 0.01 * v25 + 0.01 * (v8+1)) * (1 + 0.05 * v15) *(1+ 0.01 * (1*v21+1*v21_2));

    var res11; //ボルトマスタリー上昇換算
    res11 =((res0 * (Number(v22)+0.002+0.001*v3) ) * v18 * (1 + 0.01 * v26 + 0.01 * v24 + 0.01 * v28 + 0.01 * (v7+1) + 0.005 * v5 + 0.15 * v9 + (v11 / 100) + 0.15 * v29+0.01*v15_2) * (1 + v17 / 100)*(1+Number(v15_1))+(res0 * (Number(v23)+0.002+0.001*v6+0.0003*v19) ) * (1+Number(v18_2) +0.01 * v26 + 0.01 * v24 + 0.01 * v27 + 0.01 * (v7+1) + 0.005 * v6 + (v12 / 100) + 0.15 * v29+0.01*v15_2) * (1 + v17 / 100)*(1+Number(v15_1)))*0.85* (1 + 0.01 * v25 + 0.01 * (v8)) * (1 + 0.05 * v15) *(1+ 0.01 * (1*v21+1*v21_2));
    document.getElementById("res11").value = Math.floor(res11);

    var res12; //ファイアマスタリー上昇換算
    res12 = ((res0 * (Number(v22)+0.002+0.001*v3) ) * v18 * (1 + 0.01 * v26 + 0.01 * v24 + 0.01 * v28 + 0.01 * (v7) + 0.005 * (v5+1) + 0.15 * v9 + (v11 / 100) + 0.15 * v29+0.01*v15_2) * (1 + v17 / 100)*(1+Number(v15_1))+(res0 * (Number(v23)+0.002+0.001*v6+0.0003*v19) ) * (1+Number(v18_2) +0.01 * v26 + 0.01 * v24 + 0.01 * v27 + 0.01 * v7 + 0.005 * v6 + (v12 / 100) + 0.15 * v29+0.01*v15_2) * (1 + v17 / 100)*(1+Number(v15_1)))*0.85* (1 + 0.01 * v25 + 0.01 * (v8)) * (1 + 0.05 * v15) *(1+ 0.01 * (1*v21+1*v21_2));
    document.getElementById("res12").value = Math.floor(res12);

    var res13; //魔攻上昇換算
    res13 =((((v1+4-v14)*(1+0.2*v16)+v14)*(1+(v13/100)*(1+0.2*v16)) * (Number(v22)+0.002+0.001*v3) ) * v18 * (1 + 0.01 * v26 + 0.01 * v24 + 0.01 * v28 + 0.01 * (v7) + 0.005 * (v5) + 0.15 * v9 + (v11 / 100) + 0.15 * v29+0.01*v15_2) * (1 + v17 / 100)*(1+Number(v15_1))+(res0 * (Number(v23)+0.002+0.001*v6+0.0003*v19) ) * (1+Number(v18_2) +0.01 * v26 + 0.01 * v24 + 0.01 * v27 + 0.01 * v7 + 0.005 * v6 + (v12 / 100) + 0.15 * v29+0.01*v15_2) * (1 + v17 / 100)*(1+Number(v15_1)))*0.85* (1 + 0.01 * v25 + 0.01 * (v8)) * (1 + 0.05 * v15) *(1+ 0.01 * (1*v21+1*v21_2));

    var res14; //ファイアボルト上昇換算
    res14 =((res0 * (Number(v22)+0.002+0.001*(v3+1)) ) * v18 * (1 + 0.01 * v26 + 0.01 * v24 + 0.01 * v28 + 0.01 * (v7) + 0.005 * v5+ 0.15 * v9 + (v11 / 100) + 0.15 * v29+0.01*v15_2) * (1 + v17 / 100)*(1+Number(v15_1))+(res0 * (Number(v23)+0.002+0.001*v6+0.0003*v19) ) * (1+Number(v18_2) +0.01 * v26 + 0.01 * v24 + 0.01 * v27 + 0.01 * v7 + 0.005 * v6 + (v12 / 100) + 0.15 * v29+0.01*v15_2) * (1 + v17 / 100)*(1+Number(v15_1)))*0.85* (1 + 0.01 * v25 + 0.01 * (v8)) * (1 + 0.05 * v15) *(1+ 0.01 * (1*v21+1*v21_2));
    document.getElementById("res14").value = Math.floor(res14);

    var res15_0; //ボルトコンボ比率換算
    res15_0 = res10 / res10_0;
    document.getElementById("res15_0").value = Math.round(res15_0);

    var res15_1; //ボルトマスタリー比率換算
    res15_1 = (res15_0 -1)/(res11 / res10_0 -1);
    document.getElementById("res15_1").value = Math.round(res15_1 * 10)/10;

    var res15_2; //ファイアマスタリー比率換算
    res15_2 = (res15_0 -1)/ (res12 / res10_0 -1);
    document.getElementById("res15_2").value = Math.round(res15_2*10)/10;

    var res15_3; //魔攻比率換算
    res15_3 = (res15_0 -1)/ (res13 / res10_0 -1);
    document.getElementById("res15_3").value = Math.round(res15_3*10)/10;

    var res15_4; //ファイアボルト比率換算
    res15_4 = (res15_0 -1)/ (res14 / res10_0-1);
    document.getElementById("res15_4").value = Math.round(res15_4*10)/10;
    

}

function reset() {
    document.getElementById("v1").value = "";
    // document.getElementById("v2").value = "";
    document.getElementById("v3").value = "";
    document.getElementById("v4").value = "";
    document.getElementById("v5").value = "";
    document.getElementById("v6").value = "";
    document.getElementById("v7").value = "";
    document.getElementById("v8").value = "";
    document.getElementById("v10").value = "";
    document.getElementById("v11").value = "";
    document.getElementById("v12").value = "";
    document.getElementById("v13").value = "";
    document.getElementById("v14").value = "";
    document.getElementById("v17").value = "";
    document.getElementById("res0").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res1_1").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("res2_1").value = "";
    document.getElementById("res4").value = "";
    // document.getElementById("res5").value = "";
    document.getElementById("res7").value = "";
    document.getElementById("res8").value = "";
    document.getElementById("res9").value = "";
    document.getElementById("res15_1").value = "";
    document.getElementById("res15_2").value = "";
    document.getElementById("res15_3").value = "";
    document.getElementById("res15_4").value = "";
    document.getElementById("res15_0").value = "";
    $("input:checkbox").prop("checked", false);

}