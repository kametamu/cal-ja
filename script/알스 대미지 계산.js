function cal() {

    //変数

    var v0 = Number(document.getElementById("v0").value); // 物理攻撃力

    // //基本ダメージ
    var v1 = $("#v1 option:selected").attr('value'); // マグナムランク別ダメージ
    var v2 = $("#v2 option:selected").attr('value'); // クラッシュショットランク別ダメージ
    var v4 = $('input[name="v4"]').is(':checked') ? parseFloat($('input[name="v4"]').val()) : 0; //ビジョン・オブ・ラデカ




    var v5 = Number(document.getElementById("v5").value); // 戦場割合

    //クリ
    var v6_0 = Number(document.getElementById("v6_0").value); // 追加クリ
    var v6_1 = $('input[name="v6_1"]').is(':checked') ? parseFloat($('input[name="v6_1"]').val()) : 0; //精霊研磨
    var v6_2 = $('input[name="v6_2"]').is(':checked') ? parseFloat($('input[name="v6_2"]').val()) : 0; //イボナ
    var v6_3 = $('input[name="v6_3"]').is(':checked') ? parseFloat($('input[name="v6_3"]').val()) : 0; //クリ増加セット
    //追加ダメージ
    var v7_0 = Number(document.getElementById("v7_0").value); // ボーナスダメージ
    var v7_1 = $('input[name="v7_1"]').is(':checked') ? parseFloat($('input[name="v7_1"]').val()) : 0; //弱点分析
    var v7_2 = $('input[name="v7_2"]').is(':checked') ? parseFloat($('input[name="v7_2"]').val()) : 0; //狂暴化
    var v7_3 = $('input[name="v7_3"]').is(':checked') ? parseFloat($('input[name="v7_3"]').val()) : 0; //バトルメロディ


    // //アイテム タイトル
    var v8 = $('input[name="v8"]').is(':checked') ? parseFloat($('input[name="v8"]').val()) : 0; //物攻ポーション
    var v9 = $('input[name="v9"]').is(':checked') ? parseFloat($('input[name="v9"]').val()) : 0; //ボヘミアンセット
    var v10 = $('input[name="v10"]').is(':checked') ? parseFloat($('input[name="v10"]').val()) : 0; //アージェントショット

    var v11 = $("#v11 option:selected").attr('value'); //  武器種類
    var v12 = $("#v12 option:selected").attr('value'); // 矢の種類

    // //細工
    var v13 = Number(document.getElementById("v13").value); //マグナムショットダメージ
    var v14 = Number(document.getElementById("v19").value); //破片ダメージ

    var v15 = Number(document.getElementById("v15").value); //火錬金効率
    var v16 = Number(document.getElementById("v16").value); //水錬金効率
    var v17 = Number(document.getElementById("v17").value); //風錬金効率
    var v18 = Number(document.getElementById("v18").value); //土錬金効率

    var v19_1 =$('input[name="v19"]:checked').attr('value'); //シナジー1 - 火
    var v19_2 =$('input[name="v19"]:checked').attr('value1'); //シナジー1 - 水
    var v19_3 =$('input[name="v19"]:checked').attr('value2'); //シナジー1 - 風
    var v19_4 =$('input[name="v19"]:checked').attr('value3'); //シナジー1 - 土
    var v19_5 =$('input[name="v19"]:checked').attr('value4'); //シナジー1 - 組み合わせ用

    var v20_1 =$('input[name="v20"]:checked').attr('value'); //シナジー2 - 火
    var v20_2 =$('input[name="v20"]:checked').attr('value1'); //シナジー2 - 水
    var v20_3 =$('input[name="v20"]:checked').attr('value2'); //シナジー2 - 風
    var v20_4 =$('input[name="v20"]:checked').attr('value3'); //シナジー2 - 土
    var v20_5 =$('input[name="v20"]:checked').attr('value4'); //シナジー1 - 組み合わせ用

    // // 追加
    var v22 = $("#v22 option:selected").attr('value');; //リンクボーナス トライアサルト
    var v22_1 = $("#v22 option:selected").attr('value1');; //リンクボーナス ハイドロピアス
    var v22_2 = $("#v22 option:selected").attr('value2');; //リンクボーナス 蒸発・過熱・電流 

    var v23 = Number(document.getElementById("v23").value); //距離




    //計算式

    var v7; //追加ダメージ
    v7 = v7_0+v7_1+v7_2+v7_3;
    document.getElementById("v7").value = v7;

    var v6; //追加クリ
    v6 = v6_0 + v6_1 + v6_2 + 7 * v6_3;
    document.getElementById("v6").value = v6;

    var res00; //アルケミックシナジー用演算
    res00 = v19_5*v20_5 ;
    document.getElementById("res00").value = res00;

    var res01; //アルケミックシナジー（蒸発追加ダメージ）
    if(res00==3){
        res01= (0.01*v15+0.01*v16+0.15-0.25)}
    else {
        res01= 0}
    document.getElementById("res01").value = Math.round(res01*1000)/1000;

    var res01_1; //アルケミックシナジー 
    if(res00==3){
        res01_1="蒸発"}
    else if(res00==5){
        res01_1= "電流"}
    else if(res00==7){
        res01_1= "過熱"}
    else if(res00==15){
        res01_1= "冷却"}
    else if(res00==21){
        res01_1= "腐食"}
    else if(res00==35){
        res01_1= "粉塵"}
    else {
        res01_1= "なし"}
    document.getElementById("res01_1").value = res01_1





    var res0; //レンジショットダメージ
    res0 = (v0 * (1 + 0.2 * v8) * (1 + (v5 / 100) * (1 + 0.2 * v8))) * (1 + 1 * v12)
    document.getElementById("res0").value = Math.floor(res0);

    var res1; //マグナムショットダメージ
    res1 = res0 * (1 * v1 + 0.1 * v13) * (1 + 0.15 * v9 + v7 / 100 + 0.1* v4 + 0.12 * v10)* (1 + 0.01*v23*v22_2)
    document.getElementById("res1").value = Math.floor(res1);

    var res2; //クラッシュショット破片ダメージ
    res2 = res0 * (1 * v2 + 0.035 * v14) * (1 + 1 * v11) * (1 + v7 / 100 + 0.1* v4 + 0.12 * v10)* (1 + 0.01*v23*v22_2)
    document.getElementById("res2").value = Math.floor(res2);

    var res3; //ハイドロピアスダメージ（合算前） 
    res3 = res0 * 22 * (1 + (v7_0+v7_3) / 100) * (1 + 0.3 * v22_1)* (1 + 0.01*v23*v22_2)
    document.getElementById("res3").value = Math.floor(res3);

    var res3_1; //ハイドロピアスダメージ
    res3_1 = (res3 + res1) * (1 + res01)*(1+0.1*v22_2) 
    document.getElementById("res3_1").value = Math.floor(res3_1);

    var res3_2; //ハイドロピアスクリダメージ
    res3_2 = res3_1 * (2.5 + v6 / 100)
    document.getElementById("res3_2").value = Math.floor(res3_2);

    var res4; //フレイムバーストダメージ（合算前）     
    res4 = (res0 * 6 * (1 + (v7_0+v7_3)  / 100)* (1 + 0.01*v23*v22_2));
    document.getElementById("res4").value = Math.floor(res4);

    var res4_1; //フレイムバーストダメージ    
    res4_1 = (res4 + res2)*(1 + res01)*(1+0.1*v22_2) ;
    document.getElementById("res4_1").value = Math.floor(res4_1);

    var res4_2; //フレイムバーストダメージ    
    res4_2 = 3*(res4 + res2)*(1 + res01)*(1+0.1*v22_2) ;
    document.getElementById("res4_2").value = Math.floor(res4_2);


    var res4_3; //フレイムバーストクリダメージ
    res4_3 = res4_1 * (2.5 + v6 / 100)
    document.getElementById("res4_3").value = Math.floor(res4_3);
    var res4_4; //フレイムバーストクリダメージ
    res4_4 = res4_2 * (2.5 + v6 / 100)
    document.getElementById("res4_4").value = Math.floor(res4_4);

    var res5; //トライアサルトダメージ
    res5 = res0 * 15 * (1 + (v7_0+v7_3)  / 100) * (1 + 0.005*(v15+v16+v17)+0.002*v18)*(1 + res01)*(1+0.1*v22_2) * (1 +  0.01*v23*v22_2)*(1+0.2*v22)
    document.getElementById("res5").value = Math.floor(res5);
    
    var res5_1; //トライアサルトダメージ2
    res5_1 = res0 * 30 * (1 + (v7_0+v7_3) / 100) * (1 + 0.005*(v15+v16+v17)+0.002*v18)*(1 + res01)*(1+0.1*v22_2) * (1 +  0.01*v23*v22_2)*(1+0.2*v22)
    document.getElementById("res5_1").value = Math.floor(res5_1);
    
    var res5_2; //トライアサルトダメージ3
    res5_2 = (2*res5+res5_1)
    document.getElementById("res5_2").value = Math.floor(res5_2);

    var res5_3; //トライアサルトクリダメージ
    res5_3 = (res5_2) * (2.5 + v6 / 100)
    document.getElementById("res5_3").value = Math.floor(res5_3);
}

//リセット
function reset() {
    document.getElementById("v0").value = "";
    document.getElementById("v5").value = "";
    document.getElementById("v7_0").value = "";
    document.getElementById("v6_0").value = "";
    document.getElementById("v13").value = "";
    document.getElementById("v19").value = "";
    document.getElementById("v15").value = "";
    document.getElementById("v16").value = "";
    document.getElementById("v17").value = "";
    document.getElementById("v18").value = "";
    document.getElementById("res0").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("res3").value = "";
    document.getElementById("res3_1").value = "";
    document.getElementById("res3_2").value = "";
    document.getElementById("res4").value = "";
    document.getElementById("res4_1").value = "";
    document.getElementById("res4_2").value = "";
    document.getElementById("res5").value = "";
    document.getElementById("res5_1").value = "";
    $("input:checkbox").prop("checked", false);

}