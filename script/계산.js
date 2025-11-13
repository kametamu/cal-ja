
function cal() {

    //変数
    //基本ステータス
    var v1 = Number(document.getElementById("v1").value); // 魔法攻撃力
    var v2 = Number(document.getElementById("v2").value); // 最大ダメージエンチャント
    //魔法最大ダメージ
    var v3 = Number(document.getElementById("v3").value); // ライトニングボルト最大ダメージ
    var v4 = Number(document.getElementById("v4").value); // ファイアボルト最大ダメージ
    var v5 = Number(document.getElementById("v5").value); // アイスボルト最大ダメージ
    var v6 = Number(document.getElementById("v6").value); // サンダー最大ダメージ
    var v7 = Number(document.getElementById("v7").value); // ファイアボール最大ダメージ
    var v8 = Number(document.getElementById("v8").value); // アイススピア最大ダメージ
    var v9 = Number(document.getElementById("v9").value); // ライトニングロード最大ダメージ
    var v10 = Number(document.getElementById("v10").value); // ヘイルストーム最大ダメージ
    var v11 = Number(document.getElementById("v11").value); // メテオ最大ダメージ
    //マスタリー
    var v12 = Number(document.getElementById("v12").value); // ボルトマスタリー
    var v13 = Number(document.getElementById("v13").value); // ボルト合成マスタリー
    var v14 = Number(document.getElementById("v14").value); // ライトニングマスタリー
    var v15 = Number(document.getElementById("v15").value); // ファイアマスタリー
    var v16 = Number(document.getElementById("v16").value); // アイスマスタリー
    var v17 = Number(document.getElementById("v17").value); // ライトニングロード フルチャージ ダメージ
    //コンボカード
    var v18 = Number(document.getElementById("v18").value); //ラボルコンボカード
    var v19 = Number(document.getElementById("v19").value); //ファイアボルトコンボカード 
    var v20 = Number(document.getElementById("v20").value); //アイスボルトコンボカード
    var v21 = Number(document.getElementById("v21").value); //サンダーコンボカード 
    var v22 = Number(document.getElementById("v22").value); //ファイアボールコンボカード  
    var v23 = Number(document.getElementById("v23").value); //アイススピアコンボカード 
    var v24 = Number(document.getElementById("v24").value); //ライトニングロードコンボカード 
    var v25 = Number(document.getElementById("v25").value); //ヘイルストームコンボカード
    //アイテムタイトル
    var v26v = document.getElementsByName("v26"); // ヘボナローブ
    var v26 = document.getElementById("v26")
    for (var i = 0; i < v26v.length; i++) {
        if (v26v[i].checked)
            v26 = 0
        else
            v26 = 1;
        break;
    }
    var v27v = document.getElementsByName("v27"); // ローズマリー手袋
    var v27 = document.getElementById("v27")
    for (var i = 0; i < v27v.length; i++) {
        if (v27v[i].checked)
            v27 = 0
        else
            v27 = 1;
        break;

    }

    var v28v = document.getElementsByName("v28"); //海の支配者  
    var v28 = document.getElementById("v28")
    for (var i = 0; i < v28v.length; i++) {
        if (v28v[i].checked)
            v28 = 0;
        else
            v28 = 1;
        break;
    }


    var v29 = Number(document.getElementById("v29").value); //追加ダメージ
    var v30 = $("#v30 option:selected").attr('value'); //チャージ数(6.5倍)
    var v30_1 = $("#v30 option:selected").attr('value2'); //チャージ数(5倍)
    var v30_2 = $("#v30 option:selected").attr('value1'); //チャージ数(1.28倍)



    var v31 = Number(document.getElementById("v31").value); //ライトニングワンド影響力

    var v32v = document.getElementsByName("v32"); //ボルトコンボタイトル
    var v32 = document.getElementById("v32")
    for (var i = 0; i < v32v.length; i++) {
        if (v32v[i].checked)
            v32 = 0;
        else
            v32 = 1;
        break;
    }
    var v33v = document.getElementsByName("v33"); //属性マスタータイトル
        var v33 = document.getElementById("v33") //
    for (var i = 0; i < v33v.length; i++) {
        if (v33v[i].checked)
            v33 = 0;
        else
            v33 = 1;
        break;
    }


    //計算式

    var res1; //ライトニングボルトダメージ 
    res1 = (180 + 0.6 * v1 + 0.44 * v2 + 2.5 * v3 + (7 + 0.75 * v31) ) * (1 + 1.5 + 0.3 + 0.01 * v12 + 0.005 * v14 + (v18 / 100)) * v30_2;
    document.getElementById("res1").value = Math.floor(res1);

    var res1_1; //ライトニングボルト最終比率
    res1_1 = 100 * (res1 * (1 + v29 / 100) - (180 * 2.8 * v30_2)) / (180 * 2.8 * v30_2);
    document.getElementById("res1_1").value = Math.floor(res1_1);

    var res2; //ファイアボルトダメージ 
    res2 = (126 + 0.5 * v1 + 0.4 * v2 + 2.5 * v4 + 5 * v30_1) * (1 + 1.5 + 0.3 + 0.01 * v12 + 0.005 * v15 + 0.15 * v26 + (v19/100)) * v30;
    document.getElementById("res2").value = Math.floor(res2);

    var res2_1; //ファイアボルト最終比率
    res2_1 = 100 * (res2 * (1 + v29/100) - (126 * 2.8 * v30)) / (126 * 2.8 * v30);
    document.getElementById("res2_1").value = Math.floor(res2_1);

    var res1_2; //ラパボルダメージ
    res1_2 = (res1 + res2) * (1 + 0.3 + 0.01 * v13) * (1 + 0.05 * v32 * (1 + v29 / 100));
    document.getElementById("res1_2").value = Math.floor(res1_2);

    var res1_21; //ラパボル最終比率
    res1_21 = 100 * (res1_2 -  (180 * v30_2 + 126 * v30) *2.8 * 1.3) / ((180 * v30_2 + 126 * v30) * 2.8 * 1.3);
    document.getElementById("res1_21").value = Math.floor(res1_21);


    var res3; //アイスボルトダメージ
    res3 = (104 + 0.4 * v1 + 0.08 * v2 + 2.5 * v5 + 10 * v30_1) * (1 + 1.5 + 0.3 + 0.01 * v12 + 0.005 * v16 + 0.15 * v26 + (v20 / 100) + 0.15 * v27) * (1 + v29 / 100);
    document.getElementById("res3").value = Math.floor(res3);

    var res3_1//アイスボルト最終比率
    res3_1 = 100 * (res3 - 104 * 2.8) / (104 * 2.8)
    document.getElementById("res3_1").value = Math.floor(res3_1);

    var res4; //サンダーダメージ
    res4 = (481 + 3.5 * v1 + 0.5 * v2 + 5 * v6) * (1 + 0.15 + 0.005 * v14 + (v21 / 100)+0.1*v33) * (1 + v29 / 100);
    document.getElementById("res4").value = Math.floor(res4);

    var res4_1; //サンダー増加比率
    res4_1 = 100 * (res4 - 481 * 1.15) / (481 * 1.15);
    document.getElementById("res4_1").value = Math.floor(res4_1);

    var res5; //ファイアボール
    res5 = (425 + 3.23 * v1 + 0.077 * v2 + 2.3 * v7) * (1 + 0.15 + 0.005 * v15 + (v22 / 100)+0.1*v33) * (1 + v29 / 100);
    document.getElementById("res5").value = Math.floor(res5);

    var res5_1; //ファイアボール増加比率
    res5_1 = 100 * (res5 - 425 * 1.15) / (425 * 1.15);
    document.getElementById("res5_1").value = Math.floor(res5_1);

    var res6; //アイススピア
    res6 = (336 + 2.3 * v1 + 0.1 * v2 + 5 * v8) * (1 + 0.15 + 0.005 * v16 + 0.15 * v27 + (v23 / 100)+0.1*v33) * (1 + v29 / 100);
    document.getElementById("res6").value = Math.floor(res6);

    var res6_1; //アイススピア増加比率
    res6_1 = 100 * (res6 - 336 * 1.15) / (336 * 1.15);
    document.getElementById("res6_1").value = Math.floor(res6_1);

    var res7; //ライトニングロード
    res7 = (500 + 12 * v1 + 20 * v9) * (3.3+ (v17 / 100)) *(1 + 0.15 + 0.005 * v14 + (v24 / 100)+0.1*v33) * (1 + 0.1 * v28) * (1 + v29 / 100);
    document.getElementById("res7").value = Math.floor(res7);

    var res7_1; //ライトニングロード増加比率
    res7_1 = 100 * (res7 - 500*3.3* 1.15) / (500 * 3.3*1.15);
    document.getElementById("res7_1").value = Math.floor(res7_1);

    var res8; //ヘイルストーム
    res8 = (300 + 3.2 * v1 + 10 * v10) * (1 + 0.15 + 0.005 * v16 + 0.15 * v27 + (v25 / 100)+0.1*v33) * (1 + v29 / 100);
    document.getElementById("res8").value = Math.floor(res8);

    var res8_1; //ヘイルストーム増加比率
    res8_1 = 100 * (res8 - 300 * 1.15) / (300 * 1.15);
    document.getElementById("res8_1").value = Math.floor(res8_1);

    var res9; //メテオ
    res9 = (7517 + (8400 + 160 * v1 + 150 * v11) * (1 + 0.15 + 0.005 * v15)+0.1*v33) * (1 + v29 / 100);
    document.getElementById("res9").value = Math.floor(res9);

    var res9_1; //メテオ増加比率
    res9_1 = 100 * (res9 - (7517 + 8400 * 1.15)) / (7517 + 8400 * 1.15);
    document.getElementById("res9_1").value = Math.floor(res9_1);


}

//リセット
function reset() {
    document.getElementById("v1").value = "";
    document.getElementById("v2").value = "";
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
    document.getElementById("v15").value = "";
    document.getElementById("v16").value = "";
    document.getElementById("v17").value = "";
    document.getElementById("v18").value = "";
    document.getElementById("v19").value = "";
    document.getElementById("v20").value = "";
    document.getElementById("v21").value = "";
    document.getElementById("v22").value = "";
    document.getElementById("v23").value = "";
    document.getElementById("v24").value = "";
    document.getElementById("v25").value = "";
    document.getElementById("v29").value = "";
    document.getElementById("v31").value = "";
    document.getElementById("res1_1").value = "";
    document.getElementById("res2_1").value = "";
    document.getElementById("res1_21").value = "";
    document.getElementById("res3_1").value = "";
    document.getElementById("res4_1").value = "";
    document.getElementById("res5_1").value = "";
    document.getElementById("res6_1").value = "";
    document.getElementById("res7_1").value = "";
    document.getElementById("res8_1").value = "";
    document.getElementById("res9_1").value = "";

}

