function cal() {

    //変数
    //基本ダメージ
    var v00 = $('input[name="v00"]:checked').attr('value')
    var v00_1 = $('input[name="v00"]:checked').attr('value1'); //種族
    var v0 = Number(document.getElementById("v0").value); // 物理攻撃
    var v1 = $("#v1 option:selected").attr('value'); // マグナムショット ランク
    var v2 = $("#v2 option:selected").attr('value2'); // クラッシュショット ランク
    var v2_1 = $("#v2 option:selected").attr('value'); // クラッシュショット ランク
    var v3 = $("#v3 option:selected").attr('value'); // アージェントショット ランク
    // // var v4 = $("#v4 option:selected").attr('value'); // リボルバー ランク
    //
    var v5 = Number(document.getElementById("v5").value); // 戦場比率

    //クリティカル
    var v6 = Number(document.getElementById("v6").value); // 追加クリティカル
    // //追加ダメージ
    var v7 = Number(document.getElementById("v7").value); // ボーナスダメージ
    //
    // //コンボカード
    var v8 = Number(document.getElementById("v8").value); //マグナムショット
    var v9 = Number(document.getElementById("v9").value); //クラッシュショット


    var v10v = document.getElementsByName("v10"); // 物理攻撃補正
    var v10 = document.getElementById("v10")
    for (var i = 0; i < v10v.length; i++) {
        if (v10v[i].checked)
            v10 = 0
        else
            v10 = 1;
        break;
    }
    var v11 = $("#v11 option:selected").attr('value'); //  武器種類
    var v12 = $("#v12 option:selected").attr('value'); // 矢の種類


    // //細工
    var v13 = Number(document.getElementById("v13").value); //マグナムショットダメージ
    var v18 = Number(document.getElementById("v18").value); //リボルバーダメージ
    var v19 = Number(document.getElementById("v19").value); //破片ダメージ
    //
    //
    var v14v = document.getElementsByName("v14"); // マグナムショット強化セット
    var v14 = document.getElementById("v14")
    for (var i = 0; i < v14v.length; i++) {
        if (v14v[i].checked)
            v14 = 0
        else
            v14 = 1;
        break;
    }
    //
    var v15 = Number(document.getElementById("v15").value); //命中率
    var v16 = Number(document.getElementById("v16").value); //命中した破片数
    //
    var v17v = document.getElementsByName("v17"); // 火矢
    var v17 = document.getElementById("v17")
    for (var i = 0; i < v17v.length; i++) {
        if (v17v[i].checked)
            v17 = 0
        else
            v17 = 1;
        break;
    }

    var v20v = document.getElementsByName("v20"); // アージェントショット
    var v20 = document.getElementById("v20")
    for (var i = 0; i < v20v.length; i++) {
        if (v20v[i].checked)
            v20 = 0
        else
            v20 = 1;
        break;
    }

    var v21v = document.getElementsByName("v21"); // ファイナルショット
    var v21 = document.getElementById("v21")
    for (var i = 0; i < v21v.length; i++) {
        if (v21v[i].checked)
            v21 = 0
        else
            v21 = 1;
        break;
    }


    //

    //計算式
    var res0; //レンジショットダメージ
    res0 = (v0 * (1 + 0.2 * v10) * (1 + (v5 / 100) * (1 + 0.2 * v10))) * (0.01 * v15) * (1 + v7 / 100) * (1 + 1 * v12) * (1 + 0.5 * v17) * (1 + v3 * v20) * (1 * v00 + 2 * v00_1* (1 + 1 * v21 * v11))


    document.getElementById("res0").value = Math.floor(res0);
    var res0c; //レンジショットクリティカル
    res0c = res0 * (2.5 + (v6 / 100))
    document.getElementById("res0c").value = Math.floor(res0c);

    var res0_1; //リボルバー用レンジ
    res0_1 = ((v0 + 5 * v18) * (1 + 0.2 * v10) * (1 + (v5 / 100)) * (1 + 0.2 * v10)) * (0.01 * v15) * (1 + v7 / 100) * (1 + 1 * v12) * (1 + 0.5 * v17) * (1 + v3 * v20) * (1 * v00 + 0 * v00_1)
    document.getElementById("res0_1").value = res0_1.toFixed(2);

    var res1; //マグナムショットダメージ
    res1 = res0 * (1 * v00 + 0.5 * v00_1) * (1 * v1 + 0.1 * v13) * (1 + 0.15 * v14 + v8 / 100)
    document.getElementById("res1").value = Math.floor(res1);

    var res1c; //マグナムショットクリティカル
    res1c = res1 * (2.5 + (v6 / 100))
    document.getElementById("res1c").value = Math.floor(res1c);

    var res2; //クラッシュショット 中央ダメージ
    res2 = res0 * (1 * v00 + 0.5 * v00_1) * (1 * v2 + v9 / 100) * (1 * v16) * (1 + 1 * v11)
    document.getElementById("res2").value = Math.floor(res2);

    var res2c; //クラッシュショット 中央クリティカル
    res2c = res2 * (2.5 + (v6 / 100))
    document.getElementById("res2c").value = Math.floor(res2c);

    var res3; //クラッシュショット 破片ダメージ
    res3 = res0 * (1 * v00 + 0.5 * v00_1) * (1 * v2_1 + 0.035 * v19 + v9 / 100) * (1 + 1 * v11)
    document.getElementById("res3").value = Math.floor(res3);

    var res3c; //破片ダメージクリティカル
    res3c = res3 * (2.5 + (v6 / 100))
    document.getElementById("res3c").value = Math.floor(res3c);


    var res4; //リボルバーダメージ
    res4 = res0_1 * (1 * v00 + 0 * v00_1) * 1.7
    document.getElementById("res4").value = Math.floor(res4);
    var res4_1; //リボルバーダメージ
    res4_1 = res0_1 * (1 * v00 + 0 * v00_1) * 1.8
    document.getElementById("res4_1").value = Math.floor(res4_1);
    var res4_2; //リボルバーダメージ
    res4_2 = res0_1 * (1 * v00 + 0 * v00_1) * 1.85
    document.getElementById("res4_2").value = Math.floor(res4_2);
    var res4_3; //リボルバーダメージ
    res4_3 = res0_1 * (1 * v00 + 0 * v00_1) * 2.05
    document.getElementById("res4_3").value = Math.floor(res4_3);
    var res4_4; //リボルバーダメージ
    res4_4 = res0_1 * (1 * v00 + 0 * v00_1) * 2.5
    document.getElementById("res4_4").value = Math.floor(res4_4);
    var res4_5; //リボルバーダメージ
    res4_5 = res4 + res4_1 + res4_2 + res4_3 + res4_4
    document.getElementById("res4_5").value = Math.floor(res4_5);

    var res4c; //リボルバークリティカル
    res4c = res4 * (2.5 + (v6 / 100))
    document.getElementById("res4c").value = Math.floor(res4c);
    var res4_1c; //リボルバークリティカル
    res4_1c = res4_1 * (2.5 + (v6 / 100))
    document.getElementById("res4_1c").value = Math.floor(res4_1c);
    var res4_2c; //リボルバークリティカル
    res4_2c = res4_2 * (2.5 + (v6 / 100))
    document.getElementById("res4_2c").value = Math.floor(res4_2c);
    var res4_3c; //リボルバークリティカル
    res4_3c = res4_3 * (2.5 + (v6 / 100))
    document.getElementById("res4_3c").value = Math.floor(res4_3c);
    var res4_4c; //リボルバークリティカル
    res4_4c = res4_4 * (2.5 + (v6 / 100))
    document.getElementById("res4_4c").value = Math.floor(res4_4c);
    var res4_5c; //リボルバークリティカル
    res4_5c = res4c + res4_1c + res4_2c + res4_3c + res4_4c
    document.getElementById("res4_5c").value = Math.floor(res4_5c);


}

//リセット
function reset() {
    document.getElementById("v0").value = "";
    document.getElementById("v5").value = "";
    document.getElementById("v6").value = "";
    document.getElementById("v7").value = "";
    document.getElementById("v8").value = "";
    document.getElementById("v9").value = "";
    document.getElementById("v13").value = "";
    document.getElementById("v15").value = "100";
    document.getElementById("v16").value = "5";
    document.getElementById("v18").value = "";
    document.getElementById("v19").value = "";
    document.getElementById("res0").value = "";
    document.getElementById("res0c").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res1c").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("res2c").value = "";
    document.getElementById("res3").value = "";
    document.getElementById("res3c").value = "";
    document.getElementById("res4").value = "";
    document.getElementById("res4c").value = "";
    document.getElementById("res4_1").value = "";
    document.getElementById("res4_1c").value = "";
    document.getElementById("res4_2").value = "";
    document.getElementById("res4_2c").value = "";
    document.getElementById("res4_3").value = "";
    document.getElementById("res4_3c").value = "";
    document.getElementById("res4_4").value = "";
    document.getElementById("res4_4c").value = "";
    document.getElementById("res4_5").value = "";
    document.getElementById("res4_5c").value = "";

}