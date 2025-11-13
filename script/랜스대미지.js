function cal() {

    //変数
    //基本ダメージ
    var v1 = $("#v1 option:selected").attr('value'); // ランスチャージ ランク別ダメージ
    var v2 = Number(document.getElementById("v2").value); // 最大ダメージ
    var v3 = Number(document.getElementById("v3").value); // 戦場比率

    //クリティカル
    var v4 = Number(document.getElementById("v4").value); // ボーナスダメージ
    //追加ダメージ
    var v5 = Number(document.getElementById("v5").value); // 追加クリティカルダメージ

    //コンボカード
    var v6 = Number(document.getElementById("v6").value); //ランスチャージコンボカード

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

    var v8v = document.getElementsByName("v8"); // ペット
    var v8 = document.getElementById("v8")
    for (var i = 0; i < v8v.length; i++) {
        if (v8v[i].checked)
            v8 = 0
        else
            v8 = 1;
        break;
    }


    var v9 = $("#v9 option:selected").attr('value'); // ランス種類


    //細工
    var v10 = Number(document.getElementById("v10").value); //ランスチャージダメージ
    // var v11 = Number(document.getElementById("v11").value); //ランスチャージ距離
    var v13 = Number(document.getElementById("v13").value); //騎乗突進ダメージ
    var v12 = Number(document.getElementById("v12").value); //主目標物ダメージ
    var v14 = Number(document.getElementById("v14").value); //騎乗突進追加距離


    //計算式

    var v14d; //ランスチャージ距離計算
    if (v14 >= 2) {
        v14d = (1 + (v14 - 1) * 0.2) * 100
    } else {
        v14d = v14 * 1 * 100
    }
    document.getElementById("v14d").value = Math.floor(v14d);

    var res1; //ランスチャージダメージ
    res1 = (v2 * (1 + 0.2 * v7) * (1 + (v3 / 100) * (1 + 0.2 * v7))) * (1 * v1 + 0.04 * v10) * (2 + 0.025 * v12) * ((1000 + 400 + (400 + v14d) * v8) / 1400) * (1 + (0.2 + 0.03 * v13) * v8) * (1 + v6 / 100) * v9 * (1 + v4 / 100)
    document.getElementById("res1").value = Math.floor(res1);

    var res2; //ランスチャージダメージ倍率
    res2 = (100 * (1 + 0.2 * v7) * (1 + (v3 / 100) * (1 + 0.2 * v7))) * (1 * v1 + 0.04 * v10) * (2 + 0.025 * v12) * ((1000 + 400 + (400 + v14d) * v8) / 1400) * (1 + (0.2 + 0.03 * v13) * v8) * (1 + v6 / 100) * v9 * (1 + v4 / 100)
    document.getElementById("res2").value = Math.floor(res2);

    var res3; //ランスチャージクリティカルダメージ
    res3 = res1 * (2.5 + v5 / 100)
    document.getElementById("res3").value = Math.floor(res3);


}

//リセット
function reset() {
    document.getElementById("v2").value = "";
    document.getElementById("v3").value = "";
    document.getElementById("v4").value = "";
    document.getElementById("v5").value = "";
    document.getElementById("v6").value = "";
    document.getElementById("v10").value = "";
    document.getElementById("v12").value = "";
    document.getElementById("v13").value = "";
    document.getElementById("v14").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("res3").value = "";

}