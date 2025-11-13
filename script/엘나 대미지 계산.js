function cal() {

    //変数
    //基本ダメージ
    var v1 = $("#v1 option:selected").attr('value'); // スマッシュ ランク別ダメージ
    var v1_1 = $("#v1 option:selected").attr('value2'); // ジャイアント スマッシュ ランク別ダメージ
    var v1_0 = $("#v1_0 option:selected").attr('value'); // ラストスマッシュ ランク別ダメージ
    var v1_01 = $("#v1_0 option:selected").attr('value2'); // ラストスマッシュ インジェクション ランク別ダメージ
    var v2 = $("#v2 option:selected").attr('value'); // ウィンドミル ランク別ダメージ
    var v2_1 = $("#v2 option:selected").attr('value2'); // エルフ ウィンドミル ランク別ダメージ
    var v2_0 = $("#v2_0 option:selected").attr('value'); // アドウィンドミル ランク別ダメージ
    // var v2_01 = $("#v2_0 option:selected").attr('value2'); // アドウィンドミル ランク別爆発ダメージ
    var v2_02 = $("#v2_0 option:selected").attr('value3'); // アドウィンドミル ランク別インジェクション
    var v3 = $("#v3 option:selected").attr('value'); // ダウンアタック ランク別ダメージ
    var v3_0 = $("#v3_0 option:selected").attr('value'); // ファイアリーフアタック ランク別ダメージ
    var v3_01 = $("#v3_0 option:selected").attr('value2'); // ファイアリーフアタック ランク別インジェクション

    var v4 = Number(document.getElementById("v4").value); // 最大ダメージ
    var v5 = Number(document.getElementById("v5").value); // 戦場比率

    //クリティカル
    var v6 = Number(document.getElementById("v6").value); // 追加クリティカル
    //追加ダメージ
    var v7 = Number(document.getElementById("v7").value); // ボーナスダメージ

    //コンボカード
    var v8 = Number(document.getElementById("v8").value); //スマッシュコンボカード
    var v9 = Number(document.getElementById("v9").value); //ウィンドミルコンボカード
    var v10 = Number(document.getElementById("v10").value); //ダウンアタックコンボカード

    //アイテムタイトル
    var v11v = document.getElementsByName("v11"); // 物理攻撃補正
    var v11 = document.getElementById("v11")
    for (var i = 0; i < v11v.length; i++) {
        if (v11v[i].checked)
            v11 = 0
        else
            v11 = 1;
        break;
    }
    var v12  = $('input[name="v12"]').is(':checked') ? parseFloat($('input[name="v12"]').val()) : 0; // インジェクション


    var v15v = document.getElementsByName("v15"); // スマッシュ強化セット
    var v15 = document.getElementById("v15")
    for (var i = 0; i < v15v.length; i++) {
        if (v15v[i].checked)
            v15 = 0
        else
            v15 = 1;
        break;

    }

    var v16v = document.getElementsByName("v16"); // ウィンドミルセット
    var v16 = document.getElementById("v16")
    for (var i = 0; i < v16v.length; i++) {
        if (v16v[i].checked)
            v16 = 0
        else
            v16 = 1;
        break;

    }




    var v21v = document.getElementsByName("v21"); // ダウンアタックセット
    var v21 = document.getElementById("v21")
    for (var i = 0; i < v21v.length; i++) {
        if (v21v[i].checked)
            v21 = 0
        else
            v21 = 1;
        break;

    }

    var v17  = $("#v17 option:selected").attr('value'); // 両手剣オプション
    var v22 = $("#v17 option:selected").attr('value2'); //  スマッシュ強化セット効果
    var v22_1 = $("#v17 option:selected").attr('value3'); // ウォーロード ウィンドミル強化セット効果

    
    

    //細工
    var v18 =  Number(document.getElementById("v18").value); //スマッシュ最大ダメージ細工
    var v19 =  Number(document.getElementById("v19").value); //ウィンドミル最大ダメージ細工
    var v20 =  Number(document.getElementById("v20").value); //ダウンアタック最大ダメージ細工
    var v24 = $('input[name="v24"]').is(':checked') ? parseFloat($('input[name="v24"]').val()) : 0; // 氷結解除ボーナス
    var v25 =  $("#v25 option:selected").attr('value'); // バッシュ
    var v26 =  $("#v26 option:selected").attr('value'); // マイト
    var v27 =  $("#v26 option:selected").attr('value1'); // ブレス








    //計算式

    var res0; // 最大ダメージ
    res0 = v4*(1+0.2*v11)*(1+(v5/100)*(1+0.2*v11))*(1+0.1*v12)
    document.getElementById("res0").value = Math.floor(res0);

    var res1; //スマッシュダメージ 人間-エルフ
    res1 = res0*(1*v1+0.1*v18)*(1+0.15*v15+v8/100)*(1+0.2*v17)*(1+v7/100)*(1+1*v22)*(1+1*v25)*(1+1*v27)
    document.getElementById("res1").value = Math.floor(res1);

    var res1c; //スマッシュダメージ 人間-エルフ クリティカル
    res1c = res1*(2.5 + (v6/100))
    document.getElementById("res1c").value = Math.floor(res1c);

    var res1_1; //スマッシュダメージ ジャイアント
    res1_1 = res0*(1*v1_1+0.1*v18)*(1+0.15*v15+v8/100)*(1+0.2*v17)*(1+v7/100)*(1+1*v22)*(1+1*v25)*(1+1*v26)
    document.getElementById("res1_1").value = Math.floor(res1_1);

    var res1_1c; //スマッシュダメージ ジャイアント クリティカル
    res1_1c = res1_1*(2.5 + (v6/100))
    document.getElementById("res1_1c").value = Math.floor(res1_1c);

    var res2; //ウィンドミルダメージ 人間-ジャイアント
    res2 = res0*(1*v2+0.03*v19+0.3*v16)*(1+v9/100)*(1+1*v22_1)*(1+v7/100)*(1+1*v25)*(1+1*v26)
    document.getElementById("res2").value = Math.floor(res2);

    var res2c; //ウィンドミルダメージ 人間 ジャイアント クリティカル
    res2c = res2*(2.5 + (v6/100))
    document.getElementById("res2c").value = Math.floor(res2c);

    var res2_1; //ウィンドミルダメージ エルフ
    res2_1 = res0*(1*v2_1+0.03*v19+0.3*v16)*(1+v9/100)*(1+1*v22_1)*(1+v7/100)*(1+1*v25)
    document.getElementById("res2_1").value = Math.floor(res2_1);

    var res2_1c; //ウィンドミルダメージ エルフ クリティカル
    res2_1c = res2_1*(2.5 + (v6/100))
    document.getElementById("res2_1c").value = Math.floor(res2_1c);

    var res3; //ダウンアタックダメージ
    res3 =res0*(1*v3+0.04*v20)*(1+0.15*v21+v10/100)*(1+v7/100)*(1+1*v25)*(1+1*v26)
    document.getElementById("res3").value = Math.floor(res3);

    var res3c; //ダウンアタック クリティカル
    res3c = res3*(2.5 + (v6/100))
    document.getElementById("res3c").value = Math.floor(res3c);



    var res4; //ラススマッシュ エルフ-人間
    res4 = res0*(((1*v1)+0.1*v18)*(1+0.15*v15)*(1+0.2*v17)*(1+1*v22)*(1+1*v25)*(1+1*v27)+((1*v1_0+6*v12+12*v24)))*(1+v7/100)
    document.getElementById("res4").value = Math.floor(res4);

    var res4c; //ラススマッシュ エルフ-人間 クリティカル
    res4c = res4*(2.5 + (v6/100))
    document.getElementById("res4c").value = Math.floor(res4c);

    var res4_1; //ラススマッシュ ジャイアント
    res4_1 = res0*(((1*v1_1)+0.1*v18)*(1+0.15*v15)*(1+0.2*v17)*(1+1*v22)*(1+1*v25)*(1+1*v26)+((1*v1_0+6*v12+12*v24)))*(1+v7/100)
    document.getElementById("res4_1").value = Math.floor(res4_1);

    var res4_1c; //ラススマッシュ エルフ-人間
    res4_1c = res4_1*(2.5 + (v6/100))
    document.getElementById("res4_1c").value = Math.floor(res4_1c);


    var res5; //アドウィンドミル 人間-ジャイアント
    res5 =res0*((1*v2+0.03*v19+0.3*v16)*(1+1*v22_1)+((1*v2_0+1*v12*v2_02)))*(1+v7/100)*(1+1*v25)*(1+1*v26)
    document.getElementById("res5").value = Math.floor(res5);

    var res5c; //クリティカル
    res5c = res5*(2.5 + (v6/100))
    document.getElementById("res5c").value = Math.floor(res5c);

    // var res5_0; //アドウィンドミル 人間-ジャイアント 爆発
    // res5_0 =res0*(1*v2_01+1*v13*v2_02)*(1+v7/100)
    // document.getElementById("res5_0").value = Math.floor(res5_0);

    // var res5_0c; //クリティカル
    // res5_0c = res5_0*(2.5 + (v6/100))
    // document.getElementById("res5_0c").value = Math.floor(res5_0c);

    var res5_1; //アドウィンドミル エルフ
    res5_1 =res0*((1*v2_1+0.03*v19+0.3*v16)*(1+0.15*v22_1)+((1*v2_0+4.5*v12)))*(1+v7/100)*(1+1*v25)
    document.getElementById("res5_1").value = Math.floor(res5_1);

    var res5_1c; //クリティカル
    res5_1c = res5_1*(2.5 + (v6/100))
    document.getElementById("res5_1c").value = Math.floor(res5_1c);

    // var res5_10; //アドウィンドミル エルフ 爆発
    // res5_10 =res0*(1*v2_01+1*v13*v2_02)*(1+v7/100)
    // document.getElementById("res5_10").value = Math.floor(res5_10);

    // var res5_10c; //クリティカル
    // res5_10c = res5_10*(2.5 + (v6/100))
    // document.getElementById("res5_10c").value = Math.floor(res5_10c);

    var res6; //ファイアリーフアタック
    res6 =res0*(((1*v3)+0.04*v20)*(1+0.15*v21)*(1+1*v25)*(1+1*v26)+((1*v3_0+4*v12)+1*v12*v3_01))*(1+v7/100)
    document.getElementById("res6").value = Math.floor(res6);

    var res6c; //クリティカル
    res6c = res6*(2.5 + (v6/100))
    document.getElementById("res6c").value = Math.floor(res6c);






}

//リセット
function reset() {
    document.getElementById("res0").value = "";
    document.getElementById("v4").value = "";
    document.getElementById("v5").value = "";
    document.getElementById("v6").value = "";
    document.getElementById("v7").value = "";
    document.getElementById("v8").value = "";
    document.getElementById("v9").value = "";
    document.getElementById("v10").value = "";
    document.getElementById("v18").value = "";
    document.getElementById("v19").value = "";
    document.getElementById("v20").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res1_1").value = "";
    document.getElementById("res1c").value = "";
    document.getElementById("res1_1c").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("res2c").value = "";
    document.getElementById("res2_1").value = "";
    document.getElementById("res2_1c").value = "";
    document.getElementById("res3").value = "";
    document.getElementById("res3c").value = "";
    document.getElementById("res4").value = "";
    document.getElementById("res4c").value = "";
    document.getElementById("res4_1").value = "";
    document.getElementById("res4_1c").value = "";
    document.getElementById("res5").value = "";
    document.getElementById("res5_0").value = "";
    document.getElementById("res5c").value = "";
    document.getElementById("res5_0c").value = "";
    document.getElementById("res5_1").value = "";
    document.getElementById("res5_1c").value = "";
    document.getElementById("res5_10").value = "";
    document.getElementById("res5_10c").value = "";
    document.getElementById("res6").value = "";
    document.getElementById("res6c").value = "";



}