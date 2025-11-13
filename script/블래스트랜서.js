function cal() {
    // 基本ステータス
    var v1 = Number(document.getElementById("v1").value); // 最大攻撃力
    var v2 = Number(document.getElementById("v2").value); // 戦場比率
    var v2_2 = $('input[name="v2_2"]').is(':checked') ? parseFloat($('input[name="v2_2"]').val()) : 0; // 物理攻撃補正
    var v3 =  Number(document.getElementById("v3").value); // 過熱
    var v3_2 =  Number(document.getElementById("v3_2").value); // マナセル
    if (v3< 35) 
        {v3=0.2*v3,v3_2=0.06*v3_2;
    }else if (v3<70)
    {v3=0.25*v3,v3_2=0.09*v3_2;}
    else if (v3<100)
    {v3=0.32*v3,v3_2=0.12*v3_2;}
    else {v3=0.41*v3,v3_2=0.15*v3_2}   

    var v3_1 = $("#v3_1 option:selected").attr('value'); // アルカナ リンク数
    var v3_12 = $("#v3_1 option:selected").attr('value2'); // アルカナ リンク数
    // 武器とエルグ
    var v4 = $("#v4 option:selected").attr('value'); // 武器
    var v4_1 = $("#v4_1 option:selected").attr('value'); // 魔力弾
    var v4_2 = $('input[name="v4_2"]').is(':checked') ? parseFloat($('input[name="v4_2"]').val()) : 0; // ペット搭乗


    // ボーナスダメージ
    var v5 = Number(document.getElementById("v5").value); // 追加ダメージ
    var v5_1 = $("#v5_1 option:selected").attr('value'); // 青改造
    var v6 = $('input[name="v6"]').is(':checked') ? parseFloat($('input[name="v6"]').val()) : 0; // ヤクブン
    var v7 = $('input[name="v7"]').is(':checked') ? parseFloat($('input[name="v7"]').val()) : 0; // 狂暴
    var v8 = $('input[name="v8"]').is(':checked') ? parseFloat($('input[name="v8"]').val()) : 0; // ベメム

    // 追加クリティカルダメージ
    var v9 = Number(document.getElementById("v9").value); //追加クリティカルダメージ
    var v9_1 = $("#v9_1 option:selected").attr('value'); // 赤改造
    var v10 = $('input[name="v10"]').is(':checked') ? parseFloat($('input[name="v10"]').val()) : 0; // 精霊研磨
    var v11 = $('input[name="v11"]').is(':checked') ? parseFloat($('input[name="v11"]').val()) : 0; // イボナ
    var v12 = $('input[name="v12"]').is(':checked') ? parseFloat($('input[name="v12"]').val()) : 0; // クリティカル増加セット

    // 新スキル
    var v13 = Number(document.getElementById("v13").value); // クロスバスター %
    var v13_1 = Number(document.getElementById("v13_1").value); // インパクトクラッシュ %
    var v14 = Number(document.getElementById("v14").value); // クローザー %
    var v14_1 = Number(document.getElementById("v14_1").value); // スパイラルボルテックス %
    var v15 = Number(document.getElementById("v15").value); // ランスブロー
    var v15_1 = Number(document.getElementById("v15_1").value); // チャージアサルト
    var v16 =  $("#v16 option:selected").attr('value'); // ランスチャージ
    var v16_0 = $("#v16_1 option:selected").attr('value'); // オーバードライブ 突き
    var v16_1 = $("#v16_1 option:selected").attr('value2'); // オーバードライブ 爆発
    var v16_2 = Number(document.getElementById("v16_2").value); // アナイアレーション

    //細工
    var v21 = Number(document.getElementById("v21").value);
    v21 = v21 * 0.05; // クロスバスターダメージ
    var v22 = Number(document.getElementById("v22").value);
    v22 = v22 * 0.1; // クローザーダメージ
    var v23 = Number(document.getElementById("v23").value);
    v23 = v23 * 0.04; // ランスチャージダメージ
    var v24 = Number(document.getElementById("v24").value);
    v24 = v24 * 0.025; // 主目標物ダメージ
    var v25 = Number(document.getElementById("v25").value);
    v25 = v25 * 0.03; // 騎乗突進ダメージ
    var v26 = Number(document.getElementById("v26").value);
    v26 = v26 * 1; // 騎乗突進追加距離

    var v26d; //ランスチャージ距離計算
    if (v26 >= 2) {
        v26d = (1 + (v26 - 1) * 0.2) * 100
    } else {
        v26d = v26 * 100
    }

    var basedamage = ((Number(v1)+Number(v4_1)) * (1 + 0.2 * v2_2) * (1 + (v2 / 100) * (1 + 0.2 * v2_2)))
    document.getElementById("basedamage").value = basedamage.toFixed(1);


    var bonusDamage = (v5 + v5_1 * 1 + v6 + v7 + v8) 
    document.getElementById("bonusDamage").value = bonusDamage.toFixed(2);    // ボーナスダメージ合計

    // 計算式
    function calculateDamage(skillPercent, sg) {
        return basedamage * (Number(skillPercent) + sg) * (1 + bonusDamage / 100);
    }

    function calculateDamage2(baseskill, arkana) {
        return Number(baseskill) + basedamage * Number(arkana)*(1+Number(v3_1)) * (1 + bonusDamage / 100);
    }

    var res1 = calculateDamage(v13, v21); // クロスバスターダメージ
    document.getElementById("res1").value = Math.floor(res1);

    var res2 = res1 + basedamage * v13_1 * (1+Number(v3_1))* (1 + bonusDamage / 100); // インパクトクラッシュダメージ
    document.getElementById("res2").value = Math.floor(res2);

    var res3 = calculateDamage(v14, v22); // クローザーダメージ
    document.getElementById("res3").value = Math.floor(res3);

    var res4 = calculateDamage2(res3, v14_1); // スパイラルボルテックスダメージ
    document.getElementById("res4").value = Math.floor(res4);

    var res5 = calculateDamage(v15, 0); // ランスブローダメージ
    document.getElementById("res5").value = Math.floor(res5);

    var res6 = calculateDamage2(res5, v15_1); // チャージアサルトダメージ
    document.getElementById("res6").value = Math.floor(res6);

    var res7 = basedamage * (Number(v16) + v23) * (2 + v24) * ((1000 + (400 + v26d) * v4_2) / 1000) * (1 + (0.2 + v25) * v4_2) * (1+Number(v4))*(1 + bonusDamage / 100) // ランスチャージダメージ

    document.getElementById("res7").value = Math.floor(res7);

    var res8_0 = basedamage*Number(v16_0)*(1+Number(v3_1))*(1 + bonusDamage / 100); // オーバードライブ突きダメージ
    document.getElementById("res8_0").value = Math.floor(res8_0);

    var res8 = res7*(1+Number(v3_1))+basedamage*Number(v16_1) * (1 + bonusDamage / 100); // オーバードライブ爆発ダメージ
    document.getElementById("res8").value = Math.floor(res8);

    var res9 = basedamage*Number(v16_2)*(1+Number(v3_1))*(1 + bonusDamage / 100); // アナイアレーション突きダメージ
    document.getElementById("res9").value = Math.floor(res9);

    var res10 = res7* (1+Number(v3_1))+(basedamage*Number(v3)+Number(v3_2))* (1+Number(v3_1))*(1+Number(v3_12))* (1 + bonusDamage / 100); // アナイアレーション爆発ダメージ
    document.getElementById("res10").value = Math.floor(res10);

    // クリティカルダメージ計算
    var criticalMultiplier = (v9 + v9_1 * 1 + v10 + v11 + v12);
    document.getElementById("criticalMultiplier").value = criticalMultiplier.toFixed(2);
    document.getElementById("res1_crit").value = Math.floor(res1 * (2.5 + criticalMultiplier / 100));
    document.getElementById("res2_crit").value = Math.floor(res2 * (2.5 + criticalMultiplier / 100));
    document.getElementById("res3_crit").value = Math.floor(res3 * (2.5 + criticalMultiplier / 100));
    document.getElementById("res4_crit").value = Math.floor(res4 * (2.5 + criticalMultiplier / 100));
    document.getElementById("res5_crit").value = Math.floor(res5 * (2.5 + criticalMultiplier / 100));
    document.getElementById("res6_crit").value = Math.floor(res6 * (2.5 + criticalMultiplier / 100));
    document.getElementById("res7_crit").value = Math.floor(res7 * (2.5 + criticalMultiplier / 100));
    document.getElementById("res8_crit0").value = Math.floor(res8_0 * (2.5 + criticalMultiplier / 100));
    document.getElementById("res8_crit").value = Math.floor(res8 * (2.5 + criticalMultiplier / 100));
    document.getElementById("res9_crit0").value = Math.floor(res9 * (2.5 + criticalMultiplier / 100));
    document.getElementById("res10_crit").value = Math.floor(res10 * (2.5 + criticalMultiplier / 100));
}
    
// リセット関数
function reset() {
    // 入力フィールドリセット
    var inputFields = ["v1", "v2", "v3", "v4", "v5", "v9", "v21", "v22", "v23", "v24", "v25", "v26"];
    inputFields.forEach(field => document.getElementById(field).value = "");

    // 結果フィールドリセット
    var resultFields = ["res1", "res2", "res3", "res4", "res5", "res6", "res7",
        "res1_crit", "res2_crit", "res3_crit", "res4_crit", "res5_crit", "res6_crit","res7_crit",
        "res8","res8_0", "res8_crit", "res10","res9", "res9_crit0","res10_crit","res8_crit0"];
    resultFields.forEach(field => document.getElementById(field).value = "");

    // チェックボックスリセット
    $("input:checkbox").prop("checked", false);

    // 選択オプションリセット
    $("#v3").val($("#v3 option:first").val());
    $("#v4").val($("#v4 option:first").val());
}