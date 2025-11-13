function cal() {

    //変数
    //基本ダメージ
    var v1 = $("#v1 option:selected").attr('value'); // フレイマーランク基本ダメージ 
    var v2 = Number(document.getElementById("v2").value); // 生命力2500まで
    var v3 = Number(document.getElementById("v3").value); // 火錬金ダメージ
    var v4 = $("#v4 option:selected").attr('value'); // チャージ数
    var v5 = Number(document.getElementById("v5").value); // ダメージエンチャント
    var v6 = Number(document.getElementById("v6").value); // 最大ダメージ
    var v7 = Number(document.getElementById("v7").value); // 戦場割合

    //クリ
    var v8 = Number(document.getElementById("v8").value); // 追加クリ

    //追加ダメージ
    var v9 = $("#v1 option:selected").attr('value2'); // フレイマーランク追加ダメージ
    var v10 = $("#v10 option:selected").attr('value'); // 錬金術マスタリーボーナス
    var v11 = $("#v11 option:selected").attr('value'); // 火錬金術マスタリーボーナス
    var v20 = $("#v12 option:selected").attr('value2'); // シリンダー追加補正

    
    // 最後に乗算
    var v12 = $("#v12 option:selected").attr('value'); // シリンダー補正

    //コンボカード
    var v13 = Number(document.getElementById("v13").value); //フレイマーコンボカード

    //アイテムタイトル
    var v14v = document.getElementsByName("v14"); // 物攻ポーション
    var v14 = document.getElementById("v14")
    for (var i = 0; i < v14v.length; i++) {
        if (v14v[i].checked)
            v14 = 0
        else
            v14 = 1;
        break;
    }
    var v15v = document.getElementsByName("v15"); // クラシダセット
    var v15 = document.getElementById("v15")
    for (var i = 0; i < v15v.length; i++) {
        if (v15v[i].checked)
            v15 = 0
        else
            v15 = 1;
        break;

    }

    



    
    //細工
    var v17 =  Number(document.getElementById("v17").value); //フレイマー最大ダメージ細工
    var v18 =  Number(document.getElementById("v18").value); //火錬金マスタリー効率細工
    
    var v19 = $("#v19 option:selected").attr('value'); // 火錬金マスタリータイトル
    var v19_1 = $("#v19 option:selected").attr('value2'); // 錬金マスタリータイトル

    var v20 = $("#v20 option:selected").attr('value'); // ガードシリンダーマスター


    var v21 =  Number(document.getElementById("v21").value); // 追加ダメージ比率

    
  

    //計算式

    var resv2; //体力比例ダメージ 
    if(v2>=3500){
        resv2=3500}
    else{
        resv2=v2}
    document.getElementById("resv2").value = Math.floor(resv2);



    var res1; //フレイマーダメージ 
    res1 = (((1*v1+1*v17+0.08*resv2+v3+1*v19_1+1*v20)*v4+v5+(1+v6 * (1+0.2 * v14) *(v7 / 100)))*(1+v13/100) + v9*v4*((1*v11/100+1*v19+0.005*v18+(1*v10/100))/0.15))*(1+0.15*v15)*v12*(1+v21/100)
    document.getElementById("res1").value = Math.floor(res1);

    
    var res2; //フレイマークリダメージ 
    res2 = (((1*v1+1*v17+0.08*resv2+v3+1*v19_1+1*v20)*v4+v5+(1+v6 * (1+0.2 * v14) *(v7 / 100)))*(1+v13/100)*(2.5 + (v8/100)) + v9*v4*(1*v11/100+1*v19+0.005*v18+(v10/100))/0.15)*(1+0.15*v15)*v12*(1+v21/100)
    

    document.getElementById("res2").value = Math.floor(res2);



    


}

//リセット
function reset() {
    document.getElementById("v2").value = "";
    document.getElementById("v3").value = "";
    document.getElementById("v5").value = "";
    document.getElementById("v6").value = "";
    document.getElementById("v7").value = "";
    document.getElementById("v8").value = "";
    document.getElementById("v13").value = ""; 
    document.getElementById("v17").value = "";
    document.getElementById("v18").value = "";    
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";



}