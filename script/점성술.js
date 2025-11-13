function cal() {
    // 基本ステータス
    var v1 = Number(document.getElementById("v1").value); // 魔法攻撃力
    var v1_2 = Number(document.getElementById("v1_2").value); // ビバビ
    var v1_3 = $('input[name="v1_3"]').is(':checked') ? parseFloat($('input[name="v1_3"]').val()) : 0; //魔攻ポーション
    var v2 = $("#v2 option:selected").attr('value'); // 攻撃カード数
    var v2_1 = $("#v2_1 option:selected").attr('value'); // 攻撃カード種類

    // 武器とエルグ
    var v3 = $("#v3 option:selected").attr('value'); // エルグ
    var v4 = $("#v4 option:selected").attr('value'); // 武器

    // ボーナスダメージ
    var v5 = Number(document.getElementById("v5").value); // 追加ダメージ
    var v6 = $('input[name="v6"]').is(':checked') ? parseFloat($('input[name="v6"]').val()) : 0; // 弱点分析
    var v7 = $('input[name="v7"]').is(':checked') ? parseFloat($('input[name="v7"]').val()) : 0; // 狂暴化
    var v8 = $('input[name="v8"]').is(':checked') ? parseFloat($('input[name="v8"]').val()) : 0; // バトルメロディ

    // 追加クリダメージ
    var v9 = Number(document.getElementById("v9").value); // 追加クリダメージ
    var v10 = $('input[name="v10"]').is(':checked') ? parseFloat($('input[name="v10"]').val()) : 0; // 精霊研磨
    var v11 = $('input[name="v11"]').is(':checked') ? parseFloat($('input[name="v11"]').val()) : 0; // イボナ
    var v12 = $('input[name="v12"]').is(':checked') ? parseFloat($('input[name="v12"]').val()) : 0; // クリ増加セット

    // 新しいスキル
    var v13 = Number(document.getElementById("v13").value); // サイドスラッシュ %
    var v14 = Number(document.getElementById("v14").value); // スターデトネーション %
    var v15 = Number(document.getElementById("v15").value); // ステラブレイク %
    var v16 = Number(document.getElementById("v16").value); // スピンスパート %
    var v17 = Number(document.getElementById("v17").value); // リボルブショック %
    var v19 = Number(document.getElementById("v19").value); // フェイタルクラッシュ %

    //細工
    var v21 = Number(document.getElementById("v21").value);
    v21 = v21 * 0.02; // サイドスラッシュダメージ 
    var v22 = Number(document.getElementById("v22").value);
    v22 = v22 * 0.1; // スターデトネーションダメージ
    var v23 = Number(document.getElementById("v23").value); 
    v23 = v23 * 0.25; // ステラブレイクダメージ
    var v24 = Number(document.getElementById("v24").value); 
    v24 = v24 * 0.02; // リボルブショックダメージ
    var v25 = Number(document.getElementById("v25").value);
    v25 = v25 * 0.3; // フェイタルクラッシュダメージ
    var v26 = Number(document.getElementById("v26").value); 
    v26 = v26*0.12; // スピンスパートダメージ

    var v35_0 =  $("#v35_0 option:selected").attr('value'); //リンクボーナス
    var v35_1 =  $("#v35_1 option:selected").attr('value'); //精霊育成レベル
    var v35_2 =  $("#v35_2 option:selected").attr('value'); //精霊制御レベル
    var v35; //魔攻ポーション未適用合計
    v35 = Number(v35_0)+Number(v35_1)+Number(v35_2)
    document.getElementById("v35").value = v35;



    // ボーナスダメージ総計
    var bonusDamage =(v5 + v6 + v7 + v8)
    document.getElementById("bonusDamage").value= bonusDamage.toFixed(2);


    // 武器とエルグのダメージ合計
    var weaponErg = (Number(v3) + Number(v4))*100
    document.getElementById("weaponErg").value = weaponErg.toFixed(2);

    var res0; //計算魔攻
    res0 = ((v1-v35)*(1+0.2*v1_3)+v35)*(1+(v1_2/100)*(1+0.2*v1_3));
    document.getElementById("res0").value = Math.floor(res0);

    //計算式
    function calculateDamage(skillPercent,sg) {
        return res0 * (skillPercent+sg) * (1+weaponErg/100) * (1+bonusDamage/100);
    }

    var res1 = calculateDamage(v13,v21); // サイドスラッシュ
    document.getElementById("res1").value = Math.floor(res1);

    var res2 = calculateDamage(v14,v22); // スターデトネーション
    document.getElementById("res2").value = Math.floor(res2);

    var res3 = calculateDamage(v15,v23); // ステラブレイク
    document.getElementById("res3").value = Math.floor(res3);

    var res4 = calculateDamage(v16,v26); // スピンスパート
    document.getElementById("res4").value = Math.floor(res4);

    var res5 = calculateDamage(v17,v24); // リボルブショック
    document.getElementById("res5").value = Math.floor(res5);

    var res7 =res0*(v19+v25)*(1+weaponErg/100)*(1+bonusDamage/100+0.05*Number(v2_1))*Number(v2) // フェイタルクラッシュ
    document.getElementById("res7").value = Math.floor(res7);

    // クリティカルダメージ計算
    var criticalMultiplier = (v9 + v10 + v11 + v12) ;
    document.getElementById("criticalMultiplier").value= criticalMultiplier.toFixed(2);    
    
    document.getElementById("res1_crit").value = Math.floor(res1 * (2.5+criticalMultiplier/100));
    document.getElementById("res2_crit").value = Math.floor(res2 * (2.5+criticalMultiplier/100));
    document.getElementById("res3_crit").value = Math.floor(res3 * (2.5+criticalMultiplier/100));
    document.getElementById("res4_crit").value = Math.floor(res4 * (2.5+criticalMultiplier/100));
    document.getElementById("res5_crit").value = Math.floor(res5 * (2.5+criticalMultiplier/100));
    document.getElementById("res7_crit").value = Math.floor(res7 * (2.5+criticalMultiplier/100));
}

// リセット関数
function reset() {
    // 入力フィールドをリセット
    var inputFields = ["v1", "v2", "v5", "v9"];
    inputFields.forEach(field => document.getElementById(field).value = "");

    // 結果フィールドをリセット
    var resultFields = ["res1", "res2", "res3", "res4", "res5", "res6", "res7", 
                        "res1_crit", "res2_crit", "res3_crit", "res4_crit", "res5_crit", "res7_crit"];
    resultFields.forEach(field => document.getElementById(field).value = "");

    // チェックボックスをリセット
    $("input:checkbox").prop("checked", false);

    // 選択オプションをリセット
    $("#v3").val($("#v3 option:first").val());
    $("#v4").val($("#v4 option:first").val());
}