function cal() {

    //変数
    //基本ダメージ
    var v1 = $("#v1 option:selected").attr('value'); // ジャッジメント ランク別ダメージ
    var v2 = Number(document.getElementById("v2").value); // 最大ダメージ
    var v6 = Number(document.getElementById("v6").value); // 最小ダメージ
    var v3 = Number(document.getElementById("v3").value); // 戦場比率
    //クリティカル
    var v4 = Number(document.getElementById("v4").value); // ボーナスダメージ
    //追加ダメージ
    var v5 = Number(document.getElementById("v5").value); // 追加クリティカルダメージ

    //アイテムタイトル
    var v7v = document.getElementsByName("v7"); // 物理攻撃補正
    var v7 = document.getElementById("v7")
    for (var i = 0; i < v7v.length; i++) {
        if (v7v[i].checked)
            v7 = 0
        else
            v7 = 1;
        break;
    }

    var v8v = document.getElementsByName("v8"); // ジャッジメントセット
    var v8 = document.getElementById("v8")
    for (var i = 0; i < v8v.length; i++) {
        if (v8v[i].checked)
            v8 = 0
        else
            v8 = 1;
        break;
    }


    var v9 = $("#v9 option:selected").attr('value'); // 処刑レベル

    var v10v = document.getElementsByName("v10"); // ジャッジメントセット
    var v10 = document.getElementById("v10")
    for (var i = 0; i < v10v.length; i++) {
        if (v10v[i].checked)
            v10 = 0
        else
            v10 = 1;
        break;
    }

    var v11v = document.getElementsByName("v11"); // ジャッジメントセット
    var v11 = document.getElementById("v11")
    for (var i = 0; i < v11v.length; i++) {
        if (v11v[i].checked)
            v11 = 0
        else
            v11 = 1;
        break;
    }
    var v12v = document.getElementsByName("v12"); // ジャッジメントセット
    var v12 = document.getElementById("v12")
    for (var i = 0; i < v12v.length; i++) {
        if (v12v[i].checked)
            v12 = 0
        else
            v12 = 1;
        break;
    }
    var v13v = document.getElementsByName("v13"); // サプライズショット
    var v13 = document.getElementById("v13")
    for (var i = 0; i < v13v.length; i++) {
        if (v13v[i].checked)
            v13 = 0
        else
            v13 = 1;
        break;
    }
    var v14v = document.getElementsByName("v14"); // 爆サプライズマスタリー
    var v14 = document.getElementById("v14")
    for (var i = 0; i < v14v.length; i++) {
        if (v14v[i].checked)
            v14 = 0
        else
            v14 = 1;
        break;
    }
    var v15v = document.getElementsByName("v15"); // サプライズショット魔器
    var v15 = document.getElementById("v15")
    for (var i = 0; i < v15v.length; i++) {
        if (v15v[i].checked)
            v15 = 0
        else
            v15 = 1;
        break;
    }
    var v16v = document.getElementsByName("v16"); // サプライズショットセット
    var v16 = document.getElementById("v16")
    for (var i = 0; i < v16v.length; i++) {
        if (v16v[i].checked)
            v16 = 0
        else
            v16 = 1;
        break;
    }
    var v17v = document.getElementsByName("v17"); // ジャッジメントセット
    var v17 = document.getElementById("v17")
    for (var i = 0; i < v17v.length; i++) {
        if (v17v[i].checked)
            v17 = 0
        else
            v17 = 1;
        break;
    }
    var v18v = document.getElementsByName("v18"); // ジャッジメントセット
    var v18 = document.getElementById("v18")
    for (var i = 0; i < v18v.length; i++) {
        if (v18v[i].checked)
            v18 = 0
        else
            v18 = 1;
        break;
    }
    var v19v = document.getElementsByName("v19"); // ジャッジメントセット
    var v19 = document.getElementById("v19")
    for (var i = 0; i < v19v.length; i++) {
        if (v19v[i].checked)
            v19 = 0
        else
            v19 = 1;
        break;
    }

    var v20 = $("#v20 option:selected").attr('value'); // カルのセレナーデ

    var v00 = $('input[name="v00"]:checked').attr('value')
    var v00_1 = $('input[name="v00"]:checked').attr('value1'); //種族
    var v00_2 = $('input[name="v00"]:checked').attr('value2'); //種族

    var v21v = document.getElementsByName("v21"); // ジャッジメントセット
    var v21 = document.getElementById("v21")
    for (var i = 0; i < v21v.length; i++) {
        if (v21v[i].checked)
            v21 = 0
        else
            v21 = 1;
        break;
    }

    var v22v = document.getElementsByName("v22"); // ジャッジメントセット
    var v22 = document.getElementById("v22")
    for (var i = 0; i < v22v.length; i++) {
        if (v22v[i].checked)
            v22 = 0
        else
            v22 = 1;
        break;
    }
    var v23v = document.getElementsByName("v23"); // ジャッジメントセット
    var v23 = document.getElementById("v23")
    for (var i = 0; i < v23v.length; i++) {
        if (v23v[i].checked)
            v23 = 0
        else
            v23 = 1;
        break;
    }
    var v24v = document.getElementsByName("v24"); // ジャッジメントセット
    var v24 = document.getElementById("v24")
    for (var i = 0; i < v24v.length; i++) {
        if (v24v[i].checked)
            v24 = 0
        else
            v24 = 1;
        break;
    }

        var v25 = $("#v25 option:selected").attr('value'); //ピアシング



    //計算式


    var res1_1; //ジャッジメント最小
    res1_1 = (v6 * (1 + 0.2 * v7) * (1 + (v3 / 100) * (1 + 0.2 * v7))) * v1 * (1 + 0.1 * v8) * (1 * v9) * (1 + v4 / 100)
    document.getElementById("res1_1").value = Math.floor(res1_1);

    var res1; //ジャッジメント最大
    res1 = (v2 * (1 + 0.2 * v7) * (1 + (v3 / 100) * (1 + 0.2 * v7))) * v1 * (1 + 0.1 * v8) * (1 * v9) * (1 + v4 / 100)
    document.getElementById("res1").value = Math.floor(res1);

    var res2; // (クリティカル含む)ダメージ倍率
    res2 = (100 * (1 + 0.2 * v7) * (1 + (v3 / 100) * (1 + 0.2 * v7))) * v1 * (1 + 0.1 * v8) * (1 * v9) * (1 + v4 / 100)
    document.getElementById("res2").value = Math.floor(res2);

    var res2_1; // (クリティカル含む)ダメージ倍率
    res2_1 = (100 * (1 + 0.2 * v7) * (1 + (v3 / 100) * (1 + 0.2 * v7))) * v1 * (1 + 0.1 * v8) * (1 * v9) * (1 + v4 / 100) * (2.5 + 1 * v20 + v5 / 100)
    document.getElementById("res2_1").value = Math.floor(res2_1);


    var res3; //ジャッジメント クリティカル最大ダメージ
    res3 = res1 * (2.5 + 1 * v20 + v5 / 100)
    document.getElementById("res3").value = Math.floor(res3);

    var res3_1; //ジャッジメント クリティカル最小ダメージ
    res3_1 = res1_1 + res1 * (1.5 + 1 * v20 + v5 / 100)
    document.getElementById("res3_1").value = Math.floor(res3_1);

    var res4; //ハシディム 一撃 HP 55万
    res4 = res3_1 * (1 + 0.25 * v10 + (0.03 * v11 + 0.05 * v12) * v10) * (1 + 0.1 * v13 + (0.06 * v14 + 0.03 * v15) * v13+ 0.15 * v16 * v13) * (1 + 0.15 * v17) * (1 + 0.1 * v18) * (1 + 0.05 * v19);
    document.getElementById("res4").value = Math.floor(res4);

    var res4_1; //ハシディム 一撃 HP 55万
    res4_1 = res3 * (1 + 0.25 * v10 + (0.03 * v11 + 0.05 * v12) * v10) * (1 + 0.1 * v13 + (0.06 * v14 + 0.03 * v15) * v13+ 0.15 * v16 * v13) * (1 + 0.15 * v17) * (1 + 0.1 * v18) * (1 + 0.05 * v19);
    document.getElementById("res4_1").value = Math.floor(res4_1);

    var res5; //ハシディム 最小ダメージ
    res5 = res4 * (1 - (29 * Math.asinh(((150 * (1 - 0.11 * v22) - 20 * v21 - 7 * v23 - 10 * v00_1 - 15 * v00_2 - 25 * v24 - 1*v25)) / 24) + 1) / 100);
    document.getElementById("res5").value = Math.floor(res5);

    var res5_1; //ハシディム 最大ダメージ
    res5_1 = res4_1 * (1 - (29 * Math.asinh(((150 * (1 - 0.11 * v22) - 20 * v21 - 7 * v23 - 10 * v00_1 - 15 * v00_2 - 25 * v24 - 1*v25)) / 24) + 1) / 100);
    document.getElementById("res5_1").value = Math.floor(res5_1);

    var res6; //ディフェンス適用(自)
    if (res5_1 < 550000 && res5 < 550000) {
        res6 = "一撃不可";
    } else if (res5 < 550000 && res5_1 > 550000) {
        res6 = "一撃の可能性あり";
    } else {
        res6 = "一撃確定";
    }
    document.getElementById("res6").value = res6;

}

//リセット
function reset() {
    document.getElementById("v2").value = "";
    document.getElementById("v3").value = "";
    document.getElementById("v4").value = "";
    document.getElementById("v5").value = "";
    document.getElementById("v6").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res1_1").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("res3").value = "";
    document.getElementById("res3_1").value = "";
    document.getElementById("res4").value = "";
    document.getElementById("res4_1").value = "";
    document.getElementById("res5").value = "";
    document.getElementById("res5_1").value = "";
    document.getElementById("res6").value = "";

}