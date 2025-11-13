function cal() {
    var v1 = Number(document.getElementById("v1").value); // 魔法攻撃力
    // var v2 = Number(document.getElementById("v2").value); // 最大ダメージエンチャント
    var v3 = Number(document.getElementById("v3").value); // サンダー最大ダメージ
    var v4 = Number(document.getElementById("v4").value); // ファイアボール最大ダメージ
    var v5 = Number(document.getElementById("v5").value); // アイススピア最大ダメージ
    var v6 = Number(document.getElementById("v6").value); // ライトニングマスタリ
    var v7 = Number(document.getElementById("v7").value); // ファイアマスタリ
    var v8 = Number(document.getElementById("v8").value); // アイスマスタリ
    var v18 = Number(document.getElementById("v18").value);// ヘイル最大ダメージ細工
    var v19 = Number(document.getElementById("v19").value);// ライトニングロードダメージエコー
    var v20 = Number(document.getElementById("v20").value);// ライトニングロードフルチャージダメージ
    var vv = document.getElementsByName("v9"); // ローズマリー
    var v9 = document.getElementById("v9")
    for (var i = 0; i < vv.length; i++) {
        if (vv[i].checked)
            v9 = 0
        else
            v9 = 1;
        break;
    }
    var v10_0 = Number(document.getElementById("v10_0").value); // 追加クリ
    var v10_1 = $('input[name="v10_1"]').is(':checked') ? parseFloat($('input[name="v10_1"]').val()) : 0; //精霊研磨
    var v10_2 = $('input[name="v10_2"]').is(':checked') ? parseFloat($('input[name="v10_2"]').val()) : 0; //イボナ

    var v11 = Number(document.getElementById("v11").value); // サンダーコンボカード
    var v12 = Number(document.getElementById("v12").value); // アイススピアコンボカード
    var v15 = Number(document.getElementById("v15").value); // ファイアボールコンボカード
    var v16 = Number(document.getElementById("v16").value); // ヘイルストームコンボカード
    var v17 = Number(document.getElementById("v17").value); // ライトニングロードコンボカード
    var v13 = Number(document.getElementById("v13").value); // 戦場割合
    var v14_0 =  $("#v14_0 option:selected").attr('value'); // リンクボーナス
    var v14_1 =  $("#v14_1 option:selected").attr('value'); // 精霊育成レベル
    var v14_2 =  $("#v14_2 option:selected").attr('value'); // 精霊制御レベル

    var vv2 = document.getElementsByName("v21"); // 海の支配者
    var v21 = document.getElementById("v21")
    for (var i = 0; i < vv2.length; i++) {
        if (vv2[i].checked)
            v21 = 0;
        else
            v21 = 1;
        break;
    }
    var v22 = Number(document.getElementById("v22").value); // メテオ最大ダメージ

    var vm = document.getElementsByName("v23"); // 物攻ポーション
    var v23 = document.getElementById("v23")
    for (var i = 0; i < vm.length; i++) {
        if (vm[i].checked)
            v23 = 0;
        else
            v23 = 1;
        break;
    }

    var v24_0 = Number(document.getElementById("v24_0").value); // 追加ダメージ
    var v24_1 = $('input[name="v24_1"]').is(':checked') ? parseFloat($('input[name="v24_1"]').val()) : 0; // 弱点分析
    var v24_2 = $('input[name="v24_2"]').is(':checked') ? parseFloat($('input[name="v24_2"]').val()) : 0; // 狂暴化
    var v24_3 = $('input[name="v24_3"]').is(':checked') ? parseFloat($('input[name="v24_3"]').val()) : 0; // バトルメロディ


    var v25 = $("#v25 option:selected").attr('value'); // インクイジター
    var v25_1 = $("#v25 option:selected").attr('value1'); // 属性中級魔法


    var vf = document.getElementsByName("v26");
    var v26 = document.getElementById("v26") // ファイアマスタータイトル
    for (var i = 0; i < vf.length; i++) {
        if (vf[i].checked)
            v26 = 0;
        else
            v26 = 1;
        break;
    }

    var vg = document.getElementsByName("v27");
    var v27 = document.getElementById("v27") // ライトニングマスタータイトル
    for (var i = 0; i < vg.length; i++) {
        if (vg[i].checked)
            v27 = 0;
        else
            v27 = 1;
        break;
    }

    var vh = document.getElementsByName("v28");
    var v28 = document.getElementById("v28") // アイスマスタータイトル
    for (var i = 0; i < vh.length; i++) {
        if (vh[i].checked)
            v28 = 0;
        else
            v28 = 1;
        break;
    }

    var v29 = Number(document.getElementById("v29").value); // ブレイズ爆発ダメージ
    var v30 = Number(document.getElementById("v30").value); // ブレイズダメージ
    var v31 = Number(document.getElementById("v31").value); // ブレイズコンボカード

    var vbb = document.getElementsByName("v32"); // ダウンゲージ
    var v32 = document.getElementById("v32")
    for (var i = 0; i < vbb.length; i++) {
        if (vbb[i].checked)
            v32 = 1;
        else
            v32 = 2.75;
        break;
    }


    var vg = document.getElementsByName("v33");
    var v33 = document.getElementById("v33") // ブリアンエンダース
    for (var i = 0; i < vg.length; i++) {
        if (vg[i].checked)
            v33 = 0;
        else
            v33 = 1;
        break;
    }

    var v34 = $("#v34 option:selected").attr('value'); // ダークメイジリンク効果

    var v35 = $("#v35 option:selected").attr('value'); // エルグ




    var v24; // 追加ダメージ
    v24 = v24_0 + v24_1 + v24_2 + v24_3;
    document.getElementById("v24").value = v24;

    var v10; // 追加クリ
    v10 = v10_0 + v10_1 + v10_2;
    document.getElementById("v10").value = v10;

    var v14; // 魔攻ポーション未適用合計
    v14 = Number(v14_0)+Number(v14_1)+Number(v14_2);
    document.getElementById("v14").value = v14;

    var res0; // 計算魔攻
    res0 = ((v1-v14)*(1+0.2*v23)+v14)*(1+(v13/100)*(1+0.2*v23));
    document.getElementById("res0").value = Math.floor(res0);


    var res1; // サンダーダメージ 3チャージ

    res1 = (res0*(2+0.005* v3)) * 3.5 * (1 + 0.15 + 0.005 * v6 + (v11 / 100) + 0.1 * v27 + 0.15 * v33) * (1 + (v24/100))* ( 1 + 0.01 *  (1*v25_1+1*v35))* (1 + Number(v34))

    document.getElementById("res1").value = Math.floor(res1);


    var res3; // サンダーダメージ 5チャージ

    res3 = (res0*(2+0.005* v3)) * 6 * (1 + 0.15 + 0.005 * v6 + (v11 / 100) + 0.1 * v27 + 0.15 * v33) *(1 + (v24/100))* ( 1 + 0.01 *  (1*v25_1+1*v35))*(1 +  Number(v34))


    document.getElementById("res3").value = Math.floor(res3);


    var res4; // ファイアボール 5チャージダメージ

    res4 =(res0*(10.1+0.03* v4)) * (1 + 0.15 + 0.005 * v7 + (v15 / 100) + 0.1 * v26 + 0.15 * v33) *(1 + (v24/100))* ( 1 + 0.01 *  (1*v25_1+1*v35))*(1 +  Number(v34))


    document.getElementById("res4").value = Math.floor(res4);

    var res5; // アイススピア 3チャージダメージ

    res5 = (res0*(1.3+0.03* v5)) * 3 * (1 + 0.15 + 0.005 * v8 + 0.15 * v9 + (v12 / 100) + 0.1 * v28 + 0.15 * v33) * (1 + (v24/100))* ( 1 + 0.01 *  (1*v25_1+1*v35))*(1 + Number(v34))


    document.getElementById("res5").value = Math.floor(res5);


    var res6; // アイススピア 5チャージダメージ

    res6 =  (res0*(1.3+0.03* v5))* 6.5 * (1 + 0.15 + 0.005 * v8 + 0.15 * v9 + (v12 / 100) + 0.1 * v28 + 0.15 * v33) * (1 + (v24/100))* ( 1 + 0.01 *  (1*v25_1+1*v35))*(1 + Number(v34))


    document.getElementById("res6").value = Math.floor(res6);


    // var res7_h; // ヘイルストームダメージ用 v25 修正値
    // if (v25 == 15) {
    //     res7_h = 2 * v25
    // } else {
    //     res7_h = 1 * v25
    // }
    // document.getElementById("res7_h").value = res7_h;


    var res7; // ヘイルストームダメージ

    res7 = (res0*(1.6+0.06* v18)) * 6.25 * (1 + 0.15 + 0.005 * v8 + 0.15 * v9 + (v16 / 100) + 0.1 * v28 + 0.15 * v33) * (1 + v24 / 100) * (1 + 0.02 * v25) * (1 +  Number(v34))


    document.getElementById("res7").value = Math.floor(res7);

    var res8; // ライトニングロードダメージ

    res8 = (res0*(6.5+0.02* v19))* (3.3 + (v20 / 100)) * (1 + 0.15 + 0.005 * v6 + (v17 / 100) + 0.1 * v27 + 0.15 * v33) * (1 + 0.1 * v21) * (1 + v24 / 100) * (1 +  Number(v34)) * (1 + 0.01 * v25)

    document.getElementById("res8").value = Math.floor(res8);

    var res9; // サンダー3クリ

    res9 = res1 * (2.5 + (v10 / 100));

    document.getElementById("res9").value = Math.floor(res9);

    var res10; // サンダー5クリ

    res10 = res3 * (2.5 + (v10 / 100));

    document.getElementById("res10").value = Math.floor(res10);

    var res11; // ファイアボールクリ

    res11 = res4 * (2.5 + (v10 / 100));

    document.getElementById("res11").value = Math.floor(res11);

    var res12; // アイス3クリ

    res12 = res5 * (2.5 + (v10 / 100));

    document.getElementById("res12").value = Math.floor(res12);

    var res13; // アイス5クリ

    res13 = res6 * (2.5 + (v10 / 100));

    document.getElementById("res13").value = Math.floor(res13);

    var res14; // ヘイルクリ

    res14 = res7 * (2.5 + (v10 / 100));

    document.getElementById("res14").value = Math.floor(res14);

    var res15; // ライトニングロードクリ

    res15 = res8 * (2.5 + (v10 / 100));

    document.getElementById("res15").value = Math.floor(res15);

    var res16; // ファイアボール 3チャージ

    res16 = (res0*(10.1+0.03* v4)) * (3/6.5) * (1 + 0.15 + 0.005 * v7 + (v15 / 100) + 0.1 * v26 + 0.15 * v33) * (1 + (v24/100))* ( 1 + 0.01 *  (1*v25_1+1*v35))*(1 + Number(v34))

    document.getElementById("res16").value = Math.floor(res16);

    var res17; // ファイアボール 3チャージ クリ

    res17 = res16 * (2.5 + (v10 / 100));

    document.getElementById("res17").value = Math.floor(res17);

    var res18; // メテオ

    res18 = (7800 + (res0*(85+0.1* v22))) * (1 + 0.15 + 0.005 * v7 + 0.1 * v26 + 0.15 * v33) * (1 + v24 / 100) * (1 +  Number(v34)) * (1 + 0.01 * v25)

    document.getElementById("res18").value = Math.floor(res18);

    var res19; // メテオクリ

    res19 = res18 * (2.5 + (v10 / 100));

    document.getElementById("res19").value = Math.floor(res19);

    var res20; // ブレイズ

    res20 = v1 * 1.875 * 0.3525 * (14 + 0.1 * v29) * (2.4 + 0.05 * v30) * v32 * (1 + v31 / 100) * (1 + (v24/100))* ( 1 + 0.01 *  (1*v25_1+1*v35))*(1 +  Number(v34))

    document.getElementById("res20").value = Math.floor(res20);

    var res21; // ブレイズクリ

    res21 = res20 * (2.5 + (v10 / 100));

    document.getElementById("res21").value = Math.floor(res21);


}

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
    document.getElementById("v24").value = "";
    document.getElementById("v29").value = "";
    document.getElementById("v30").value = "";
    document.getElementById("v31").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res3").value = "";
    document.getElementById("res4").value = "";
    document.getElementById("res5").value = "";
    document.getElementById("res6").value = "";
    document.getElementById("res7").value = "";
    document.getElementById("res8").value = "";
    document.getElementById("res9").value = "";
    document.getElementById("res10").value = "";
    document.getElementById("res11").value = "";
    document.getElementById("res12").value = "";
    document.getElementById("res13").value = "";
    document.getElementById("res14").value = "";
    document.getElementById("res15").value = "";
    document.getElementById("res16").value = "";
    document.getElementById("res17").value = "";
    document.getElementById("res18").value = "";
    document.getElementById("res19").value = "";
    document.getElementById("res20").value = "";
    document.getElementById("res21").value = "";
    $("input:checkbox").prop("checked", false);

}
